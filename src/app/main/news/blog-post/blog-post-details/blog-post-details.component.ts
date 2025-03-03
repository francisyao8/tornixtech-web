import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-post-details',
  imports: [RouterModule],
  templateUrl: './blog-post-details.component.html',
  styleUrl: './blog-post-details.component.scss'
})
export class BlogPostDetailsComponent implements OnInit{

  news: any = null;

  all_news = [
    {
      news_id: 't-news-001',
      news_img: './assets/img/logo-tornixtech/cashdash-logo.jpeg',
      categorie: 'Finance & Payments',
      news_label: 'A money transfer platform with push notifications and transaction tracking.',
      news_content: 'CashDash is a cutting-edge money transfer platform designed for seamless and secure financial transactions. It supports instant transfers, push notifications for real-time updates, and a user-friendly interface that ensures a hassle-free experience. Whether sending funds locally or internationally, CashDash prioritizes speed, security, and reliability.',
      news_authors: 'John Doe',
      news_periode: '1990-02-18',
      product_website: '',
    },
    { 
      news_id: 't-news-002', 
      news_img: './assets/img/logo-tornixtech/keletick-logo.png',  
      categorie: 'Finance & Payments', 
      news_label: 'A mobile application that includes categorized content.', 
      news_content: 'CashDash is a cutting-edge money transfer platform designed for seamless and secure financial transactions. It supports instant transfers, push notifications for real-time updates, and a user-friendly interface that ensures a hassle-free experience. Whether sending funds locally or internationally, CashDash prioritizes speed, security, and reliability.', 
      news_authors: 'Edith Piaf', 
      news_periode: '1990-02-18', 
      product_website: '' },
    { 
      news_id: 't-news-003', 
      news_img: './assets/img/logo-tornixtech/goparadize-logo.png',  
      categorie: 'Finance & Payments', 
      news_label: 'A platform similar to Airbnb for booking accommodations.', 
      news_content: 'CashDash is a cutting-edge money transfer platform designed for seamless and secure financial transactions. It supports instant transfers, push notifications for real-time updates, and a user-friendly interface that ensures a hassle-free experience. Whether sending funds locally or internationally, CashDash prioritizes speed, security, and reliability.', 
      news_authors: 'Diath Vidal', 
      news_periode: '1990-02-18', },
    { 
      news_id: 't-news-004', 
      news_img: './assets/img/logo-tornixtech/flotys-logo.jpeg',  
      categorie: 'Finance & Payments', 
      news_label: 'A mobile app for car tracking with an interactive map and necessary vehicle monitoring features.', 
      news_content: 'CashDash is a cutting-edge money transfer platform designed for seamless and secure financial transactions. It supports instant transfers, push notifications for real-time updates, and a user-friendly interface that ensures a hassle-free experience. Whether sending funds locally or internationally, CashDash prioritizes speed, security, and reliability.', 
      news_authors: 'Harry Legrand', 
      news_periode: '1990-02-18', 
      product_website: '' },
    { 
      news_id: 't-news-005', 
      news_img: './assets/img/logo-tornixtech/flowhub-logo.jpeg',  
      categorie: 'Finance & Payments', 
      news_label: 'A transaction partner system similar to Hub2 for managing payouts.', 
      news_content: 'CashDash is a cutting-edge money transfer platform designed for seamless and secure financial transactions. It supports instant transfers, push notifications for real-time updates, and a user-friendly interface that ensures a hassle-free experience. Whether sending funds locally or internationally, CashDash prioritizes speed, security, and reliability.', 
      news_authors: 'John Harry', 
      news_periode: '1990-02-18', 
      product_website: '' },
    { 
      news_id: 't-news-006', 
      news_img: './assets/img/logo-tornixtech/feedsy-logo.png',  
      categorie: 'Finance & Payments', 
      news_label: 'A feed management system similar to Beezup, designed to improve e-commerce feed handling.', 
      news_content: 'CashDash is a cutting-edge money transfer platform designed for seamless and secure financial transactions. It supports instant transfers, push notifications for real-time updates, and a user-friendly interface that ensures a hassle-free experience. Whether sending funds locally or internationally, CashDash prioritizes speed, security, and reliability.', 
      news_authors: 'Jean Jack', 
      news_periode: '1990-02-18', 
      product_website: '' },
    { 
      news_id: 't-news-007', 
      news_img: './assets/img/logo-tornixtech/vendigo-logo.jpeg',  
      categorie: 'Finance & Payments', 
      news_label: 'A SaaS e-commerce platform built using Angular and Flask, designed to help businesses sell online.',
      news_content: 'CashDash is a cutting-edge money transfer platform designed for seamless and secure financial transactions. It supports instant transfers, push notifications for real-time updates, and a user-friendly interface that ensures a hassle-free experience. Whether sending funds locally or internationally, CashDash prioritizes speed, security, and reliability.', 
      news_authors: 'Lui Marc', 
      news_periode: '1990-02-18', 
      product_website: '' },
    { 
      news_id: 't-news-008', 
      news_img: './assets/img/logo-tornixtech/polisure-logo.jpeg',  
      categorie: 'Finance & Payments', 
      news_label: 'An upcoming insurance marketplace where users can purchase tailored insurance newss.', 
      news_content: 'CashDash is a cutting-edge money transfer platform designed for seamless and secure financial transactions. It supports instant transfers, push notifications for real-time updates, and a user-friendly interface that ensures a hassle-free experience. Whether sending funds locally or internationally, CashDash prioritizes speed, security, and reliability.',
      news_authors: 'Claire Marie', 
      news_periode: '1990-02-18', 
      product_website: '' },
    { 
      news_id: 't-news-009', 
      news_img: './assets/img/logo-tornixtech/nixlmail-logo.jpeg',  
      categorie: 'Finance & Payments', 
      news_label: 'custom email solution', 
      news_content: 'CashDash is a cutting-edge money transfer platform designed for seamless and secure financial transactions. It supports instant transfers, push notifications for real-time updates, and a user-friendly interface that ensures a hassle-free experience. Whether sending funds locally or internationally, CashDash prioritizes speed, security, and reliability.', 
      news_authors: 'David Loui', 
      news_periode: '1990-02-18', 
      product_website: '' },
    { 
      news_id: 't-news-010', 
      news_img: './assets/img/logo-tornixtech/trackam-logo.jpeg',  
      categorie: 'Finance & Payments', 
      news_label: 'A feed management system similar to Beezup, designed to improve e-commerce feed handling',
       news_content: 'CashDash is a cutting-edge money transfer platform designed for seamless and secure financial transactions. It supports instant transfers, push notifications for real-time updates, and a user-friendly interface that ensures a hassle-free experience. Whether sending funds locally or internationally, CashDash prioritizes speed, security, and reliability.', 
       news_authors: 'Laith Dagari', 
       news_periode: '1990-02-18', 
       product_website: '' },
    { 
      news_id: 't-news-011', 
      news_img: './assets/img/logo-tornixtech/emotiq-logo.jpeg',  
      categorie: 'Finance & Payments', 
       news_label: 'management', 
       news_content: 'CashDash is a cutting-edge money transfer platform designed for seamless and secure financial transactions. It supports instant transfers, push notifications for real-time updates, and a user-friendly interface that ensures a hassle-free experience. Whether sending funds locally or internationally, CashDash prioritizes speed, security, and reliability.', 
       news_authors: 'Franc Amilton', 
       news_periode: '1990-02-18', 
       product_website: '' },
    { 
      news_id: 't-news-012', 
      news_img: './assets/img/logo-tornixtech/my-assets-logo.jpeg',  
      categorie: 'Finance & Payments', 
      news_label: 'sets is designed to democratize', 
      news_content: 'CashDash is a cutting-edge money transfer platform designed for seamless and secure financial transactions. It supports instant transfers, push notifications for real-time updates, and a user-friendly interface that ensures a hassle-free experience. Whether sending funds locally or internationally, CashDash prioritizes speed, security, and reliability.', 
      news_authors: 'Latrille silver', 
      news_periode: '1990-02-18', 
      product_website: '',
    },
  ];
  newsId: any;

  constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.newsId = params['p_id'];

      // Trouver le produit dans la liste en fonction de l'ID
      this.news = this.all_news.find(news => news.news_id === this.newsId);
    });
  }


}
