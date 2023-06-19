import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pet/list.component';
import { DetailComponent } from './pet/detail.component';
import { CreateComponent } from './pet/create.component';
import { UpdateComponent } from './pet/update.component';
import { LoginComponent } from './auth/login.component';
import { RegisterComponent } from './auth/register.component';
import { PetGuard } from './guards/pet.guard';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'detail/:id', component: DetailComponent, canActivate: [PetGuard], data: { expectedRoles: ['admin', 'user'] } },
  { path: 'create', component: CreateComponent, canActivate: [PetGuard], data: { expectedRoles: ['admin'] } },
  { path: 'update', component: UpdateComponent, canActivate: [PetGuard], data: { expectedRoles: ['admin'] } },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
