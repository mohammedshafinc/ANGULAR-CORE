import { Component, Input, OnInit , Output ,EventEmitter } from "@angular/core";

@Component({
    selector :"app-child",
    templateUrl :"./child.component.html"
})

export class ChildComponet implements OnInit{
childData :string = "data from child component"
@Output() childstringData : EventEmitter<string> =  new EventEmitter

   @Input() employename! :string
   @Input() objdetails!:any

   ngOnInit(): void {
       console.log(JSON.stringify(this.objdetails))
   }

   senddata(){
    this.childstringData.emit(this.childData)
    // console.log("hello");
    
   }
}