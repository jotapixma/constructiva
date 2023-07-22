import '@/styles/globals.scss'
import '../styles/slick-custom.scss'
import { createTheme, ThemeProvider } from "@mui/material/styles";

let theme = createTheme({
  colors: {
    primary: "#5cd7cf",
    secondary: "#353535",
    white: "#FFFFFF",
    disabled: "#e8e8ef",
  }
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )

}
