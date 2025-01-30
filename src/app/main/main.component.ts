import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "./include/footer/footer.component";
import { HeaderComponent } from "./include/header/header.component";
import { CommonModule } from '@angular/common';

declare var AOS: any

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule, FooterComponent, HeaderComponent, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit, AfterViewInit {

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // Ajouter l'événement de scroll pour le toggle de classe scrolled
    this.renderer.listen(window, 'scroll', () => {
      const selectBody = document.body;
      const selectHeader = document.querySelector('#header');
      if (selectHeader && (selectHeader.classList.contains('scroll-up-sticky') ||
        selectHeader.classList.contains('sticky-top') ||
        selectHeader.classList.contains('fixed-top'))) {
        window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
      }
    });
  }

  ngAfterViewInit(): void {
    // Initialiser les événements après le rendu du DOM
    this.initMobileNav();
    this.initScrollTop();
    this.initAOS();
    this.initSwiper();
  }

  private initMobileNav() {
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    if (mobileNavToggleBtn) {
      this.renderer.listen(mobileNavToggleBtn, 'click', () => {
        document.body.classList.toggle('mobile-nav-active');
        mobileNavToggleBtn.classList.toggle('bi-list');
        mobileNavToggleBtn.classList.toggle('bi-x');
      });
    }

    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      this.renderer.listen(navmenu, 'click', () => {
        if (document.body.classList.contains('mobile-nav-active')) {
          document.body.classList.remove('mobile-nav-active');
        }
      });
    });

    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
      this.renderer.listen(navmenu, 'click', (e) => {
        e.preventDefault();
        // @ts-ignore
        navmenu.parentNode.classList.toggle('active');
        // @ts-ignore
        navmenu.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      });
    });
  }

  private initScrollTop() {
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
      this.renderer.listen(scrollTop, 'click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      this.renderer.listen(window, 'scroll', () => {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      });
    }
  }

  private initAOS() {
    if (typeof AOS !== 'undefined') {
      AOS.init({ duration: 600, easing: 'ease-in-out', once: true, mirror: false });
    }
  }

  private initSwiper() {
    // @ts-ignore
    if (typeof Swiper !== 'undefined') {
      document.querySelectorAll(".init-swiper").forEach(swiperElement => {
        let config = JSON.parse(swiperElement.querySelector(".swiper-config")?.innerHTML.trim() || "{}");
        // @ts-ignore
        new Swiper(swiperElement, config);
      });
    }
  }
}
