import React from 'react'
import { Route, Switch } from 'react-router-dom';
import AddEmployeePage from '../pages/AddEmployeePage';
import AddTeamPage from '../pages/AddTeamPage'

const Routes = (props) => {
    return (
        <>
            <Switch>
                <Route
                    path="/"
                    component={(props) => <AddEmployeePage />}
                    exact={true}
                />
                <Route
                    path="/addteam"
                    component={(props) => <AddTeamPage />}
                    exact={true}
                />
            </Switch>
        </>
    )

}


export default Routes