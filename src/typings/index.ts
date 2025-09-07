export type PropertyKey = string | number | symbol;

export type AnyObject = Record<PropertyKey, any>;

export type Dispatch<A> = (value: A) => void;

export type StateUpdater<S> = (prevState: S) => S;

export type SetStateAction<S> = S | StateUpdater<S>;
