import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { HeaderNavbarComponent } from './components/header-navbar/header-navbar.component';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    WrapperComponent,
    HeaderNavbarComponent,
    PrimaryButtonComponent,
    FooterComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    WrapperComponent,
    PrimaryButtonComponent,
  ],
})
export class SharedModule {}
