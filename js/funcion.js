class Perfil {
    constructor(Nombre, Apellido, fNacimiento, Email, Password, Edad = ""){
        this.nombre = Nombre;
        this.apellido = Apellido;
        this.nacimiento = fNacimiento;
        this.email = Email;
        this.password = Password
        this.edad = Edad;
    }

    validar (){
        console.log(this.nombre + " " + this.apellido + " " + "esta logueado");
    }
}

class Pelotas {
    constructor(id, marca, precio, unidades= " "){
        this.id = parseInt(id);
        this.marca = marca;
        this.precio = parseFloat(precio);
        this.unidades = parseInt(unidades);
    }

    precioTotal (){
        this.precio = this.precio * 1.21;

    }
}
class Raquetas {
    constructor(id, marca, pulgadas, precio, unidades= " "){
        this.id = parseInt(id);
        this.marca = marca;
        this.pulgadas = parseFloat(pulgadas);
        this.precio = parseFloat(precio);
        this.unidades = parseInt(unidades);
    }
    precioTotal (){
        this.precio = this.precio * 1.21;

    }

}