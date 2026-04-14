import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../models/department';
import { Observable } from 'rxjs';
import { DepartmentRESPONSE } from '../models/response_dto/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  headers = new HttpHeaders({
    Authorization: `Bearer ${localStorage.getItem("token")}`
  });

  constructor(private http: HttpClient) { }
  addDept(department: Department): Observable<any> {
    return this.http.post("/api/departments", department, { headers: this.headers });
  }
  getDepts(): Observable<DepartmentRESPONSE[]> {
    return this.http.get<DepartmentRESPONSE[]>("/api/departments");
  }

  getDept(id: number): Observable<DepartmentRESPONSE> {
    return this.http.get<DepartmentRESPONSE>(`/api/departments/${id}`);
  }

  updateDept(id: number, department: Department): Observable<DepartmentRESPONSE> {
    return this.http.put<DepartmentRESPONSE>(`/api/departments/${id}`, department);
  }

  patchDept(id: number, department: Partial<Department>): Observable<DepartmentRESPONSE> {
    return this.http.patch<DepartmentRESPONSE>(`/api/departments/${id}`, department);
  }

  deleteDept(id: number): Observable<any> {
    return this.http.delete(`/api/departments/${id}`);
  }
}
