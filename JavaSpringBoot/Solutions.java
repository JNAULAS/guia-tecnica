/*  CONFIGURACION DESPLIEGUE PROYECTO SPRING BOOT SERVER WILDFLY */
// DEFINIR EL RIPO DE EMPAQUETADO


/*	LINEAMIENTOS PROGRAMACION JAVA	*/
¿Que es un Java Optional? . Un Java Optional es un tipo de variable que que puede almacenar dos valores .

El primer valor es un Objeto que nosotros necesitamos utilizar .
El segundo valor es un valor “vacio” o empty en el caso de que nos encontremos con una ausencia de un valor concreto y queramos informar al programador de que estamos ante dicha situación.

Optional<ClienteDTO> clienteDTO= buscarNotaSobresaliente(notas);
    if (clienteDTO.isPresent()) {
        ClienteDTO nota=clienteDTO.get();
      System.out.println(nota.getValor());
      System.out.println(nota.getAsignatura());
    }

