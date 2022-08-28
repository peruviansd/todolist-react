import { createContext, useState } from "react";
import useLocalStorage from "../components/useLocalStorage";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [task, setTask] = useState("");
  const [list, addToList, updateTask, deleteTask] = useLocalStorage();
  const [isUpdateClicked, setIsUpdateClicked] = useState(false);

  return (
    <DataContext.Provider
      value={{
        task,
        setTask,
        list,
        addToList,
        isUpdateClicked,
        setIsUpdateClicked,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
