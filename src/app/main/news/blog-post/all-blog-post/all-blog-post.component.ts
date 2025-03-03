import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-blog-post',
  imports: [],
  templateUrl: './all-blog-post.component.html',
  styleUrl: './all-blog-post.component.scss'
})
export class AllBlogPostComponent implements OnInit {

 
  all_news = [
    { news_id: 't-news-001', news_img: './assets/img/logo-tornixtech/cashdash-logo.jpeg', news_label: 'News 1', news_content: 'A money transfer platform with push notifications and transaction tracking.', news_authors: 'John Doe', news_periode: '1990-02-18', },
    { news_id: 't-news-002', news_img: './assets/img/logo-tornixtech/keletick-logo.png', news_label: 'News 2', news_content: 'A mobile application that includes categorized content.', news_authors: 'Edith Piaf', news_periode: '1990-02-18', },
    { news_id: 't-news-003', news_img: './assets/img/logo-tornixtech/goparadize-logo.png', news_label: 'News 3', news_content: 'A platform similar to Airbnb for booking accommodations.', news_authors: 'Diath Vidal', news_periode: '1990-02-18', },
    { news_id: 't-news-004', news_img: './assets/img/logo-tornixtech/flotys-logo.jpeg', news_label: 'News 4', news_content: 'A mobile app for car tracking with an interactive map and necessary vehicle monitoring features.', news_authors: 'Harry Legrand', news_periode: '1990-02-18', },
    { news_id: 't-news-005', news_img: './assets/img/logo-tornixtech/flowhub-logo.jpeg', news_label: 'News 5', news_content: 'A transaction partner system similar to Hub2 for managing payouts.', news_authors: 'John Harry', news_periode: '1990-02-18', },
    { news_id: 't-news-006', news_img: './assets/img/logo-tornixtech/feedsy-logo.png', news_label: 'News 6', news_content: 'A feed management system similar to Beezup, designed to improve e-commerce feed handling.', news_authors: 'Jean Jack', news_periode: '1990-02-18', },
    { news_id: 't-news-007', news_img: './assets/img/logo-tornixtech/vendigo-logo.jpeg',  news_label: 'News 7', news_content: 'A SaaS e-commerce platform built using Angular and Flask, designed to help businesses sell online.', news_authors: 'Lui Marc', news_periode: '1990-02-18', },
    { news_id: 't-news-008', news_img: './assets/img/logo-tornixtech/polisure-logo.jpeg', news_label: 'News 8', news_content: 'An upcoming insurance marketplace where users can purchase tailored insurance newss.', news_authors: 'Claire Marie', news_periode: '1990-02-18', },
    { news_id: 't-news-009', news_img: './assets/img/logo-tornixtech/nixlmail-logo.jpeg', news_label: 'News 9', news_content: 'TornixTech\'s custom email solution for seamless and professional communication.', news_authors: 'David Loui', news_periode: '1990-02-18', },
    { news_id: 't-news-010', news_img: './assets/img/logo-tornixtech/trackam-logo.jpeg', news_label: 'News 10', news_content: 'A feed management system similar to Beezup, designed to improve e-commerce feed handling.', news_authors: 'Laith Dagari', news_periode: '1990-02-18', },
    { news_id: 't-news-011', news_img: './assets/img/logo-tornixtech/emotiq-logo.jpeg',  news_label: 'News 11', news_content: 'A feed management system similar to Beezup, designed to improve e-commerce feed handling.', news_authors: 'Franc Amilton', news_periode: '1990-02-18', },
    { news_id: 't-news-012', news_img: './assets/img/logo-tornixtech/my-assets-logo.jpeg', news_label: 'News 12', news_content: 'My Assets is designed to democratize stock market access by making investment management easy, secure, and efficient.', news_authors: 'Latrille silver', news_periode: '1990-02-18', },
    
    // { news_id: 't-bluebus-013', news_img: './assets/img/logo-tornixtech/bluebus-logo.jpeg', news_label: 'BLUEBUS',  news_content: '...', },

  ];

  ngOnInit(): void {
    
  }

}
