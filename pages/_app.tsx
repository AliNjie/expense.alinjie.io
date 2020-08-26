import "../styles/index.css";
import { AppPropsType } from "next/dist/next-server/lib/utils";

function App({ Component, pageProps }: AppPropsType) {
  return <Component {...pageProps} />;
}

export default App;
