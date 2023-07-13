/********************************* DESARROLLO REACT *********************************/
/* Link Acceso pagina oficial react  */
https://reactjs.org/

React no es un framework, es una libreria orientada a la vista y se complementa con redoc.
Virtual Dome: es un mecanismo que permite trabajar con un dome en memoria.

/* Instalaciones Necesarias */
NodeJS: https://nodejs.org/es/
NodeJS es una plataforma dedicada a ejecutar JavaScript moderna que react necesita, despliega automatizaciones del desarrollo que necesita react para funcionar.
Visual Studio Code: https://code.visualstudio.com/
Script para Crear Proyectos.
https://es.reactjs.org/docs/create-a-new-react-app.html
https://es.reactjs.org/docs/create-a-new-react-app.html

/* Herramienta para convertir lenguaje jsx a lenguaje javaScript y html*/
https://babeljs.io/
https://webpack.js.org/

	
/* Herramienta terminal */
https://cmder.net/

/*	COMANDOS DESARROLLO PROYECTO	*/
1.- Instalacion para creacion de Proyecto: 
	Abrimos una consola cmd o terminal para mac y ejecutamos el siguiente comando:
	npm i -g create-react-app
	es un script para instalar dependencias para react.

	i = Instalacion.
	g = Global

2.- Creacion de Proyecto: 
	Abrimos la consola cmd y nos ubicamos en la ruta donde deseamos crear el proyecto y ejecutamos la linea de comando
	create-react-app nombre_proyecto (debe ser en letras minusculas)

	Se instalan las dependencias 
	React
	ReactDOM
	ReactScripts

	ReactJS es una libreria pero tiene un entorno de desarrollo bajo node js y necesita de node para generar sus dependencias y funcionalidad al final cuando se haga un 
	buil para puesta en producción, node js solo es necesario para el desarrollo para que nos ayude a generar todas las automatizaciones para que los transpiladores funciones
	Trabaja con JavaScript jsx que es un lenguaje extendido es una mezcla de javascript con html, para esto necesitamos una herramienta que nos permita convertir 
	un lenguaje en otro para esto utiliza babel que es quien convierte a javascript y html 	 



3.- Ejecucion de proyectos.
	ejecutamos la consola cmd y nos ubicamos dentro de la carpeta del proyecto y ejecutamos el comando:
	npm start

  yarn start
    Starts the development server.
    	
  yarn build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

  yarn eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd pry_react_uno
  yarn start

4.- Para manejo de estilos utilizamos bootstrap.
	https://getbootstrap.com/
	Copiamos el comando CSS only:
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
5.- Pagina despliegue proyectos.
	http://localhost:3000/



/*									CLASE 1 REACT 								*/
1. Objetivo.
	 Qué es React
 	Qué es NPM
 	Qué es Babel
 	Qué es Webpack

 	Al final del modulo sera capaz de:
 		 Entender los conceptos básicos de React
		 Entender y utilizar proyectos NPM
		 Instalar paquetes de NPM como dependencias de un proyecto
		 Entender y utilizar Babel como compilador de código Javascript
		 Entender y utilizar Webpack como bundler para compilar código
		 Implementar configuración entre Babel y Webpack

2. Contenido de la clase.
		BABEL
	2.1 Que es babel.
		Babel es un traspilador de javaScript y nos permite escribir codigo javaScript de ultima generacion, y el se encarga de traspilarlo a codigo compatible con la mayoria de los navegadores
		porque decimos traspilar y no compilar, compilar es generar codigo ejecutable por la maquina, mientras que traspilar es generar codigo de un lengiaje a codigo de otro lenguaje, 
		con un acompatibilidad mejorada sin alterar en funcionamiento, otra caracteristica es que genera codigo de un nivel igual al del lenguaje original.

		Como funcioan babel, funciona atravez de plagens, babel por si no hace nada, y como otros traspiladores trabaja en tres etapas:
			Parseo: 
			Transformación:
			Impresión: 

			Si no le agregamos funcionalidad los plagens a babel no ara mas que volver a escribir el mismo codigo en su forma original, los plagens mas comunes son los de transformacion,
			como por ejemplo el plugin object split que nos permite utilizar la sintaxis extendiada como los tres puntos, tambien tenemos plagens de impresion que nos serviria como por ejemplo para reducir codigo,
			generado y asi armar paquetes mas chicos y ahorrar espacio cada transaformacion que realiza babel se publica independientemente con un plagen, tambien podemos crear nuestro propio plagens
			a parte de los plagens tenemos los preset son conjunto de plagens que no spermite agrupar por version o en todo caso las necesarias para utilizar js.
	2.2 Como funciona babel.

	2.3 Como instalar babel.

	2.4 Como configurar babel.

		Webpack
	2.5 Que es webpack.

	2.6 Como instalar Webpack.

	2.7 Como configurar Webpack.

		ES6 : Conceptos Basicos
	2.8 

/*=================================================== DESARROLLO CLASE 1	===================================================*/
Vamos a tratar de una libreria REACTJS, es un alibreria orientada al control de la vista, para desarrolar aplicaciones spa, 
se utiliza para construir las interfaces de usuario.

No es un framework es una libreria, es una libreria muy potente y se orienta a la vista a desarrollar todo lo que tiene que ver con el despliegue de 
los elementos html en la vista y su control de una manera eficiente.

