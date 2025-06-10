import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaymentService } from '../payment/payment.service';
import { HeaderComponent } from '../../include/header/header.component';
import { FooterComponent } from '../../include/footer/footer.component';

declare var bootstrap: any;

@Component({
  selector: 'app-webexpress',
  standalone: true,
  imports: [
    RouterModule, 
    ReactiveFormsModule, 
    CommonModule, 
    HeaderComponent,
    FooterComponent,
    // ServicesModule,
  ],
  templateUrl: './webexpress.component.html',
  styleUrl: './webexpress.component.scss'
})
export class WebexpressComponent {

  data: any;
  is_loading: boolean = false;
  selectedPlan: any = {};

  constructor(
    private paymentservice: PaymentService,
    private meta: Meta, private title: Title
    ) { }

  ngOnInit(): void {
    this.title.setTitle('WebExpress by TornixTech – Create Your Website Fast');
    
    this.meta.addTags([
      { name: 'description', content: 'Launch your website with WebExpress. Affordable, mobile-ready, and domain included. Starting at 150,000 FCFA.' },
      { name: 'keywords', content: 'tornixtech, WebExpress, create website, Côte d\'Ivoire, site vitrine, website builder' },
      { name: 'author', content: 'TornixTech' },

      // Open Graph
      { property: 'og:title', content: 'WebExpress by TornixTech – Website in Days!' },
      { property: 'og:description', content: 'Affordable websites for entrepreneurs in Côte d’Ivoire. Hosting, design & domain included.' },
      { property: 'og:image', content: 'https://tornixtech.com/assets/webexpress-banner.png' },
      { property: 'og:url', content: 'https://tornixtech.com/services/webexpress' },
      { property: 'og:type', content: 'website' },

      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'WebExpress – Build Your Website with TornixTech' },
      { name: 'twitter:description', content: 'Modern, mobile-friendly websites built fast. Try WebExpress today.' },
      { name: 'twitter:image', content: 'https://tornixtech.com/assets/webexpress-banner.png' }
    ]);

   }

  paymentForm: FormGroup = new FormGroup({
    projet: new FormControl('tornixtech', Validators.required),
    firstname: new FormControl(null, Validators.required),
    lastname: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    mobile: new FormControl(null, Validators.required),
    country: new FormControl("Cote D'ivoire", Validators.required),
    city: new FormControl(null, Validators.required),
    plan_title: new FormControl(null, Validators.required),
    amount: new FormControl(null, Validators.required),
    description: new FormArray([], Validators.required),
  });

  setPlanDetails(title: string, amount: string, description: string) {
    this.selectedPlan = {
        title: title,
        amount: amount,
        features: description.split(', ')
    };

    this.paymentForm.patchValue({
        plan_title: title,
        amount: amount
    });

    const descriptionArray = this.paymentForm.get('description') as FormArray;
    descriptionArray.clear();
    description.split(', ').forEach((desc: string) => {
        descriptionArray.push(new FormControl(desc));
    });
  }
  
  triggerGtag(event_name:any, label:any) {
    (window as any).gtag('event', event_name, {
      button_location: 'webexpress',
      label: label
    });
  }
  
  onSubmit() {
    this.is_loading = true;
    if (this.paymentForm.valid) {
      let body = this.paymentForm.value;

      this.paymentservice.CreatePaymentPlan(body).subscribe({
        next: (res: any) => {
          this.data = res?.payment_infos || {};

          if (res?.status === 'success') {
              this.onPayement();
          } else {
            console.log('Error:', res);
            this.showErrorToast('Failed to create payment plan.');
            this.is_loading = false;
          }
        },
        error: (err: any) => {
          console.log('Error:', err);
          this.is_loading = false;
          this.showErrorToast('Failed to create payment plan.');
        },
        complete: () => {
          console.log('complete');
          this.is_loading = false;
        }
      });
    }
  }

  resetForms() {
    this.paymentForm.reset();
  }

  closePaymentModal() {
    this.resetForms();
  }

  showSuccessToast(message: string) {
    const toastBody = document.getElementById('successToastBody');
    if (toastBody) {
      toastBody.textContent = message;
    } else {
      console.warn('Success toast body element not found.');
    }

    const toastElement = document.getElementById('successToast');
    const toast = new bootstrap.Toast(toastElement, { delay: 2000 });
    toast.show();
  }

  showErrorToast(message: string) {
    const toastBody = document.getElementById('errorToastBody');
    if (toastBody) {
      toastBody.textContent = message;
    } else {
      console.warn('Error toast body element not found.');
    }

    const toastElement = document.getElementById('errorToast');
    const toast = new bootstrap.Toast(toastElement, { delay: 2000 });
    toast.show();
  }

  onPayement() {
    if (this.data) {
      let body = {
        payment_id: this.data?.payment_id,
        project_name: this.data?.projet,
        firstname: this.data?.firstname,
        lastname: this.data?.lastname,
        email: this.data?.email,
        mobile: this.data?.mobile,
        country: this.data?.country,
        city: this.data?.city,
        product: this.data?.plan_title,
        amount: this.data?.amount,
        description: Array.isArray(this.data?.description) ? this.data?.description.join(', ') : this.data?.description
      };
      const paymentId  = body?.payment_id;

      this.paymentservice.CreatePaymentGetway(body).subscribe({
        next: (res: any) => {
          console.log('Paiement enregistré avec succès:', res);
          if (res?.status === 'success') {
            const redirectUrl = `https://payments.tornixtech.com/payment/summary/${encodeURIComponent(paymentId)}`;
            console.log("Redirection vers :", redirectUrl);
            window.location.href = redirectUrl;
          }
        },
        error: (err: any) => {
          console.log('Erreur lors de l’enregistrement du paiement:', err);
        },
        complete: () => {
          console.log('Processus d’enregistrement terminé.');
        }
      });
    } else {
      console.log("Aucune donnée de paiement disponible.");
    }
  }
}