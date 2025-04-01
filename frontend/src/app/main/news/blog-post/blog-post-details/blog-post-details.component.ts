import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BlogService } from '../../../services/blog/blog.service';
import { ArticleService } from '../../../services/article/article.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-post-details',
  imports: [RouterModule, CommonModule],
  templateUrl: './blog-post-details.component.html',
  styleUrl: './blog-post-details.component.scss'
})
export class BlogPostDetailsComponent implements OnInit{
  current_page = 'blog-post-details';
  
  // Variables pour l'article
  blogPost: any;
  loading: boolean = true;
  error: string = '';
  
  // Données de l'article
  authorName: string = '';
  publishDate: string = '';
  postTitle: string = '';
  fullContent: string = '';
  featuredImage: string = '';
  newsId: string = '';

  authorAvatar: string = '';
  modifiedDate: string = '';

  // Données locales
  news: any = null;
  article: any;  
  postContent: any;




  all_news = [
    {
      news_id: 't-news-001',
      news_img: './assets/img/blog/blog-1.jpg',
      news_label1: 'How Tech Shapes the Future of Work in 2024',
      news_content1: 'In today\'s ever-evolving world, storytelling has become a powerful tool for connection. Revision provides a unique platform for individuals to share Sit repellat hic cupiditate hic ut nemo. Quis nihil sunt non reiciendis. Sequi in accusamus harum vel aspernatur. Excepturi numquam nihil cumque odio. Et voluptate cupiditate....',
      news_label2: 'Et quae iure vel ut odit alias.',
      news_content2: 'Sed quo laboriosam qui architecto. Occaecati repellendus omnis dicta inventore tempore provident voluptas mollitia aliquid. Id repellendus quia. Asperiores nihil magni dicta est suscipit perspiciatis. Voluptate ex rerum assumenda dolores nihil quaerat. Dolor porro tempora et quibusdam voluptas. Beatae aut at ad qui tempore corrupti velit quisquam rerum. Omnis dolorum exercitationem harum qui qui blanditiis neque. Iusto autem itaque. Repudiandae hic quae aspernatur ea neque qui. Architecto voluptatem magni. Vel magnam quod et tempora deleniti error rerum nihil tempora. Officiis animi maxime nulla quo et harum eum quis a.  Sit hic in qui quos fugit ut rerum atque. Optio provident dolores atque voluptatem rem excepturi molestiae qui.  Voluptatem laborum omnis ullam quibusdam perspiciatis nulla nostrum. Voluptatum est libero eum nesciunt aliquid qui.  Quia et suscipit non sequi. Maxime sed odit. Beatae nesciunt nesciunt accusamus quia aut ratione aspernatur dolor.  Sint harum eveniet dicta exercitationem minima. Exercitationem omnis asperiores natus aperiam dolor consequatur id ex sed.  Quibusdam rerum dolores sint consequatur quidem ea. Beatae minima sunt libero soluta sapiente in rem assumenda. Et qui odit voluptatem um quibusdam voluptatem voluptatem accusamus mollitia aut atque aut.',
      news_card1: 'Et vero doloremque tempore voluptatem ratione vel aut. Deleniti sunt animi aut. Aut eos aliquam doloribus minus autem quos.',
      news_card2: 'Et vero doloremque tempore voluptatem ratione vel aut. Deleniti sunt animi aut. Aut eos aliquam doloribus minus autem quos.',
      news_authors: 'Ethan Caldwell',
      news_periode: 'October 16, 2024',
      news_comments: '12 comments',
    },
    {
      news_id: 't-news-002',
      news_img: './assets/img/blog/blog-2.jpg',
      news_label1: 'The Future of Work: Tech and Remote Trends',
      news_content1: 'Find out why 2024 is predicted to be a pivotal year for tech and remote work. Sed quo laboriosam qui architecto. Occaecati repellendus omnis dicta inventore tempore provident voluptas mollitia aliquid. Sed quo laboriosam qui architecto. Occaecati repellendus omnis dicta inventore tempore provident voluptas mollitia aliquid.',
      news_label2: 'Et quae iure vel ut odit alias.',
      news_content2: 'Sed quo laboriosam qui architecto. Occaecati repellendus omnis dicta inventore tempore provident voluptas mollitia aliquid. Id repellendus quia. Asperiores nihil magni dicta est suscipit perspiciatis. Voluptate ex rerum assumenda dolores nihil quaerat. Dolor porro tempora et quibusdam voluptas. Beatae aut at ad qui tempore corrupti velit quisquam rerum. Omnis dolorum exercitationem harum qui qui blanditiis neque. Iusto autem itaque. Repudiandae hic quae aspernatur ea neque qui. Architecto voluptatem magni. Vel magnam quod et tempora deleniti error rerum nihil tempora. Officiis animi maxime nulla quo et harum eum quis a.  Sit hic in qui quos fugit ut rerum atque. Optio provident dolores atque voluptatem rem excepturi molestiae qui.  Voluptatem laborum omnis ullam quibusdam perspiciatis nulla nostrum. Voluptatum est libero eum nesciunt aliquid qui.  Quia et suscipit non sequi. Maxime sed odit. Beatae nesciunt nesciunt accusamus quia aut ratione aspernatur dolor.  Sint harum eveniet dicta exercitationem minima. Exercitationem omnis asperiores natus aperiam dolor consequatur id ex sed.  Quibusdam rerum dolores sint consequatur quidem ea. Beatae minima sunt libero soluta sapiente in rem assumenda. Et qui odit voluptatem um quibusdam voluptatem voluptatem accusamus mollitia aut atque aut.',
      news_card1: 'Et vero doloremque tempore voluptatem ratione vel aut. Deleniti sunt animi aut. Aut eos aliquam doloribus minus autem quos.',
      news_card2: 'Et vero doloremque tempore voluptatem ratione vel aut. Deleniti sunt animi aut. Aut eos aliquam doloribus minus autem quos.',
      news_authors: 'Ethan Caldwell',
      news_periode: 'October 16, 2024',
      news_comments: '8 comments',
    },
    {
      news_id: 't-news-003',
      news_img: './assets/img/blog/articles/books-1.jpg',
      news_label1: 'Remote Work Trends in the Digital Age',
      news_content1: 'Discover the cutting-edge tech gadgets making travel smarter and more efficient...',
      news_label2: 'Et quae iure vel ut odit alias.',
      news_content2: 'Discover the cutting-edge tech gadgets making travel smarter and more efficient...',
      news_card1: 'Et vero doloremque tempore voluptatem ratione vel aut. Deleniti sunt animi aut. Aut eos aliquam doloribus minus autem quos.',
      news_card2: 'Et vero doloremque tempore voluptatem ratione vel aut. Deleniti sunt animi aut. Aut eos aliquam doloribus minus autem quos.',
      news_authors: 'Ethan Caldwell',
      news_periode: 'October 16, 2024',
      news_comments: '8 comments',
    },
    {
      news_id: 't-news-004',
      news_img: './assets/img/blog/articles/books-2.jpg',
      news_label1: 'Finance & Payments',
      news_content1: 'A money transfer platform with push notifications and transaction tracking.',
      news_label2: 'Et quae iure vel ut odit alias.',
      news_content2: 'Discover the cutting-edge tech gadgets making travel smarter and more efficient...',
      news_card1: 'Et vero doloremque tempore voluptatem ratione vel aut. Deleniti sunt animi aut. Aut eos aliquam doloribus minus autem quos.',
      news_card2: 'Et vero doloremque tempore voluptatem ratione vel aut. Deleniti sunt animi aut. Aut eos aliquam doloribus minus autem quos.',
      news_authors: 'Ethan Caldwell',
      news_periode: 'October 16, 2024',
      news_comments: '8 comments',
    },
    {
      news_id: 't-news-005',
      news_img: './assets/img/blog/articles/books-3.jpg',
      news_label1: 'Remote Work Trends in the Digital Age',
      news_content1: 'A money transfer platform with push notifications and transaction tracking.',
      news_label2: 'Et quae iure vel ut odit alias.',
      news_content2: 'Discover the cutting-edge tech gadgets making travel smarter and more efficient...',
      news_card1: 'Et vero doloremque tempore voluptatem ratione vel aut. Deleniti sunt animi aut. Aut eos aliquam doloribus minus autem quos.',
      news_card2: 'Et vero doloremque tempore voluptatem ratione vel aut. Deleniti sunt animi aut. Aut eos aliquam doloribus minus autem quos.',
      news_authors: 'Ethan Caldwell',
      news_periode: 'October 16, 2024',
      news_comments: '8 comments',
    },
    
    // {
    //   news_id: 't-news-004',
    //   news_img: './assets/img/logo-tornixtech/cashdash-logo.jpeg',
    //   categorie: 'Finance & Payments',
    //   news_label: 'A money transfer platform with push notifications and transaction tracking.',
    //   news_content: 'CashDash is a cutting-edge money transfer platform designed for seamless and secure financial transactions. It supports instant transfers, push notifications for real-time updates, and a user-friendly interface that ensures a hassle-free experience. Whether sending funds locally or internationally, CashDash prioritizes speed, security, and reliability.',
    //   news_authors: 'John Doe',
    //   news_periode: '1990-02-18',
    //   product_website: '',
    // },
  ];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private blogService: BlogService,
    private articleService: ArticleService,
  ) { }


  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const newsId = params['b_id'];

      this.news = this.all_news.find(news => news.news_id === this.newsId);

      // Récupérer les détails depuis l'API WordPress
      // this.getBlogPostDetails(newsId);
      this.loadPostFromWordPress(this.newsId);
    });

    // this.blogService.getBlogPostDetails().subscribe(
    //   (response) => {
    //     if (response && response.length > 0) {
    //       const fullPost = response[0];
          
    //       // Contenu complet de l'article
    //       this.fullContent = fullPost.content.rendered;
          
    //       // Titre de l'article
    //       this.postTitle = fullPost.title.rendered;
          
    //       // Date de publication
    //       this.publishDate = fullPost.date;
          
    //       // Image à la une (si disponible)
    //       this.featuredImage = fullPost._embedded?.['wp:featuredmedia']?.[0]?.source_url;
          
    //       // Détails de l'auteur
    //       this.authorName = fullPost._embedded?.author?.[0]?.name;
    //     }
    //   }
    // );

  }

  loadPostFromWordPress(slug: string): void {
    this.loading = true;
    this.error = '';

    this.blogService.getBlogPostDetails_(slug).subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          const post = data[0];
          this.processWordPressPost(data[0]);
        } else {
          this.error = 'Article non trouvé';
        }
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erreur lors du chargement de l\'article';
        this.loading = false;
        console.error('Error loading blog post:', err);
      }
    });
  }


  processWordPressPost(post: any): void {
    // Données de base
    this.postTitle = post.title?.rendered || '';
    this.fullContent = post.content?.rendered || '';
    this.publishDate = post.date || '';
    this.modifiedDate = post.modified || '';

    
    // Auteur
    if (post._embedded?.author?.[0]) {
      this.authorName = post._embedded.author[0].name;
    } else if (post.author) {
      this.blogService.getAuthor(post.author).subscribe({
        next: (author) => {
          this.authorName = author.name;
        },
        error: (err) => {
          console.error('Error loading author:', err);
          this.authorName = 'Auteur inconnu';
        }
      });
    }

     // Avatar de l'auteur
    if (post._embedded?.author?.[0]?.avatar_urls?.['96']) {
      this.authorAvatar = post._embedded.author[0].avatar_urls['96'];
    }
    
    // Image à la une
    if (post._embedded?.['wp:featuredmedia']?.[0]) {
      this.featuredImage = post._embedded['wp:featuredmedia'][0].source_url;
    }
    
    // Stocker l'article complet si besoin
    this.blogPost = post;
  }

  // processWordPressPost(post: any): void {
  //   // Données de base
  //   this.postTitle = post.title?.rendered || '';
  //   this.fullContent = post.content?.rendered || '';
  //   this.publishDate = post.date || '';
    
  //   // Auteur
  //   if (post._embedded?.author?.[0]) {
  //     this.authorName = post._embedded.author[0].name;
  //   } else if (post.author) {
  //     this.blogService.getAuthor(post.author).subscribe({
  //       next: (author) => {
  //         this.authorName = author.name;
  //       },
  //       error: (err) => {
  //         console.error('Error loading author:', err);
  //         this.authorName = 'Auteur inconnu';
  //       }
  //     });
  //   }
    
  //   // Image à la une
  //   if (post._embedded?.['wp:featuredmedia']?.[0]) {
  //     this.featuredImage = post._embedded['wp:featuredmedia'][0].source_url;
  //   }
    
  //   // Stocker l'article complet si besoin
  //   this.blogPost = post;
  // }

  // getBlogPostDetails(slug: string): void {
  //   const url = `https://insights.tornixtech.com/wp-json/wp/v2/posts?slug=${slug}`;
  //   this.http.get<any[]>(url).subscribe({
  //     next: data => {
  //       if (data.length > 0) {
  //         this.blogPost = data[0];
  //         this.processWordPressPost(data[0]);
  //       } else {
  //         this.error = 'Article non trouvé.';
  //       }
  //       this.loading = false;
  //     },
  //     error: err => {
  //       this.error = 'Une erreur est survenue lors de la récupération de l\'article.';
  //       this.loading = false;
  //     }
  //   });
  // }

  

}
