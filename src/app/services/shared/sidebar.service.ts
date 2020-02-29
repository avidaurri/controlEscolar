import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

menu:any=[
  {
    titulo:'Principal',
    icono:'nav-icon far fa-clock',
    submenu:[
      {
        titulo:'Dashboard', url:'/dashboard'
      },
      {
        titulo:'ProgresBar', url:'/progress'
      },
      {
        titulo:'Gráficas', url:'/graficas1'
      }
    ]

  }
]


  constructor() { }
}
