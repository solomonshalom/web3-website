import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

export default function About() {
  const [preferedColorScheme, setPreferedColorScheme] = useState("light");

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setPreferedColorScheme("dark");
    }
  }, []);

  return (
    <Layout>
      <Head>
        <title>About | Tech3</title>
        <meta
          name="description"
          content="Providing education, oppportunities, and funding to a new wave of web3 builders"
        />
        {preferedColorScheme === "light" && (
          <link rel="icon" href="/favicon.ico" />
        )}
        {preferedColorScheme === "dark" && (
          <link rel="icon" href="/favicon-white.ico" />
        )}
      </Head>
      <Navbar preferedColorScheme={preferedColorScheme} />
      <header className="my-40 sm:my-44 max-w-3xl">
        <h1 className="font-poppins-bold text-3xl sm:text-5xl lg:text-6xl leading-tight mb-4">
          Unlocking the next wave of web3 projects
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl leading-normal xl:leading-normal mb-6 md:mb-8">
          We’re a group of talented, diverse developers in web3 who can build your project and make it legendary!.
        </p>
        <Link href="/contact" passHref>
          <a className="dark:hover:text-black dark:hover:bg-white hover:text-white hover:bg-black border border-black dark:border-white border-solid rounded-full text-base md:text-lg lg:text-xl px-4 py-2">
            Contact Us
          </a>
        </Link>
      </header>

      <section className="pt-8 mb-44">
        <div className="sm:w-1/2">
          <p className="mb-16 text-base md:text-lg lg:text-xl leading-relaxed md:leading-relaxed lg:leading-relaxed">
            Our collective is composed of software engineers, designers, content
            creators, technical writers, managers, and founders with
            wide-ranging experiences in tech. We are united in our passion
            to decentralize the internet and to bring more diverse perspectives
            to web3.
          </p>
        </div>
      </section>

      <section className="mb-44 mx-auto">
        <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-center font-poppins-bold">
          Our Values
        </h2>
        <p className="w-full sm:w-4/5 mx-auto mb-8 md:mb-12 text-center sm:max-w-2xl text-base md:text-lg lg:text-xl leading-relaxed md:leading-relaxed lg:leading-relaxed">
          We are actively shaping our community to be a space where anyone, no matter the age or gender can thrive and innovate in web3.
        </p>
        <div className="md:grid md:grid-cols-3 gap-4">
          <div className="mb-8 flex justify-center">
            <div className="max-w-sm">
              <h3 className="mb-2 md:mb-4 text-xl md:text-2xl font-poppins-bold">
                &#127760; Diversity & Inclusion
              </h3>
              <p className="text-base md:text-lg lg:text-xl leading-relaxed md:leading-relaxed lg:leading-relaxed">
                We are inclusive, intersectional, and accessible.
              </p>
            </div>
          </div>
          <div className="mb-8 flex justify-center">
            <div className="max-w-sm">
              <h3 className="mb-2 md:mb-4 text-xl md:text-2xl font-poppins-bold">
                &#129309; Curiosity & Collaboration
              </h3>
              <p className="text-base md:text-lg lg:text-xl leading-relaxed md:leading-relaxed lg:leading-relaxed">
                We learn from one another, teach each other, build together, and
                lift everyone up.
              </p>
            </div>
          </div>
          <div className="mb-8 flex justify-center">
            <div className="max-w-sm">
              <h3 className="mb-2 md:mb-4 text-xl md:text-2xl font-poppins-bold">
                &#128205; Courage & Leadership
              </h3>
              <p className="text-base md:text-lg lg:text-xl leading-relaxed md:leading-relaxed lg:leading-relaxed">
                We are boldly paving paths and setting examples for others.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col flex-center w-4/5 mx-auto">
        <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-center font-poppins-bold">
          Our Partners
        </h2>
        <p className="w-full sm:w-4/5 mx-auto mb-4 md:mb-6 text-center sm:max-w-2xl text-base md:text-lg lg:text-xl leading-relaxed md:leading-relaxed lg:leading-relaxed">
          We are working with web3 organizations to support our members and
          initiatives. Together, we will close gaps in diversity, equity, and
          inclusion in web3.
        </p>

        <Link href="/contact" passHref>
          <a className="mx-auto dark:hover:text-black dark:hover:bg-white hover:text-white hover:bg-black border border-black dark:border-white border-solid rounded-full text-base md:text-lg lg:text-xl px-4 py-2">
            Invest In Us!
          </a>
        </Link>

        {preferedColorScheme === "light" && (
          <div className="mt-8 flex flex-wrap gap-8 justify-center">
          </div>
        )}

        {preferedColorScheme === "dark" && (
          <div className="mt-8 flex flex-wrap gap-8 justify-center">
          </div>
        )}
      </section>

      <Footer preferedColorScheme={preferedColorScheme} />
    </Layout>
  );
}
