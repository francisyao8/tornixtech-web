import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private apiUrl = 'https://insights.tornixtech.com/wp-json/wp/v2/posts'; 
  private articles = 'https://insights.tornixtech.com/wp-json/wp/v2/posts?slug=the-importance-of-custom-middleware-for-modern-app-development';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  };

  getBlogPostDetails_(slug: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?slug=${slug}&_embed`);
  }

  getBlogPostDetails(): Observable<any> {
    // const url = `https://insights.tornixtech.com/api/blog-post/${blogId}`; // Exemple d'URL pour récupérer un article spécifique
    // return this.http.get<any>(url);
    // return this.http.get(this.articles);
    return this.http.get<any[]>(`${this.apiUrl}?slug=the-importance-of-custom-middleware-for-modern-app-development&_embed`);
    // return this.http.get<any[]>(`${this.apiUrl}?slug=${slug}&_embed`)
  }

  getAuthor(authorId: number): Observable<any> {
    return this.http.get<any>(`https://insights.tornixtech.com/wp-json/wp/v2/users/${authorId}`);
  }

}
