import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{

  product: any = null;

  all_products = [
    { product_id: 't-cashdash-001', product_label: 'Cashdash', product_link: './assets/img/logo-tornixtech/cashdash-logo.jpeg' },
    { product_id: 't-keletik-002', product_label: 'Keletik', product_link: './assets/img/logo-tornixtech/keletick-logo.png' },
    { product_id: 't-goparadize-003', product_label: 'Goparadize', product_link: './assets/img/logo-tornixtech/goparadize-logo.png' },
    { product_id: 't-flotys-004', product_label: 'Flotys', product_link: './assets/img/logo-tornixtech/flotys-logo.jpeg' },
    { product_id: 't-flowhub-005', product_label: 'Flowhub', product_link: './assets/img/logo-tornixtech/flowhub-logo.jpeg' },
    { product_id: 't-feedsy-006', product_label: 'Feedsy', product_link: './assets/img/logo-tornixtech/feedsy-logo.png' }
  ];
  constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('id');
      this.product = this.all_products.find(p => p.product_id === productId);
    });
  }

}
