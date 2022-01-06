import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { startsWith } from './router.utils';
import { WrapperComponent } from './wrapper/wrapper.component';
import { HomeModule} from './home/home.module'

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    HomeModule,
    RouterModule.forRoot([
    { path: '', component: HomeComponent, pathMatch: 'full' , children: [
      { matcher: startsWith('mfe1'), component: WrapperComponent, data: { importName: 'mfe1', elementName: 'mfe1-element' } }] },
    { matcher: startsWith('angular1'), component: WrapperComponent, data: { importName: 'mfe1', elementName: 'mfe1-element' } },
    { matcher: startsWith('angular2'), component: WrapperComponent, data: { importName: 'mfe2', elementName: 'mfe2-element' } },
    { matcher: startsWith('mfe3'), component: WrapperComponent, data: { importName: 'mfe3', elementName: 'mfe3-element' } },
    { matcher: startsWith('react1'), component: WrapperComponent, data: { importName: 'mfe4', elementName: 'mfe4-element' } },
    { matcher: startsWith('react2'), component: WrapperComponent, data: { importName: 'nav', elementName: 'nav-element' } },
    { matcher: startsWith('shell'), component: WrapperComponent, data: { importName: 'shell', elementName: 'shell-element' } },
], { relativeLinkResolution: 'legacy' })
  ],
  declarations: [
    AppComponent,
    WrapperComponent
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
