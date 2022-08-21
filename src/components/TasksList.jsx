import React, { useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../context/DataContext";
import { TaskCard } from "./TaskCard";

const CardContainer = styled.div`
  width: 90vw;
  margin-right: auto;
  margin-left: auto;
`;

export const TasksList = () => {
  const { list } = useContext(DataContext);

  if (list.length === 0)
    return <h2 style={{ textAlign: "center" }}>No tasks added</h2>;
  return (
    <CardContainer>
      {list.map(({ id, title }) => (
        <TaskCard key={id} id={id} title={title} />
      ))}
    </CardContainer>
  );
};
