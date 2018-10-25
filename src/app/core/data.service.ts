import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Career} from '../shared/models/career';
import {Condition} from '../shared/models/condition';
import {Quality} from '../shared/models/quality';
import {Skill} from '../shared/models/skill';
import {Talent} from '../shared/models/talent';
import {Careers} from '../shared/data/careers';
import {Conditions} from '../shared/data/conditions';
import {Qualities} from '../shared/data/qualities';
import {Skills} from '../shared/data/skills';
import {Talents} from '../shared/data/talents';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  static readonly RESOURCES = {
    MALE_NAMES: 'assets/data/male-names.csv',
    FEMALE_NAMES: 'assets/data/female-names.csv'
  };
  private careers = Careers.map(i => new Career(i));
  private conditions = Conditions.map(i => new Condition(i));
  private qualities = Qualities.map(i => new Quality(i));
  private skills = Skills.map(i => new Skill(i));
  private talents = Talents.map(i => new Talent(i));
  constructor(private http: HttpClient) {
    // this.getServerData();
  }
  get(key) {
    return this[key];
  }
  getServerData() {
    this.http.get('assets/data/male-names.csv', {
      responseType: 'text'
    }).pipe().subscribe(res => {
      if (res && res.length) {
        const names = res.split(',');
        console.log(names);
      }
    });
  }
}
