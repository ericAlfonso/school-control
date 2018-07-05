export const Routes = [{
    path: '', redirectTo: 'app-login', pathMatch: 'full'
}, {
    path: 'app-login', loadChildren: './components/login/login.module#LoginModule'
}];
