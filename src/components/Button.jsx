import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import styled from "styled-components";

export const MyButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border-width: 0;

  background-color: ${({ color }) => color};
  font-weight: 600;

  &:hover {
    filter: contrast(150%);
    cursor: pointer;
  }
`;

const Button = ({ name, task }) => {
  const { setTask, setIsUpdateClicked, deleteTask } = useContext(DataContext);
  const handleDelete = () => {
    if (confirm("are you sure?")) deleteTask(task.id);
  };
  const handleUpdate = () => {
    setTask(task.title);
    setIsUpdateClicked(task.id);
  };

  const fn = name === "Delete" ? handleDelete : handleUpdate;

  return (
    <MyButton onClick={fn} color={name === "Delete" ? "#DD1919" : "#29DD19"}>
      {name}
    </MyButton>
  );
};

export default Button;
