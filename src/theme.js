import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#a44',
            light: 'skyblue',
            dark: 'darkblue'
        },
        secondary: {
            main: '#15c630',

        },
        customColor: {
            main: '#999'
        }
    }
})

export default theme;