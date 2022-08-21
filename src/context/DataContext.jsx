import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [update, setUpdate] = useState(false);

  return (
    <DataContext.Provider
      value={{ task, setTask, list, setList, setUpdate, update }}
    >
      {children}
    </DataContext.Provider>
  );
};
