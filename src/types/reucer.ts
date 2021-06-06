export interface Action<T, P = unknown> {
    type: T;
    payload?: P | any
}