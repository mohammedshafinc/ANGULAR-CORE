import { Component } from "@angular/core";

@Component({
    selector :"app-parent",
    templateUrl :"./parent.componet.html"
})

export class ParentComponent{
    childDatapass :string = "";
    Ename:string = "hello from parent"
    eobj={
        name : "shafin",
        age : 12,
        salary :95000,
        designation :"mean stack devoloper"

    } 

    recieveddata(event :string){
        console.log(event);
        
        this.childDatapass = event

    }

}