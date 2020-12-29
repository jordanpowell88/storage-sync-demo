import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { COUNTERS_KEY, reducer } from "./counters.reducer";

@NgModule({
  imports: [StoreModule.forFeature(COUNTERS_KEY, reducer)]
})
export class CountersStoreModule {}
