import { Component } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {
  articles:Array<any> = [];

  constructor(){
    this.articles = [
      {
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftreasuredcars.com%2Fpublic%2Fuploads%2F2020%2F11%2F14%2Falvis_alvis_speed_20_sa_tourer-1933-20201114214917-2.jpg&f=1&nofb=1&ipt=1522bf08e6ef3f824e809a3ed1c343d436c04e907718d9b4bd18a1b146e5204d&ipo=images',
        title: '1988 - El carrito de tu abuela',
        price: '3,000,000.00 RD$',
        state: 'Como fefita',
        type: 'Gasolina'
      },
      {
        img: 'https://www.idominicanas.com/wp-content/uploads/2020/01/bandera-dominicana-usada-como-lona-en-guagua-platanera.jpg',
        title: '2021 - La guagua platanera xd',
        price: '12,000.00 RD$',
        state: 'Aguanta ma que tu',
        type: 'Gasolina'
      }
    ]
  }
}
