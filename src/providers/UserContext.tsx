import React, { createContext, useEffect, useState } from "react";
import { api } from "../service/api";
import { v4 as uuidv4 } from "uuid";

interface IUserProviderProps {
  children: React.ReactNode;
}

interface IUserContext {
  listToDo: IListToDo[];
  addToDo: (text: string) => void;
  markDone: (id: string) => void;
  deleteTask: (id: string) => void;
  countToDo: number;
  filterActive: () => void;
  filterComplete: () => void;
  filterAll: () => void;
  clearComplete: () => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  activeType: string;
  modalIsOpen: boolean;
  openModal: (task: IListToDo) => void;
  closeModal: () => void;
  editTask: (id: string, newTitle: string) => void;
  targetEdit: IListToDo | null
}

interface IListToDo {
  id: string;
  title: string;
  isDone: boolean;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [listToDo, setListToDo] = useState<IListToDo[]>([]);
  const [countToDo, setCountToDo] = useState<number>(0);
  const [fullToDoList, setFullToDoList] = useState<IListToDo[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(listToDo.length > 0)
  const [activeType, setActiveType] = useState<string>("all")
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const [targetEdit, setTargetEdit] = useState<IListToDo|null>(null)

  useEffect(() => {
    const listString = localStorage.getItem("@LIST");
    const type = localStorage.getItem("@TYPE");

    if (listString) {
      const list = JSON.parse(listString);
      setListToDo(list);
      setFullToDoList(list); 
    } else {
      getList();
    }
  }, []);

  useEffect(() => {
    countTask();
    setIsOpen(listToDo.length > 0)
  }, [listToDo]);

  useEffect(() => {
    setListToDo(fullToDoList);
  }, [fullToDoList]);

  const getList = async () => {
    try {
        const { data } = await api.get("");
        setListToDo(data);
        localStorage.setItem("@LIST", JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }
};

const addToDo = (text: string) => {
    const id: string = uuidv4().substring(0, 5);
    const newItem = {
      id: id,
      title: text,
      isDone: false,
    };
  
    setFullToDoList(prevList => [...prevList, newItem]);
    setListToDo(prevList => [...prevList, newItem]);
  };

  const markDone = (id: string) => {
    const updatedList = fullToDoList.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
  
    setFullToDoList(updatedList);
    setListToDo(updatedList);
  };

  const deleteTask = (id: string) => {
    const updatedList = fullToDoList.filter((todo) => todo.id !== id);
  
    setFullToDoList(updatedList);
    setListToDo(updatedList);
  };

  const countTask = () => {
    const count = listToDo.length;
    setCountToDo(count);
  };

  const filterActive = () => {
    const updateList = fullToDoList.filter((todo) => !todo.isDone);
    setListToDo(updateList);
    setActiveType("active")
  };

  const filterComplete = () => {
    const updateList = fullToDoList.filter((todo) => todo.isDone);
    setListToDo(updateList);
    setActiveType("complete")
  };

    const filterAll = () => {
    setListToDo(fullToDoList);
    setActiveType("all")
  };

  const clearComplete = () =>{
    const updateList = fullToDoList.filter((todo)=>!todo.isDone)
    setListToDo(updateList)
    setFullToDoList(updateList)
  }

  const openModal = (task:IListToDo) =>{
    setTargetEdit(task)
    setModalIsOpen(true)
  }

  const closeModal = () =>{
    setTargetEdit(null)
    setModalIsOpen(false)
  }

  const editTask = (id: string, newTitle: string) => {
    const updatedList = fullToDoList.map((todo) =>
      todo.id === id ? { ...todo, title: newTitle } : todo
    );
    setModalIsOpen(false)
    setFullToDoList(updatedList);
    setListToDo(updatedList);
  }

  return (
    <UserContext.Provider
      value={{
        listToDo,
        addToDo,
        markDone,
        deleteTask,
        countToDo,
        filterActive,
        filterComplete,
        filterAll,
        clearComplete,
        isOpen,
        setIsOpen,
        activeType,
        modalIsOpen,
        openModal,
        closeModal,
        editTask,
        targetEdit
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
