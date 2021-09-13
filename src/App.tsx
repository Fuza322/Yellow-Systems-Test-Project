import React, {useEffect} from "react"
import {Redirect, Route, Switch} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {initializeAppTC, setAppIsInitializedAC} from "./redux/reducers/app-reducer"
import {Header} from "./components/common/Header/Header"
import {Main} from "./components/Main/Main"
import {Login} from "./components/Login/Login"
import {Info} from "./components/Info/Info"
import {EditAndAddJog} from "./components/EditAndAddJog/EditAndAddJog"
import {EmptyPage} from "./components/EmptyPage/EmptyPage"
import {Contacts} from "./components/Contacts/Contacts"
import { AppRootStateType } from "./redux/store"
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress"

function App() {

    const dispatch = useDispatch()
    const isInitialized = useSelector<AppRootStateType, boolean>(state => state.appReducer.isInitialized)

    useEffect(() => {
        if(!localStorage.getItem("token")) {
            dispatch(initializeAppTC())
        } else {
            dispatch(setAppIsInitializedAC(true))
        }
    }, [dispatch])

    if (!isInitialized) {
        return <div style={{position: "fixed", top: "50%", textAlign: "center", width: "100%"}}>
            <CircularProgress/>
        </div>
    }

    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path={"/"} render={() => <Main/>}/>
                <Route path={"/login"} render={() => <Login/>}/>
                <Route path={"/info"} render={() => <Info/>}/>
                <Route path={"/editjog/:id/:distance/:time/:date"} render={() => <EditAndAddJog/>}/>
                <Route path={"/addjog"} render={() => <EditAndAddJog/>}/>
                <Route path={"/contacts"} render={() => <Contacts/>}/>
                <Route path={"/empty"} render={() => <EmptyPage/>}/>
                <Redirect from={"*"} to={"/empty"}/>
            </Switch>
        </div>
    )
}

export default App
