import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { HeaderNavbarComponent } from './components/header-navbar/header-navbar.component';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { FooterComponent } from './components/footer/footer.component';
import { TertiaryButtonComponent } from './components/tertiary-button/tertiary-button.component';

@NgModule({
  declarations: [
    HeaderComponent,
    WrapperComponent,
    HeaderNavbarComponent,
    PrimaryButtonComponent,
    FooterComponent,
    TertiaryButtonComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    WrapperComponent,
    PrimaryButtonComponent,
    TertiaryButtonComponent,
  ],
})
export class SharedModule {}
