import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { AuthActivate } from './core/guards/auth.activate';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },

  {
    path: 'all-listings',
    component: CatalogComponent,
  },

  {
    path: 'details',
    children: [
      {
        path: ':carId',
        component: DetailsComponent,
      },
    ],
  },

  {
    path: 'create',
    component: CreateComponent,
    canActivate: [AuthActivate],
    data: {
      authenticationRequired: true,
      authenticationFailureRedirectUrl: '/login',
    },
  },

  {
    path: 'edit',
    children: [
      {
        path: ':carId',
        component: EditComponent,
        canActivate: [AuthActivate],
        data: {
          authenticationRequired: true,
          authenticationFailureRedirectUrl: '/login',
        },
      },
    ],
  },

  {
    path: 'search',
    component: SearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
