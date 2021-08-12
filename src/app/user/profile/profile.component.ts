import { Component, OnInit } from '@angular/core';
import { ListingService } from 'src/app/listing.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  listings: any | undefined;

  constructor(
    private listingService: ListingService,
    private userService: UserService
  ) { 
    this.getMyCars();
  }

  getMyCars() {
    const id = this.userService.user?.objectId;
    this.listingService.getMyListings(id!).subscribe({
      next: (listing: any) => {
        this.listings = listing.results;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}