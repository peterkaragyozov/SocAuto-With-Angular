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
  currentPage: number = 1;
  itemsPerPage: number = 6;
  totalItems: number = 0;

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
    this.listingService.getAllListings().subscribe(listings => {
      
      
      const sortedResult = listings.results.sort(function(a:ICar, b:ICar){ return b.createdAt.localeCompare(a.createdAt) });
      this.totalItems = sortedResult.length;
      const toReturn = sortedResult.slice((this.currentPage * this.itemsPerPage) - this.itemsPerPage, (this.currentPage * this.itemsPerPage));
      this.listings = toReturn;
    })
  }

  nextPage(): void{
    let totalPages = this.totalItems / this.itemsPerPage;
    if (this.currentPage < totalPages ) {
      this.currentPage++;
      this.fetchListings();
    }

  }

  previousPage(): void{
    if ( this.currentPage > 1) {
      this.currentPage--;
      this.fetchListings();
    }

  }

}
