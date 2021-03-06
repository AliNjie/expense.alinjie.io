import "../styles/index.css";
import { AppPropsType } from "next/dist/next-server/lib/utils";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Provider as AuthProvider } from "next-auth/client";

const apolloClient = new ApolloClient({
  uri: "/api/graphql",
  cache: new InMemoryCache(),
});

function App({ Component, pageProps }: AppPropsType) {
  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider session={pageProps.session}>
        <Component {...pageProps} />
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
