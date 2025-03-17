import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  // private apiUrl = 'https://example.com/api/article';
  private apiUrl = 'https://insights.tornixtech.com/wp-json/wp/v2/posts';


  constructor(private http: HttpClient) { }

  // Récupérer l'article par son ID
  // getArticleById(id: number): Observable<any> {
  //   console.log(`Fetching article with ID: ${id}`);
  //   return this.http.get<any>(`${this.apiUrl}/${id}`);
  // }

  getArticleById(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Méthode pour récupérer les détails du blog via une API
  getBlogPostDetails(blogId: string): Observable<any> {
    const url = `https://insights.tornixtech.com/api/blog-post/${blogId}`; // Exemple d'URL pour récupérer un article spécifique
    return this.http.get<any>(url);
  }

}
