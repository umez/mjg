import { Component, OnInit } from '@angular/core';
import { Menu } from '../modal/inteface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent  {

  menus: Menu[] = [{menu: 'Home', url: '/'}, {menu: 'Blog', url: 'blog'}, {menu: 'Contact us', url: 'contact'}];

  login() {}

}
