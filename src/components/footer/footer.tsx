import { FooterText, FooterTypograpy } from "../../style/typograpy"
import { DivFooter } from "./style"

export const Footer = () =>{
    return(
        <>
            <DivFooter>
                <FooterText>Double click to edit a todo</FooterText>
                <FooterText>Template by <FooterTypograpy>Sindre Sorthus</FooterTypograpy></FooterText>
                <FooterText>Created by <FooterTypograpy>Chau Tran</FooterTypograpy></FooterText>
                <FooterText>Edit <FooterTypograpy>XState</FooterTypograpy> by <FooterTypograpy>David K</FooterTypograpy>.</FooterText>
                <FooterText>Part of <FooterTypograpy>TodoMVC</FooterTypograpy></FooterText>
            </DivFooter>
        </>
    )
}