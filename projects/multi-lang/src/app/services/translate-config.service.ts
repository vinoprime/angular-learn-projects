import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateConfigService {

  constructor(private _trans: TranslateService) {
    this._trans.use("ta");
  }


  changeLanguage(type:string){
    this._trans.use(type);

  }
}
