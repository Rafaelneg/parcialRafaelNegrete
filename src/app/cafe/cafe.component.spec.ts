/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CafeComponent } from './cafe.component';
import { CafeService } from './cafe.service';
import { Cafe } from './cafe';


describe('CafeComponent', () => {
    let component: CafeComponent;
    let fixture: ComponentFixture<CafeComponent>;
    let debug: DebugElement;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientModule],
        declarations: [CafeComponent],
        providers: [CafeService]
      })
        .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(CafeComponent);
      component = fixture.componentInstance;
  
      // Crear un listado de 3 cafés
      component.cafes = [
        new Cafe(1, 'Café 1', 'Café de origen', 'Región 1', 'Sabor 1', 'Altura 1', 'imagen1.jpg'),
        new Cafe(2, 'Café 2', 'Blend', 'Región 2', 'Sabor 2', 'Altura 2', 'imagen2.jpg'),
        new Cafe(3, 'Café 3', 'Blend', 'Región 3', 'Sabor 3', 'Altura 3', 'imagen3.jpg')
      ];
  
      fixture.detectChanges();
      debug = fixture.debugElement;
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should render table with header and 3 rows', () => {
        const tableRows = debug.queryAll(By.css('tr'));
        // Verifica que la tabla se crea correctamente con tres filas más el encabezado
        expect(tableRows.length).toBe(4);})

    it('should contain a table with header', () => {
        const tableElement = debug.query(By.css('table'));
        const tableHeader = tableElement.query(By.css('thead'));
        // Verificar que haya un thead en la tabla
        expect(tableHeader).toBeTruthy();
    });

  });
  