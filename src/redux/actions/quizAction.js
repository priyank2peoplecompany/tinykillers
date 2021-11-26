import {ActionTypes} from "../constants/action-types";

export const setQuizList = (data) => {
    return {
        type: ActionTypes.SET_QUIZ,
        payload: data,
    };
};