Sus objetivos:
Crear interfaces de usuario para lo que son paginas Simple Page Aplication.
Maneja la vista.
Es una libreria orientada a la vista pero complementada con redox, a lo que es la Vista en Modelo controlador, que es lo que hace que react se complemente 
y sea un framework utilizando utilizando oviamente redoc.
Trabaja con virtual DOM, el virtual DOM es un mecanismo que permite trabajar con un DOM en memoria que acelera bastante las transacciones hacia el DOM real y solamente 
trabaja entre el DOM de memoria y el DOM real y ocurre el pasaje o cambio la ctuaizacion de cambios en peque;as porciones que cambia la vista, no se actualiza todo.


ReactJS Necesita:

-Tener instalado NodeJS: es una plataforma dedicada a ajecutar javaScript es lo que es fuera de la web 
es una plataforma moderna que react neesita para los mecanismos, despliega automatizaciones del desarrollo NODEJS
Pagina oficial: https://nodejs.org/es/, descargar la LTS xq se soporta mas o menos x 5 años 

Verificar si esta instado, seleccionados una consola CMD, y ingresmos el codigo node -v 

Descargar una mejor consola para trabajar con front: https://cmder.net/

L consola permite Permite realizar sum,
creat mas consolas, soporta comandos linux,
permite copiar y crear de una ventana a la otra.

Tambien se utiliza un editor de codigo:
https://code.visualstudio.com/

- Instalaciones necesarias para desarrollar el curso.
Se necesita tener instalado un scripts para crear proyectos desde cero:
	create-react-app, 
	pagina oficial: https://es.reactjs.org/docs/create-a-new-react-app.html

Con esto permte crear un proyecto base con todos los mecanismos y compilacion y traspilacion de despliqgeu y un servidor de desarrollo en forma automatica.
- Instalacion create react app
en un aconsola cmd: 
	npm i -g create-react-app: 
								cuando se termine de instalar ya se tiene la herramienta lista para trabajar.
Verificar la instalacion de node: npm-v
- Uso de create react app cuando esta instalado para la creacion de proyectos.
		create-react-app mi_primer_proyecto.
		Aqui se instala las dependencias REACT , REEACT DOME y REACT SCRIPT 
		Para paso a produccion node JS no se necesita cuando hagamos el buil.
		React trabaja on un lenguaje JSX, es un javaScript extendido que es una mescla con javaScript y html.
		para este necesitamos una herramienta que nos permita conertir ese lenguaje en otro, para esto utilizamos las herramientas:

		babel js: Es un traspilador es uan herramienta que permite convertir un lenguaje superior en un lenguaje inferior o lenguaje base que entienda el navegador,
				Convierte el lengiaje base en lenguaje javaScript 
				Babel se instala y es una dependencia JS.

				https://babeljs.io/

		webpack js: Facilita un servidor de desarrollo para poder ver como vamos haciendo el proyecto, es una herramienta que corre bajo NODEJS. 

				https://webpack.js.org/

		JSX: Es un seudolenguaje que facilita la estructura de codigo html dentro del codigo de la app, permite mezclar codigo javaScript con html, 
			La ide que tiene react para trabajar es dividir la creacion de nuestra pajina web en pequeños componentes, esos componentes van a tener nombres de clase,
			o nombres de funcion ya que hay dos tipos de componentes, 

		Tiene un script para lanzar la aplicaion al navegador, si hacemos cambiso se refresca solo, para esto tenemos el webpack xq webpack tiene un servidor de desarrollo,
		hay un servidor escuchando el cambio en nuestro codigo, cada vez que hay un cambio en navegador de refresca automaticamente.

		Leer siempres informacion de la pagina oficial: https://reactjs.org/docs/getting-started.html
- Acceso a proyecto dentro de la consola, ls o dir y podemos ver la carpeta creado.
	Luego accedemos a la carpeta cd nombre de la carpeta y ya dentro de la misma 
- Partes de proyecto:
	Ejecucion de proyecto: npm start 

	ReadMe: Por lo general muestra los diferentes comandos que podemos utilizar.
	Package.json: Es un archivo de configuracion que pertenece s node js, contiene listado de dependencias que se necesita para trabajar con node js
	Package-lock.json: Listado de dependencias mas detallado.
	.gitignore: voy a tener dependencias que no necesito subir al git xq no es necesario 
	node-modules: Es una carpeta en donde estan todas las dependencias de node, instaladas para que el proyecto funcione, es muy pesado por lo cual cuando se hace un backup 
					no se considera, para restaurar o descargas la dependencias me posiciono sobre package.json y pongo npm install. se construye o restituye las dependencias
	public: Aqui tenemos un archivo index.html, es el contenedor del proyecto, la vista del proyecto, para empesar borramos los comentarios del index.html, 
			- Cambiamos en lenguaje del documento a español <!--Cambio de en a es-->  <html lang="es"> 
			- Cambiamos el titulo <title>React App</title> por <title>Aplicacion ReactJS</title>, guardamos con ctrl+s y se refresca en la pagina.

			- Index.html esta la vista principal de nuestro proyecto.
	src: Contiene los componentes principales y fundamentales, los componentes en react po lo general estan echos en pares, siempre los nombres de los componentes empiezan con mayusculas
			Contiene el componente principal App.js y App.css la parte de estilos.

			En el archivo App.js esta mezclada la parte de codigo JavaScript (funciones) y dentro de esta la parte html la unios de las dos es el formato JSX

			Formato JSX 
						------> (Javascript y tiene enbebido HTML)
						function App() {
										  return (
										    <div className="App">
										      <header className="App-header">
										        <img src={logo} className="App-logo" alt="logo" />
										        <p>
										          REACT PRIMERA APLICACION
										        </p>
										      </header>
										    </div>
										  );
										}

										export default App;
			Para que funcione debemos tener importado la libreria de react.
						import React from 'react';

			El proyecto arranca con el componente principal principal ---------------> (	function App()	)

			Este componente principal se inyect en el componente Index.html, en el --------> div id="root"></div>.

			Quiem lo iyecta el componete principal Index.js -------->  ReactDOM.render(<App />, document.getElementById('root'));
					El rendes es quien maneja el DOM principal, de igual manera dentro del Index.js tenemos las importaciones necesarias para que funcione.

			Index.css: Contiene estilos globales de nuestro proyecto.
			robots.txt

			ServiceWorker.js: Sirve para generar una Web App, AWP una aplicacion progresiva.
