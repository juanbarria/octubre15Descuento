let btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", () => {
  let mes: number = Number(dato1.value);
  let cantidad: number = Number(dato2.value);
  let monto: number = Number(dato3.value);
  let montoConDescuento: number = 0;
  let descuento: number = 0;
  let precioTotal: number = monto * cantidad;
  if (mes === 10) {
    descuento = precioTotal * 0.15;
    montoConDescuento = precioTotal - descuento;
    console.log(
      "Por comprar en el mes de Octubre Ud tiene un 15% de descuento"
    );
    console.log("El monto a pagar es: " + montoConDescuento);
  } else {
    console.log("Ud. no tiene descuento, el monto a pagar es: " + precioTotal);
  }
});
