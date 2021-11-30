import {ActionTypes} from "../constants/action-types";

const initialState = {
    quizList: [],
};

const initialStateItem = {
    quizItem: []
};

export const quizReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_QUIZ:
            return {...initialState, quizList: payload};
        case ActionTypes.SET_QUIZ_ITEM:
            return {...initialState, quizItem: payload}
        default:
            return state;
    }
};

export const quizItemReducer = (state = initialStateItem, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_QUIZ_ITEM:
            return {...initialStateItem, quizItem: payload}
        default:
            return state;
    }
};
