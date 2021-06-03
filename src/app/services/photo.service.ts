import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Photo } from '../interfaces/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  
  URL =  'http://localhost:4000/api/photos';

  constructor(private _http: HttpClient) { }

  createPhoto(title: string, description: string, photo: File){
        const fd = new FormData();
        fd.append('title', title);
        fd.append('description', description);
        fd.append('image', photo);
        return this._http.post(this.URL, fd  );
  }

  getPhotos(){
    return this._http.get<Photo[]>(this.URL)
  }

  getPhoto(id: string){
    return this._http.get<Photo>  (this.URL+'/'+id);
  }

  deletePhoto(id: string){
    return this._http.delete(this.URL+'/'+id);
  }

  updatePhoto(id: string, title: string, description: string){
    return this._http.put(`${this.URL}/${id}`,{title, description});
  }
}
