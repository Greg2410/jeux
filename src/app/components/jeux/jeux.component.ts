import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service';

@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.component.html',
  styleUrls: ['./jeux.component.css']
})
export class JeuxComponent implements OnInit {

  Jeux:any = [];
  constructor(private crudService: CrudService) { }
  ngOnInit(): void {
    this.crudService.GetJeux().subscribe(res => {
      console.log(res)
      this.Jeux =res;
    });    
  }
  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteJeux(id).subscribe((res) => {
        this.Jeux.splice(i, 1);
      })
    }
  }
}