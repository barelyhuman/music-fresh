import { IS_BROWSER } from "$fresh/runtime.ts";
import { apply, setup, tw } from "$twind";
import * as colors from "$twind/colors";
export { apply, setup, tw };

export const theme = {
  colors: {
    red: colors.red,
    blue: colors.blue,
    black: colors.black,
    zinc: colors.gray,
    accent: {
      50: "#f5f9f1",
      100: "#e7f1e0",
      200: "#dae9ce",
      300: "#cde1bd",
      400: "#b2d299",
      500: "#98C379",
      600: "#7cb253",
      700: "#649141",
      800: "#4c6e32",
      900: "#334a22",
    },
    green: colors.green,
    white: colors.white,
    yellow: colors.yellow,
    transparent: "transparent",
  },
};

if (IS_BROWSER) {
  setup({ theme: { colors } });
}
