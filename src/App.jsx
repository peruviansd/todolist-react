import { createGlobalStyle } from "styled-components";
import { TaskForm } from "./components/TaskForm";
import { TasksList } from "./components/TasksList";
import { DataProvider } from "./context/DataContext";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    
    
    font-family: "Outfit",Open-Sans, Helvetica, Sans-Serif;
  }
`;

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <h1 style={{ textAlign: "center" }}>Todo list</h1>
      <DataProvider>
        <TaskForm />
        <hr />
        <TasksList />
      </DataProvider>
    </>
  );
};
