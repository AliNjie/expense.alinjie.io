import React, { ReactElement } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { ExpenseCategory } from "types";
import Modal from "./common/Modal";

const categories = Object.values(ExpenseCategory);

const validationSchema = yup.object({
  amount: yup.number().required("Amount is required"),
  title: yup.string().required("Title is required"),
  category: yup
    .string()
    .oneOf(categories, `Category must be one of ${categories.join(",")}`)
    .required("Category is required"),
});

export type ExpenseFormValues = yup.InferType<typeof validationSchema>;

const initialValues: ExpenseFormValues = {
  amount: null,
  title: "",
  category: ExpenseCategory.VARIABLE,
};

export default function ExpenseModal(): ReactElement {
  return (
    <Modal onRequestClose={() => console.log("Close")} open>
      <Formik
        validationSchema={validationSchema}
        onSubmit={() => console.log("Submitted")}
        initialValues={initialValues}
      >
        {({ getFieldProps, values }) => (
          <form className="grid gap-y-4">
            <input
              type="text"
              className="input"
              placeholder="Title"
              {...getFieldProps("title")}
            />
            <input
              className="input"
              placeholder="Amount"
              value={values.amount || ""}
              type="text"
              {...getFieldProps("amount")}
            />
            <select className="appearance-none" {...getFieldProps("category")}>
              {categories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </form>
        )}
      </Formik>
    </Modal>
  );
}
