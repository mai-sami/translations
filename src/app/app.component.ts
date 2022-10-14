import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  languages=[
    {code:'en', dir:'ltr',name:"english"},
    {code:'ar', dir:'rtl',name:"arabic"}
  ]
  currentLanguageCode='en'
   lang:any={}
  constructor(private translate: TranslateService) {
   }
  ngOnInit(): void {
    this.onLanguageSelected(this.currentLanguageCode)
   }
  onLanguageSelected(langCode:any){
     this.currentLanguageCode=langCode
    this.lang=this.languages.find(l=>l.code==this.currentLanguageCode)
    this.translate.setDefaultLang(this.lang.code)
    this.translate.use(this.lang.code)
  }
}
