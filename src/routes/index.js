import React from 'react'
import { Route, Switch } from 'react-router-dom';
import AddQuestionsPage from '../pages/AddQuestionsPage';
import QuizPage from '../pages/QuizPage'

const Routes = (props) => {
    return (
        <>
            <Switch>
                <Route
                    path="/"
                    component={(props) => <AddQuestionsPage />}
                    exact={true}
                />
                <Route
                    path="/addteam"
                    component={(props) => <QuizPage />}
                    exact={true}
                />
            </Switch>
        </>
    )

}


export default Routes