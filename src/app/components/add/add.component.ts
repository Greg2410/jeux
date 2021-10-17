import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { Jeux } from 'src/app/service/jeux';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  jeux: Jeux = {
    Titre: '',
    Description: '',
    Image: '',
    Categories: ''
  };
  submitted = false;

  constructor(private CrudService: CrudService) { }

  ngOnInit(): void {
  }

  addJeux(): void {
    const data = {
      titre: this.jeux.Titre,
      description: this.jeux.Description,
      image: this.jeux.Image,
      categorie: this.jeux.Categories
    };
    if (!data.titre) {
      alert('Please add title!');
      return;
    }

    this.CrudService.AddJeux(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  // Reset on adding new
  newGame(): void {
    this.submitted = false;
    this.jeux = {
      Titre: '',
      Description: '',
      Image: '',
      Categories: ''
    };
  }

}