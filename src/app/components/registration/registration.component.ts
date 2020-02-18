import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  isRegisterFirstPage: boolean = true;
  isRegisterSecondPage: boolean = false;
  public loadProgress: number = 0;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadProgress = 10;
    // setInterval(() => {
    //   if (this.loadProgress < 100)
    //     this.loadProgress += 1;
    //   else
    //     clearInterval(this.loadProgress);
    // }, 50);
  }
  onNextRegistrationStep() {
    this.isRegisterFirstPage = false;
    this.isRegisterSecondPage = true;
    this.loadProgress = 20;
  }

  onSearchCar() {
    this.router.navigateByUrl('/search')
  }

}
