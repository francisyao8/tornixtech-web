import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaymentService } from '../payment/payment.service';

declare var bootstrap: any;

@Component({
  selector: 'app-webexpress',
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './webexpress.component.html',
  styleUrl: './webexpress.component.scss'
})
export class WebexpressComponent {

  data: any;
  is_loading: boolean = false;

  constructor(private paymentservice: PaymentService) { }

  ngOnInit(): void { }

  paymentForm: FormGroup = new FormGroup({
    projet: new FormControl('tornixtech', Validators.required),
    firstname: new FormControl(null, Validators.required),
    lastname: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    mobile: new FormControl(null, Validators.required),
    country: new FormControl(null, Validators.required),
    city: new FormControl(null, Validators.required),
    plan_title: new FormControl(null, Validators.required),
    amount: new FormControl(null, Validators.required),
    // description: new FormArray([], Validators.required),
  });

  setPlanDetails(title: string, amount: string, description: string) {
    this.paymentForm.patchValue({
      plan_title: title,
      amount: amount,
      description: description
    });
  }

  onSubmit() {
    this.is_loading = true
    if (this.paymentForm.valid) {
      let body = this.paymentForm.value;

      this.paymentservice.CreatePaymentPlan(body).subscribe({
        next: (res: any) => {
          this.data = res?.payment_infos || {};

          if (res?.status === 'success') {
              this.onPayement()

          
          } else {
            console.log('Error:', res);
            this.showErrorToast('Failed to create payment plan.');
            this.is_loading = false

          }
        },
        error: (err: any) => {
          console.log('Error:', err);
          this.is_loading = false
          this.showErrorToast('Failed to create payment plan.');


        },
        complete: () => {
          console.log('complete');
          this.is_loading = false

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
        description: this.data?.description,

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
