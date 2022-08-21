import React from "react";
import styled from "styled-components";
import Button from "./Button";

const MyCardStyled = styled.div`
  padding: 0.5rem 1rem ;
  margin-bottom:1rem;

  display: flex;
  align-items: center;

  background-color: #f2ecec;

  & div:nth-child(1) {
    width: 50%;
    font-size: 1.2rem;
    word-wrap: break-word:
  }

  & div:nth-child(2) {
    text-align: right;
    width: 50%;
  }
`;

export const TaskCard = ({ id, title }) => {
  return (
    <MyCardStyled>
      <div>{title} </div>
      <div>
        <Button name="Update" title={title} taskId={id} />{" "}
        <Button name="Delete" taskId={id} />
      </div>
    </MyCardStyled>
  );
};
