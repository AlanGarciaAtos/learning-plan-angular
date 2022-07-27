import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None, ShadowDOM
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  constructor() {
    console.log("constructor called!!!");

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOncHanges called!");
    console.log(changes);

  }

  ngOnInit(): void {
    console.log("ng onit called!");
    console.log('Text content' + this.header.nativeElement.textContent);
    console.log('Text content of paragraph: ' + this.paragraph.nativeElement.textContent);

  }

  ngDoCheck(): void {
    console.log('ngDoCheck');

  }


  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called");
    console.log('Text content' + this.header.nativeElement.textContent);
    console.log('Text content of paragraph: ' + this.paragraph.nativeElement.textContent);

  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called");

  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called _------");
    console.log('Text content' + this.header.nativeElement.textContent);
  }


  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called ------");

  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy called!");
  }
}

