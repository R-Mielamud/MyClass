export const LOAD_CLASSES = 'CLASS:LOAD';
export const LOAD_CLASSES_SUCCESS = 'CLASS:LOAD:SUCCESS';
export const CREATE_CLASS = 'CLASS:CREATE';
export const CREATE_CLASS_SUCCESS = 'CLASS:CREATE:SUCCESS';
export const RESET_RECENTLY_CREATED = 'CLASS:CREATE:RECENT:RESET';
export const JOIN_CLASS = 'CLASS:JOIN';
export const JOIN_CLASS_SUCCESS = 'CLASS:JOIN:SUCCESS';

export interface LoadClassesSuccess {
    classes: WebApi.Entity.Class[];
}

export interface CreateClass {
    name: string;
    description?: string;
}

export interface CreateClassSuccess {
    class: WebApi.Entity.Class;
}

export interface JoinClass {
    join_key: string;
}

export interface JoinClassSuccess {
    class: WebApi.Entity.Class;
}
