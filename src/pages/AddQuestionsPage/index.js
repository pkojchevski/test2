import React, { useState } from 'react'

import { connect } from "react-redux";

import ButtonSimple from '../../atoms/ButtonSimple';

import Grid from '@material-ui/core/Grid'
import AddQuestionsForm from '../../organisms/AddQuestionsForm';
import { useHistory } from "react-router-dom";


function AddQuestionsPage() {
    const history = useHistory();
    const goToQuiz = () => {
        let path = `quiz`;
        history.push(path);
    }

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >

            <AddQuestionsForm />


            <Grid style={{ marginTop: '60px' }}>
                <ButtonSimple variant="contained" color="primary" onClick={goToQuiz}>
                    Take Quiz
            </ButtonSimple>
            </Grid>
        </Grid >
    )
}

const mapStateToProps = state => ({
    questions: state.quiz,
});

const mapDispatchToProps = dispatch => ({
    // addQuestion: () => dispatch(actions.addQuestion(token, userId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)(AddQuestionsPage)
