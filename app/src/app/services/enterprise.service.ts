import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import {EnterprisesTotals } from '../models/enterprises-total.model';

@Injectable()
export class EnterpriseService {
  private apiUrl = environment.api;

  constructor(private http: HttpClient) {}

  getAll() {}

  getById() {}

  getByName() {}

  getTotalsByEnterprise(): Observable<EnterprisesTotals[]> {
    return this.http.get<EnterprisesTotals[]>(`${this.apiUrl}/totals`)
  }

  getEnterprisesByCompany() {}
}
