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

  useEffect(() => {
    const listString = localStorage.getItem("@LIST");
    const type = localStorage.getItem("@TYPE");

    if (listString) {
      const list = JSON.parse(listString);
      setListToDo(list);
      setFullToDoList(list); // Definir a lista completa ao inicializar
    } else {
      getList();
    }
  }, []);

  useEffect(() => {
    countTask();
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
    const updateList = listToDo.filter((todo) => !todo.isDone);
    setListToDo(updateList);
  };

  const filterComplete = () => {
    const updateList = listToDo.filter((todo) => todo.isDone);
    setListToDo(updateList);
  };

    const filterAll = () => {
    setListToDo(fullToDoList); // Mostrar a lista completa
  };

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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
