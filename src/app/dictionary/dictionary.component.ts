import {Component, OnInit} from '@angular/core';
import {DictionaryServiceService} from '../dictionary-service.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  word: IWord;

  constructor(private dictionary: DictionaryServiceService) {
  }

  ngOnInit() {
  }

  search(word: string) {
    const Meaning = this.dictionary.search(word);
    this.word = {
      key: word,
      meaning: Meaning
    };
  }
}
