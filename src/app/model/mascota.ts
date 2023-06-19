export class Mascota {
    id!: number;
    fechaIngreso: string;
    nombreMascota: string;
    propietario: string;
    dui: string;
    direccion: string;
    descripcionOperacion: string;
    tiempoEsperado: string;


    constructor(fechaIngreso: string, nombreMascota: string, propietario: string, dui: string, direccion: string, descripcionOperacion: string, tiempoEsperado: string) {
        this.fechaIngreso = fechaIngreso;
        this.nombreMascota = nombreMascota;
        this.propietario = propietario;
        this.dui = dui;
        this.direccion = direccion;
        this.descripcionOperacion = descripcionOperacion;
        this.tiempoEsperado = tiempoEsperado;
    }
}
