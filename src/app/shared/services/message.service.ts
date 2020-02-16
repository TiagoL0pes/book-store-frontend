import { Injectable } from '@angular/core';
import swal from 'sweetalert2';
import { Message } from '../enums/message.enum';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  showSuccessMessage(title = Message.CHANGE_SUCCESS, position?) {
    swal.fire({
      position: position || 'center',
      icon: 'success',
      title,
      showConfirmButton: false,
      timer: 1500
    });
  }

  showLogoutMessage(title = Message.LOGOUT, position?) {
    swal.fire({
      position: position || 'center',
      icon: 'info',
      title,
      showConfirmButton: false,
      timer: 1000
    });
  }

  showErrorMessage(title = Message.OOPS, text = Message.GENERAL_ERROR) {
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

  showDeleteMessage(message = Message.ACTION_DELETE) {
    swal.fire(
      'Deleted!',
      message,
      'success'
    );
  }
}
