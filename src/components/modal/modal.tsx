import { useContext, useState } from "react";
import { TitleModal } from "../../style/typograpy";
import { DivModal } from "./style";
import { IoClose } from "react-icons/io5";
import { UserContext } from "../../providers/UserContext";

export const Modal = () => {
  const [inputValue, setInputValue] = useState<string>("") 
  const {closeModal, targetEdit, editTask} = useContext(UserContext)
  return (
    <DivModal role="dialog">
      <div>
        <div>
          <TitleModal>Edit task</TitleModal>
          <button onClick={()=> closeModal()}><IoClose /></button>
        </div>
        <input type="text" placeholder={targetEdit?.title} value={inputValue} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}/>
        <button onClick={() => targetEdit && editTask(targetEdit.id, inputValue)}>change task</button>
      </div>
    </DivModal>
  );
};
