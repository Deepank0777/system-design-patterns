//Buy Pizza
import { APizza } from "./APizza";
import { BasicPizza } from "./BasicPizza";
import { FarmHousePizza } from "./FarmHousePizza";
import { Cheese } from "./topings/Cheese";
import { Olives } from "./topings/Olives";
import { Vegies } from "./topings/Vegies";

/*
//I want to add 2 topings to it
const basic_pizza:APizza = new BasicPizza()
const olives:APizza = new Olives();
const cheese:APizza = new Cheese();
const vegies:APizza = new Vegies();

console.log('basic price of a piza',basic_pizza.price())


basic_pizza.price() + olives.price() + cheese.price()
*/
const modified_basic_pizza:APizza = new Vegies(new Cheese(new BasicPizza()))
console.log('modified_basic_pizza price',modified_basic_pizza.price())

const modified_farmhouse_pizza:APizza = new Vegies(new Cheese(new FarmHousePizza()))
console.log('modified_farmhouse_pizza price',modified_farmhouse_pizza.price())



