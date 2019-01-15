import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   modal = document.getElementById('myModal');
  btn = document.getElementById('myBtn');
  span = document.getElementsByClassName('close')[0];
   modalListen() {
     // alert('solved');
     // console.log('kkkkkkkkkkkkkkkkkkkkk');
     // this.modal.style.display = 'block';

  }

}
