import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { ModalModule } from "ngx-bootstrap/modal";

import { AppComponent } from "./app.component";
import { NavComponent } from "./component/nav/nav.component";
import { CoverpicComponent } from "./component/coverpic/coverpic.component";
import { HomeIconSectionComponent } from "./component/home-icon-section/home-icon-section.component";
import { HomeHeadingSectionComponent } from './component/home-heading-section/home-heading-section.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { IconBoxesComponent } from './component/icon-boxes/icon-boxes.component';
import { OutWorkComponent } from './component/out-work/out-work.component';
import { OurServicesComponent } from './component/our-services/our-services.component';
import { FaqComponent } from './component/faq/faq.component';
import { TestimonialsComponent } from './component/testimonials/testimonials.component';
import { ContactSectionComponent } from './component/contact-section/contact-section.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CoverpicComponent,
    HomeIconSectionComponent,
    HomeHeadingSectionComponent,
    AboutusComponent,
    IconBoxesComponent,
    OutWorkComponent,
    OurServicesComponent,
    FaqComponent,
    TestimonialsComponent,
    ContactSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
