import { Injectable, Inject  } from '@angular/core';
import { DOCUMENT } from '@angular/common';
 
@Injectable()
export class SettingsService {

  element: HTMLElement;

  ajustes:Ajustes={
    temaUrl:'main-header navbar navbar-expand navbar-dark text-sm navbar-info',
    tema:'info'
  }

  constructor(@Inject(DOCUMENT) private _document) { 

    this.cargarAjustes()
  }

  guardarAjustes(){
   // console.log('guardado en localstorahe');
    localStorage.setItem('ajustes',JSON.stringify(this.ajustes))
  }

  cargarAjustes(){
    if(localStorage.getItem('ajustes')){
      this.ajustes= JSON.parse(localStorage.getItem('ajustes'))
      //console.log('cargando del Localstorage');

      this.aplicarTema(this.ajustes.tema)
    }else{
      //console.log('usando valores por defecto');
    }
  }

  aplicarTema(tema:string){
//console.log(tema);
let selectores:any=document.getElementsByClassName('selector')
//console.log(selectores);
    /*let clase=`main-header navbar navbar-expand text-sm ${tema}`
    this._document.getElementById('tema').setAttribute('class',clase)

    this._ajustes.ajustes.tema=tema;
    this._ajustes.ajustes.temaUrl=clase

    this._ajustes.guardarAjustes();*/
  }

}

interface Ajustes{
  temaUrl:string;
  tema:string
}
