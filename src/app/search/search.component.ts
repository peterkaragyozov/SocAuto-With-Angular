import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  listings: any | undefined;

  constructor(
    private listingService: ListingService,
  ) { }

  search(form: NgForm) {
    const { year } = form.value;
    this.listingService.search(year).subscribe({
      next: (listing: any) => {
        this.listings = listing.results;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
