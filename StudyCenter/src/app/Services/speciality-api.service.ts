import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Speciality } from '../speciality';
import { text } from 'stream/consumers';
import { spec } from 'node:test/reporters';

@Injectable({
  providedIn: 'root'
})
export class SpecialityApiService {
  baseUrl = 'https://localhost:7094/api/Specialities';

  constructor(private http: HttpClient) { }

  GetAllSpeciality(){
    return this.http.get<Speciality[]>(this.baseUrl)
  }

  AddSpeciality(spe:Speciality){
    return this.http.post<Speciality>(this.baseUrl,spe);
  }

  EditSpeciality(id:number,spe:Speciality){
    return this.http.put<Speciality>(`${this.baseUrl}/${id}`,spe);
  }

  DeleteSpeciality(id:number){
    return this.http.delete<Speciality>(`${this.baseUrl}/${id}`);
  }

  GetSpeciality(id:number){
    return this.http.get<Speciality>(`${this.baseUrl}/${id}`);
  }
}
