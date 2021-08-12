import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingService } from '../listing.service';
import { ICar } from '../shared/interfaces/car';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  listing: any | undefined;

  constructor( 
    private listingService: ListingService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService
    ) { 
    this.fetchListing();
  }

  get isOwner(): boolean {
    console.log(this.listing.objectId);
    console.log(this.userService.user?.objectId);
    return this.listing.owner.objectId == this.userService.user?.objectId;
  }

  fetchListing(): void {
    this.listing = undefined;
    const id = this.activatedRoute.snapshot.params.carId;
    this.listingService.getListingDetails(id).subscribe(listing => {
      this.listing = listing;
    });
  }

  delete(): void {
    const id = this.activatedRoute.snapshot.params.carId;
    const confirmed = confirm('Are you sure?');
    if (confirmed) {
      this.listingService.deleteListing(id).subscribe({
        next: () => this.router.navigate(['/all-listings'])
      }
      );
    }  
  }
}
