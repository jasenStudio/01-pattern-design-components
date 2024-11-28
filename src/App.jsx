import { useState } from "react";
import reactLogo from "./assets/react.svg";
import TodoContainer from "./patterns/containerComponent/TodoContainer";
import MyComponent from "./patterns/HOC/MyComponent";
import MouseTracker from "./patterns/renderProps/MouseTracker";

import DataDisplay from "./patterns/customHookPattern/dataDisplay";

import Toggle from "./patterns/CompoundComponentPattern/toggle";
import ToggleButton from "./patterns/CompoundComponentPattern/ToggleButton";
import ToggleMessage from "./patterns/CompoundComponentPattern/ToggleMessage";
function App() {
  // return <TodoContainer />; //* container pattern
  // return <MyComponent message="este un mensaje para un componente envuelto" />; //* HOC */
  // return ( //* Render Pattern
  //   <MouseTracker
  //     render={({ x, y }) => (
  //       <h1>
  //         The mouse position is ({x}, {y})
  //       </h1>
  //     )}
  //   />
  // );
  // return DataDisplay({ url: "https://jsonplaceholder.typicode.com/users" });
  return (
    <Toggle>
      <ToggleButton />
      <ToggleMessage />
    </Toggle>
  );
}

export default App;
