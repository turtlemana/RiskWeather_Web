import Layout from "components/layouts/Layout";
import "styles/globals.css";
import type { AppContext, AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
}

App.getInitialProps = async ({ ctx }: AppContext) => {
  const userAgent = ctx.req
    ? ctx.req.headers["user-agent"]
    : navigator.userAgent;
  const isMobile = userAgent?.indexOf("Mobi") !== -1;
  return { pageProps: { isMobile } };
};
