import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ArticleComponent } from './components/article/article.component';
import { ArticlesComponent } from './components/articles/articles.component';


@NgModule({
  declarations: [
    ArticleComponent,
    ArticlesComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    ArticlesComponent,
  ]
})
export class SharedModule { }