TRABAJO CON EL PROYECTO.

INSTALACION BOOTSTRAP
			bootstrap 4, que es un framework y donde vamos a utilizar las clases para dar estilos a nuestros ptoyectos.
				https://getbootstrap.com
			Seleccionamos link de CSS only.
				<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
			Para utilizar bootstrap pegamos el link en el archivo Index.html luego del titulo e identamos con alt + z

			Index.css
			Borramos estilos globales del archivo index.css, ya que lo vamos a utilizar con bootstrap

			Index.js
			Borramos los comentarios, el serviceWorker.unregister();  asi como eliminamos su importacion.

			Eliminacion de archivos
			logo.svg
			serviceWorker  y Manifest ya que trabajan junto 
			App.test.js
			logo192.png
			logo512.png
			robots.txt

			Al compilar genera error:
			/src/logo.svg
			Error: ENOENT: no such file or directory, open '/Users/juannaula/PROYECTOS_REACT/pry_react_uno/src/logo.svg'
			Para solventar este error eliminamos la importacion del logo en App.js asi como eliminamos el tag de header.

AYUDAS PROGRAMACION
	Para facilitar la creacion de codigo dentro de nuestro editor de codigo de Visual Studio Code parte superior seleccionamos Javascript y
	seleccionamos Configure File Association for '.js' Si se ingreso por error como js 
	Vamos a: Code -----> Preferences --------> Setting y borramos el archivo buscamos react en la caja de texto de busqueda y seleccionamos la opcion 
	Edit in settings.json --------> borramos el contenido de este archivo entre las llaves y se activa para nueva seleccion,
	 Seleccionamos react for javaScript para autocompletar el codigo.

	 Se configura como lenguaje javascript para react.

	 Tambien borramos el archivo App.css ya que los estilos que vamos a utilizar son de bootstrap.


	 VAMOS A VER QUE SON LOS COMPONENTES Y CONTENEDORES

	 Usamos contenedor de bootstrap: 

	 PARA EL PROYECTO VAMOS A MONTAR TODOS LOS COMPONENTES SOBRE EL COMPONENTE PRINCIPAL App.js no sobre Index.html
	  La vista lo vamos a partir en componentes, los componentes puedes estar a la misma altura o separados enre si por jerarquia puede ser padre hijo

	  GENERAMOS COMPONENTE SECUNDARIO.
	  Si deseamos cambiar el color al panel de atras , usamos un mecanismo para este y todos lo componentes.
	  Renombramos el background de la clase jumbotron: 	
	  .App {

}
			/* Jumbotron trabaja sobre la clase App*/
			.App .jumbotron{
			  background-color: cornflowerblue;
			  /*Cambio de color de texto*/
			  color: white;
			}

GENERAMOS NUEVO CONPONENTE ENTRADAS Y LO UBICAMOS DENTRO DEL COMPONENTE PRINCIPAL.
- Creamos una carpeta contenedora de los componentes dentro de  SRC
	 Como colocar camponentes dentro de otro componente y se lo hace con un elemento  html.

COMPONENTE PRINCIPAL E INGRESO DE COMPONENTES SECUNDARISO DENTRO DE CONTENEDOR PRINCIPAL DE App.js
Index.HTML(Vista)
				<!--  Vista Principal de nuestro proyecto  -->
				<!DOCTYPE html>
				<!--Cambio de en a es-->
				<html lang="es">
				  <head>
				    <meta charset="utf-8" />
				    <meta name="viewport" content="width=device-width, initial-scale=1" />
				    <link rel="apple-touch-icon" href="logo192.png" />
				  
				    <title>ReactJS Clase 1 introducción </title>
				    <!--Para identar codigo seleccionamos alt + z-->
				    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">


				  </head>
				  <body>
				    <noscript>You need to enable JavaScript to run this app.</noscript>
				    <!--Div donde se insertaran todos nuestros modulos-->
				    <div id="root"></div>
				  </body>
				</html>

Index.js (Camino para inyeccion en root de Index.html)
				import React from 'react';
				import ReactDOM from 'react-dom';
				import './index.css';
				import App from './App';
				//Aqui se importa, el react dom y los existentes en nuestra aplicacion aqui se inyecta el contenido del div root del html
				//Renderiza hacie el elemento root
				ReactDOM.render(<App />, document.getElementById('root'));


App.js (Componente principal donde se mezcla el codigo JavaScript y Html lo que da lugar a al formato JSX, aqui se podra ingresar los demas componentes.)


					import React from 'react';
					import './App.css';
					import Componente_Entradas from './ComponentesJN/Componente_Entradas';
					/*  Componente principal donde se inserta los demas componentes y este llama a la funcion App() que se inyecta en el 
					componente principal Index.js  */
					function App() {
					  return (
					    <div className="App">
					        <div className="container-fluid">
					              {/* Genera panel de color por detras del elemento , para separar de la parte superior margin-top y margin-booton  my-3*/}
					              <div className="jumbotron my-3">
					                  <h1>Componente Principal</h1>
					                  {/* Agregamos nueva entrada  se auto importa*/}
					                  <Componente_Entradas/>

					              </div>
					        </div>
					    </div>
					  );
					}

					export default App;

