import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnaticsComponent } from './pages/analitics/analitics.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { OneAnaticsPageComponent } from './pages/one-analitic-page/one-analitic-page.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: LayoutComponent,
  //   children: [
  //     {
  //       path: 'analitics',
  //       component: AnaticsComponent,
  //     },
  //     {
  //       path: 'analitics/project',
  //       component: OneAnaticsPageComponent,
  //     },
  //   ],
  // },
  {
    path: 'analitics',
    component: AnaticsComponent,
  },
  {
    path: 'analitics/project',
    component: OneAnaticsPageComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
    // redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
