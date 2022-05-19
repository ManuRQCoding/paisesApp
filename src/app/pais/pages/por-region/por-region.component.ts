import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [],
})
export class PorRegionComponent {
  constructor(private paisService:PaisService) {}

  regiones: string[] = [
    'EU',
    'EFTA',
    'CARICOM',
    'PA',
    'AU',
    'USAN',
    'EEU',
    'AL',
    'ASEAN',
    'CAIS',
    'CEFTA',
    'NAFTA',
    'SAARC',
  ];

  regionActiva: string = '';

  paises:Country[] = [];

  activarRegion(region: string) {
    this.regionActiva = region;
    this.paisService.buscarRegion(this.regionActiva).subscribe(paises=>{
      this.paises = paises;
    }
      
    );

  }

  getClaseCss(region: string): string {
    return region === this.regionActiva
      ? 'btn btn-primary mr-1 mb-1'
      : 'btn btn-outline-primary mr-1 mb-1';
  }
}
