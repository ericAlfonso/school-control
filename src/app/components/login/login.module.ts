import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {RouterModule} from '@angular/router';
import { SelectionComponent } from '../selection/selection.component';
import { SelectionModule } from '../selection/selection.module';

export const routes = [{
        path: '', component: LoginComponent
    }, {
        path: 'selection', component: SelectionComponent
    //     path: 'motorcycles', component: MotorcyclesComponent
    // }, {
    //     path: 'selection', component: SelectionComponent
}];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), SelectionModule],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})



export class LoginModule {
    static routes = routes;
}
