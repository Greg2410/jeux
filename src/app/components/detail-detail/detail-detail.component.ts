import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-detail-detail',
  templateUrl: './detail-detail.component.html',
  styleUrls: ['./detail-detail.component.css']
})
export class DetailDetailComponent implements OnInit {

  getId: any;
  updateForm: FormGroup;
  
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    this.crudService.GetJeu(this.getId).subscribe(res => {
      this.updateForm.setValue({
        titre: res['titre'],
        description: res['description'],
        image: res['image'],
        categorie: res['categorie'],
      });
    });
    this.updateForm = this.formBuilder.group({
      titre: [''],
      description: [''],
      image: [''],
      categorie: [''],
    })
  }
  ngOnInit() { }
  onUpdate(): any {
    this.crudService.updateJeux(this.getId, this.updateForm.value)
    .subscribe(() => {
        console.log('Game updated successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/jeux'))
      }, (err) => {
        console.log(err);
    });
  }
}