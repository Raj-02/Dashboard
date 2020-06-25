import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuUtlizComponent } from './cpu-utliz.component';

describe('CpuUtlizComponent', () => {
  let component: CpuUtlizComponent;
  let fixture: ComponentFixture<CpuUtlizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpuUtlizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuUtlizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
