import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  @Output()  activador = new EventEmitter<any>();

  constructor() { }
}
