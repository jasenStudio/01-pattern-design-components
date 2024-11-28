// MyComponent.js
import React from "react";
import { WithLogging } from "./WithLogging";

const MyComponent = ({ message }) => <div>{message}</div>;
export default WithLogging(MyComponent);
