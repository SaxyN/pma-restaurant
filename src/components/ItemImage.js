import BURGER from '../assets/burger.png';
import CHICKEN_FILLET from '../assets/chicken_fillet.png';
import COLA from '../assets/cola.png';
import FRENCH_FRIES from '../assets/french_fries.png';
import GARLIC from '../assets/garlic.png';
import MILKSHAKE from '../assets/milkshake.png';
import MIXING_BOWL from '../assets/mixing_bowl.png';
import PACKAGED_CHICKEN from '../assets/packaged_chicken.png';
import PEPPERONI_PIZZA from '../assets/pepperoni_pizza.png';
import SAUCY_PIZZA from '../assets/saucy_pizza.png';
import SEASONING from '../assets/seasoning.png';
import SPECIAL_SAUCE from '../assets/special_sauce.png';
import SPICE from '../assets/spice.png';

// Galaxy
import SUPER_PUFF from '../assets/superpuff.png';
import GUMMY from '../assets/gummy.png';
import BLAST_OFF_COCKTAIL from '../assets/bocock.png';
import MILKYWAY_MARTINI from '../assets/mwmartini.png';
import RINGS_OF_SATURN from '../assets/ringofsaturn.png';
import MOON_ROCKS from '../assets/moonrocks.png';
import BLACK_HOLE_SHOT from '../assets/blackholeshot.png';

// Hen House
import NACHOS from '../assets/nachos.png';
import POPPERS from '../assets/poppers.png';
import ICED_TEA from '../assets/icedtea.png';
import STEAK_SALAD from '../assets/steaksalad.png';
import SEDUCTIVE from '../assets/hhseductive.png';
import SPECIAL from '../assets/hhspecial.png';
import HOOCH from '../assets/hhhooch.png';
import HOTTIES from '../assets/hhhotties.png';

//Bahamas
import BLUE_MOON from '../assets/bluemoon.png';
import VANILLA_DAIQUIRI from '../assets/vanillad.png';
import UNICORN_TEARS from '../assets/unicorntears.png';
import POPCORN from '../assets/popcorn.png';
import CHICKEN_WINGS from '../assets/chickenwings.png';

// Demon Noodle
import VEGAN_RAMEN from '../assets/vegan_ramen.png';
import PORK_RAMEN from '../assets/pork_ramen.png';
import SEAFOOD_RAMEN from '../assets/seafood_ramen.png';
import BLACK_MILK_BOBA_TEA from '../assets/bmboba_tea.png';
import THAI_BOBA_TEA from '../assets/thai_boba_tea.png';
import STRAWBERRY_BOBA_TEA from '../assets/strawberry_boba_tea.png';
import ONI_ROLL from '../assets/oni_roll.png';
import SAKE from '../assets/sake.png';

// Irish Pub
import VODKA from '../assets/vodka.png';
import WHISKY from '../assets/whisky.png';
import IRISH_WHISKY from '../assets/twhisky.png';
import ALE from '../assets/beer.png';
import PUB_BURGER from '../assets/pburger.png';
import CORNED_BEEF from '../assets/cornbeef.png';
import CLUB_SANDWICH from '../assets/csandwich.png';

// Drusilla
import HAM_TORTELLINI from '../assets/hamtortellini.png';
import LASAGNA from '../assets/lasagna.png';
import CANNOLI from '../assets/cannoli.png';
import ITALIAN_SODA from '../assets/italiansoda.png';
import ESPRESSO from '../assets/espresso.png';
import WINE from '../assets/wine.png';
import AMARETTO from '../assets/amaretto.png';
import PIBWASSER from '../assets/pibwasser.png';

// the Taco Farmer
import BEER from '../assets/beer.png';
import CARNE_ASADA_TACO from '../assets/carne_asada_taco.png';
import TAQUITO from '../assets/taquito.png';
import CHURRO from '../assets/churro.png';
import FISH_TACOS from '../assets/fish_tacos.png';
import HORCHATA from '../assets/horchata.png';
import JARRITO from '../assets/jarrito.png';
import TACO_SALAD from '../assets/taco_salad.png';

