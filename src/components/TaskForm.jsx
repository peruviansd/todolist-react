import { useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../context/DataContext";
import { MyButton } from "./Button";
import { AiOutlineClose } from "react-icons/ai";

const MyFormSyled = styled.form`
  width: 90vw;
  margin: 0 auto;

  display: flex;
  gap: 0.5rem;

  & > div {
    border: 1px solid black;
    padding: 0 0.5rem;
    display: flex;
  }

  & input {
    all: unset;
    height: 100%;
  }
`;

export const TaskForm = () => {
  const {
    task,
    setTask,
    addToList,
    isUpdateClicked,
    setIsUpdateClicked,
    updateTask,
  } = useContext(DataContext);
  const handleClick = (e) => {
    e.preventDefault();

    if (isUpdateClicked) {
      const taskIdToUpdate = isUpdateClicked;
      const taskToUpdate = { id: taskIdToUpdate, title: task };
      updateTask(taskToUpdate);
      setIsUpdateClicked(false);
      setTask("");
    } else {
      const newTask = { id: Date.now(), title: task };
      if (task != "") {
        addToList(newTask);
        setTask("");
      }
    }
  };
  return (
    <MyFormSyled>
      <div>
        <input
          type="text"
          onChange={(e) => setTask(e.target.value)}
          value={task}
          placeholder="Intruce your new task"
        />

        {task && (
          <AiOutlineClose
            onClick={() => setTask("")}
            style={{ alignSelf: "center", cursor: "pointer" }}
          />
        )}
      </div>
      <MyButton
        onClick={handleClick}
        color="#198DDD"
        style={{ fontSize: "18px", color: "white" }}
      >
        {!isUpdateClicked ? "+" : "Upgrade"}
      </MyButton>
    </MyFormSyled>
  );
};
