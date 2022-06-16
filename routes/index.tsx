/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment, useState, useEffect } from "$fresh/runtime.ts";
import { tw } from "../utils/twind.ts";
import { Header } from "../components/Header.tsx";
import Player from "../islands/Player.tsx";
import { shortcuts } from "../utils/css.ts";
import { Footer } from "../components/Footer.tsx";

export default function Home() {
  return (
    <>
      <div class={tw`${shortcuts.page} p-4`}>
        <div class={tw`${shortcuts.container}`}>
          <Header />
          <section class={tw`my-4`}>
            <Player />
          </section>
          <section>
            <ul></ul>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}
