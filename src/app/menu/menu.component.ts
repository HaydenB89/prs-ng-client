import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    new Menu("Home", "/home"),
    new Menu("Product", "/product/list"),
    new Menu("User", "/user/list"),
    new Menu("Vendor", "/vendor/list"),
    new Menu("Request", "/request/list"),
    new Menu("Request Line", "/requestline/list"),
    new Menu("About", "/about")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