Componente_Entradas.js (Componente secunadario para inyectar dentro del componente principal)

									import React from 'react';
									import './Componente_Entradas.css';
									/*  Componente principal donde se inserta los demas componentes y este llama a la funcion Entradas() que se inyecta en el 
									componente principal Index.js  */
									function Componente_Entradas() {
									  return (
									    <div className="Componente_Entradas">
									              {/* Genera panel de color por detras del elemento , para separar de la parte superior margin-top y margin-booton  my-3*/}
									              <div className="jumbotron my-3">
									                  <h1>Componente Componente_Entradas</h1>
									              </div>
									    </div>
									  );
									}

									export default Componente_Entradas;


EXPLICACION
Un componente tiene como nombre el nombre de la funcion o nonbre de una clase que esta en un JSX.
Un componente para ser componente retorna codigo JSX
						 return (
						    <div className="Componente_Entradas">
						              {/* Genera panel de color por detras del elemento , para separar de la parte superior margin-top y margin-booton  my-3*/}
						              <div className="jumbotron my-3">
						                  <h1>Componente Componente_Entradas</h1>
						              </div>
						    </div>
						  );
Codigo que mezcla Html con JavaScript cuya mezcla da codigo JSX.
Componete con codigo descrito retorna un pedasito de vista 
Este componente se eporta :  export default Componente_Entradas;
Y se ponde como parte de la vista del componente principal App.js

EXPLICACION

Hay dos tipos de componentes en react:
	Los componentes echas con funciones.
	Los componentes echas con clases.

	DIFERENCIA
	Los que estan echas con funciones se llamas stateles Sin estado, es un componente que no guarda ningun tipo de estado, lo uni que hace es representar vista en funcion de 
	atributos o de valores de entrada, no guarda ninguna memoria del pasado.

	En cambio los componentes echas con clases estas si son capaces de guardar estado.

	Para caso de ejercicio el coponente Entradas lo vamos a convertir para que guarde estados.

	Campo para que guarde estados:
			function Componente_Entradas()  se cambia por class Componente_Entradas()  y se casa los parametros de entrada class Componente_Entradas
			y extiende (extends  de React.Component), que es una clase y me va a dar caracteristicas de componente a la clase.

			Las clases no tienen return.

			Las clase tiene metodos que para este caso se va a llamar render que es el metod principal 
			Render es quien retorna la vista.

COMPONENTE Componente_Entradas
Vamos a mostrar las expresiones, vamos  a ver la manera de mostrar un valor dentro de un objeto en react sobre la vista , para utilizamos los Props.

Props: Son los parametros que le pasamos al componente por su propio despliegue del elemento, y se lo pasamos en base al atributo 
En entradas quiero pasarle un vamos atraves de un atributo.
<Componente_Entradas titulo=""/> Como para el titulo al componete de entrada, lo pasamos por una props.

para recibir el titulo dentro del componete de estrada usamos Props.
Props es un objeto que se esta pasando los atributos
<h3>{this.props.titulo}</h3>

La forma de recuperar el valor que se esta pasando es:  
Se pasa como un atributo dentro del objeto props.
Los Props se puede utilizar tanto con clase como con funciones en ambos casos puedes pasarle parametros de entrada como de salida

App.js
			import React from 'react';
			import './App.css';
			import Componente_Entradas from './ComponentesJN/Componente_Entradas';
			/*  Componente principal donde se inserta los demas componentes y este llama a la funcion App() que se inyecta en el 
			componente principal Index.js  */
			function App() {
			  return (
			    <div className="App">
			        <div className="container-fluid">
			              {/* Genera panel de color por detras del elemento , para separar de la parte superior margin-top y margin-booton  my-3*/}
			              <div className="jumbotron my-3">
			                  <h1>Componente Principal</h1>
			                  {/* Agregamos nueva entrada  se auto importa*/}
			                  {/* pasamos el titulo del componente */}
			                  <Componente_Entradas titulo="Nuevo titulo con Props"/>

			              </div>
			        </div>
			    </div>
			  );
			}

			export default App;

Componente_Entradas.js

				import React from 'react';
				import './Componente_Entradas.css';
				/*  Componente principal donde se inserta los demas componentes y este llama a la funcion Entradas() que se inyecta en el 
				componente principal Index.js  */
				//function Componente_Entradas() { cambio funcion por clase
				class Componente_Entradas extends React.Component {
				  /* Para identar el shif + alt + F*/
				  render() {
				    return (
				      <div className="Componente_Entradas">
				        {/* Genera panel de color por detras del elemento , para separar de la parte superior margin-top y margin-booton  my-3*/}
				        <div className="jumbotron my-3">
				          {/* 
				          <h3>Componente Componente_Entradas!</h3>
				          Cambio para uso de props
				          */}
				          <h3>{this.props.titulo}</h3>
				        </div>
				      </div>
				    );
				  }
				}

				export default Componente_Entradas;


EXPRESIONES EN REACT PARA MOSTRAR PROPIEDADES
{this.props.titulo}

GENERAMOS COMPONENTE NECESARIO DENTRO DE UNA CLASE QUE SE LLAMA STATE
Este objeto almacena el estado de mi componente, es un estado permanente que no se borra, 

state = {
      //mensaje que quiero almacenar
      mensaje : 'mensaje de estado';
    }

Como visualizar mensaje en la vista.

El state es un estado permanente de mi componente y no se borra, el componente inicializa los valores y luego el mismo componente lo puede cambiar,
ese valor el privado del elemento, es un objeto que no lo ven los demas, queda encapsulado dentro del elemento y no se borrar.

Que pasa cuando desde un componente superior este lo cambia, automaticamente cuando se cambia redeispara el metodo render, este es el metodo que pinta nuestro codigo JSX,

