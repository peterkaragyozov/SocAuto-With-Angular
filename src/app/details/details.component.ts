import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListingService } from '../listing.service';
import { ICar } from '../shared/interfaces/car';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  listing: any | undefined;

  constructor( 
    private listingService: ListingService,
    private activatedRoute: ActivatedRoute
    ) { 
    this.fetchListing();
  }

  fetchListing(): void {
    this.listing = undefined;
    const id = this.activatedRoute.snapshot.params.objectId;
    this.listingService.getListingDetails(id).subscribe(listing => this.listing = listing);
  }

}
