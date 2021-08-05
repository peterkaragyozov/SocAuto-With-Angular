import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const appKey = 'kid_BkREFei8m'; // APP KEY HERE;
const appSecret = '0d7ba5cd67b749c58d2c49d02a5ec7ec'; // APP SECRET HERE;
const userId = localStorage.getItem('_id');
const username = localStorage.getItem('username');
const createListingUrl = `https://baas.kinvey.com/appdata/${appKey}/cars`;
const getAllListingsUrl = `https://baas.kinvey.com/appdata/${appKey}/cars?query={}&sort={"_kmd.ect": -1}`;
const host = 'https://parseapi.back4app.com';

@Injectable()
export class ListingService {
  constructor(private http: HttpClient) {}

  create(model) {
    return this.http.post(createListingUrl, model);
  }

  edit(id, model) {
    console.log(id, model);
    return this.http.put(
      `https://baas.kinvey.com/appdata/${appKey}/cars/${id}`,
      model
    );
  }
  getUserListings(user) {
    return this.http.get(
      `https://baas.kinvey.com/appdata/${appKey}/cars?query={"seller":"${user}"}&sort={"_kmd.ect": -1}`
    );
  }

  getAllListings() {
    return this.http.get(host + `/classes/Automobile`);
  }

  getListingDetails(carId) {
    return this.http.get(
      `https://baas.kinvey.com/appdata/${appKey}/cars/${carId}`
    );
  }

  deleteListing(carId) {
    return this.http.delete(
      `https://baas.kinvey.com/appdata/${appKey}/cars/${carId}`
    );
  }

}


// function createPointer(name, id) {
//   return {
//       __type: 'Pointer', 
//       className: name,
//       objectId: id 
//       }
// }

// function addOwner(object) {
//   const userId = getUserData().objectId;
//   object.owner = createPointer('_User', userId);
  
// }

// //Application-specific requests

// //get all listings
// export async function getAllListings(startIndex, itemsPerPage) {
//   // ?order=createdAt&skip=${page}&limit=6
//   const response = await api.get(host + `/classes/Automobile`);
//   const results = response.results
//   const sortedResult = results.sort(function(a, b){ return b.createdAt.localeCompare(a.createdAt) });
//   const toReturn = sortedResult.slice(startIndex, startIndex + itemsPerPage);
//   return toReturn;
// }

// //for pagination
// export async function getCollectionSize() {
//   const response = await api.get(host + '/classes/Automobile?count=1');
//   return response.count;
// }

// //get listing by id
// export async function getListingById(id) {
//   return await api.get(host + '/classes/Automobile/' + id + '?include=owner');
// }

// //create listing
// export async function createListing(listing) {
//   const userId = getUserData().objectId;
//   addOwner(listing);
//   return await api.post(host + '/classes/Automobile', listing);
// }

// //edit listing by id
// export async function updateListing(id, listing) {
//   return await api.put(host + '/classes/Automobile/' + id, listing);
// }

// //delete listing by id
// export async function deleteListing(id) {
//   return await api.del(host + '/classes/Automobile/' + id);
// }

// //get my listings
// export async function getMyListings(userId) {
//   const query = JSON.stringify({owner: createPointer('_User', userId)});
//   const result = await api.get(host + '/classes/Automobile?where=' + query);
//   return result.results;
// }

// export async function search(query) {
//   const result = await api.get(host + '/classes/Automobile?where=' + `{"year":${query}}`);
//   return result.results;
// }