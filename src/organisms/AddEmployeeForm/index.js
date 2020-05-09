import React, { useState } from 'react'
import Input from '../../atoms/Input';
import ButtonSimple from '../../atoms/ButtonSimple';

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Row from '@material-ui/core/Row'
import Col from '@material-ui/core/Row'
function AddEmployeeForm() {
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
                <Row>
                    <Input name="name"
                        label="Name"
                        type="text"
                        value={employeeName}
                        onChange={handleChange}
                        required
                    />
                </Row>
                <Row>
                    <Input name="email"
                        label="Email"
                        type="text"
                        value={email}
                        onChange={handleChange}
                        required
                    />
                </Row>
                <Row>
                    <Input name="githubuser"
                        label="Githhub user"
                        type="text"
                        value={githubuser}
                        onChange={handleChange}
                        required
                    />

                </Row>
                <ButtonSimple type="submit" onClick={handleSubmit()}>
                    Add Employee
            </ButtonSimple>
            </form>
        </Grid>
    )
}

export default AddEmployeeForm
