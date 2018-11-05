import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Career} from '../shared/models/career';
import {Condition} from '../shared/models/condition';
import {Item} from '../shared/models/item';
import {Quality} from '../shared/models/quality';
import {Skill} from '../shared/models/skill';
import {Talent} from '../shared/models/talent';
import {Careers} from '../shared/data/careers';
import {Skills} from '../shared/data/skills';
import {Trappings} from '../shared/data/trappings';
import {BehaviorSubject, combineLatest, forkJoin, from, Observable, of} from 'rxjs';
import {catchError, concatMap, map, mergeMap, share, tap} from 'rxjs/operators';
import {CoreModule} from './core.module';

class Data {
  careers: any[];
  conditions: any[];
  qualities: any[];
  skills: any[];
  talents: any[];
  trappings: any[];
  constructor() {
    this.careers = [];
    this.conditions = [];
    this.qualities = [];
    this.skills = [];
    this.talents = [];
    this.trappings = [];
  }
}

@Injectable({
  providedIn: CoreModule
})
export class DataService {
  static readonly DATA_URL = 'assets/data/';
  static readonly RESOURCES = [
    // { name: 'careers', url: 'assets/data/careers.json', obj: Career },
    { name: 'conditions', url: 'assets/data/conditions.json', obj: Condition },
    { name: 'qualities', url: 'assets/data/qualities.json', obj: Quality },
    // { name: 'skills', url: 'assets/data/skills.json', obj: Skill },
    { name: 'talents', url: 'assets/data/talents.json', obj: Talent },
    // { name: 'trappings', url: 'assets/data/trappings.json', obj: Career },
  ];
  private data: Data = new Data();
  private dataSource: BehaviorSubject<any> = new BehaviorSubject(this.data);
  private dataObservable = this.dataSource.asObservable().pipe(share());
  constructor(private http: HttpClient) {
    this.getServerData();
  }
  get careers() {
    return this.dataObservable.pipe(map(res => res.careers));
  }
  get conditions() {
    return this.dataObservable.pipe(map(res => res.conditions));
  }
  get qualities() {
    return this.dataObservable.pipe(map(res => res.qualities));
  }
  get skills() {
    return this.dataObservable.pipe(map(res => res.skills));
  }
  get talents() {
    return this.dataObservable.pipe(map(res => res.talents));
  }
  get trappings() {
    return this.dataObservable.pipe(map(res => res.trappings));
  }
  getMapData(id: string) {
    return this.http.get(DataService.DATA_URL + `maps/${id}.json`);
  }
  getServerData() {
    // this.http.get('assets/data/male-names.csv', {responseType: 'text'}).subscribe(res => {
    //   const result = res.split(',');
    //   console.log(result);
    // });
    from(
      DataService.RESOURCES.map(resource => resource.url)
    ).pipe(
      concatMap((url: string) => this.http.get(url)),
      map((value: any[], index: number): [string, any] => [
        DataService.RESOURCES[index].name, value.map(i => new DataService.RESOURCES[index].obj(i))
      ])
    ).subscribe((res) => {
      this.data[res[0]] = res[1];
    }, () => {}, () => {
      this.dataSource.next(this.data);
    });
    // combineLatest(resources.map(resource => this.http.get(resource.url))).subscribe((res) => {
    //   resources
    //     .map(resource => resource.name)
    //     .forEach((name, index) => {
    //       this.data[name] = res[index];
    //     });
    // }, () => {}, () => {
    //   this.dataSource.next(this.data);
    // });
  }
}
