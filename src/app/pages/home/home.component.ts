import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  generation:string = 'teste'

  filterStatusPs3:boolean = true;
  filterStatusPs4:boolean = true;
  filterStatusPs5:boolean = true;

  constructor() { }

  ngOnInit(): void {
    
  }
  receiveGeneration(data: string){
    this.generation = data;
  }
  filterPs3(){
    this.filterStatusPs3 = true;
    this.filterStatusPs4 = false;
    this.filterStatusPs5 = false;
  }

  filterPs4(){
    this.filterStatusPs3 = false;
    this.filterStatusPs4 = true;
    this.filterStatusPs5 = false;
  }

  filterPs5(){
    this.filterStatusPs3 = false;
    this.filterStatusPs4 = false;
    this.filterStatusPs5 = true;
  }

  showAll(){
    this.filterStatusPs3 = true;
    this.filterStatusPs4 = true;
    this.filterStatusPs5 = true;
  }
}
