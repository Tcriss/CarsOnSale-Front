import { Component } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent {
  brands:Array<any> = [];

  constructor(){
    this.brands = [
      {
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flistcarbrands.com%2Fwp-content%2Fuploads%2F2016%2F02%2Fclassic-chevrolet-logo.jpg&f=1&nofb=1&ipt=4d455f21881b42333a37d0285782ab81f5a5bc9cc3adea501bb0ec7023bfe141&ipo=images',
        link: '',
      },
      {
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Fmercedes-benz-9-logo-png-transparent.png&f=1&nofb=1&ipt=2c8565b2e64acd79f6956bd63e7ca979780fa9741f9a7a18f14c17a8452a9268&ipo=images',
        link: '',
      }
    ]
  }
}
