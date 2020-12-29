import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CountersState } from "./counters-state";
import { COUNTERS_KEY } from "./counters.reducer";

const countsFeatureState = createFeatureSelector<Partial<CountersState>>(
  COUNTERS_KEY
);

export const selectCount = createSelector(
  countsFeatureState,
  state => state.count
);
