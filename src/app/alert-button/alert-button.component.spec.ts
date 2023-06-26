import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { AlertButtonComponent } from './alert-button.component';

describe('AlertButtonComponent', () => {
  let component: AlertButtonComponent;
  let fixture: ComponentFixture<AlertButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertButtonComponent);
    component = fixture.componentInstance;
    // de = fixture.debugElement;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a message with warn', () => {
    expect(component.content).toContain('warn');
  });
  // it(`should have a H1 tag of ''`, () => {
  //   expect(de.query(By.css('h1')).nativeElement.innerText).toBe('Alert Button');
  // });

  it('should toggle the mesage boolean', () => {
    expect(component.hideContent).toBeTruthy();
    component.toggle();
    expect(component.hideContent).toBeFalsy();
  });

  // async
  it('should toggle the mesage boolean Async', fakeAsync(() => {
    expect(component.hideContent).toBeTruthy();
    component.toggleAsync();
    tick(500);
    expect(component.hideContent).toBeFalsy();
  }));
});
