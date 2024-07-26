"use client"

import Header from "@/components/header"
import Footer from "@/components/footer";
import WhyCrappo from "@/components/whyCrappo";
import NavBar from "@/components/navBar";
import TradeSecurely from "@/components/tradeSecurely";
import StartMining from "@/components/startMinig";
import Features from "@/components/features";

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <WhyCrappo />
      <TradeSecurely />
      <Features />
      <StartMining />
      <Footer />
    </>
  );
}
