import {ActionTypes} from "../constants/action-types";

export const setQuizList = (data) => {
    return {
        type: ActionTypes.SET_QUIZ,
        payload: data,
    };
};

export const setQuizItem = (data) => {
    return {
        type: ActionTypes.SET_QUIZ_ITEM,
        payload: data,
    };
};
