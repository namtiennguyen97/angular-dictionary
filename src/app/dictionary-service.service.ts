import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
private words: IWord[] = [
  {key: 'cat', meaning: 'meo'},
  {key: 'dog', meaning: 'cho'},
  {key: 'bat', meaning: 'doi'},
  {key: 'cow', meaning: 'bo'}
];
search(word: string): string {
  if (!word) {
    return '';
  }
  const w = this.words.find(item => item.key === word.toLowerCase());
  if (w) {
    return w.meaning;
  }
  return 'Not Found!';
}
  constructor() { }
}
