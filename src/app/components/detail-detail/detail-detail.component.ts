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

  currentJeux: Jeux = {
    titre: '',
    description: '',
    image: '', 
    categorie: ''
  };
  message = '';

  constructor(
    private CrudService: CrudService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getTutorial(this.route.snapshot.params.id);
  }

  getTutorial(id: string): void {
    this.CrudService.GetJeu(id)
      .subscribe(
        data => {
          this.currentJeux = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateJeux(): void {
    this.message = '';

    this.CrudService.updateJeux(this.currentJeux._id, this.currentJeux)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This Game was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteJeux(): void {
    this.CrudService.deleteJeux(this.currentJeux._id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/game']);
        },
        error => {
          console.log(error);
        });
  }
}