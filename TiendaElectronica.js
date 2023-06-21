class ProductoElectronico {
    constructor(nombre, marca, precio){
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
    }
}
class Telefono extends ProductoElectronico {
    constructor(nombre, marca, precio, almacenamiento){
        super(nombre, marca, precio);
        this.almacenamiento = almacenamiento;
    }

    obtenerInfo(){
        return `Nombre ${this.nombre}, Marca ${this.marca}, Precio ${this.precio}, Almacenamiento ${this.almacenamiento}`;
    }

}

class Televisor extends ProductoElectronico {
    constructor(nombre, marca, precio, pantalla) {
        super(nombre, marca, precio);
        this.pantalla = pantalla;
    }

    obtenerInfo(){
        return `Nombre ${this.nombre}, Marca ${this.marca}, Precio ${this.precio}, Pantalla ${this.pantalla}`;
    }
}

class Ordenador extends ProductoElectronico {
    constructor(nombre, marca, precio, cpu) {
        super(nombre, marca, precio);
        this.cpu = cpu;
    }

    obtenerInfo(){
        return `Nombre ${this.nombre}, Marca ${this.marca}, Precio ${this.precio}, CPU ${this.cpu}`;

    }
}

const productosDisponibles = [
    new Telefono("iPhone 14","Apple",1400,"256GB"),
    new Telefono("Galaxy S23","Samsung",900,"128GB"),
    new Telefono("Pixel 8","Google",800,"128GB"),
    new Televisor("Smart TV","Samsung",1500,"55 pulgadas"),
    new Televisor("LED TV","LG",1200,"48 pulgadas"),
    new Televisor("OLED TV","Sony",2000,"65 pulgadas"),
    new Ordenador("MackBook Pro","Apple",2000,"Intel 11400F"),
    new Ordenador("ThinkPad","Lenovo",1500,"AMD 7700X"),
    new Ordenador("Surface Pro","Microsoft",1800,"AMD 5800XT")
];

for(let i = 0; i < productosDisponibles.length; i++){
    console.log(productosDisponibles[i].obtenerInfo());
}

function buscarProductoPorMarca(marca){
    let arrayMarca = [];
    for(let i = 0; i < productosDisponibles.length; i++){
        if(productosDisponibles[i].marca == marca){
            arrayMarca.push(productosDisponibles[i]);
        }
    }
    console.log(arrayMarca);
}

buscarProductoPorMarca("Samsung");