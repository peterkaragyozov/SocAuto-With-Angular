import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingService } from '../listing.service';
import { ICar } from '../shared/interfaces/car';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  listing: any | undefined;
  constructor(
    private listingService: ListingService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {

    this.fetchListing();
   }

  get car() : ICar{
    return this.listing;
  }

  edit(form: NgForm) {
    console.log("test");
    if (form.invalid) { return; }
    const id = this.activatedRoute.snapshot.params.carId;
    
      this.listingService.editListing(id, form.value).subscribe(
        {
          next: () => this.router.navigate([`/details/${id}`])
        });
  }

  fetchListing(): void {
    this.listing = undefined;
    const id = this.activatedRoute.snapshot.params.carId;
    this.listingService.getListingDetails(id).subscribe(listing => {
      this.listing = listing;
    });
  }

}
