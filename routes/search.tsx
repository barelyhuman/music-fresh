/** @jsx h */
import { h, PageProps } from "$fresh/runtime.ts";
import { Handlers } from "$fresh/server.ts";
import { Header } from "../components/Header.tsx";
import { tw } from "../utils/twind.ts";
import { shortcuts } from "../utils/css.ts";
import { Footer } from "../components/Footer.tsx";

interface Data {
  results: string[];
  query: string;
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const searchableList: string[] = [
      "hello world",
      "hello world",
      "hello world",

      "hello world",
      "hello world",
      "hello world",
      "hello world",
      "hello world","hello world",
      "hello world",

      "hello world",
      "hello world",
      "hello world",
      "hello world",
      "hello world","hello world","hello world","hello world","hello world","hello world","hello world",
  
  ];
    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "";
    const results = searchableList.filter((name) => name.includes(query));
    return ctx.render({ results, query });
  },
};

export default function Page({ data }: PageProps<Data>) {
  const { results, query } = data;
  return (
    <div class={tw`${shortcuts.page} p-4`}>
      <div class={tw`${shortcuts.container}`}>
        <Header />
        <section class={tw`my-3 h-full`}>
          <form>
            <label
              class={tw`flex bg-zinc-900 py-2 px-2 ${
                results.length ? "rounded-t-md" : "rounded-md"
              }`}
            >
              <input
                placeholder="Search music"
                type="text"
                name="q"
                value={query}
                class={tw`w-full bg-transparent outline-none`}
              />
              <button
                type="submit"
                class={tw`${shortcuts.buttons} h-full w-10 bg-accent-500 px-3 text-white`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <path d="M176,116a60,60,0,1,1-60-60A60,60,0,0,1,176,116Zm53.6,113.7A8,8,0,0,1,224,232a8.3,8.3,0,0,1-5.7-2.3l-43.2-43.3a92.2,92.2,0,1,1,11.3-11.3l43.2,43.2A8,8,0,0,1,229.6,229.7ZM116,192a76,76,0,1,0-76-76A76.1,76.1,0,0,0,116,192Z"></path>
                </svg>
              </button>
            </label>
          </form>
          <ul class={tw`rounded-b-md bg-zinc-900 overflow-auto`} style={{maxHeight:"500px"}}>
            {results.map((name) => (
              <li class={tw`p-4 hover:bg-zinc-700`} key={name}>
                {name}
              </li>
            ))}
          </ul>
        </section>
      </div>
      <Footer />
    </div>
  );
}
