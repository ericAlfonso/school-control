import { Component } from '@angular/core';

@Component({
    selector: 'app-selection',
    templateUrl: './selection.component.html'
})

export class SelectionComponent {
    constructor() {}

  isLaboratoryTaken:boolean;

  takeLaboratory(){
   this.isLaboratoryTaken = true; 
  }

  leaveLaboratory(){
    this.isLaboratoryTaken = false;
  }
}
