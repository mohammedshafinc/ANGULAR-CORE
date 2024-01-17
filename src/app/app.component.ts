import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, from, fromEvent, interval, of } from 'rxjs';
import {
  count,
  filter,
  first,
  last,
  map,
  max,
  reduce,
  skip,
  skipLast,
  throttle,
} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'anglearn';
  data: any[] = [];

  array1 = [1, 3, 5, 7, 9];
  array2 = ['A', 'B', 'C', 'D'];
  inputText: string = '';
  destroy: boolean = true;

  onSubmit(inputEl: HTMLInputElement) {
    this.inputText = inputEl.value;
    console.log(this.inputText);
  }
  destroybutton() {
    this.destroy = false;
  }

  @ViewChild('createbtn')
  createbtn!: ElementRef;
  createBtnObs: any;
  //Create Observables

  //  myObservable = new Observable((observer)=>{
  //       setTimeout(()=>{observer.next(1)},1000)
  //       setTimeout(()=>{observer.next(2)},2000)
  //       setTimeout(()=>{observer.next(3)},3000)
  //       setTimeout(()=>{observer.error(new Error('something went wrong please try again'))},3000)
  //       setTimeout(()=>{observer.next(4)},4000)
  //       setTimeout(()=>{observer.next(5)},5000)
  //       setTimeout(()=>{observer.complete()},5000)

  //  })

  // myObservabe = of(this.array1,this.array2)
  // using promise to observable

  // promiseData = new  Promise((res,rej)=>{
  //   res([10,20,30,40,50])

  // })

  // map - we can transform a data emitted by an observable

  myObservable = from([2, 4, 6, 8, 10, 12]);

  // chaining method

  filteredObs = this.myObservable.pipe(
    map((val) => {
      return val * 5;
    }),
    filter((val) => {
      return val % 4 === 0;
    })
    // reduce((acc, curr) => acc + curr)
  );

  // first operator is used to emit the first value of observable
  // skipLast = it is used to skip the elements form the last based on condition if we (2) it skips last 2  values
  // max
  // count

  // fiter - it is used  to filter the data emitted bt a source observable based on a given condition
  // filteredObs = this.transfromObs.pipe(filter((val)=>{
  //   return val % 4 === 0

  // }))

  // if we using rxjs operator we want to use pipe method bcz we can chain operators using this

  // in from we can return onnly one field
  // myObservable = from(this.promiseData)
  myObservables = from(this.array1);

  getData() {
    // this.myObservable.subscribe({
    //   next:(val:any)=>{
    //     this.data.push(val)
    //     console.log(val);

    //   },
    //   error:(err)=>{
    //     alert(err.message)
    //   },
    //   complete:()=>{
    //     alert("observable complete")
    //   }
    // })

    //observer
    //next ,error,completezx
    // this.myObservable.subscribe((val:any)=>{
    //   this.data.push(val)
    //   console.log(val);

    // },(err)=>{
    //   alert(err.message)
    // })

    this.filteredObs.subscribe({
      next: (val: any) => {
        this.data.push(val);
        console.log(val);
        console.log('hello');
      },
      error: (err) => {
        alert(err.message);
      },
      complete: () => {
        console.log('observable completed'); //the complete method is not executed when an error occurs within an Observable.
      },
    });
  }

  //  buttonclicked (){
  //   let count = 0
  //   this.createBtnObs = fromEvent(this.createbtn.nativeElement,'click').subscribe((data)=>{
  //     this.showItem(++count);
  //     console.log(data);

  //   })
  //  }

  ngAfterViewInit() {
    // this.buttonclicked();
  }

  //  showItem(val:any){
  //   let div = document.createElement('div')
  //   div.innerText = 'Item'+ val
  //   div.className = 'datalist'
  //   document.getElementById("container")?.appendChild(div)
  //  }
}
