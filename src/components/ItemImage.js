import BEER from '../assets/beer.png';
import BURGER from '../assets/burger.png';
import CARNE_ASADA_TACO from '../assets/carne_asada_taco.png';
import CHICKEN_FILLET from '../assets/chicken_fillet.png';
import COLA from '../assets/cola.png';
import FRENCH_FRIES from '../assets/french_fries.png';
import GARLIC from '../assets/garlic.png';
import GREEN_TACO from '../assets/green_taco.png';
import MILKSHAKE from '../assets/milkshake.png';
import MIXING_BOWL from '../assets/mixing_bowl.png';
import PACKAGED_CHICKEN from '../assets/packaged_chicken.png';
import PEPPERONI_PIZZA from '../assets/pepperoni_pizza.png';
import SAUCY_PIZZA from '../assets/saucy_pizza.png';
import SEASONING from '../assets/seasoning.png';
import SPECIAL_SAUCE from '../assets/special_sauce.png';
import SPICE from '../assets/spice.png';
import SPICY_TACO from '../assets/spicy_taco.png';
import TACO_SHELL from '../assets/taco_shell.png';

import { Fragment } from 'react';

const ItemImage = ({ name }) => {
    switch (name) {
        case "beer":
            return <img className="image" src={BEER} />;
        case "burger":
            return <img className="image" src={BURGER} />;
        case "carne_asada_taco":
            return <img className="image" src={CARNE_ASADA_TACO} />;
        case "chicken_fillet":
            return <img className="image" src={CHICKEN_FILLET} />;
        case "cola":
            return <img className="image" src={COLA} />;
        case "french_fries":
            return <img className="image" src={FRENCH_FRIES} />;
        case "garlic":
            return <img className="image" src={GARLIC} />;
        case "green_taco":
            return <img className="image" src={GREEN_TACO} />;
        case "mixing_bowl":
            return <img className="image" src={MIXING_BOWL} />;
        case "packaged_chicken":
            return <img className="image" src={PACKAGED_CHICKEN} />;
        case "pepperoni_pizza":
            return <img className="image" src={PEPPERONI_PIZZA} />;
        case "saucy_pizza":
            return <img className="image" src={SAUCY_PIZZA} />;
        case "seasoning":
            return <img className="image" src={SEASONING} />;
        case "special_sauce":
            return <img className="image" src={SPECIAL_SAUCE} />;
        case "spice":
            return <img className="image" src={SPICE} />;
        case "spicy_taco":
            return <img className="image" src={SPICY_TACO} />;
        case "taco_shell":
            return <img className="image" src={TACO_SHELL} />;
        default:
            return <Fragment/>
    }
}

const ItemImage2 = ({name}) => {
    switch (name) {
        case "beer":
            return BEER;
        case "burger":
            return BURGER;
        case "carne_asada_taco":
            return CARNE_ASADA_TACO;
        case "chicken_fillet":
            return CHICKEN_FILLET;
        case "cola":
            return COLA;
        case "french_fries":
            return FRENCH_FRIES;
        case "garlic":
            return GARLIC;
        case "green_taco":
            return GREEN_TACO;
        case "mixing_bowl":
            return MIXING_BOWL;
        case "packaged_chicken":
            return PACKAGED_CHICKEN;
        case "pepperoni_pizza":
            return PEPPERONI_PIZZA;
        case "saucy_pizza":
            return SAUCY_PIZZA;
        case "seasoning":
            return SEASONING;
        case "special_sauce":
            return SPECIAL_SAUCE;
        case "spice":
            return SPICE;
        case "spicy_taco":
            return SPICY_TACO;
        case "taco_shell":
            return TACO_SHELL;
        default:
            return ""
    }
}
export default ItemImage;