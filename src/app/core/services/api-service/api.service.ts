import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponseBase, HttpResponse } from '@angular/common/http';
import { catchError, map, tap } from "rxjs/operators";
import { HttpHeaderResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  private getHeaders() {

    const auth = '';
    let headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': auth
    })
    // Add more based on the API
    return headers;
  }

  fetchData(url) {
    const httpOptions = {
      headers: this.getHeaders()
    }
    return this.http.get(url, httpOptions).pipe(map(res => res ? res : res));
  }

  postData(url, formData) {
    return this.http.post(url, formData, {
      headers: this.getHeaders()
    }).pipe(map(res => res ? res : res));
  }

  putData(url, formData) {

    return this.http.put(url, formData, {
      headers: this.getHeaders()
    }).pipe(map(res => res ? res : res));
  }

  patchData(url, formData) {

    return this.http.patch(url, formData, {
      headers: this.getHeaders()
    }).pipe(map(res => res ? res : res));
  }

  deleteData(url) {
    return this.http.delete(url, {
      headers: this.getHeaders()
    }).pipe(map(res => res ? res : res));
  }

  fetchFileData(url) {
    console.log(url);

    return this.http.get(url, {
      responseType: 'blob',
      headers: this.getHeaders()
    })
  }

  postDataWithFile(url, formData) {

    const auth = '';
    const headers = new HttpHeaders({
      'Authorization': auth
    })
    return this.http.post(url, formData, {
      headers: headers
    }).pipe(map(res => res ? res : res));

  }

  uploadFileAndGetFileId(file,url, callback: (model: any) => void): any {
    let fileId;
    if (file) {
      const formData: FormData = new FormData();
      formData.append('file', file, file.name);
      this.postDataWithFile(url, formData).subscribe(
        (data) => {
          if (data['results']['fileId']) {
            fileId = data['results']['fileId'];
          }
          callback(fileId);
        })
    }
  }

}
