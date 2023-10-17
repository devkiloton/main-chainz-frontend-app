import { type Observable } from 'rxjs';

export abstract class GetOnlyOps<T> {
  public abstract readonly broadCast$?: Observable<Array<T>>;
  public abstract get findAll(): Array<T>;
  public abstract get findAllAsync(): Observable<Array<T>>;
  public abstract findOne(id: string): T | null;
  public abstract findOneAsync(id: string): Observable<T | null>;
}
