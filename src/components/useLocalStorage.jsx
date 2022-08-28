import React, { useState } from "react";

const getDataStorage = () => {
  const list = localStorage.getItem("data");
  if (list) return JSON.parse(list);
  else {
    return [];
  }
};

const useLocalStorage = () => {
  const [list, setList] = useState(getDataStorage());

  const addToList = (newtask) => {
    setList((prev) => {
      const newList = prev.concat(newtask);
      localStorage.setItem("data", JSON.stringify(newList));
      return newList;
    });
  };

  const updateTask = (task) => {
    setList((prevList) => {
      const updatedList = prevList.map((t) =>
        t.id === task.id ? { ...t, title: task.title } : t
      );

      localStorage.setItem("data", JSON.stringify(updatedList));
      return updatedList;
    });
  };

  const deleteTask = (taskId) => {
    setList((prev) => {
      const updatedList = prev.filter((task) => task.id != taskId);
      localStorage.setItem("data", JSON.stringify(updatedList));
      return updatedList;
    });
  };

  return [list, addToList, updateTask, deleteTask];
};

export default useLocalStorage;
