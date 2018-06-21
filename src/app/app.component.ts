import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { SearchService } from './search.service';
@Component({
  selector: 'my-app',
  providers: [SearchService],
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',

})
export class AppComponent {
  title = 'Twilight Imperium Fourth Edition';
  systems = new Array<Array<number>>();
  
  constructor(private searchService: SearchService) { 
    this.setupSystems();
  }
  setupSystems(){
    this.systems = [];
    this.systems[0] = [];
    var row = 0, max = 3, soFar  = 0;
    for(let i = 0;i<37;i++){
      if(soFar<max) {
        this.systems[row][soFar] = i;
        soFar++;
      }else{
        this.systems[row][soFar] = i;
        soFar=0;
        if(i<18){
          max++;
        }else{
          max--;
        }
        console.log(this.systems[row]);
        row++;
        if(row<7){
          this.systems[row] = [];
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
  searchSystem(name: string) {
    console.log(name);
  }
 }
