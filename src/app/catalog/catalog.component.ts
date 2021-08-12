import { Component } from '@angular/core';
import { ListingService } from '../listing.service';
import { ICar } from '../shared/interfaces/car';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})

export class CatalogComponent {

  listings: ICar[] | undefined;

  get isAuthenticating(): boolean {
    return this.userService.user === undefined;
  }

  constructor( 
    private listingService: ListingService,
    private userService: UserService
    ) 
    { 
    this.fetchListings();
  }

  fetchListings(): void {
    this.listings = undefined;
    this.listingService.getAllListings().subscribe(listings => this.listings = listings.results);
  }

}
