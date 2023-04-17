import { CSSReset } from "@/components/CSSReset";
import { ColorModeContext, ColorModeProvider } from "@/components/Menu/components/ColorMode";
import { RegisterVideo } from "@/components/RegisterVideo";
import { RunVideoContext, RunVideoProvider } from "@/contexts/RunVideo";
import { useContext } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    light: {
        backgroundBase: "#f9f9f9",
        backgroundLevel1: "#ffffff",
        backgroundLevel2: "#f0f0f0",
        borderBase: "#e5e5e5",
        textColorBase: "#222222",
    },
    dark: {
        backgroundBase: "#181818",
        backgroundLevel1: "#202020",
        backgroundLevel2: "#313131",
        borderBase: "#383838",
        textColorBase: "#FFFFFF",
    }
};

function ProviderWrapper({children}) {
    return (
        <ColorModeProvider initialMode={'light'}>
            <RunVideoProvider initialVideoUrl={'https://www.youtube.com/embed/YVI-q3idGiM'}>
                {children}
            </RunVideoProvider>
        </ColorModeProvider>
    )
}

function Root({ Component, pageProps }) {
    const {mode} = useContext(ColorModeContext);

    return (
        <ThemeProvider theme={theme[mode]}>
            <CSSReset />
            <Component {...pageProps} />
            <RegisterVideo/>
        </ThemeProvider>
    )
}

export default function _App(props){
    return (
        <ProviderWrapper>
            <Root  {...props}/>
        </ProviderWrapper>
    )
}