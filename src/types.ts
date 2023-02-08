export type Position = {
    m: number;
    n: number;
}

export interface Matrix extends Array<number[]> {
    void: Position
}