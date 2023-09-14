import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterContainerComponent } from './footer-container.component';
import { FooterContainerCommunitiesComponent } from './footer-container-communities/footer-container-communities.component';
import { FooterContainerCompanyComponent } from './footer-container-company/footer-container-company.component';
import { FooterContainerUsefullinksComponent } from './footer-container-usefullinks/footer-container-usefullinks.component';
import { FooterContainerSocialmediaComponent } from './footer-container-socialmedia/footer-container-socialmedia.component';



@NgModule({
  declarations: [
    FooterContainerComponent,
    FooterContainerCommunitiesComponent,
    FooterContainerCompanyComponent,
    FooterContainerUsefullinksComponent,
    FooterContainerSocialmediaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterContainerComponent
  ]
})
export class FooterContainerModule { }
