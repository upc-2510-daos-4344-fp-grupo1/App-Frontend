import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportDialogComponent } from './support-dialog.component';

describe('SupportDialogComponent', () => {
  let component: SupportDialogComponent;
  let fixture: ComponentFixture<SupportDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
