// import {environment} from '../../environments/environment.development';
import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiHandlingService {
  constructor(private http: HttpClient) {
  }

  private categories: string[] = ['age',
    'alone',
    'amazing',
    'anger',
    'architecture',
    'art',
    'attitude',
    'beauty',
    'best',
    'birthday',
    'business',
    'car',
    'change',
    'communications',
    'computers',
    'cool',
    'courage',
    'dad',
    'dating',
    'death',
    'design',
    'dreams',
    'education',
    'environmental',
    'equality',
    'experience',
    'failure',
    'faith',
    'family',
    'famous',
    'fear',
    'fitness',
    'food',
    'forgiveness',
    'freedom',
    'friendship',
    'funny',
    'future',
    'god',
    'good',
    'government',
    'graduation',
    'great',
    'happiness',
    'health',
    'history',
    'home',
    'hope',
    'humor',
    'imagination',
    'inspirational',
    'intelligence',
    'jealousy',
    'knowledge',
    'leadership',
    'learning',
    'legal',
    'life',
    'love',
    'marriage',
    'medical',
    'men',
    'mom',
    'money',
    'morning',
    'movies',
    'success'];

  private randomIndex: number = Math.floor(Math.random() * this.categories.length);

  private randomCategory: string = this.categories[this.randomIndex];

  private apiUrl_for_quotes = environment.quotes_apiUrl_endpoint + this.randomCategory;

  private apiUrl_for_facts = environment.facts_apiUrl_endpoint;

  private headers = new HttpHeaders({
    'X-Api-Key': environment.api_secretKey
  });

  getQuotes(): Observable<any> {
    return this.http.get<any>(this.apiUrl_for_quotes, {headers: this.headers}).pipe(
      tap((data) => console.log('Fetched data:', data)),
      catchError((error: HttpErrorResponse) => {
        console.error('An error occurred:', error);
        return throwError('Something went wrong; please try again later.');
      })
    );
  }

  getFacts(): Observable<any> {
    return this.http.get<any>(this.apiUrl_for_facts, {headers: this.headers}).pipe(
      tap((data) => console.log('Fetched data:', data)),
      catchError((error: HttpErrorResponse) => {
        console.error('An error occurred:', error);
        return throwError('Something went wrong; please try again later.');
      })
    );
  }


}
