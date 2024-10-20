"use client";

import FeaturePlayers from "./components/featuredPlayers/FeaturePlayers";
import Container from "./components/hero/Container";
import Introduction from "./components/introduction/Introduction";
import Cta from "./components/cta/Cta";

export default function Home() {
  return (
    <main className="">
      <Container />
      <Introduction />
      <FeaturePlayers />
      <Cta />
    </main>
  );
}
