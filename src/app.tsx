import React from "react";
import { GlobalStyle } from "./style/globalStyle";
import { InputRegister } from "./components/input/inputRegister";
import { Footer } from "./components/footer/footer";
import { H1tipograpy } from "./style/typograpy";
import { MainSection } from "./style/mainStyle";


export default function App() {
  return (
    <>
    <GlobalStyle/>
    <MainSection>
      <H1tipograpy>Todos</H1tipograpy>
      <div>
        <InputRegister/>
      </div>
        <Footer/>
    </MainSection>
    </>
  );
}
