import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HogwartsService } from './services/hogwarts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'MagicianSchoolEducation';

  public hogwartsCharacters: Array<any> = [];
  public countGryffindor: number;
  public countSlytherin: number;
  public countHufflepuff: number;
  public countRavenclaw: number;






  constructor(
    private hogwartsService: HogwartsService
  ) { }

  getAllCharacters() {
    this.hogwartsService.getAllCharacters()
      .subscribe(characters => {
        this.hogwartsCharacters = characters
      });

  }
  getCharactersHouse(house: string) {
    this.hogwartsService.getCharactersHouse(house)
      .subscribe((characters: any) => {
        this.hogwartsCharacters = characters
      })
  }
  searchMembers(name: string) {
    name = name.toLowerCase()
    if (!name) {
      this.getAllCharacters()
    }
    this.hogwartsCharacters = this.hogwartsCharacters.filter(
      x => x.name.toLowerCase().includes(name)
    )

  }
  countMembers() {
    this.hogwartsService.getCharactersHouse("Gryffindor")
      .subscribe((characters: any) => {
        this.countGryffindor = characters.length
      })
    this.hogwartsService.getCharactersHouse("Slytherin")
      .subscribe((characters: any) => {
        this.countSlytherin = characters.length
      })
    this.hogwartsService.getCharactersHouse("Hufflepuff")
      .subscribe((characters: any) => {
        this.countHufflepuff = characters.length
      })
    this.hogwartsService.getCharactersHouse("Ravenclaw")
      .subscribe((characters: any) => {
        this.countRavenclaw = characters.length
      })

  }
  sortByName(){
    this.hogwartsCharacters.sort((a,b) => a.name.localeCompare(b.name))
  }

  ngOnInit() {
    this.getAllCharacters()
    this.countMembers()
  }
}
