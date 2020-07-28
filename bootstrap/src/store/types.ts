export enum TestTypes {
    CREATE_ITEM = 'CREATE_ITEM',
    DELETE_ITEM = 'DELETE_ITEM',
    BATCH_ADD_ITEMS = 'BATCH_ADD_ITEMS'
};

export interface ITestItem {
    id: number;
    description: string;
};

export interface ITestState {
    items: ITestItem[];
    movies: any[];
};

export enum ActionTypes {
    MOVIE_REQUEST = 'MOVIE_REQUEST',
    MOVIE_RESPONSE = 'MOVIE_RESPONSE'
};
