import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'componet-routing';

  private visiblity:boolean = false;

  changeVisiblity(){
    this.visiblity = !this.visiblity;
  }

  checkVisiblity(){
    return this.visiblity;
  }
}
