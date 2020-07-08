import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HelloWorldComponent } from './hello-world.component';

describe('HelloWorldComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        HelloWorldComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HelloWorldComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'team-builder-angular'`, () => {
    const fixture = TestBed.createComponent(HelloWorldComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('team-builder-angular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(HelloWorldComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('team-builder-angular app is running!');
  });
});
