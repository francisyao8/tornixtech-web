import { Component } from '@angular/core';
import { ContactService } from '../../services/contact/contact.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
    private router: Router,
  ) { 
    this.isloading = false;
  }

  formdata: FormGroup = new FormGroup({
    fullname : new FormControl(null, Validators.required),
    email : new FormControl(null, [Validators.required, Validators.email]),
    subject : new FormControl(null, Validators.required),
    message : new FormControl(null, Validators.required),
  })

  validation() {
    const formData = {
      fullname: this.formdata.get("fullname")?.value || '',
      email: this.formdata.get("email")?.value || '',
      subject: this.formdata.get("subject")?.value || '',
      message: this.formdata.get("message")?.value || '',
    };

    this.contactService.SendMail(formData).subscribe({
      next:(res:any)=> {
        console.log("Message sent successfully :", res);
        this.showSuccessToast("Your message has been successfully sent!");
        this.formdata.reset();
      },
      error: (err: any) => {
        console.log("Error while sending :", err);
        this.showErrorToast("Message failed to send. Please try again.");
      },
      complete: () => {
        this.isloading = false;
        // console.log("contactService match");
      },
    })
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
