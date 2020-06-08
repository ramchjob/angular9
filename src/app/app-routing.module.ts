import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileModule } from './profile/profile.module';
import { OrdersModule } from './orders/orders.module';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'profile',
        loadChildren: () => ProfileModule,
    },
    {
        path: 'orders',
        loadChildren: () => OrdersModule,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
