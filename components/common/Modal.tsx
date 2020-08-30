import React, { ReactElement, ReactNode, useEffect, useRef } from "react";
import { createPortal, findDOMNode } from "react-dom";
import classNames from "classnames";
import { XOutline } from "heroicons-react";

interface Props {
  children?: ReactNode;
  className?: string;
  open: boolean;
  onRequestClose: Function;
}

export default function Modal({
  children,
  className,
  onRequestClose,
  open,
}: Props): ReactElement {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    const node = findDOMNode(contentRef.current);
    if (!node || !node.contains(event.target as Node)) {
      onRequestClose();
    }
  };

  useEffect(() => {
    contentRef.current.addEventListener("click", handleOutsideClick);
    return () => {
      contentRef.current.removeEventListener("click", handleOutsideClick);
    };
  });

  return createPortal(
    <div
      className={classNames(
        "bg-opacity-50 bg-black h-full w-full absolute z-50 flex items-center justify-center",
        className
      )}
    >
      <div
        className="bg-gray-100 p-4 rounded shadow relative m-6"
        ref={contentRef}
      >
        <XOutline
          onClick={() => onRequestClose()}
          className="absolute rounded-full top-0 right-0 transform -translate-y-1/2 translate-x-1/2 bg-gray-900 text-gray-600"
        />
        {children}
      </div>
    </div>,
    document.getElementById("__next")
  );
}