El metodo render se dispara al crear el componente.cuando se instancia la clase por primera vez , para poder la vista, cuando camvia algun valor

Inicializacion de componente.
Cambio de Props 
Cambio de State se renderiza la vista.

Llaves para hacer que en la vista se visualice un contenido, 
          {/* Paso de Valores */}
          <input type="text" value={'123'}></input>

          Si no es una propiedad se pode el valor entre comillas simples 123..

          {/* Representar valor del state */}
          <input type="text" value={this.state.valor} readOnly></input>

Cambio de valor a state o expresion para esto realizamos un mecanismo setInterval.
 componentDidMount(){
      
    }, este es un metodo especial que se dispara cando el componente ya se monto en memoria, html esta desplegado y puede funcionar 

    //Set interval para cambio de valor.
    componentDidMount(){
      setInterval(() => {
        console.log('Times')
      },1000);
    }
Para cambio de valor del state
this.setState(() => ({valor:this.state.valor+1}))

  componentDidMount(){
      setInterval(() => {
        console.log('Times')
        //Cambio de valor del state, indica que vamos a ejecutar una funcion y este va a retornar un objeto. () => ({})) 
        this.setState(() => ({valor:this.state.valor+1}))
      },1000);
    }




    import React from 'react';
import './Componente_Entradas.css';
/*  Componente principal donde se inserta los demas componentes y este llama a la funcion Entradas() que se inyecta en el 
componente principal Index.js  */
//function Componente_Entradas() { cambio funcion por clase
class Componente_Entradas extends React.Component {

    state = {
      //mensaje que quiero almacenar
      mensaje : 'mensaje de estado',
      //Representar valor
      valor:456
    }

    //Set interval para cambio de valor.
    componentDidMount(){
      setInterval(() => {
        console.log('Times')
        //Cambio de valor del state, indica que vamos a ejecutar una funcion y este va a retornar un objeto. () => ({})) 
        this.setState(() => ({valor:this.state.valor+1}))
      },1000);
    }

  /* Para identar el shif + alt + F*/
  render() {
    return (
      <div className="Componente_Entradas">
        {/* Genera panel de color por detras del elemento , para separar de la parte superior margin-top y margin-booton  my-3*/}
        <div className="jumbotron my-3">
          {/* 
          <h3>Componente Componente_Entradas!</h3>
          Cambio para uso de props
          */}
          <h3>{this.props.titulo}</h3>

          {/* Visualiza mensaje de State */}
          <p>{this.state.mensaje}</p>

          {/* Paso de Valores, puede generar un error xq neesita el evento Onchage pero para pruebas lo vamos a cambia rpor  readOnly (Solo de vista) */}
          <input type="text" value={'123'} readOnly></input>

          <br/>

          {/* Representar valor del state */}
          <input type="text" value={this.state.valor} readOnly></input>
        </div>
      </div>
    );
  }
}

export default Componente_Entradas;

Verificamos cuando ingresa al render, para lo cual creamos un console.log

Ejemplo declaracion de objetos ({})




	














/*									CLASE 2 REACT ESTRUCTURA								*/
DESARROLLO EJERCICIO CLASE 
Sacar variables de state a parte

SHIFT ALT A PARA COMENTAR

CREACION DE COMPONENTES DE ESTRUCTURA, RECORRER UN ARRAY 

debe ponerse bajo un objeto state
state={
	usuarios:[
	'Pedro',
	'Juan ',
	'Maria',
	'Pedro',
	]
}

recorrer ArrayStoreException

render(){
	return(
		<ul className>

			{
				this.state.usuarios.map((usuarios,key))=>{
					//Retorna elementos li
					return(
						<li key={key}>{usuarios}></li>
						)
				}
			}
		)
	</ul>
}


Restructuracion de state
let{usuarios} = this.state

creamos array de alumnos, listas desordenadas, los hr 
alumnos:=[
{nombre='Pedro',apellido='Lopez',edad='',curso='',foto=''},//como saca foto pagina iconfinder.com para sacar iconos y representa en la vista, clic dereco sacar direccion de imagen 
{nombre='Juan',apellido='Gonzales',edad='',curso='',foto=''},
{nombre='',apellido='',edad='',curso='',foto=''},
{nombre='',apellido='',edad='',curso='',foto=''}
]

</hr> genera rayas

Mostrar tablas de usuarios

<hr/>
<table className="root">
	<tbody>
	//Genero encabezados
	<tr className="">
		<th>Nombre</th>
		<th>Apellido </th>
		<th>Edad</th>
		<th>Curso</th>
		<th>Foto</th>
	</tr>
	//Depliqgeu de contenido
	{
		alumnos.map((alumno,key)>={
			<tr key={key} className="bg-info">

				<td>{alumno.nombre}</td>
				<td>{alumno.apellido}</td>
				<td>{alumno.edad}</td>
				<td>{alumno.curso}</td>
				<td>{alumno.foto}</td>
				//Curso no se ve xq es un boolean
				<td>{alumno.curso ? si:no}</td>

				//para poner la foto
				<td>
				
				<img src=>{alumno.foto} width="50" alt={alumno.nombre} />

				</td>

			</key>
		})
	}
	</tbody>
</table>

<hr/>
creacmos expresion
{
	alumno.map((alumno,key)>={
		<div className="media my-3" key={key}>
		//va elemento de imagen
		<img src=>{alumno.foto} width="50" alt={alumno.nombre} />
			<div className="media-body ml-3">
				<p> {key+1}-Nombre: <b>{alumno.nombre} {alumno.apellido}</b> </p>

				<p> Edad: <i>{alumno.edad} </i></p>
			</div>
		</div>
	})
}

