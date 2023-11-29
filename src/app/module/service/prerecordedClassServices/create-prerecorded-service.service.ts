import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericResponse } from 'src/app/shared/response/GenericResponse';
import { ClassPrerecordedDomain } from '../../../shared/domains/ClassPrerecordedDomain';


@Injectable({
  providedIn: 'root'
})
export class CreatePrerecordedServiceService {

  constructor(private http: HttpClient) { }

  API: string = "http://localhost:8080/class_prerecorded";

  createClassPrerecordedService(classPrerecordedDomain: ClassPrerecordedDomain): Observable<GenericResponse> {
    return this.http
    .post<GenericResponse>(this.API + "/class_prerecorded_create", classPrerecordedDomain )
  }
}
