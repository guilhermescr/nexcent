import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { HeaderNavbarComponent } from './components/header-navbar/header-navbar.component';

@NgModule({
  declarations: [HeaderComponent, WrapperComponent, HeaderNavbarComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, WrapperComponent],
})
export class SharedModule {}
