import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})

export class LoginComponent {
    constructor(private router: Router, 
        private route: ActivatedRoute) {}
        
    
    goSelection() {
        this.router.navigate(['../selection'],{relativeTo: this.route})
    }
}
