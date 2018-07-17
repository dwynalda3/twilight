import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {SearchService} from './search.service';
@Component({
  selector: 'my-app',
  providers: [SearchService],
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html',

})
export class AppComponent {
  playerNum = 0;
  title = 'Twilight Imperium Fourth Edition';
  tiles = new Array<Array<number>>();
  systems = new Array<string>(37);
  submitted = false;
  mySystems = new Array<string>();
  heldSystem: string;

  constructor(private searchService: SearchService) {
    this.setupMat();
    this.refresh();
  }
  refresh() {
     this.searchService.refresh().then(result => {
      let i = 0;
      for (const sys of result) {
        if (sys != null) {
          this.systems[i] = sys.name;
        }
        i++;
      }
    });
  }
  submit(color: string, race: string) {
    this.searchService.start(4).then(result => {
      let i = 0;
      for (const sys of result) {
        if (sys != null) {
          this.systems[i] = sys.name;
        }
        i++;
      }
    });
    this.submitted = true;
    this.searchService.createPlayer(color, race).then(result => {
      this.playerNum = result.id;
      for (const sys of result.systems) {
        this.mySystems.push(sys.name);
      }
    this.refresh();
    });
  }

  pickupSystem(index: number) {
    if (this.heldSystem == null) {
      this.heldSystem = this.mySystems[index];
      this.mySystems.splice(index, 1);
    } else {
      alert('You must select a system to place ' + this.heldSystem);
    }
  this.refresh();
  }
  placeSystem(index: number) {
    console.log(index);
    if (this.heldSystem != null) {
      this.searchService.assignSystem(index, this.heldSystem).then(result => {
        const locationName = result[index].name;
        if (locationName != this.heldSystem) {
          alert('That spot is already taken by ' + locationName);
          this.mySystems.push(this.heldSystem);
        }
        this.heldSystem = null;
        let i = 0;
        for (const sys of result) {
          if (sys != null) {
            this.systems[i] = sys.name;
          }
          i++;
        }
      this.refresh();
      });
    }
  }
  setupMat() {
    this.tiles = [];
    this.tiles[0] = [];
    var row = 0, max = 3, soFar = 0;
    for (let i = 0; i < 37; i++) {
      if (soFar < max) {
        this.tiles[row][soFar] = i;
        soFar++;
      } else {
        this.tiles[row][soFar] = i;
        soFar = 0;
        if (i < 18) {
          max++;
        } else {
          max--;
        }
        row++;
        if (row < 7) {
          this.tiles[row] = [];
        }
      }
    }
  }
  /*toggleCard(){
    this.cardVisible=!this.cardVisible;
  }
  searchGav(substr: string) {
    substr=substr.trim();
    this.showDependencies=false;
    this.searchedGavs = [];
    substr = "inProd=true&query=*" + substr;
    this.searchService.search(substr).then(result => {
      console.log("The result has", result.length, "artifacts")
      for(let arty of result){
        this.searchedGavs.push(arty.gav);
      }
    });
  }
  search(substr: string) {
    this.searchDepend = substr.trim();
    this.search = '';
    substr = substr.trim();
    this.searchString = substr;
    this.showDependencies = true;
    this.searchedGavs = [];
    this.dependGavs = [[]];
    let tempArray = [];
    substr = 'inProd=true&field=dependencies&query=*' + substr;
    this.searchService.search(substr).then(result => {
      console.log('The result has', result.length, 'artifacts');
      for (const arty of result) {
        tempArray = [];
        this.searchedGavs.push(arty.gav);
        for (const index in arty.dependencies) {
          const queryArray = this.searchString.split(':');
          let dependencyFlag = true;
          for (const j in queryArray) {
            if (arty.dependencies[index].indexOf(queryArray[j]) === -1) {
              dependencyFlag = false;
            }
          }
          if (dependencyFlag) {
            tempArray.push(arty.dependencies[index]);
          }
        }
        this.dependGavs.push(tempArray);
      }
    });
  }*/

}
