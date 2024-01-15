import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anglearn';
  data :any [] = []
  inputText:string = ""
  destroy :boolean = true

  onSubmit(inputEl:HTMLInputElement){
    this.inputText = inputEl.value
    console.log(this.inputText);
  }
  destroybutton(){
    this.destroy = false
  }

  //Create Observables

 myObservable = new Observable((observer)=>{
      setTimeout(()=>{observer.next(1)},1000)
      setTimeout(()=>{observer.next(2)},2000)
      setTimeout(()=>{observer.next(3)},3000)
      setTimeout(()=>{observer.error(new Error('something went wrong please try again'))},3000)
      setTimeout(()=>{observer.next(4)},4000)
      setTimeout(()=>{observer.next(5)},5000)
      
 })

 getData(){

  //observer
  //next ,error,completezx
  this.myObservable.subscribe((val:any)=>{
    this.data.push(val)
    console.log(val);
    
  },(err)=>{
    alert(err.message)
  })
 }
}
