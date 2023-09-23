import Head from "next/head";
import Link from "next/link";
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
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/sales">Sales</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/userprofile">Profile</Link>
        </li>
      </ul>
      <Component {...pageProps} />
    </>
  );
}
