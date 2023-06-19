import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Mascota } from '../model/mascota';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  fechaIngreso!: string;
  nombreMascota!: string;
  propietario!: string;
  dui!: string;
  direccion!: string;
  descripcionOperacion!: string;
  tiempoEsperado!: string;

  constructor(
    private productService: ProductService,
    private toast: ToastrService,
    private router: Router,
  ) { }
  ngOnInit(): void {

  }
  onCreate(): void {
    const product = new Mascota(this.fechaIngreso, this.nombreMascota, this.propietario, this.dui, this.direccion, this.descripcionOperacion,  this.tiempoEsperado);
    this.productService.create(product).subscribe(
      data => {
        this.toast.success(data.message, 'Ok', { timeOut: 3000, positionClass: 'toast-top-center' });
        this.router.navigate(['']);
      },
      err => {
        this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center' });

      }

    );
  }
}
