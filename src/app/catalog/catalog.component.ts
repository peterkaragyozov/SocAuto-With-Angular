import { Component } from '@angular/core';
import { ListingService } from '../listing.service';
import { ICar } from '../shared/interfaces/car';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {

  listings: ICar[] | undefined;

  constructor( private listingService: ListingService) { 
    this.fetchListings();
  }

  fetchListings(): void {
    this.listings = undefined;
    this.listingService.getAllListings().subscribe(listings => this.listings = listings);
  }

}
