import {Injectable} from '@angular/core';
import {State} from '../shared/models/state';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private state: State = new State(false);
  private stateSource: BehaviorSubject<any> = new BehaviorSubject(this.state);
  private stateObservable = this.stateSource.asObservable();
  constructor() {
  }
}
