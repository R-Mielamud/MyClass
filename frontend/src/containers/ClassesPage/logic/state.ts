export interface ClassState {
    classes: WebApi.Entity.Class[];
    classesLoaded: boolean;
}

export const initialState: ClassState = {
    classes: [],
    classesLoaded: false,
};
