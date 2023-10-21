import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

	@Input()
	gameCover:string = ""
	@Input()
	gameLabel:string=""
	@Input()
	gameType:string ="XPTO | PS4"
	@Output() outputGeneration = new EventEmitter<string>()
	@Input()
	gamePrice:string = "R$ 399,90"

	passGeneration(){
		this.outputGeneration.emit(this.gameType)
	}

  constructor() { 

  }

  ngOnInit(): void {
	this.passGeneration()
  }

}
