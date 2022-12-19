import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CommonLayoutComponent } from './layout/common-layout/common-layout.component';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { CommonLayout_ROUTES } from './layout/routes/common-layout.routes';
import { FullLayout_ROUTES } from './layout/routes/full-layout.routes';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/authentication/login',
    pathMatch: 'full',
},
{ 
    path: '', 
    component: CommonLayoutComponent,
    children: CommonLayout_ROUTES 
},
{ 
    path: '', 
    component: FullLayoutComponent, 
    children: FullLayout_ROUTES
},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { 
        preloadingStrategy: PreloadAllModules,
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled' 
    })
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
