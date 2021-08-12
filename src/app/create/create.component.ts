import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ListingService } from 'src/app/listing.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(
    private listingService: ListingService,
    private router: Router
  ) { }

  create(form: NgForm): void {
    if (form.invalid) { return; }
    this.listingService.createListing(form.value).subscribe({
      next: (test) => {
        console.log(test);
        this.router.navigate(['/all-listings']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


}
