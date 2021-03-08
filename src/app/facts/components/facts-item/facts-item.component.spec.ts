import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactsItemComponent } from './facts-item.component';

describe('FactsItemComponent', () => {
  let component: FactsItemComponent;
  let fixture: ComponentFixture<FactsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
