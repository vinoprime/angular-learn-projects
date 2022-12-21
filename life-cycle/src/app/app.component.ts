import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy, OnChanges {
  title = 'life-cycle';


  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges')
  }


  ngOnInit() {
    console.log('ngOnInit called');
  }
  ngDoCheck() {
    console.log('ngDoCheck called');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
}
