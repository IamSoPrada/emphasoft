import React from 'react'
import { Route, Switch } from "react-router-dom"

import { HomePage, Login, SignUp } from "../Pages/"
import ProtectedRoute from "../components/ProtectedRoute"
import UserListTable from "../components/UserList"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import "./App.css"

const App = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/login"
                    component={Login}
                    exact />
                <ProtectedRoute path="/"
                    component={HomePage}
                    exact
                />
                <Route path="/users"
                    component={UserListTable}
                    exact
                />
                <Route path="/signup"
                    component={SignUp}
                />
            </Switch>
            <Footer />
        </>
    )
}
export default App;