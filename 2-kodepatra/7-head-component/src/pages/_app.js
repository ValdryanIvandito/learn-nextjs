import Head from "next/head";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Global Head */}
      <Head>
        <title>Kodepatra Tutorial</title>
        <meta
          name="description"
          content="This is Kodepatra Tutorial About NextJS"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
