import React from "react"
import {Redirect, Route, Switch} from "react-router-dom"
import {Header} from "./components/common/Header/Header"
import {Main} from "./components/Main/Main"
import {Login} from "./components/Login/Login"
import {Info} from "./components/Info/Info"
import {EditAndAddJog} from "./components/EditAndAddJog/EditAndAddJog"
import {PageNotFound} from "./components/PageNotFound/PageNotFound"

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path={"/"} render={() => <Main/>}/>
                <Route path={"/login"} render={() => <Login/>}/>
                <Route path={"/info"} render={() => <Info/>}/>
                <Route path={"/editjog"} render={() => <EditAndAddJog/>}/>
                <Route path={"/addjog"} render={() => <EditAndAddJog/>}/>
                <Route path={"/404"} render={() => <PageNotFound/>}/>
                <Redirect from={"*"} to={"/404"}/>
            </Switch>
        </div>
    )
}

export default App
