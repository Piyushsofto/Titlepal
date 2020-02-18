import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from './registration/registration.component';
import { TemplateComponent } from './template/template.component';
import { IonicModule } from '@ionic/angular';
import { SearchcarComponent } from './searchcar/searchcar.component';
import { VinCheckComponent } from './vin-check/vin-check.component';
import { ApproveCarComponent } from './approve-car/approve-car.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VirtualInspectionComponent } from './virtual-inspection/virtual-inspection.component';
import { Camera } from '@ionic-native/camera/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { MediaCapture } from '@ionic-native/media-capture/ngx';
import { Media } from '@ionic-native/media/ngx';
import { File } from "@ionic-native/file/ngx";


@NgModule({
  declarations: [HeaderComponent,
    RegistrationComponent,
    TemplateComponent,
    SearchcarComponent,
    VinCheckComponent,
    ApproveCarComponent,
    ProgressBarComponent,
    VirtualInspectionComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    IonicModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  exports: [
    HeaderComponent,
    RegistrationComponent,
    TemplateComponent
  ],
  providers: [
    Camera,
    SplashScreen,
    MediaCapture,
    Media,
    File
  ]
})
export class ComponentsModule { }
