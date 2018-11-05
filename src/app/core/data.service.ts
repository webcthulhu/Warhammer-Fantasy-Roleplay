import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Career} from '../shared/models/career';
import {Condition} from '../shared/models/condition';
import {Item} from '../shared/models/item';
import {Quality} from '../shared/models/quality';
import {Skill} from '../shared/models/skill';
import {Talent} from '../shared/models/talent';
import {Careers} from '../shared/data/careers';
// import {Conditions} from '../shared/data/conditions';
// import {Qualities} from '../shared/data/qualities';
import {Skills} from '../shared/data/skills';
// import {Talents} from '../shared/data/talents';
import {Trappings} from '../shared/data/trappings';
import {BehaviorSubject} from 'rxjs';
import {map, share} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  static readonly DATA_URL = 'assets/data/';
  static readonly RESOURCES = {
    CONDITIONS: 'conditions.json',
    QUALITIES: 'qualities.json',
    TALENTS: 'talents.json',
    MALE_NAMES: 'male-names.csv',
    FEMALE_NAMES: 'female-names.csv'
  };
  public careers = Careers.map(i => new Career(i));
  // public conditions;
  // public qualities;
  public skills = Skills.map(i => new Skill(i));
  // public talents;
  public trappings = Trappings.map(i => new Item(i));
  private data = {
    careers: [],
    conditions: [],
    qualities: [],
    skills: [],
    talents: [],
    trappings: []
  };
  private dataSource: BehaviorSubject<any> = new BehaviorSubject(this.data);
  private dataObservable = this.dataSource.asObservable().pipe(share());
  constructor(private http: HttpClient) {
    this.getServerData();
  }
  get(key) {
    return this[key];
  }
  get conditions() {
    return this.dataObservable.pipe(map(res => res.conditions));
  }
  get qualities() {
    return this.dataObservable.pipe(map(res => res.qualities));
  }
  get talents() {
    return this.dataObservable.pipe(map(res => res.talents));
  }
  getMapData(id: string) {
    return this.http.get(DataService.DATA_URL + `maps/${id}.json`);
  }
  getServerData() {
    // this.http.get('assets/data/male-names.csv', {responseType: 'text'}).subscribe(res => {
    //   const result = res.split(',');
    //   console.log(result);
    // });
    this.http.get(DataService.DATA_URL + DataService.RESOURCES.CONDITIONS).subscribe((res: any[]) => {
      // this.conditions = res.map(i => new Condition(i));
      this.data.conditions = res.map(i => new Condition(i));
      this.dataSource.next(this.data);
    });
    this.http.get(DataService.DATA_URL + DataService.RESOURCES.QUALITIES).subscribe((res: any[]) => {
      // this.qualities = res.map(i => new Quality(i));
      this.data.qualities = res.map(i => new Quality(i));
      this.dataSource.next(this.data);
    });
    this.http.get(DataService.DATA_URL + DataService.RESOURCES.TALENTS).subscribe((res: any[]) => {
      // this.talents = res.map(i => new Talent(i));
      this.data.talents = res.map(i => new Talent(i));
      this.dataSource.next(this.data);
    });
  }
}
