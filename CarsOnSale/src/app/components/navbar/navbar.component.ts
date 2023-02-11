import { Component, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @ViewChild('navBar') navBar!:ElementRef;
  @ViewChild('navRes') navRes!:ElementRef;
  x = fromEvent(document,'scroll');

  constructor(private renderer:Renderer2){
    this.x.subscribe((res:any) => {
      const scrollTop = res.target.documentElement.scrollTop;
      if(scrollTop >= 100){
        this.renderer.setStyle(this.navBar.nativeElement,'background-color','#191a24df');
        this.renderer.setStyle(this.navRes.nativeElement,'background-color','#191a24df');
      }else{
        this.renderer.setStyle(this.navBar.nativeElement,'background-color','#191a2400');
        this.renderer.setStyle(this.navRes.nativeElement,'background-color','#191a2400');
      }
    })
  }
}
