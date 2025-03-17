import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-webexpress',
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './webexpress.component.html',
  styleUrl: './webexpress.component.scss'
})
export class WebexpressComponent {

}
