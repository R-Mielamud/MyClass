export const LOAD_CLASSES = 'CLASS:LOAD';
export const LOAD_CLASSES_SUCCESS = 'CLASS:LOAD:SUCCESS';

export interface LoadClassesSuccess {
    classes: WebApi.Entity.Class[];
}
