import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Test Cases", ()=>{
it("This should load the contact us page", ()=>{
    render(<Contact/>);

    const heading= screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
})

it("This should load the button inside the component",()=>{
    render(<Contact/>);

    const button=screen.getByRole("button");

    expect(button).toBeInTheDocument();

})

it("This should load the button inside the component",()=>{
    render(<Contact/>);

    const inputName=screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();

})

it("should load 2 input boxes on the contact", ()=>{
    render(<Contact/>);

    const inputBoxes = screen.getAllByRole("textbox");
    //console.log(inputBoxes);

    expect(inputBoxes.length).toBe(2);
})

});