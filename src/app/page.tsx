"use client";
import { ChakraProvider, Heading, Text } from "@chakra-ui/react";
import Features from "./Features";
import Header from "./heading";
import Pricing from "./Price";

export default function Home() {
  return (
    <ChakraProvider>
      <Header />
      <Pricing />
      <Features />
    </ChakraProvider>
  );
}
