import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { FilmsArray } from '../../interfaces';
import { AppComponent } from '../../app.component';


@Component({
  selector: 'app-films',
  standalone: true,
  imports: [],
  templateUrl: './films.component.html',
  styleUrl: './films.component.scss'
})
export class FilmsComponent {
  @Input() accion!: FilmsArray[];
  @Input() anime!: FilmsArray[];
  @Input() drama!: FilmsArray[];
  @Input() sciFi!: FilmsArray[];
  @Input() terror!: FilmsArray[];
  @Input() topTen!: FilmsArray[];

  selectedArray:FilmsArray[]=[]
  imageIndex = 0;
  imageWidth = 300;
  visibleImages = 5;
  totalImages = this.selectedArray.length;

  get translateValue():string{
    return `-${this.imageIndex*this.imageWidth}`;
  }

  prev(){
    if(this.imageIndex>0){
      this.imageIndex --;
    }
  }
  next(){
      this.imageIndex ++;
    
  }
}


