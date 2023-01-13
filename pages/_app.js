import "../styles/globals.css";
import Layout from "./_layout";

const MyApp = ({ Component, pageProps, openings }) => {
  return (
    <Layout openings={openings}>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
