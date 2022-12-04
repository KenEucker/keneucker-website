import Head from "next/head";
import Image from "next/image";
import SocialLinks from "./SocialLinks";

export default function Header(props) {
  return (
    <Head>
      <title>{props?.title}</title>
      <meta name="title" content={props?.metaTitle ?? props?.title} />
      <meta
        name="description"
        content={props?.description}
      />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content={props?.author} />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />\

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/etc/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Comfortaa&display=optional"/>
    </Head>
  );
}
