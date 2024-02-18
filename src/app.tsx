import React, { useContext } from "react";
import { GlobalStyle } from "./style/globalStyle";
import { InputRegister } from "./components/input/inputRegister";
import { Footer } from "./components/footer/footer";
import { H1tipograpy } from "./style/typograpy";
import { MainSection } from "./style/mainStyle";
import { Modal } from "./components/modal/modal";
import { UserContext } from "./providers/UserContext";


export default function App() {
  const {modalIsOpen} = useContext(UserContext)

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
    {modalIsOpen && <Modal/>}
    </>
  );
}
