import React, { useState } from 'react'
import Input from '../../atoms/Input';
import ButtonSimple from '../../atoms/ButtonSimple';

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'


function QuizPage() {
    const [employeeName, setEmployeeName] = useState()
    const [email, setEmail] = useState()
    const [githubuser, setGithubuser] = useState()

    const handleSubmit = () => {
    }

    const handleChange = (e) => {

    }

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <form>

                <Input name="name"
                    label="Name"
                    type="text"
                    value={employeeName}
                    onChange={handleChange}
                    required
                />

                <Input name="email"
                    label="Email"
                    type="text"
                    value={email}
                    onChange={handleChange}
                    required
                />

                <Input name="githubuser"
                    label="Githhub user"
                    type="text"
                    value={githubuser}
                    onChange={handleChange}
                    required
                />


                <ButtonSimple type="submit" onClick={handleSubmit()}>
                    Add Employee
            </ButtonSimple>
            </form>
        </Grid >
    )
}

export default QuizPage
