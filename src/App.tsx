import React from "react"
import {Redirect, Route, Switch} from "react-router-dom"
import {Header} from "./components/common/Header/Header"
import {Main} from "./components/Main/Main"
import {Login} from "./components/Login/Login"
import {Info} from "./components/Info/Info"
import {EditAndAddJog} from "./components/EditAndAddJog/EditAndAddJog"
import {EmptyPage} from "./components/EmptyPage/EmptyPage"
import {Contacts} from "./components/Contacts/Contacts"

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
                <Route path={"/contacts"} render={() => <Contacts/>}/>
                <Route path={"/empty"} render={() => <EmptyPage/>}/>
                <Redirect from={"*"} to={"/empty"}/>
            </Switch>
        </div>
    )
}

export default App
