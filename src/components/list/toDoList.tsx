import { VscChromeClose } from "react-icons/vsc";
import { VscCheck } from "react-icons/vsc";
import { UlListCreations } from "./style";
import { Filter } from "../filter/filter";
import { CheckButton } from "../../style/buttonsStyle";
import { DeleteButton } from "../../style/buttonsStyle";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const ToDoList = () =>{
    const {listToDo, markDone, deleteTask, isOpen, openModal} = useContext(UserContext)
    return(
        <>
        <UlListCreations className={(listToDo.length > 0 && isOpen) ? "show" : undefined}>
            {listToDo.map((list) =>(
            <li key={list.id} className={list.isDone ? "task" : undefined}>
                <CheckButton onClick={()=> markDone(list.id)}><VscCheck /></CheckButton>
                <p onDoubleClick={() => openModal(list)}>{list.title}</p>
                <DeleteButton onClick={()=> deleteTask(list.id)}><VscChromeClose /></DeleteButton>
            </li>
            ))}
            <Filter/>
        </UlListCreations>
        </>
    )
}