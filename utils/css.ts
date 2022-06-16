import { apply } from "./twind.ts";

export const shortcuts = {
  page: apply`w-screen h-screen flex text-zinc-100 flex-col overflow-auto bg-zinc-800`,
  container: apply`max-w-3xl flex-1 w-full mx-auto p-2`,
  buttons: apply`px-4 py-2 rounded-md inline-flex items-center`,
};
