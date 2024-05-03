import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProdutoModule } from './components/card-produto/card-produto.module';
import { CardProdutoComponent } from './components/card-produto/card-produto.component';

@NgModule({
  declarations: [
    CardProdutoComponent
  ],

  imports: [
    CommonModule,
    CardProdutoModule
  ],

  exports: [
    CardProdutoComponent
  ]
})
export class SharedModule {}
