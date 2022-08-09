alangarcia-master

alangarcia-feature-hall

alangarcia-feature-

```ts

describe('LazyComponent',(){
 beforeEach(async(){
    await TestBed.configureTestingModule({
      declarations:[LazyComponent],
      providers:[Sharing Servicel,
    }).compileComponents();
  });
  it('should create the app',()={
    const fixture = TestBed.createComponent(LazyComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should have as title 'gentleman-state-manager-live'",() ⇒ {
    const fixture = TestBed.createComponent(LazyComponent);
    const app = fixture.componentInstance;
    expect(app.variableInterna).toEqual([]);
  });

  it("should haveavariable called 'variable Interna' with value '[]' as default",() => {
    const fixture = TestBed.createComponent(LazyComponent);
    const lazy = fixture.componentInstance;
    expect(lazy.variableInterna).toEqual([]);
  });
                                         I
  it('should render title',() => {
    const fixture=Test Bed.createComponent(LazyComponent);
    fixture.detectChanges();
    const compiled=fixture.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('Hola !!');
  });

```
