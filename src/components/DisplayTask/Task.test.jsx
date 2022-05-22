import React from "react";
import ReactDOM from "react-dom/client";
import Task from "./Task";
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";


it("renders without errors", () =>{
    const testTask = document.createElement("div");
    ReactDOM.createRoot(testTask)
})

it("renders correctly", ()=>{
    const {getByTestId} =  render(<Task nom="test"></Task>)
    expect(getByTestId('task')).toHaveTextContent("test")
})

it("test classname", () => {
    const {getByTestId} =  render(<Task nom="test"></Task>)
    expect(getByTestId('task')).toHaveClass("tasks")
})

it('Task without name', () => {
    const {getByTestId} =  render(<Task />)
    expect(getByTestId('task')).toHaveTextContent("")
})