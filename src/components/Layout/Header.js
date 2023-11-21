import classes from "./Header.module.css";
import {Fragment} from 'react';
import mealsImage from '../../asserts/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
    <Fragment>
        <header className={classes.header}>
            <h1>Bharath Shopping Mall</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A table full of food items"/>
        </div>
    </Fragment>
    );
}

export default Header;