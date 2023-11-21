import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

// Here we are working with dummy meals, i.e not taking any user input
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'xyous T-shirt ',
      description: 'A pure cotton with added Ryson',
      price: 150.00,
    },
    {
      id: 'm2',
      name: 'xyous Shirt',
      description: 'A pure cotton with amont fiber',
      price: 180.00,
    },
    
];
const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
        <MealItem 
            id={meal.id}
            key = {meal.id} 
            name = {meal.name} 
            description = {meal.description}
            price = {meal.price}
        />
    ));

    return <section className={classes.meals}>
        <Card>
            <ul>{mealsList} </ul>
        </Card>
    </section>
};

export default AvailableMeals;