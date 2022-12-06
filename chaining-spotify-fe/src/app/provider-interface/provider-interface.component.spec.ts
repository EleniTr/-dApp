import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderInterfaceComponent } from './provider-interface.component';

describe('ProviderInterfaceComponent', () => {
  let component: ProviderInterfaceComponent;
  let fixture: ComponentFixture<ProviderInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderInterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
