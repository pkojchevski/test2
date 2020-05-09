import * as actionTypes from "./actionTypes";


export const addQuestion = question => ({
    type: actionTypes.ADD_QUESTION,
    question
});

export const addAnswer = answer => ({
    type: actionTypes.ADD_QUESTION,
    answer
});