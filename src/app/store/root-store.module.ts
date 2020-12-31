import { NgModule } from "@angular/core";
import {
  Action,
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
  StoreModule
} from "@ngrx/store";
import { localStorageSync } from "ngrx-store-localstorage";
import { CountersStoreModule } from "./counters-store/counters-store.module";
import {
  COUNTERS_KEY,
  reducer as countersReducer
} from "./counters-store/counters.reducer";
import { RootState } from "./root-state";
import merge from "lodash.merge";
const INIT_ACTION = "@ngrx/store/init";
const UPDATE_ACTION = "@ngrx/store/update-reducers";

const reducers: ActionReducerMap<RootState> = {
  [COUNTERS_KEY]: countersReducer
};

const mergeReducer = (
  state: RootState,
  rehydratedState: RootState,
  action: Action
) => {
  if (
    (action.type === INIT_ACTION || action.type === UPDATE_ACTION) &&
    rehydratedState
  ) {
    state = merge(state, rehydratedState);
  }

  return state;
};

function localStorageSyncReducer(
  reducer: ActionReducer<RootState>
): ActionReducer<RootState> {
  return localStorageSync({
    keys: [{ [COUNTERS_KEY]: ["count"] }],
    rehydrate: true,
    mergeReducer
  })(reducer);
}

const metaReducers: Array<MetaReducer<RootState, any>> = [
  localStorageSyncReducer
];

@NgModule({
  imports: [
    CountersStoreModule,
    StoreModule.forRoot(reducers, { metaReducers })
  ]
})
export class RootStoreModule {}
