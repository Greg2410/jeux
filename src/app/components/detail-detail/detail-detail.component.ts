import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Jeux } from 'src/app/service/jeux';

@Component({
  selector: 'app-detail-detail',
  templateUrl: './detail-detail.component.html',
  styleUrls: ['./detail-detail.component.css']
})
export class DetailDetailComponent implements OnInit {

  id: any = this.route.snapshot.paramMap.get('id');
  jeux: any = {};

  constructor(
    private CrudService: CrudService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.CrudService.GetJeu(this.id).subscribe((data: {}) => {
      this.jeux = data;
    });
  }

  updateJeu(): void {
    this.CrudService.updateJeux(this.id, this.jeux).subscribe((data: {}) => {
      this.router.navigate(['/detail/' + this.id]);
    })
  }

  deleteJeu(): void {
    this.CrudService.deleteJeux(this.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/jeux']);
        },
        error => {
          console.log(error);
        });
  }

}