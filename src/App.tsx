import React from "react"
import {Redirect, Route, Switch} from "react-router-dom"
import {Header} from "./components/common/Header/Header"
import {PageNotFound} from "./components/PageNotFound/PageNotFound"
import {Main} from "./components/Main/Main"
import {Login} from "./components/Login/Login"
import {Info} from "./components/Info/Info"

function App() {

    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path={"/"} render={() => <Main/>}/>
                <Route exact path={"/login"} render={() => <Login/>}/>
                <Route exact path={"/info"} render={() => <Info/>}/>
                <Route path={"/404"} render={() => <PageNotFound/>}/>
                <Redirect from={"*"} to={"/404"}/>
            </Switch>
        </div>
    )
}

export default App
