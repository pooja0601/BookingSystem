import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: '', component: HomeComponent,
}, {
  path: 'test', component: TestComponent
},
{
  path: 'location', component: AutoCompleteComponent
}];


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// export const AppRoutingModule =  RouterModule.forRoot(routes);
