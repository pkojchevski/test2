import * as actionTypes from "../actionTypes";
// import { addQuestionUtil, addAnswerUtil } from '../utils'
const initialState = {
    quiz: []


};

const questionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_QUESTION':
            console.log('question', action)
            console.log('state:', state)
            return {
                ...state,
                // quiz: addQuestionUtil(state.quiz, action.question),
                // quiz: state.quiz.push(action.question)
                quiz: state.quiz.concat(action.question)
            };
        default:
            return state;
    }
};

export default questionReducer;