import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

rutas = [
  {
    name:'Home',
    path: '/Home'
  },
  {
    name:'About',
    path:'/about'
  },
  {
    name:'contact',
    path:'/contact'
  }
]


  constructor() { }

  ngOnInit(): void {
  }

}
