/** @jsx h */
import { h, Fragment } from "$fresh/runtime.ts";
import {  tw } from "../utils/twind.ts";
import {shortcuts} from "../utils/css.ts"

export const Header = () => {
  return (
    <header class={tw`flex items-baseline justify-between`}>
      <h1 class={tw`font-sans text-xl font-semibold text-zinc-300`}>music</h1>
      <ul class={tw``}>
        <li class={tw`inline-block text-sm mx-2`}>
          <a
            href="/"
            class={tw`text-zinc-400 hover:cursor-pointer hover:text-zinc-300`}
          >
            Player
          </a>
        </li>
        <li class={tw`inline-block text-sm mx-2`}>
          <a
            href="/search"
            class={tw`text-zinc-400 hover:cursor-pointer hover:text-zinc-300`}
          >
            Search
          </a>
        </li>
      </ul>
    </header>
  );
};
