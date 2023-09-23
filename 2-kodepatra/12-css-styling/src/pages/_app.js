import "@/styles/globals.css";
import Head from "next/head";
import Link from "next/link";

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
      <ul className="navbar">
        <li className="nav-item">
          <Link href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link href="/sales">Sales</Link>
        </li>
        <li className="nav-item">
          <Link href="/sales2">Sales2</Link>
        </li>
        <li className="nav-item">
          <Link href="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link href="/userprofile">Profile</Link>
        </li>
        <li className="nav-item">
          <Link href="/feedback">Feedback</Link>
        </li>
      </ul>
      <Component {...pageProps} />
    </>
  );
}
