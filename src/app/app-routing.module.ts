import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagamentoCartaoComponent } from './pages/pagamento-cartao/pagamento-cartao.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/pagamento-cartao',
    pathMatch: 'full'
  },
  {
    path: 'pagamento-cartao',
    component: PagamentoCartaoComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
