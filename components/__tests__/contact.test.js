import { render,screen} from "@testing-library/react"
import Contact from "../Contact"
import '@testing-library/jest-dom';
import React from "react";

test("Should load contact us component",()=>{
    render(<Contact/>)

    const heading=screen.getByRole("heading");

    //assertion
    expect(heading).toBeInTheDocument();
});