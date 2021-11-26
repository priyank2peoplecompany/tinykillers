import {ActionTypes} from "../constants/action-types";

const initialState = {
    quizList: [],
};

export const quizReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_QUIZ:
            return {...state, quizList: payload};
        default:
            return state;
    }
};