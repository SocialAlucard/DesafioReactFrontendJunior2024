import { TfiAngleDown } from "react-icons/tfi";
import { ToDoList } from "../list/toDoList";
import { ContainerMain } from "./style";
import { InputStyle } from "./style";
import { ContainerInput } from "./style";
import { OpenButton } from "../../style/buttonsStyle";
import { useForm } from "react-hook-form";
import React, { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";

export const InputRegister = () =>{
    const {register, handleSubmit} = useForm()
    const [inputValue, setInputValue] = useState<string>("")
    const {addToDo} = useContext(UserContext)
    const handlerClick = () => {
        addToDo(inputValue);
        setInputValue("")
    }
    const handlerKeyPress = (event: React.KeyboardEvent<HTMLInputElement>)=>{
        if(event.key === "Enter"){
            handlerClick()
        }
    }
    return(
        <> 
            <ContainerMain>
                <ContainerInput>
                    <OpenButton><TfiAngleDown /></OpenButton>
                    <InputStyle type="text" placeholder="What needs to be done?" value={inputValue} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)} onKeyPress={handlerKeyPress}/>
                </ContainerInput>
                <ToDoList/>
            </ContainerMain>
        </>
    )
}