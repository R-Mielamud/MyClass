import { AnyAction } from 'redux';

interface IEmptyActionFn {
    (): AnyAction;
}

interface IActionFn<IArgs> {
    (args: IArgs): AnyAction & IArgs;
}

export default function createAction(type: string): IEmptyActionFn;
export default function createAction<IArgs>(type: string): IActionFn<IArgs>;
export default function createAction<IArgs>(type: string) {
    return (args?: IArgs): AnyAction & IArgs => {
        return Object.assign({ type }, args);
    };
}
