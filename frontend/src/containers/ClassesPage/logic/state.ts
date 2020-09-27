export interface ClassState {
    classes: WebApi.Entity.Class[];
    classesLoaded: boolean;
    recentlyCreatedClass: null | WebApi.Entity.Class;
}

export const initialState: ClassState = {
    classes: [],
    classesLoaded: false,
    recentlyCreatedClass: null,
};
