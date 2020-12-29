import {
  CountersState,
  countersInitialState,
  COUNTERS_KEY
} from "./counters-store";

export interface RootState {
  [COUNTERS_KEY]: CountersState;
}

export const initialState: RootState = {
  [COUNTERS_KEY]: countersInitialState
};
