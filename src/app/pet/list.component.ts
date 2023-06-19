import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ToastrService } from 'ngx-toastr';

import Swal from 'sweetalert2';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';
import { MessageService } from '../services/message.service';
import { Mascota } from '../model/mascota';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  mascotas: Mascota[] = [];


  isAdmin: boolean = false;

  constructor(
    private productService: ProductService,
    private toast: ToastrService,
    private storageService: StorageService,
    private router: Router,
    private messageService: MessageService,
    private tokenService: TokenService

  ) { }



  ngOnInit(): void {
    this.getProducts();
    this.isAdmin = this.tokenService.isAdmin();

  }

  getProducts(): void {
    this.productService.list().subscribe(
      data => {
        this.mascotas = data;
        console.log(data);
      },
      err => {
        console.log(err);
     //   this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center' });
      }
    );
  }
  onDelete(id: number): void {
    Swal.fire({
      title: '¡Estas seguro?',
      text: 'No puedes revertir esta acción',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        this.productService.delete(id).subscribe(
          data => {
            this.toast.success(data.message, 'Ok', { timeOut: 3000, positionClass: 'toast-top-center' });
            this.getProducts();
          },
          err => {
            this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center' });

          }
        );
        console.log('Producto eliminado ' + id);

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'canceled',
          'producto no eliminado',
          'error'

        )
      }

    });
  }

  setProduct(product: Mascota): void {
    this.storageService.setProduct(product);
    this.router.navigate(['/update']);
  }


  sendProduct(product: Mascota): void {
    this.messageService.sendMessage(product);
    this.router.navigate(['/update']);
  }
}
