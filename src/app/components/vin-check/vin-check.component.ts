import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vin-check',
  templateUrl: './vin-check.component.html',
  styleUrls: ['./vin-check.component.scss'],
})
export class VinCheckComponent implements OnInit {
  public loadProgress: number;
  isLicense: boolean = true;
  isCheckLicense: boolean = false;
  isApprove: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadProgress = 60;
  }

  onLicenseCheck() {
    this.isLicense = false;
    this.isCheckLicense = true;
  }

  onCallSupport() {
    this.isLicense = false;
    this.isCheckLicense = false;
    this.isApprove = true;

  }
  onGetFunded() {
    this.router.navigateByUrl('/inspection')
  }

}
