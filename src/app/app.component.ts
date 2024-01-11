import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anglearn';
  inputText:string = ""
  destroy :boolean = true

  onSubmit(inputEl:HTMLInputElement){
    this.inputText = inputEl.value
    console.log(this.inputText);
  }
  destroybutton(){
    this.destroy = false
  }
}
