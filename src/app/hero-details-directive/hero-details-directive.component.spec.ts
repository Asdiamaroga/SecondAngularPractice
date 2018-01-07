import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailsDirectiveComponent } from './hero-details-directive.component';

describe('HeroDetailsDirectiveComponent', () => {
  let component: HeroDetailsDirectiveComponent;
  let fixture: ComponentFixture<HeroDetailsDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetailsDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailsDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
