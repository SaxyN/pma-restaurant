import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { hideUI, loadRestaurantData, showUI } from '../store/restaurant/restaurant.actions';
import * as apis from '../apis/apis.js';

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

    // useEffect(() => {
    //     if (process.env.NODE_ENV === "development") {
    //         window.postMessage({jobName: "burgershot"})
    //     }
    // }, []);

    const actionListener = (event) => {
        if (process.env.NODE_ENV === "development") {
            dispatch(showUI());
            dispatch(loadRestaurantData());
        } else {
            if (event.data.showTablet) {
                dispatch(showUI());
                dispatch(loadRestaurantData(event.data.bundle))
            } else if (event.data.bundle) {
                dispatch(loadRestaurantData(event.data.bundle))
            } else {
                dispatch(hideUI());
            }
        }
    };

    return <Fragment />
}