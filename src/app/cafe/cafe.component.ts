import { Component, OnInit } from '@angular/core';
import { Cafe } from './cafe';
import { CafeService } from './cafe.service';

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.css']
})
export class CafeComponent implements OnInit {
  constructor(private cafeService: CafeService) { }
  cafes: Array<Cafe> = []
  
  cafesBlend: number = 0;
  cafesOrigen: number = 0;
  getCafes(){ 
    this.cafeService.getCafes().subscribe(cafes=> {
    this.cafes = cafes;
    this.cafesBlend = this.cafes.filter(cafe => cafe.tipo === 'Blend').length;
    this.cafesOrigen = this.cafes.filter(cafe => cafe.tipo === 'Café de Origen').length;
  });

  }
  ngOnInit() {
    this.getCafes();
  }

}
