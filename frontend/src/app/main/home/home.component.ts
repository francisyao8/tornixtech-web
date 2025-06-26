import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Swiper } from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy{

  private clientsSwiper: Swiper | null = null;
  
  ngOnInit() {
    console.log(document.getElementById("featured-services"));
  }

  ngAfterViewInit() {
    console.log(document.getElementById("featured-services"));

    this.initializeSwiper();
  }

  ngOnDestroy() {
    if (this.clientsSwiper) {
      this.clientsSwiper.destroy(true, true);
    }
  }

  private initializeSwiper() {
    // Attendre un petit délai pour s'assurer que les éléments sont bien rendus
    setTimeout(() => {
      // Configure Swiper modules
      Swiper.use([Navigation, Pagination, Autoplay]);

      this.clientsSwiper = new Swiper('.clientsSwiper', {
        // Paramètres de base
        loop: true,
        speed: 600,
        centeredSlides: false,
        
        // Autoplay
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        
        // Slides par vue
        slidesPerView: 'auto',
        spaceBetween: 30,
        
        // Pagination
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        
        // Navigation (optionnel)
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
        // Breakpoints responsifs
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 50
          },
          992: {
            slidesPerView: 5,
            spaceBetween: 60
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 70
          }
        },
        
        // Options supplémentaires
        grabCursor: true,
        watchOverflow: true,
      });

      console.log('Swiper initialisé dans Angular');
    }, 100);
  }
  
}
