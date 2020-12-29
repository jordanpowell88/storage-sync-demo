import { Action, createReducer, on } from "@ngrx/store";
import { CountersState } from "./counters-state";
import { initialState } from "./counters-state";
import { decrement } from "./counters.actions";
import { increment } from "./counters.actions";

export const COUNTERS_KEY = "counters";

const countersReducer = createReducer(
  initialState,
  on(increment, state => ({
    ...state,
    count: state.count + 1
  })),
  on(decrement, state => ({
    ...state,
    count: state.count - 1
  }))
);

export function reducer(state: CountersState, action: Action): CountersState {
  return countersReducer(state, action);
}
