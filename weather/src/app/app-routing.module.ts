import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'forecast',
        loadChildren: () => import('./forecast/forecast.module').then(m => m.ForecastModule)
      },
      {
        path: 'current',
        loadChildren: () => import('./current/current.module').then(m => m.CurrentModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'current'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
