export const addQuestionUtil = (quiz, question) => {

    return [...quiz, question];
};


export const addAnswerUtil = (quiz, answer) => {

    const question = quiz.find(
        question => question.qId === answer.qId
    );
    return [...quiz, { ...question, correct: answer.correct }];
};


