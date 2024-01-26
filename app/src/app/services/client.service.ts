import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";

export interface Clients {
  totalClientes: number;
	totalEmpreendimentos: number;
	totalImoveis: number;
  name: string;
}

export interface Enterprises {
  _id: string;
  name: string;
  image_src: string | undefined;
  enterprises: {
    _id: string;
    name: string;
    image_src: string | undefined;
    realties: string;
  }[];
}

@Injectable()
export class ClientService {
  private apiUrl = environment.api;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Clients[]> {
    return this.http.get<Clients[]>(`${this.apiUrl}/clients`)
  }

  getById(id: string) {
    return this.http.get<Clients[]>(`${this.apiUrl}/clientOne`)
  }

  getByName(name: string) {
    return this.http.get<Clients[]>(`${this.apiUrl}/client/${name}`)
  }

  getTotalsByCompany() {}
}
