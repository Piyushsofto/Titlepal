import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-searchcar',
  templateUrl: './searchcar.component.html',
  styleUrls: ['./searchcar.component.scss'],
})
export class SearchcarComponent implements OnInit {

  isTag: boolean = true;
  isCarResponse: boolean = false;
  public loadProgress: number;
  searchCarForm: FormGroup;

  constructor(private search: SearchService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {
    this.searchCarForm = this.fb.group({
      reg: [''],
      state: ['']
    })
    this.loadProgress = 30;
  }

  onSearchVehicle() {
    console.log(this.searchCarForm.value)
    let x = 'gounze';
    this.search.getSearchCar(this.searchCarForm.get('reg').value, this.searchCarForm.get('state').value, x).subscribe(
      (result: any) => {
        console.log(result)
      }
    )
    this.isTag = false;
    this.isCarResponse = true;
    this.loadProgress = 40;
  }

  carApprove() {
    this.router.navigateByUrl('/vin')
  }

}
