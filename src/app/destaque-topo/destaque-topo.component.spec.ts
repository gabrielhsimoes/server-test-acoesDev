import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestaqueTopoComponent } from './destaque-topo.component';

describe('DestaqueTopoComponent', () => {
  let component: DestaqueTopoComponent;
  let fixture: ComponentFixture<DestaqueTopoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestaqueTopoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestaqueTopoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
