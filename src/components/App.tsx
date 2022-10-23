import { useScrollUp } from "../hooks/useScrollUp";
import { Background } from "./layout/Background";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { Main } from "./layout/Main";

export const App = () => {
    useScrollUp();

    return (
        <Background>
            <Header />
            <Main />
            <Footer />
        </Background>
    );
};