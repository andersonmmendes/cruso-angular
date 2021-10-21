import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  incrementa() {
    this.valor += 1;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa() {
    this.valor -= 1;
    this.mudouValor.emit({novoValor: this.valor});
  }

  

  constructor() { }

  ngOnInit(): void {
  }

}
