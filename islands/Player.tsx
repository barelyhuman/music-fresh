/** @jsx h */
import { h, IS_BROWSER, useState } from "$fresh/runtime.ts";
import { tw } from "../utils/twind.ts";
import { shortcuts } from "../utils/css.ts";

interface PlayerProps {}

export default function Player(props: PlayerProps) {
  return (
    <div
      class={tw`flex w-full flex-wrap items-center rounded-md bg-zinc-900 p-4 md:flex-nowrap`}
    >
      <div>song name</div>
      <div class={tw`ml-auto flex gap-x-2`}>
        <button
          class={tw`${shortcuts.buttons} h-10 w-10 rounded-full bg-zinc-800 p-3 hover:bg-opacity-75`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none"></rect>
            <path d="M56,32a8,8,0,0,1,8,8v73.7L183.7,40.6A16,16,0,0,1,208,54.3V201.7a15.9,15.9,0,0,1-8.2,14,15.4,15.4,0,0,1-7.8,2,16.2,16.2,0,0,1-8.3-2.3L64,142.3V216a8,8,0,0,1-16,0V40A8,8,0,0,1,56,32Z"></path>
          </svg>
        </button>
        <button
          class={tw`${shortcuts.buttons} h-10 w-10 rounded-full bg-accent-500 p-3 hover:bg-opacity-75`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none"></rect>
            <path d="M232.3,114.3,88.3,26.4a15.5,15.5,0,0,0-16.1-.3A15.8,15.8,0,0,0,64,40V216a15.8,15.8,0,0,0,8.2,13.9,15.5,15.5,0,0,0,16.1-.3l144-87.9a16,16,0,0,0,0-27.4Z"></path>
          </svg>
        </button>
        <button
          class={tw`${shortcuts.buttons} h-10 w-10 rounded-full bg-zinc-800 p-3 hover:bg-opacity-75`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none"></rect>
            <path d="M208,40V216a8,8,0,0,1-16,0V142.3L72.3,215.4a16.2,16.2,0,0,1-8.3,2.3,15.4,15.4,0,0,1-7.8-2,15.9,15.9,0,0,1-8.2-14V54.3A16,16,0,0,1,72.3,40.6L192,113.7V40a8,8,0,0,1,16,0Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
