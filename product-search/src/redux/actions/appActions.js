import { SET_LOADING_TRUE, SET_LOADING_FALSE } from "../types/appTypes";

export const setLoadingFalseAction = () => ({ type: SET_LOADING_FALSE });

export const setLoadingTrueAction = () => ({ type: SET_LOADING_TRUE });