// las props se pasa en 
Generar nuevo documento dentr de COMPONENTES
CursoCheck.js

dentro de este Importamos react
import React from 'react'

//exportamso para recibir props
export function CursoCheck(props){
	return(
			<>
				// a los props le pasamos los alumnos
			Hizo el curso <input type="checbox" checked={props.alumnos.curso} //llamando a metodo
			onChange={props.cambiar()} />
			</>
		)
}

metod para cambiar
cambiar(i){//i pasamos el indice
	const state ={...this.state}
	state.alumnos[i].curso=!state.alumnos[i].curso
	// salvamos el state
	this.setState()
}


Creacion de botones dentro de checked
<button className="" > </button>


metodo borrar
borrar(i){
	//splite saca un item del arrar
	const state ={....this.state}
	state.alumnos.splite
}
Encapsulamiento

Declaracion de fragmentador

<>
Expresiones en React 

Ternarios en react


Boton para agregar usuarios
jar codeado ----> datos quemados en react


Array de string, array de objetos
bindea
bindear this

construccion de construtor
constructor(){

	super() // super de la clase heredad
	this.agregar=this.agregar.bind(this)//Al metodo agragr le bindeo el this
}

boton en componente principal para visualizar o no el componente ESTRUCTURA

Funciones de ciclo de vida de componente react
el constructur se ejecuta cuando se instancia una clase.

hay constructores que se ejecutan cuando el componete esta o no vivo

En App.js
mostrat && evalua los estados y ejecuta el componente.
Activar coocks

componentDidMount(){
	console.log('componente did mount')
}
componentWillUnmount

que hacer en cada caso. 	
activar un contador 

/*=================================================== DESARROLLO CLASE 2	===================================================*/





/*									CLASE 3 REACT ESTRUCTURA								*/
- Repaso: 
	Estructuras el objetivo fue representar un array en la vista para lo cual se creo un array de String y Otro array de objetos.
	Uso de Metodos MAP.

- Nueva clase:
/*=================================================== DESARROLLO CLASE 3	===================================================*/

/*=================================================== DESARROLLO CLASE 4	===================================================*/
Creacion de componente barra de entrada
https://getbootstrap.com/

-Documetacion

-Componentes
-

/*=================================================== DESARROLLO CLASE 5	===================================================*/
DESARROLLO CLASE:



/*=================================================== APUNTES PROGRAMACION	===================================================*/

{/*	INVOCA A MAPA	*/}
              <GridItem>
                  <MapContainer
                    getResponse={getResponse}
                  />
                </GridItem>

{/*	MAPA 	*/}
import React from "react";
import { compose, withStateHandlers, lifecycle } from "recompose";
import {
  InfoWindow,
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
} from "react-google-maps";
import credentials from "components/credentials/credentials";
const Map = compose(
  lifecycle({
    componentDidMount() {
      this.setState({ posicionActual: { lat: 0, lng: 0 } });
      const geolocation = navigator.geolocation;
      if (geolocation) {
        geolocation.getCurrentPosition(position => {
          const param = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
          this.setState({ posicionActual: param });
          //alert("Latitud: "+this.state.posicionActual.lat+" Longitud:"+this.state.posicionActual.lng);
        })
      }
    }
  }),
  withStateHandlers(
    () => ({
      isMarkerShown: false,
      markerPosition: null,
    }),
    {
      onMapClick: (isMarkerShown) => (e) => ({
        markerPosition: e.latLng,
        isMarkerShown: true
      }),
    },
  ),
  withScriptjs,
  withGoogleMap,
)((props) => (
  <GoogleMap
    defaultZoom={17}
    defaultCenter={{ lat: props.posicionActual.lat, lng: props.posicionActual.lng }}
    onClick={props.onMapClick}
  >
    {props.isMarkerShown && <Marker position={props.markerPosition}
      onClick={props.getResponse(props.markerPosition)} />}
  </GoogleMap>
));

export default class MapContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ height: "100%" }}>
        <Map
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${credentials.mapsKey}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          getResponse={this.props.getResponse}
        />
      </div>
    );
  }
}



{/* SELECCION INDIVIDUAL DE ARCHIVOS PRECIO CARGA */}

<input id={0} type={"file"} accept={".png,.pdf,.doc"} onChange={subirCedula} disabled={copiaCedulaDisable} />

  const subirCedula = (event) => {
    inicializaVariablesCarga();
    setArchivoSeleccionado(event.target.files[0]);
    let divisionCadena = event.target.files[0].name.split(".");
    setFileName("copiaCedula_" + Cipher.decrypting(getCodigoUsuario())+ "." + divisionCadena[1]);
  };


{/*CARGA DE ARCHIVOS A SERVIDOR */} 
<IconButton color="primary" onClick={() => handleSubmit()} disabled={copiaCedulaDisable}> <CloudUploadIcon /> </IconButton>

