import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { ClientsComponent } from './clients/clients.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { EInvoiceComponent } from './e-invoice/e-invoice.component';

const routes: Routes = [
	{ path: 'auto', component: AuthComponent },
	{ path: 'clients', component: ClientsComponent},
	{ path: 'suppliers', component: SuppliersComponent},
	{ path: 'e-invoice', component: EInvoiceComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
