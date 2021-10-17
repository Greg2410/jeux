import { Component, OnInit } from '@angular/core';
import { Jeux } from 'src/app/service/jeux';
import { CrudService } from './../../service/crud.service';

@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.component.html',
  styleUrls: ['./jeux.component.css']
})
export class JeuxComponent implements OnInit {

  jeux?: Jeux[];
  currentJeux: Jeux = {};
  currentIndex = -1;
  title = '';

  constructor(private CrudService: CrudService) { }

  ngOnInit(): void {
    this.retrieveGames();
  }

  retrieveGames(): void {
    this.CrudService.GetJeux()
      .subscribe(
        data => {
          this.jeux = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  // Delete action
  deleteJeux(id:number){
    this.CrudService.deleteJeux(id)
    .subscribe(
      response => {
        this.retrieveGames();
      },
      error => {
        console.log(error);
      });
  }

}