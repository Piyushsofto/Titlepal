import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { TemplateComponent } from './template/template.component';
import { SearchcarComponent } from './searchcar/searchcar.component';
import { VinCheckComponent } from './vin-check/vin-check.component';
import { ApproveCarComponent } from './approve-car/approve-car.component';
import { VirtualInspectionComponent } from './virtual-inspection/virtual-inspection.component';


const routes: Routes = [
  { path: '', component: RegistrationComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'template', component: TemplateComponent },
  { path: 'search', component: SearchcarComponent },
  { path: 'vin', component: VinCheckComponent },
  { path: 'approve', component: ApproveCarComponent },
  { path: 'inspection', component: VirtualInspectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
