// obs.component.ts
import { Component, OnInit } from '@angular/core';
import { fromEvent, takeUntil, interval, map, reduce } from 'rxjs';

@Component({
  selector: 'app-obs',
  template: `
    <div>
      <h2>Clicks in Five Seconds:</h2>
      <p>Count: {{ countValue }}</p>
    </div>
  `,
})
export class ObsComponent implements OnInit {
  countValue: number = 0;

  ngOnInit() {
    const clicksInFiveSeconds = fromEvent(document, 'click').pipe(
      takeUntil(interval(5000))
    );

    const ones = clicksInFiveSeconds.pipe(map(() => 1));
    const seed = 0;
    const count = ones.pipe(reduce((acc, one) => acc + one, seed));

    count.subscribe((x) => (this.countValue = x));
  }
}
