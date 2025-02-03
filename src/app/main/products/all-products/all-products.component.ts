import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-all-products',
  imports: [RouterModule, CommonModule],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss'
})
export class AllProductsComponent implements OnInit{


  all_products = [
    { product_id: 't-cashdash-001', product_label: 'Cashdash', product_link: './assets/img/logo-tornixtech/cashdash-logo.jpeg', product_description: 'A money transfer platform with push notifications and transaction tracking.', },
    { product_id: 't-keletik-002', product_label: 'Keletik', product_link: './assets/img/logo-tornixtech/keletick-logo.png', product_description: 'A mobile application that includes categorized content (still in development).', },
    { product_id: 't-goparadize-003', product_label: 'Goparadize', product_link: './assets/img/logo-tornixtech/goparadize-logo.png', product_description: 'A platform similar to Airbnb for booking accommodations.', },
    { product_id: 't-flotys-004', product_label: 'Flotys', product_link: './assets/img/logo-tornixtech/flotys-logo.jpeg', product_description: 'A mobile app for car tracking with an interactive map and necessary vehicle monitoring features.', },
    { product_id: 't-flowhub-005', product_label: 'Flowhub', product_link: './assets/img/logo-tornixtech/flowhub-logo.jpeg', product_description: 'A transaction partner system similar to Hub2 for managing payouts.', },
    { product_id: 't-feedsy-006', product_label: 'Feedsy', product_link: './assets/img/logo-tornixtech/feedsy-logo.png', product_description: 'A feed management system similar to Beezup, designed to improve e-commerce feed handling.', },

    { product_id: 't-vendigo-007', product_label: 'VendiGo', product_description: 'A SaaS e-commerce platform built using Angular and Flask, designed to help businesses sell online.', },
    { product_id: 't-polisure-008', product_label: 'PoliSure', product_description: 'An upcoming insurance marketplace where users can purchase tailored insurance products.', },
    { product_id: 't-onixmail-009', product_label: 'OnixMail', product_description: 'TornixTech\'s custom email solution for seamless and professional communication.', },
    { product_id: 't-trackam-0010', product_label: 'Trackam', product_description: 'A feed management system similar to Beezup, designed to improve e-commerce feed handling.', },
    { product_id: 't-emotiq-0011', product_label: 'Emotiq', product_description: 'A feed management system similar to Beezup, designed to improve e-commerce feed handling.', },

  ];
  
  
constructor(){}

  ngOnInit(): void {
   
  }

}



