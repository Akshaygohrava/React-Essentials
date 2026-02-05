import { useState } from "react";
import Counter from "./Counter";
import Products from "./Products";
import UseStatehook from "./Usestatehook";
import Student from "./Student";
export const Basic = () => {
    return (
        <>
        <Counter></Counter>
        <hr />
        <UseStatehook></UseStatehook>
        <hr />
        <Student></Student>
        <hr />
        <Products></Products>
        </>
    )
}