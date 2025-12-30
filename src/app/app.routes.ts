import { Routes } from '@angular/router';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';

export const routes: Routes = [
    {path : '', redirectTo: 'home', pathMatch: 'full'},
    {path : 'home', component : DashboardComponent},
    {path : 'login', component: LoginComponent},
    {path : 'signup', component: SignupComponent},
    {path : '**', component : NotFoundComponent}
];
