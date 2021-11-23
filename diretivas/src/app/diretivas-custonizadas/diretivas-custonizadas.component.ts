import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-custonizadas',
  templateUrl: './diretivas-custonizadas.component.html',
  styleUrls: ['./diretivas-custonizadas.component.css']
})
export class DiretivasCustonizadasComponent implements OnInit {

  mostrarCursos: boolean = false;

  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

  
  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }

}
