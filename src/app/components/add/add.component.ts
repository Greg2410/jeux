import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  gameForm: FormGroup;
  
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) { 
    this.gameForm = this.formBuilder.group({
      titre: [''],
      description: [''],
      image:[''],
      categorie:['']
    })
  }
  ngOnInit() { }
  onSubmit(): any {
    this.crudService.AddJeux(this.gameForm.value)
    .subscribe(() => {
        console.log('Game added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/game'))
      }, (err) => {
        console.log(err);
    });
  }
}