import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { BaseModel, PaginationParams, PaginatedResponse } from "../../models/base.model";
import { environment } from "../../../environments/environment";

export abstract class BaseService<T extends BaseModel> {
  protected constructor(
    protected readonly http: HttpClient,
    protected readonly endpoint: string
  ) {}

  protected get baseUrl(): string {
    return `${environment.apiUrl}/${this.endpoint}`;
  }

  public getAll(params?: PaginationParams): Observable<PaginatedResponse<T>> {
    let httpParams = new HttpParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          httpParams = httpParams.set(key, value.toString());
        }
      });
    }
    return this.http.get<PaginatedResponse<T>>(this.baseUrl, { params: httpParams });
  }

  public getById(id: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${id}`);
  }

  public create(data: Partial<T>): Observable<T> {
    return this.http.post<T>(this.baseUrl, data);
  }

  public update(id: string, data: Partial<T>): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${id}`, data);
  }

  public delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
