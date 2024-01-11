import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";

@Component({
    selector:'app-test',
    templateUrl:'./test.component.html',

})

export class TestComponent implements OnInit,OnChanges ,DoCheck , AfterContentInit , AfterContentChecked, AfterViewInit , AfterViewChecked , OnDestroy{
    title = "shafin"

  @Input()  value:string = "shafin"

  constructor(){
    console.log("constructor called");
    // console.log(this.value);
    
    
  }

ngOnChanges(changes: SimpleChanges): void {
    console.log("ngonchanges called");
    console.log(changes);
    
    
}

  ngOnInit(): void {
      console.log("ngOninit called");
    // console.log(this.value);

      
  }
  ngDoCheck(): void {
      console.log("ngdocheck called");
      
  }

  ngAfterContentInit(): void {
      console.log("ngaftercontentinit called");
      
  }
  ngAfterContentChecked(): void {
      console.log(" content checked is called");
      
  }
  ngAfterViewInit(): void {
      console.log("afterview init called");
      
  }

  ngAfterViewChecked(): void {
    console.log("after view cheked called");
    
  }
  ngOnDestroy(): void {
      console.log("NgOnDestroy is called");
      
  }



  
}