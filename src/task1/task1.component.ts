import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { fromEvent, Subject, takeUntil } from "rxjs";

@Component({
  selector: "app-task1-component",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "task1.component.html",
  styleUrl: "task1.component.scss",
  changeDetection: ChangeDetectionStrategy.Default,
})
export class Task1Component implements OnChanges {
  private _destroyed$ = new Subject<void>();
  counter = 0;

  incrementOnClick$ = fromEvent(document, "click");

  ngOnChanges(changes: SimpleChanges): void {
    // Will it be ever triggered? In this particular case, no input properties are defined
    console.log(`On Changes: ${Object.keys(changes).join(",")}`);
  }

  ngOnInit(): void {
    // Will it be ever triggered? component does not implement OnInit
    console.log("On Init");

    this.incrementOnClick$.pipe(takeUntil(this._destroyed$)).subscribe(() => {
      // Is this value captured in the browser {{ counter }} binding? And why?
      this.counter++;
      console.log(`Counter: ${this.counter}`);
    });
  }

  ngOnDestroy(): void {
    // Will it ever be triggered? component does not implement OnDestroy
    this._destroyed$.next();
    this._destroyed$.complete();
    console.log("On Destroy");
  }
}
