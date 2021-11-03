import Head from "next/head";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Emin Rasen</title>
        <meta
          name="description"
          content="کانال و پیج تلگرام، اینستاگرام، یوتیوب و تیک تاک امین راسن"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Footer />
    </>
  );
}
