import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrl: './request.component.css',
})
export class RequestComponent {
  name: string = '';
  email: string = '';
  bookName: string = '';
  author: string= '';
  message: string = '';
  successMessage: string='';
  errors: string[] = [];
  formSubmitted: boolean = false;

  constructor(private api: ApiService) {}
  submitForm() {
    this.errors = [];
    let emailPattern = /^[a-zA-Z0-9\._]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
    if (!this.name || this.name.length < 3) {
      this.errors.push('Name should be atleast three characters long');
    }
    if (!this.email || !emailPattern.test(this.email)) {
      this.errors.push('Invalid Email');
    }
    if (!this.bookName || this.bookName.length == 0) {
      this.errors.push('Book Title is missing');
    }
    if(!this.author || this.author.length == 0){
      this.errors.push('Author name is missing');
    }

    if (this.errors.length == 0) {
      this.api
        .addRequest({
          name: this.name,
          email: this.email,
          bookName: this.bookName,
          author: this.author,
          message: this.message,
        })
        .subscribe({
          next: () => {
            this.successMessage=('Book Request Submitted Successfully');
            this.formSubmitted = true; //hide the form
          },
          error: (error) => {
            alert('Something went wrong. Please try again');
          },
        });
    }
  }
}