const handleSubmit = () => {
    const data = new FormData();

    if (archivoSeleccionado.size > 2097152) {
      let tamanoActual = convertBytes(archivoSeleccionado.size);
      return generaNotificacion("Archivo " + archivoSeleccionado["name"] + " tamano: " + tamanoActual + ", superior al máximo permitido 2MB", false);
    } else {
      data.append("file", archivoSeleccionado, fileName);
    }
    (async () => {
      await axios
        .post(endpoints.uploadFileServer, data, {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        }, getToken(), getTokenRefresh())
        .then((response) => {
          if (response.estado == -1) {
            generaNotificacion(response.mensaje, false);
          } else {
            guardaAdjuntos(response.data);
            depuraVariables();

          }
        })
        .catch((error) => {
          generaNotificacion(error.message);
        });
    })();
  };


  {/* OBTIENE TAMANO ARCHIVOS */}
  const convertBytes = function (bytes) {
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"]

    if (bytes == 0) {
      return "n/a"
    }

    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))

    if (i == 0) {
      return bytes + " " + sizes[i]
    }

    return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i]
  }

  {/*Guardar archivos Adjuntos */}

  const [
    listaAdjuntosEnrolamiento,
    setListaAdjuntosEnrolamiento,
  ] = React.useState([]);
  const guardaAdjuntos = (valor) => {

    (async () => {
      const param = {
        codigo: 0,
        pathAdjunto: "",
        descripcion: "",
        fechaRegistro: "",
        codigoSolicitudEnrolamientoEB: objDatosSolicitud.codigo,
        listaAdjuntos: valor.listaAdjuntosServer,
      };
      setListaAdjuntosEnrolamiento([]);
      api(endpoints.registroAdjuntoSolicitudEnrolamiento, "POST", param, getToken(), getTokenRefresh())
        .then((response) => {
          if (response.estado == -1) {
            generaNotificacion(response.mensaje, false);
          } else {
            setListaAdjuntosEnrolamiento(response);
            generaNotificacion(
              "Documento adjunto registrado correctamente.",
              true
            );
          }
        })
        .catch((error) => {
          generaNotificacion(error.message);
        });
    })();
  };


{/* VERIFICA EXISTENCIA ARCHIVO E INVOCA A COMPONENTE */}

export default function ListadoComercios() {
//INICIALIZA VARIABLES PARA DESCARGA DE ARCHIVO
  const [open, setOpen] = useState(false);
  const [ruta, setRuta] = useState([]);
  const [ver, setVer] = useState(false);
  const [type, setType] = useState("");
  const [nombreArchivo, setNombreArchivo] = useState("");
  const verificaArchivoExistente = (file) => {
    const ruta = AMBIENTE_DOMAIN_URL + "tiendasFile/" + file.pathAdjunto;
    console.log(ruta);
    setVer(true);
    setRuta(ruta);
    setNombreArchivo("DOCUMENTO - " + file.descripcion);
    let arrayCadena = file.descripcion.split(".");
    setType(arrayCadena[1].toLowerCase());
    setOpen(true);
  };
  const getResponse =(result)=>{
    setOpen(result);
    setVer(result);
  }
  return (
    <div>
     <GridItem xs={12} sm={12} md={12}>
              <CardBody>
                <Table
                  id="listaAdjuntos"
                  title="DOCUMENTOS ADJUNTOS"
                  columns={[
                    { title: "Documento", field: "descripcion" },
                  ]}
                  //Lista a recorrer
                  data={objComercioTransaccion.solicitudEnrolamientoComercio.listaSolicitudAdjunto}
                  //Seleccion de fila
                  onRowClick={(evt, selectedRow) => verificaArchivoExistente(selectedRow)}
                />
                <div>{ver ?
                  <DocumentView
                    open={open}
                    path={ruta}
                    nombreArchivo={nombreArchivo}
                    type={type}
                    buttonLabelCerrar="Cerrar"
                    buttonLabelDownload="Descargar"
                    getResponse={getResponse}
                  /> : null}</div>
              </CardBody>
            </GridItem>
    </div>
  );
}

{/* VISUALIZA ARCHIVO EN VENTANA DE DIALOGO */}

import React, { useState, useEffect } from 'react';
import FileViewer from 'react-file-viewer';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Button from "components/CustomButtons/Button";
import CloseIcon from '@material-ui/icons/Close';
import { CloudDownload } from "@material-ui/icons";

const stylesDialog = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
        color: 'white',
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
    },
});

const DialogTitle = withStyles(stylesDialog)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
}))(MuiDialogActions);
//FIN MANEJO DIALOG

function DocumentView(props) {
    const {
        open,
        path,
        nombreArchivo,
        type,
        buttonLabelCerrar,
        buttonLabelDownload,
        getResponse,
    } = props;
    //HOOK'S DE ESTADO
    const [openLocal, setOpenLocal] = useState(open);
    const [fullWidth, setFullWidth] = useState(true);
    const [maxWidth, setMaxWidth] = useState('md');
    const handleClose = () => {
        setOpenLocal(false);
        props.getResponse(false);
    };
    const downloadFile = () => {
        fetch(path)
            .then(response => {
                response.blob().then(blob => {
                    let url = window.URL.createObjectURL(blob);
                    let a = document.createElement('a');
                    a.href = url;
                    a.download = nombreArchivo;
                    a.click();
                });
            });
    }
    const onError = e => {
        console.log(e, "Error en lectura de archivos.");
    };

    return (
        <Dialog
            onClose={handleClose}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
            open={openLocal}
            fullWidth={fullWidth}
            maxWidth={maxWidth}
        >
            <DialogTitle id="scroll-dialog-title">{nombreArchivo}</DialogTitle>
            <DialogContent>
                <div>
                    
                    <FileViewer fileType={type}
                        filePath={path}
                        onError={onError} />
                </div>
            </DialogContent>
            <DialogActions>
                <div>
                    <Button
                        color="secondary"
                        onClick={handleClose}
                        startIcon={<CloseIcon />}
                    >
                        {buttonLabelCerrar}
                    </Button>
                    <Button
                        color="secondary"
                        onClick={downloadFile}
                        startIcon={<CloudDownload />}
                    >
                        {buttonLabelDownload}
                    </Button>
                </div>
            </DialogActions>

        </Dialog>
    );

}
export default DocumentView;

