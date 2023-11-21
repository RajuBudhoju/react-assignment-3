// This will grops the MealsSummary.js and Avilable Meals

import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvilableMeals";
import { Fragment } from "react";
import InputForm from "../Input/InputForm";

const Meals = () => {
    return <Fragment>
        <MealsSummary/>
        <InputForm/>
        <AvailableMeals/>
    </Fragment>
};

export default Meals;