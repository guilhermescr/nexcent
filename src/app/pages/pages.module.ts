import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { FirstSectionComponent } from './home/components/first-section/first-section.component';
import { OurClientsComponent } from './home/components/our-clients/our-clients.component';
import { CommunityComponent } from './home/components/community/community.component';
import { GetDemoComponent } from './home/components/get-demo/get-demo.component';
import { NexcentBlogComponent } from './home/components/nexcent-blog/nexcent-blog.component';
import { UnseenAtNexcentComponent } from './home/components/unseen-at-nexcent/unseen-at-nexcent.component';
import { AchievementsComponent } from './home/components/achievements/achievements.component';
import { CustomersComponent } from './home/components/customers/customers.component';
import { HowToComponent } from './home/components/how-to/how-to.component';

@NgModule({
  declarations: [HomeComponent, FirstSectionComponent, OurClientsComponent, CommunityComponent, GetDemoComponent, NexcentBlogComponent, UnseenAtNexcentComponent, AchievementsComponent, CustomersComponent, HowToComponent],
  imports: [CommonModule, SharedModule],
  exports: [HomeComponent],
})
export class PagesModule {}
