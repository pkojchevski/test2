export const addQuestionUtil = (quiz, question) => {
    console.log('quiz:', quiz)
    console.log('question', question)
    return [...quiz, question];
};


export const addAnswerUtil = (quiz, answer) => {
    const question = quiz.find(
        question => question.qId === answer.qId
    );
    return [...quiz, { ...question, correct: answer.correct }];
};


