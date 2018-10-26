import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBusAggregatorComponent } from './add-bus-aggregator.component';

describe('AddBusAggregatorComponent', () => {
  let component: AddBusAggregatorComponent;
  let fixture: ComponentFixture<AddBusAggregatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBusAggregatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBusAggregatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
