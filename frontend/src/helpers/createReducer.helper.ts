import { Reducer } from 'redux';

interface IHandlers<IState> {
    [type: string]: (state: IState, action: any) => IState;
}

export default function createReducer<IState>(initialState: IState, handlers: IHandlers<IState>): Reducer {
    return (state: IState = initialState, action: any) => {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        } else {
            return state;
        }
    };
}
