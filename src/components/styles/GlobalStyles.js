import { createGlobalStyle } from "styled-components"
import { themes } from "./ColorStyles"

export const GlobalStyles = createGlobalStyle`
body {
    background: ${themes.text1};
}
`
