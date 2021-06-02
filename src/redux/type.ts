import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR } from './actionType';

export interface StateType {
    repositories: any[];
    loading: boolean;
    error: null | string;
}

export interface ActionType {
    type: string;
    payload: any;
}

interface FetchRepoRequest {
    type: typeof FETCH_REQUEST;
}

interface FetchRepoSuccess {
    type: typeof FETCH_SUCCESS;
    payload: any[];
}

interface FetchRepoError {
    type: typeof FETCH_ERROR;
    payload: string;
}

export type UnionActionType =
    | FetchRepoRequest
    | FetchRepoSuccess
    | FetchRepoError;
