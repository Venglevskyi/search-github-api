import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR } from './actionType';
import { StateType, UnionActionType } from './type';

const initialState: StateType = {
    repositories: [],
    loading: false,
    error: null
};

const searchReducer = (
    state = initialState,
    action: UnionActionType
): StateType => {
    switch (action.type) {
        case FETCH_REQUEST:
            return { loading: true, error: null, repositories: [] };
        case FETCH_SUCCESS:
            return {
                loading: false,
                error: null,
                repositories: action.payload
            };
        case FETCH_ERROR:
            return {
                loading: false,
                error: action.payload,
                repositories: []
            };
        default:
            return state;
    }
};

export { searchReducer };
