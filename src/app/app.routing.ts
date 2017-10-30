import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { CommunityComponent } from './community/community.component';
import { HousingComponent } from './housing/housing.component';
import { ForSaleComponent } from './for-sale/for-sale.component';
import { ServicesComponent } from './services/services.component';
import { JobsComponent } from './jobs/jobs.component';
import { GigsComponent } from './gigs/gigs.component';
import { ListingComponent } from './listing/listing.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },

  {
    path: 'community',
    component: CommunityComponent
  },

  {
    path: 'housing',
    component: HousingComponent
  },

  {
    path: 'for-sale',
    component: ForSaleComponent
  },

  {
    path: 'services',
    component: ServicesComponent
  },

  {
    path: 'jobs',
    component: JobsComponent
  },

  {
    path: 'gigs',
    component: GigsComponent
  },

  {
    path: 'listing',
    component: ListingComponent
  },

 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
