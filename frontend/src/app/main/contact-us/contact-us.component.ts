import { Component } from '@angular/core';
import { ContactService } from '../services/contact/contact.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailService } from '../services/email/email.service';

declare var bootstrap: any;

@Component({
  selector: 'app-contact-us',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

  
  isloading: boolean = false;

  constructor(
    private contactService: ContactService,
    private emailService: EmailService,
    private router: Router,
  ) { 
    this.isloading = false;
  }

  formdata: FormGroup = new FormGroup({
    // name: new FormControl('', Validators.required), // Changement de fullname à name
    fullname : new FormControl('', Validators.required),
    email : new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^(?:\+225|225|0)?[0-9]{10}$/)]),
    company: new FormControl('', Validators.required),
    notes: new FormControl('', Validators.required),
    // source: new FormControl(window.location.href),
    source: new FormControl('Tornixtech'),
    pipeline_stage_id: new FormControl(1)
  })

  validation() {
    if (this.formdata.invalid) {
      this.showErrorToast("Please fill all required fields");
      return;
    }

    this.isloading = true;


    const formData = {
      name: this.formdata.get("fullname")?.value || '',
      email: this.formdata.get("email")?.value || '',
      phone: this.formdata.get("phone")?.value || '',
      company: this.formdata.get("company")?.value || '',
      notes: this.formdata.get("notes")?.value || '',
      // source: this.formdata.get("source")?.value || '',
      source: 'Tornixtech',
      pipeline_stage_id: 1,
    };

    // this.contactService.SendMail(formData).subscribe({
    //   next:(res:any)=> {
    //     console.log("Message sent successfully :", res);
    //     this.showSuccessToast("Your message has been successfully sent!");
    //     this.formdata.reset();
    //   },
    //   error: (err: any) => {
    //     console.log("Error while sending :", err);
    //     this.showErrorToast("Message failed to send. Please try again.");
    //   },
    //   complete: () => {
    //     this.isloading = false;
    //     // console.log("contactService match");
    //   },
    // })
    
    // Email
    this.emailService.createLead(formData).subscribe({
      next: (res) => {
        console.log("Lead created :", res);
        this.showSuccessToast("Your message has been successfully sent!");
        this.formdata.reset();
      },
      error: (err) => {
        console.error("Lead API error :", err);
        this.showErrorToast(err.error?.message || "Message failed to send. Please try again.");
      },
      complete: () => { 
        this.isloading = false 
      }
    });

  }


  showSuccessToast(message: string) {
    const toastBody = document.getElementById("successToastBody");
    if (toastBody) {
      toastBody.textContent = message;
    } else {
      console.warn("Success toast body element not found.");
    }

    const toastElement = document.getElementById("successToast");
    const toast = new bootstrap.Toast(toastElement, { delay: 2000 });
    toast.show();
  }

  showErrorToast(message: string) {
    const toastBody = document.getElementById("errorToastBody");
    if (toastBody) {
      toastBody.textContent = message;
    } else {
      console.warn("Error toast body element not found.");
    }

    const toastElement = document.getElementById("errorToast");
    const toast = new bootstrap.Toast(toastElement, { delay: 2000 });
    toast.show();
  }
  
}
