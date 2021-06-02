import { Dispatch } from 'redux';
import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR } from './actionType';
import { UnionActionType } from './type';
import { getRepoByQuery } from '../api';

export const fetchRepo = (query: string) => {
    return async (dispatch: Dispatch<UnionActionType>) => {
        try {
            dispatch({ type: FETCH_REQUEST });
            const response = await getRepoByQuery(query);
            dispatch({ type: FETCH_SUCCESS, payload: response });
        } catch (e) {
            dispatch({ type: FETCH_ERROR, payload: 'Request error' });
        }
    };
};
