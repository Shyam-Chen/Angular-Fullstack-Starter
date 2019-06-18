import { NgModule } from '@angular/core';
import { Location, APP_BASE_HREF, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { NotFoundModule } from './not-found/not-found.module';
import { NotFoundComponent } from './not-found/not-found.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'hello-world',
    loadChildren: () =>
      import('./shell/hello-world/hello-world.module').then(m => m.HelloWorldModule),
  },
  {
    path: 'sort-filter-list',
    loadChildren: () => import('./shell/guide/pipes/pipes.module').then(m => m.PipesModule),
  },
  {
    path: 'counter',
    loadChildren: () =>
      import('./shell/guide/state-management/state-management.module').then(
        m => m.StateManagementModule,
      ),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    HomeModule,
    NotFoundModule,
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules }),
  ],
  providers: [
    Location,
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
