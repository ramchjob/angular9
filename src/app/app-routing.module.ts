import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { OrdersModule } from './orders/orders.module';
import { CustomersModule } from './customers/customers.module';

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
        path: 'orders',
        loadChildren: () => OrdersModule,
    },
    {
        path: 'customers',
        loadChildren: () => CustomersModule,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
