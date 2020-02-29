import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from 'src/app/services/service.index';
//import { DOCUMENT } from '@angular/platform-browser';
@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document, public _ajustes:SettingsService) { }

  ngOnInit() {
  }

  cambiarColor(tema:string, link:any){

    //this.aplicarCheck(link)
    //this._document.getElementById('tema').setAttribute('href',)

    this._ajustes.aplicarTema(tema)

    let clase=`main-header navbar navbar-expand text-sm ${tema}`
    this._document.getElementById('tema').setAttribute('class',clase)

    this._ajustes.ajustes.tema=tema;
    this._ajustes.ajustes.temaUrl=clase

    this._ajustes.guardarAjustes();

  }

  // aplicarCheck(link:any){

  //   let selectores:any=document.getElementsByClassName('selector')

  //   for(let ref of selectores){
  //     ref.classList.remove('working')
  //   }

  //   link.classList.add('working')

  // }

}
