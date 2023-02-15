export type Name = string

export type Repository = {
    type: string
    url: string
}

export type Position = {
    m: number;
    n: number;
}

export interface Matrix extends Array<number[]> {
    void: Position
}