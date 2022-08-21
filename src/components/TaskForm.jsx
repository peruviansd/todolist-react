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
  const { task, setTask, setList, update, setUpdate } = useContext(DataContext);
  const handleClick = (e) => {
    e.preventDefault();

    if (update) {
      const taskToUpdate = update;
      setList((prevList) =>
        prevList.map((t) => (t.id === taskToUpdate ? { ...t, title: task } : t))
      );
      setUpdate(false);
      setTask("");
    } else {
      const newTask = { id: Date.now(), title: task };
      if (task != "") {
        setList((prev) => [newTask, ...prev]);
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
        {!update ? "+" : "Upgrade"}
      </MyButton>
    </MyFormSyled>
  );
};
