import React, {Component, useState, useEffect} from "react";
import './scss/style.scss';
import { HashRouter, Route, Switch } from 'react-router-dom';
import {API} from "aws-amplify";
import {withAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";
import {listArticulos} from "./graphql/queries";
import {createArticulo, createCompra, createVenta, deleteArticulo, deleteCompra, deleteVenta} from "./graphql/mutations";

const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

class App extends Component {

    render() {
        return (
            <HashRouter>
                <React.Suspense fallback={loading}>
                    <Switch>
                        <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
                        <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
                        <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
                    </Switch>
                </React.Suspense>
            </HashRouter>
        );
    }
}


export default withAuthenticator(App);
