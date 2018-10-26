import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAggregatorDataComponent } from './update-aggregator-data.component';

describe('UpdateAggregatorDataComponent', () => {
  let component: UpdateAggregatorDataComponent;
  let fixture: ComponentFixture<UpdateAggregatorDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAggregatorDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAggregatorDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
