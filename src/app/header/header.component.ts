import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  item1 = "Keyboard x 1";
  item2 = "Mouse x 1";
  item3 = "Monitor x 1";
  item4 = "Speaker x 1";
  price1 = 3250;
  price2 = 840;
  price3 = 13750;
  price4 = 5200;

  totalPrice = (): number => {
    return this.price1 + this.price2 +
      this.price3 + this.price4
  }
}
