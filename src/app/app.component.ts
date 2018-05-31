import { Component, OnInit } from '@angular/core';
import { DH_UNABLE_TO_CHECK_GENERATOR } from 'constants';

class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add(newPoint: Point) {
    return newPoint = new Point(newPoint.x + this.x, newPoint.y + this.y);
  }
}

class Point3D extends Point {
  z: number;

  constructor(x: number, y: number, z: number) {
    super(x, y);
    this.z = z;
  }

  add(new3DPoint: Point3D) {
    return new3DPoint = new Point3D(new3DPoint.x + this.x, new3DPoint.y + this.y, new3DPoint.z + this.z);
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  
  ngOnInit() {
    let p1 = new Point(13, 20);
    let p2 = new Point(4, 98);
    let p3 = p1.add(p2);
    console.log(p3);

    let p3D1 = new Point3D(13, 26, 39);
    let p3D2 = new Point3D(1248, 0, 646);
    let p3D3 = p3D1.add(p3D2);
    console.log(p3D3);
    
  }
}
