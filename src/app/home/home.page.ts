import { Component } from '@angular/core';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  datalucky = false;
  runlucky = false;
  winner = false;
  name: string = "";
  drawname: any = [];
  lines: any = [];
  public timer = 3500;
  public p = 0;
  test: string;
  won: string;
  constructor(private file: File) {}

  start() {
    //console.log(this.name);
    this.datalucky = true;
    this.lines = this.name.split('\n');

    for(var i = 0; i < this.lines.length; i++) {
      this.drawname.push(this.lines[i]);
      if(i === 9) {
        this.won = this.lines[i];
      }
      this.runlucky = true;
    }

    var IntervalVar = setInterval( function() {

      this.timer--;
      if(this.timer === 0) {
        this.winner = true;
        clearInterval(IntervalVar);
        this.timer = 3500;
      }

      if(this.p < this.lines.length) {
        this.test = this.drawname[this.p];
      }

      if(this.p === this.lines.length) {
        this.p = 0;
      }

      this.p++;

    }.bind(this), 10);
    console.log(this.drawname);
  }

  reset() {
    this.datalucky = false;
    this.runlucky = false;
    this.winner = false;
    this.name = "";
    this.drawname = [];
    this.lines = [];
    this.timer = 3500;
    this.p = 0;
    this.test = "";
    this.won = "";
  }
}
