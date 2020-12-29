import { NgModule } from "@angular/core";
import {
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

const reducers: ActionReducerMap<RootState> = {
  [COUNTERS_KEY]: countersReducer
};

function localStorageSyncReducer(
  reducer: ActionReducer<RootState>
): ActionReducer<RootState> {
  return localStorageSync({
    keys: [{ [COUNTERS_KEY]: ["count"] }],
    rehydrate: true
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
