import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { FirstSectionComponent } from './home/components/first-section/first-section.component';
import { OurClientsComponent } from './home/components/our-clients/our-clients.component';
import { CommunityComponent } from './home/components/community/community.component';

@NgModule({
  declarations: [HomeComponent, FirstSectionComponent, OurClientsComponent, CommunityComponent],
  imports: [CommonModule, SharedModule],
  exports: [HomeComponent],
})
export class PagesModule {}
