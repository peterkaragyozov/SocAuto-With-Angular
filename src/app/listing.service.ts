import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICar } from './shared/interfaces/car';
import { Options } from './shared/options'
import { UserService } from './user/user.service';


const userId = localStorage.getItem('user');
const host = 'https://parseapi.back4app.com';

@Injectable()
export class ListingService {
  constructor(private http: HttpClient,
    private userService: UserService) {}

  getAllListings() {
    const result = this.http.get<any>(host + `/classes/Automobile`, Options.options);
    return result;
  }

  getListingDetails(id: string) {
    const result = this.http.get<ICar>(host + '/classes/Automobile/' + id + '?include=owner', Options.options);
    return result;
  }

  createListing(listing: ICar) {
    const userId = this.userService.user?.objectId;
    addOwner(listing, userId!);
    const result = this.http.post(host + '/classes/Automobile', listing, Options.options);
    return result;
  }

  editListing(id: string, listing: any) {
    const result = this.http.put(host + '/classes/Automobile/' + id, listing, Options.options);
    return result;
  }
  
  deleteListing(id: string) {
    return this.http.delete(host + '/classes/Automobile/' + id, Options.options);
  }

  getMyListings(userId: string) {
    const query = JSON.stringify({owner: createPointer('_User', userId)});
    const result = this.http.get(host + '/classes/Automobile?where=' + query, Options.options)
    return result;
  }

  search(query: string) {
    const result = this.http.get(host + '/classes/Automobile?where=' + `{"year":${query}}`, Options.options);
    return result;
  }

}




function createPointer(name: string, id: string) {
    return {
        __type: 'Pointer', 
        className: name,
        objectId: id 
        }
}

  function addOwner(object: ICar, userId: string) {
    object.owner = createPointer('_User', userId);   
  }
