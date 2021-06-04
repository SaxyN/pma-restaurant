import { Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter, Route, Switch } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { SnackbarProvider } from "notistack";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";


import logger from "redux-logger";
import thunk from "redux-thunk";
import combineReducers from "./store/index";
import "@fontsource/roboto";

import MainContainer from './containers/MainContainer';
import Order from './components/Order';
import MenuContainer from './containers/MenuContainer';

import Menu from './components/Menu';
import OrderContainer from "./containers/OrderContainer";
import AdminContainer from "./containers/AdminContainer";

const middle = [thunk, logger];
const store = createStore(combineReducers, applyMiddleware(...middle));

ReactDOM.render(
    <Fragment>
        <Provider store={store}>
            <HashRouter>
                <MainContainer>
                    <Switch>
                        <Route exact path="/" component={MenuContainer}></Route>
                        <Route exact path="/orders" component={OrderContainer}></Route>
                        <Route exact path="/admin" component={AdminContainer}></Route>
                    </Switch>
                </MainContainer>
            </HashRouter>
        </Provider>
    </Fragment>,
    document.getElementById("root")
);