import { createTheme } from "@mui/material";
import BackgroundImage from "./bs.jpg";

const theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    // margin: 0,
                    // minHeight: '100vh',
                    backgroundImage: `url(${BackgroundImage})`, // change to your image
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                },
            },
        },
    },
});

export default theme;