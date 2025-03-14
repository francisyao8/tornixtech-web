import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [RouterModule, CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{

  product: any = null;

  all_products = [
    {
      product_id: 't-cashdash-001',
      product_label: 'Cashdash',
      product_link: './assets/img/logo-tornixtech/cashdash-logo.jpeg',
      product_description: 'CashDash is a cutting-edge money transfer platform designed for seamless and secure financial transactions. It supports instant transfers, push notifications for real-time updates, and a user-friendly interface that ensures a hassle-free experience. Whether sending funds locally or internationally, CashDash prioritizes speed, security, and reliability.',
      categorie: 'Finance & Payments',
      product_website: 'https://cashdash.ci/main'
    },
    {
      product_id: 't-keletcik-002',
      product_label: 'Keletcik',
      product_link: './assets/img/logo-tornixtech/keletick-logo.png',
       product_description: 'Keletick Mobile is a dynamic mobile application designed to organize and present categorized content efficiently. Whether it’s articles, videos, or other forms of media, the platform ensures a seamless browsing experience. With a well-structured UI, search capabilities, and personalized recommendations, users can easily access relevant content tailored to their interests.',
      categorie: 'Mobile Applications',
      product_website: 'https://keletick.ci/fr/main/home'
    },
    {
      product_id: 't-goparadize-003',
      product_label: 'Goparadize',
      product_link: './assets/img/logo-tornixtech/goparadize-logo.png',
      product_description: 'GoParadize is a next-generation accommodation booking platform, similar to Airbnb, that connects travelers with verified hosts. It offers a seamless user experience with secure payment processing, real-time property availability, and a wide selection of accommodations ranging from budget stays to luxury rentals. GoParadize ensures safe, affordable, and comfortable lodging for travelers worldwide.',
      categorie: 'Travel & Accommodation',
      product_website: 'htthttps://goparadize.ci'
    },
    {
      product_id: 't-flotys-004',
      product_label: 'Flotys',
      product_link: './assets/img/logo-tornixtech/flotys-logo.jpeg',
      product_description: 'Flotys is an advanced car tracking solution tailored for individuals and fleet operators. Featuring an intuitive map interface, it allows users to monitor their vehicles in real time, track movements, and ensure security. With additional functionalities like geofencing, alerts, and performance analytics, Flotys enhances vehicle management, safety, and efficiency.',
      categorie: 'Vehicle Tracking & Fleet Management',
      product_website: 'https://flotyshub.com/'
    },
    {
      product_id: 't-flowhub-005',
      product_label: 'Flowhub',
      product_link: './assets/img/logo-tornixtech/flowhub-logo.jpeg',
      product_description: 'FlowHub is a high-performance payout transaction partner system, designed for businesses handling frequent fund disbursements. It automates financial workflows, ensuring compliance, transparency, and security. With multi-currency support, real-time transaction tracking, and integration with banking networks, FlowHub simplifies and optimizes the payout process for businesses of all sizes.',
      categorie: 'Financial Solutions',
      product_website: 'https://flowhubnetwork.com/'
    },
    {
      product_id: 't-feedsy-006',
      product_label: 'Feedsy',
      product_link: './assets/img/logo-tornixtech/feedsy-logo.png',
      product_description: 'Feedsy is an intelligent feed management system built to help e-commerce businesses optimize product visibility across multiple online marketplaces. Similar to Beezup, Feedsy automates feed synchronization, updates pricing and inventory, and ensures that product listings comply with marketplace requirements. This results in improved conversions and streamlined online sales.',
      categorie: 'E-commerce & Marketing',
      product_website: 'https://feedsy.app/'
    },
    {
      product_id: 't-vendigo-007',
      product_label: 'VendiGo',
      product_link: './assets/img/logo-tornixtech/vendigo-logo.jpeg',
      product_description: 'VendiGo is a powerful SaaS-based e-commerce platform built with Angular and Flask, providing businesses with all the tools needed to establish and manage their online stores. From customizable storefronts to advanced payment integrations, VendiGo simplifies e-commerce operations, offering a scalable solution that caters to startups and large enterprises alike.',
      categorie: 'E-commerce Platforms',
      product_website: ''
    },
    {
      product_id: 't-polisure-008',
      product_label: 'PoliSure',
      product_link: './assets/img/logo-tornixtech/polisure-logo.jpeg',
      product_description: 'PoliSure is an upcoming insurance marketplace designed to simplify the process of buying insurance policies. It connects users with trusted insurers, offering tailored plans based on individual needs. With an intuitive comparison tool, transparent pricing, and easy policy management, PoliSure ensures that users can secure coverage with confidence and convenience.',
      categorie: 'Insurance',
      product_website: ''
    },
    {
      product_id: 't-onixmail-009',
      product_label: 'OnixMail',
      product_link: './assets/img/logo-tornixtech/nixlmail-logo.jpeg',
      product_description: 'OnixMail is TornixTech’s proprietary email solution, offering a secure and professional communication platform. Built with reliability and efficiency in mind, it ensures high email deliverability, spam filtering, and encrypted messaging. Whether for business or personal use, OnixMail provides a seamless experience, integrating with major productivity tools to enhance collaboration.',
      categorie: 'Communication',
      product_website: ''
    },
    {
      product_id: 't-trackam-010',
      product_label: 'Trackam',
      product_link: './assets/img/logo-tornixtech/trackam-logo.jpeg',
      product_description: 'Trackam is a robust achievement tracking platform designed to help individuals and teams stay on top of their goals. Whether managing personal growth, business milestones, or team performance, Trackam provides an intuitive dashboard with progress tracking, reminders, and analytics. It serves as an essential tool for boosting productivity and ensuring accountability.',
      categorie: 'Productivity & Goals',
      product_website: ''
    },
    {
      product_id: 't-emotiq-011',
      product_label: 'Emotiq',
      product_link: './assets/img/logo-tornixtech/emotiq-logo.jpeg',
      product_description: 'Emotiq is a modern review management system that enables businesses to gather instant customer feedback through emoji-based ratings. Instead of lengthy reviews, users can express satisfaction or dissatisfaction with a single click, streamlining the feedback process. Businesses can analyze customer sentiment in real time, helping them improve services and enhance customer satisfaction.',
      categorie: 'Customer Feedback & Reviews',
      product_website: ''
    },
    {
      product_id: 't-my-assets-012',
      product_label: 'My Assets',
      product_link: './assets/img/logo-tornixtech/my-assets-logo.jpeg',
      product_description: 'My Assets is a digital platform under TornixTech that allows users to manage their stock investments seamlessly. The platform enables individuals to open a brokerage account remotely, purchase stocks, and track their investments online.',
      categorie: 'Online Stock Investment Management Platform',
      product_website: ''
    },
    {
      product_id: 't-bluebus-013',
      product_label: 'BLUEBUS',
      product_link: './assets/img/logo-tornixtech/bluebus-logo.jpeg',
      product_description: 'BlueBus is a modern and user-friendly platform that allows travelers to search, compare, and purchase bus tickets online with ease. Designed to simplify transportation bookings, BlueBus connects users with reliable bus operators, offering seamless reservations and secure payment options.',
      categorie: 'Your Smart Ticketing Solution for Bus Travel',
      product_website: ''
    },
    {
      product_id: 't-johelp-014',
      product_label: 'Johelp',
      product_link: './assets/img/logo-tornixtech/johelp-logo.jpeg',
      product_description: 'Johelp is a smart service marketplace that connects users with trusted professionals for all their daily needs. Whether you need a plumber, electrician, beauty expert, handyman, or business service, Johelp makes it easy to find, book, and get the job done—fast!',
      categorie: 'With Johelp, getting help is just a click away!.',
      product_website: ''
    },
    {
      product_id: 't-maroue-015',
      product_label: 'Maroue',
      product_link: './assets/img/logo-tornixtech/maroue-logo.jpeg',
      product_description: 'Maroue is a modern, hassle-free car booking platform that gives you the freedom to rent and drive at your convenience. Whether you need a car for a quick trip, a business meeting, or a weekend getaway, Maroue provides a seamless experience with a variety of self-drive and chauffeur-driven options.',
      categorie: 'Maroue - Your Smart Car Booking & Self-Drive Solution',
      product_website: ''
    },
  ];
  productId: any;


  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = params['p_id'];

      // Trouver le produit dans la liste en fonction de l'ID
      this.product = this.all_products.find(product => product.product_id === this.productId);
    });
  }

}
