import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadRestaurantData, showUI } from '../store/restaurant/restaurant.actions';

export default () => {
    const dispatch = useDispatch();

    useEffect(() => {
        window.addEventListener("message", (event) => actionListener(event));
        return () => {
            window.removeEventListener("message", (event) =>
                actionListener(event)
            )
        };
    }, []);

    useEffect(() => {
        if (process.env.NODE_ENV === "development") {
            window.postMessage({jobName: "burgershot"})
        }
    }, []);

    const actionListener = (event) => {
        switch (event.data.jobName) {
            case "burgershot":
                if (process.env.NODE_ENV === "development") {
                    if (event.data.jobName) {
                        dispatch(showUI());
                        dispatch(loadRestaurantData());
                    }
                }
            case "henhouse":
                if (process.env.NODE_ENV === "development") {
                    if (event.data.jobName) {
                        // dispatch(showBurgerShot());
                    }
                }
            default:
                null;
        }
    };

    return <Fragment />
}