// yellowjack
import OLD_FASHIONED from '../assets/ofashioned.png';
import APPLE_PIE from '../assets/applepie.png';
import PULLED_PORK from '../assets/pulledpork.png';
import RIBS from '../assets/ribs.png';
import VENISON from '../assets/venison.png';

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
        case "milkshake":
            return <img className="image" src={MILKSHAKE} />;
        case "spice":
            return <img className="image" src={SPICE} />;
        case "spicy_taco":
            return <img className="image" src={SPICY_TACO} />;
        case "taco_shell":
            return <img className="image" src={TACO_SHELL} />;
        case "superpuff":
            return <img className="image" src={SUPER_PUFF} />;
        case "gummy":
            return <img className="image" src={GUMMY} />;
        case "moonrocks":
            return <img className="image" src={MOON_ROCKS} />;
        case "mwmartini":
            return <img className="image" src={MILKYWAY_MARTINI} />;
        case "bocock":
            return <img className="image" src={BLAST_OFF_COCKTAIL} />;
        case "blackholeshot":
            return <img className="image" src={BLACK_HOLE_SHOT} />;
        case "ringofsaturn":
            return <img className="image" src={RINGS_OF_SATURN} />;
        case "nachos":
            return <img className="image" src={NACHOS} />;
        case "poppers":
            return <img className="image" src={POPPERS} />;
        case "icedtea":
            return <img className="image" src={ICED_TEA} />;
        case "steaksalad":
            return <img className="image" src={STEAK_SALAD} />;
        case "hhseductive":
            return <img className="image" src={SEDUCTIVE} />;
        case "hhspecial":
            return <img className="image" src={SPECIAL} />;
        case "hhhooch":
            return <img className="image" src={HOOCH} />;
        case "hhhotties":
            return <img className="image" src={HOTTIES} />;
        case "bluemoon":
            return <img className="image" src={BLUE_MOON} />;
        case "vanillad":
            return <img className="image" src={VANILLA_DAIQUIRI} />;
        case "unicorntears":
            return <img className="image" src={UNICORN_TEARS} />;
        case "popcorn":
            return <img className="image" src={POPCORN} />;
        case "chickenwings":
            return <img className="image" src={CHICKEN_WINGS} />;
        case "vegan_ramen":
            return <img className="image" src={VEGAN_RAMEN} />;
        case "pork_ramen":
            return <img className="image" src={PORK_RAMEN} />;
        case "seafood_ramen":
            return <img className="image" src={SEAFOOD_RAMEN} />;
        case "bmboba_tea":
            return <img className="image" src={BLACK_MILK_BOBA_TEA} />;
        case "thai_boba_tea":
            return <img className="image" src={THAI_BOBA_TEA} />;
        case "strawberry_boba_tea":
            return <img className="image" src={STRAWBERRY_BOBA_TEA} />;
        case "oni_roll":
            return <img className="image" src={ONI_ROLL} />;
        case "sake":
            return <img className="image" src={SAKE} />;
        case "vodka":
            return <img className="image" src={VODKA} />;
        case "whisky":
            return <img className="image" src={WHISKY} />;
        case "twhisky":
            return <img className="image" src={IRISH_WHISKY} />;
        case "ale":
            return <img className="image" src={ALE} />;
        case "pburger":
            return <img className="image" src={PUB_BURGER} />;
        case "cornbeef":
            return <img className="image" src={CORNED_BEEF} />;
        case "csandwich":
            return <img className="image" src={CLUB_SANDWICH} />;
        case "hamtortellini":
            return <img className="image" src={HAM_TORTELLINI} />;
        case "lasagna":
            return <img className="image" src={LASAGNA} />;
        case "cannoli":
            return <img className="image" src={CANNOLI} />;
        case "italiansoda":
            return <img className="image" src={ITALIAN_SODA} />;
        case "espresso":
            return <img className="image" src={ESPRESSO} />;
        case "wine":
            return <img className="image" src={WINE} />;
        case "amaretto":
            return <img className="image" src={AMARETTO} />;
        case "pibwasser":
            return <img className="image" src={PIBWASSER} />;
        case "churro":
            return <img className="image" src={CHURRO} />;
        case "fish_tacos":
            return <img className="image" src={FISH_TACOS} />;
        case "horchata":
            return <img className="image" src={HORCHATA} />;
        case "jarrito":
            return <img className="image" src={JARRITO} />;
        case "taco_salad":
            return <img className="image" src={TACO_SALAD} />;
        case "taquito":
            return <img className="image" src={TAQUITO} />;
        case "applepie":
            return <img className="image" src={APPLE_PIE} />;
        case "ofashioned":
            return <img className="image" src={OLD_FASHIONED} />;
        case "pulledpork":
            return <img className="image" src={PULLED_PORK} />;
        case "ribs":
            return <img className="image" src={RIBS} />;
        case "venison":
            return <img className="image" src={VENISON} />;
        default:
            return <Fragment/>
    }
}

export default ItemImage;