/*========= CURSO PROFESIONAL DE REACT HOOK'S	=========*/
Un hook es una funcion especial que nos va a permitir conectarnos a caracteristicas de react, por lo cual se va a poder trabajar con metodos especiales que van a estar disponibles
como useState, 

-- Esta es una caracteristica de react que sale en la version 16.8 en febrero del 2019 
-- Son 100% compatibles con versiones anteriores
-- Los hooks trabajan con funciones y no con classes.
-- Creacion de nuevo proyecto: npm create-react-app nombre-proyecto (Solo en minusculas, caso contrario no se puede crear el proyecto)
-- npx: Nos permite ejecutar desde la nube un programa, que para este caso es el script de create-react-app, por lo cual no es necesario tener instalado, lo unico es
		generar el llamado hacia nuestra maquina 

-- Cuando se crea un proyecto no es necesario ejecutar npm install, esto ya que el script de creacion de proyecto ya lo realizamos
-- Ingresamos a la carpeta del proyecto y ejecutamos npm run start.js

//CONVENCIONES EN REACT JS
1. El nombre de los componentes siempre inician con Mayuscula
2. Si se utiliza templates dentro de HTML se debe crear con extención .jsx



{/* HOOKS */}
- useState: Nos ayuda a manejar los estados en componentes creados con funciones
-	useEffect: Nos va a permitir manejar efectos que van a ser transmitidos dentro de nuestros componentes 
	Agregar material ui a nuestro proyecto: 
																					npm install @material-ui/core
																					npm i @material-ui/icons
- useContext: Permite pasar la información entre componentes, permite interconectar sin necesidad de usar los props y estar ligado de padre a hijos.
	Transamitir informacion a todos nuestros componentes de manera facil.
	Para esto vamos a realizar los siguientes pasos:
	1) Creamos la carpeta: context dentro de src.
	2) Dentro de la carpeta context creamos el archivo ThemeContext.js, esta extencion ya que no vamos a tener nada visual.
	3) Dentro de ThemeContext creamos nuestro contexto para llevarlo a toda nuestra aplicacion.

			import React from 'react'

			const ThemeContext = React.createContext(null);

			export default ThemeContext;

	4) Importamos nuestro contexto dentro del componente: export default ThemeContext;
	5) Llevamos a nuestro index.js que es donde esta nuestro todo, vamos a integrarlo dentro de lo que biene siendo nuestra logica.
			Aqui importamos nuestro contect: import ThemeContext from './context/ThemeContext';
	6) Context nos da un Provider el cual va a encapsular toda la informacion: <ThemeContext.Provider value="red">, value es el valor que vamos a pasarle
	7) Ahora debemos encapsular nuestra aplicacion <App/> dentro de nuestro provider que tiene el contexto de toda la informacion:
		import React from 'react';
		import ReactDOM from 'react-dom';
		import './index.css';
		import App from './App';
		import reportWebVitals from './reportWebVitals';
		import ThemeContext from './context/ThemeContext';

		ReactDOM.render(
		  <React.StrictMode>
		    <ThemeContext.Provider value="red">
		      <App />
		    </ThemeContext.Provider>
		  </React.StrictMode>,
		  document.getElementById('root')
		);
	8) Ahora vamos a conectarlo dentro de nuestro Header.jsx y aqui poder usar nuestro useContext, traer nuestro tema que estamos teniendo para este caso red
			que vamos hacer el cambio dentro de nuestra aplicacion.
			1) Dentro de nustra Header.jsx lo perimero es importar nuestro useContext: 
					import React, { useState, useContext } from 'react';
			2) Importamos nuestro contexto: import ThemeContext from '../context/ThemeContext';
			3) Una ves dentro de nuestra aplicacion vamos a utilizar el uso de useSontext para traer el contexto asignado y con esto traer el valor que tenemos para nuestra aplicación
					imaginemos que ahi tenemos toda la estructura del tema que estamos añadiendo 
			4) Para esto creamos una constante para traer nuestro useContext y le pasamos el tema que le estanos pasando y ya esta variable tiene asignado ese valor que estamos estableciendo
					const color = useContext(ThemeContext);
			5) Ahora vamos a agregar este estilo que es color dentro de nuestra <h1></h1>

					import React, { useState, useContext } from 'react';
					import { Button } from '@material-ui/core';
					import PropTypes from 'prop-types';
					import { withStyles } from '@material-ui/core/styles';
					import ThemeContext from '../context/ThemeContext';

					const styles = theme => ({
					    button: {
					        margin: theme.spacing.unit,
					    },
					    input: {
					        display: 'none',
					    },
					});

					const Header = (props) => {
					    const { classes } = props;
					    //Contante que va a destructurar 2 elmentos
					    // [estado, funcionCambiaEstado] = destrucutramos de useState y pasamos como si fuera una funcion el estado inicial
					    const [darkMode, setDarkMode] = useState(false);
					    const color = useContext(ThemeContext);

					    const handleClick = () => {
					        setDarkMode(!darkMode);
					    }

					    return (
					        <div className="Header">
					            <h1 style={{color}}>ReactHooks</h1>
					            {/** 
					            <button type="button" onClick={handleClick}>{darkMode ? 'Dark Mode' : 'Light Mode'}</button>
					            <button type="button" onClick={() => setDarkMode(!darkMode)}>{darkMode ? 'Dark Mode 2' : 'Light Mode 2'}</button>
					            */}
					            <Button variant="contained" color="primary" className={classes.button} onClick={handleClick}>
					                {darkMode ? 'Dark Mode' : 'Light Mode'}
					            </Button>
					        </div>
					    );
					}
					Header.propTypes = {
					    classes: PropTypes.object.isRequired,
					};
					export default withStyles(styles)(Header);
