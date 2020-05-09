import * as actionTypes from "../actionTypes";
import { addQuestionUtil, addAnswerUtil } from '../utils'

// quiz = [
//     { qid: 1, q="", a1="", a2="", a3="" }, correct: 'a2'},
// ]
const initialState = {
    quiz: [],

};

const questionReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_QUESTIONS:
            return {
                ...state,
                quiz: addQuestionUtil(state.quiz, action.question)
            };
        default:
            return state;
    }
};

export default questionReducer;