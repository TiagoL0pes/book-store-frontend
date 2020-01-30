import { Injectable } from '@angular/core';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  showSuccessMessage(title = 'Your changes has been successfully', position?) {
    swal.fire({
      position: position || 'center',
      icon: 'success',
      title,
      showConfirmButton: false,
      timer: 1500
    });
  }

  showErrorMessage(title = 'Oops...', text = 'Something went wrong!') {
    swal.fire({
      icon: 'error',
      title,
      text
    });
  }

  showConfirmDialog() {
    return swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });
  }

  showDeleteMessage(message = 'Has been deleted.') {
    swal.fire(
      'Deleted!',
      message,
      'success'
    );
  }
}
