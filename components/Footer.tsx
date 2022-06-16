/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment, useState, useEffect } from "$fresh/runtime.ts";
import { tw } from "../utils/twind.ts";

export const Footer = () => {
  return (
    <footer>
      <p class={tw`text-center text-zinc-400`}>
        Made for fun by <a href="https://reaper.is">reaper</a>
      </p>
    </footer>
  );
};
