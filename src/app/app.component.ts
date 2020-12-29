import { Component, VERSION } from "@angular/core";
import { Store } from "@ngrx/store";
import { decrement, increment } from "./store/counters-store/counters.actions";
import { selectCount } from "./store/counters-store/counters.selectors";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  count$ = this.store.select(selectCount);

  constructor(private readonly store: Store) {}

  increment(): void {
    this.store.dispatch(increment());
  }

  decrement(): void {
    this.store.dispatch(decrement());
  }
}
