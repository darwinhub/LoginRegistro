function enviarForm(nombre,email,asusto,mensaje){
    let mensajeFinal="A continuacion te indico los campos a rellenar\n";
    //Para comprobar los distintos campos a validar
    let nombreComp=comprobar(nombre);
    let emailComp=comprobar(email);
    let asuntoComp=comprobar(asusto);
    let mensajeComp=comprobar(mensaje);
    
    if (nombreComp==true) {mensajeFinal+="Te falta por incluir el Nombre\n"; }
    if (emailComp==true) {mensajeFinal+="Te falta por incluir el Email\n";  }
    if (asuntoComp==true) {mensajeFinal+="Te falta por incluir el Asunto\n"; } 
    if (mensajeComp==true) {mensajeFinal+="Te falta por incluir el Mensaje\n";} 

    if ( nombreComp==false && emailComp==false && asuntoComp==false && mensajeComp==false){
            mensajeFinal=("Gracias por contactar con nosotros "+nombre.toUpperCase() + 
            "\nLeeremos su mensaje y le responderemos los antes posible ") ;    
        }
        return alert(mensajeFinal);
        console.log(mensajeFinal);
}
//compruba que el texto enviado sea distinto de vacio
function comprobar(texto){
    let estado=false;
    if (texto=="") {
        estado=true;
    }
    return estado;
}