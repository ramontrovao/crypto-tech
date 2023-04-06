import { DefaultTheme } from "@/themes/default";
import "styled-components";

type ThemeType = typeof DefaultTheme;

declare module "styled-components" {
  interface DefaultTheme extends ThemeType {}
}
