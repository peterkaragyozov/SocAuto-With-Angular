import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICar } from './shared/interfaces/car';


const userId = localStorage.getItem('user');
const host = 'https://parseapi.back4app.com';

@Injectable()
export class ListingService {
  constructor(private http: HttpClient) {}

  createListing(listing: ICar) {
    const userId = getUserData().objectId;
    // addOwner(listing);
    return this.http.post(host + '/classes/Automobile', listing, { 
      headers: {
        'X-Parse-Application-Id': '6H3iTk0euavDwf60foOsTImMVczZPRVdLlDDyxPI',
        'X-Parse-REST-API-Key': 'jhtq0fFqz3ghVVgQLhLf0uPMcVUALCOmoZwLk3WU'
      }
    });
  }

  editListing(id: string, listing: ICar) {
    return this.http.put(host + '/classes/Automobile/' + id, listing, { 
      headers: {
        'X-Parse-Application-Id': '6H3iTk0euavDwf60foOsTImMVczZPRVdLlDDyxPI',
        'X-Parse-REST-API-Key': 'jhtq0fFqz3ghVVgQLhLf0uPMcVUALCOmoZwLk3WU'
      }
    });
  }

  getMyListings(userId: string) {
    const query = JSON.stringify({owner: createPointer('_User', userId)});
    return this.http.get(host + '/classes/Automobile?where=' + query, { 
      headers: {
        'X-Parse-Application-Id': '6H3iTk0euavDwf60foOsTImMVczZPRVdLlDDyxPI',
        'X-Parse-REST-API-Key': 'jhtq0fFqz3ghVVgQLhLf0uPMcVUALCOmoZwLk3WU'
      }
    });
  }

  getAllListings() {
    return this.http.get<ICar[]>(host + `/classes/Automobile`, { 
      headers: {
        'X-Parse-Application-Id': '6H3iTk0euavDwf60foOsTImMVczZPRVdLlDDyxPI',
        'X-Parse-REST-API-Key': 'jhtq0fFqz3ghVVgQLhLf0uPMcVUALCOmoZwLk3WU'
      }
    });
  }

  getListingDetails(id: string) {
    return this.http.get(host + '/classes/Automobile/' + id + '?include=owner', { 
      headers: {
        'X-Parse-Application-Id': '6H3iTk0euavDwf60foOsTImMVczZPRVdLlDDyxPI',
        'X-Parse-REST-API-Key': 'jhtq0fFqz3ghVVgQLhLf0uPMcVUALCOmoZwLk3WU'
      }
    });
  }

  deleteListing(id: string) {
    return this.http.delete(host + '/classes/Automobile/' + id, { 
      headers: {
        'X-Parse-Application-Id': '6H3iTk0euavDwf60foOsTImMVczZPRVdLlDDyxPI',
        'X-Parse-REST-API-Key': 'jhtq0fFqz3ghVVgQLhLf0uPMcVUALCOmoZwLk3WU'
      }
    });
  }

  search(query: string) {
    return this.http.get(host + '/classes/Automobile?where=' + `{"year":${query}}`, { 
      headers: {
        'X-Parse-Application-Id': '6H3iTk0euavDwf60foOsTImMVczZPRVdLlDDyxPI',
        'X-Parse-REST-API-Key': 'jhtq0fFqz3ghVVgQLhLf0uPMcVUALCOmoZwLk3WU'
      }
    });
  }


}





export function getUserData() {
  const user = sessionStorage.getItem('user');
  if (user) {
      return JSON.parse(user);
  } else {
      return undefined;
  }
}

// export function setUserData(user) {
//   sessionStorage.setItem('user', JSON.stringify(user));
// }

export function clearUserData() {
  sessionStorage.removeItem('user');
}




// // authentication function (login/register/logout)
// export async function login(username, password) {
//   const result = await post(settings.host + '/login', { username, password });
//   setUserData(result);
//   return result;
// }

// export async function register(email, username, password) {
//   const result = await post(settings.host + '/users', { email, username, password });
//   setUserData(result);
//   return result;
// }

// export function logout() {
//   const result = post(settings.host + '/logout', {});
//   clearUserData();
//   return result;
// }

function createPointer(name: string, id: string) {
    return {
        __type: 'Pointer', 
        className: name,
        objectId: id 
        }
}

// function addOwner(object) {
//     const userId = getUserData().objectId;
//     object.owner = createPointer('_User', userId);   
// }



// //Application-specific requests

// //get all listings
// export async function getAllListings(startIndex, itemsPerPage) {
//     // ?order=createdAt&skip=${page}&limit=6
//     const response = await api.get(host + `/classes/Automobile`);
//     const results = response.results
//     const sortedResult = results.sort(function(a, b){ return b.createdAt.localeCompare(a.createdAt) });
//     const toReturn = sortedResult.slice(startIndex, startIndex + itemsPerPage);
//     return toReturn;
// }

// //for pagination
// export async function getCollectionSize() {
//     const response = await api.get(host + '/classes/Automobile?count=1');
//     return response.count;
// }