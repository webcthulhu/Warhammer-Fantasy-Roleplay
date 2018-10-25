export class State {
  logged: boolean;
  characters: any[];
  constructor(options) {
    this.logged = options;
    this.characters = [];
  }
}
