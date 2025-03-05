import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private apiUrl = 'https://insights.tornixtech.com/wp-json/wp/v2/posts'; // URL de l'API REST de WordPress

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer les articles du blog
  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  };

  // // Méthode pour récupérer les détails du blog via une API
  // getBlogPostDetails(): Observable<any> {
  //   // const url = `https://insights.tornixtech.com/api/blog-post/${blogId}`; // Exemple d'URL pour récupérer un article spécifique
  //   // return this.http.get<any>(url);
  //   return this.http.get(`https://insights.tornixtech.com/wp-json/wp/v2/posts?slug=the-importance-of-custom-middleware-for-modern-app-development`);
  // }

  // Méthode pour récupérer les détails du blog via une API
  getBlogPostDetails(): Observable<any> {
    // const url = `https://insights.tornixtech.com/api/blog-post/${blogId}`; // Exemple d'URL pour récupérer un article spécifique
    // return this.http.get<any>(url);
    return this.http.get(`https://insights.tornixtech.com/wp-json/wp/v2/posts?slug=the-importance-of-custom-middleware-for-modern-app-development`);
  }

}
