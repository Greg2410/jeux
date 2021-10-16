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
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
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

  refreshList(): void {
    this.retrieveTutorials();
    this.currentJeux = {};
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: Jeux, index: number): void {
    this.currentJeux = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.CrudService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.currentJeux = {};
    this.currentIndex = -1;

    this.CrudService.findByTitle(this.title)
      .subscribe(
        data => {
          this.jeux = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}