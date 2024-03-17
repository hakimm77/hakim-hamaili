import { Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { Introduction } from "../components/Introduction";

const Home: NextPage = () => {
  return (
    <Flex flexDir="column" w="100%" alignItems="center">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <Introduction />
    </Flex>
  );
};

export default Home;
