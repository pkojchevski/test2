import React, { useState } from 'react'

import { connect } from "react-redux";
import * as actions from '../../store/actions/actions'


import Input from '../../atoms/Input';
import ButtonSimple from '../../atoms/ButtonSimple';

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import AddQuestionsForm from '../../organisms/AddQuestionsForm';



function AddQuestionsPage() {
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
            <AddQuestionsForm />
        </Grid >
    )
}

const mapStateToProps = state => ({
    questions: state.question.questions,
});

const mapDispatchToProps = dispatch => ({
    // addQuestion: () => dispatch(actions.addQuestion(token, userId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)(AddQuestionsPage)
