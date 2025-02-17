import { Component } from '@angular/core';
import { Ways } from 'src/app/interfaces/ways';
import { PathService } from 'src/app/services/path.service';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent {
  constructor(private pathService: PathService){}
  ways: Ways[] = [{name: 'Fallout 76', description: 'Here we discuss about Fallout 76. Here you can find teammate and sell your items.'},{name: 'Fallout 3-4', description: 'guides, discussion of the plot, your builds of modifications, etc. dedicated to the 3rd and 4th parts of Fallout'},{name: 'Fallout 1-2', description: 'Discussion dedicated to the first two parts of Fallout'},{name: 'Fallout No canonic parts', description :'Here you can discuss all parts of Fallout that are not related to the canon, as well as major plot modifications'},{name: 'TES V', description: 'The discussion is dedicated to The Elder Scrolls V: Skyrim and its modifications'},{name: 'TES Morrowind', description: 'The discussion is dedicated to The Elder Scrolls III: Morrowind and its modifications'},{name: 'TES Oblivion', description: 'The discussion is dedicated to The Elder Scrolls IV: Oblivion and its modifications'},{name: 'TES I-II', description: 'The Elder Scrolls: Arena, The Elder Scrolls II: Daggerfall'},{name: 'Starfield', description: 'Tell about your space adventures here'}];
  sendPath(name: string){
    this.pathService.setTheme(name)
  }
}
