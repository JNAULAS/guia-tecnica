/*  CONFIGURACION DESPLIEGUE PROYECTO SPRING BOOT SERVER WILDFLY */
// POM ORACLE
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>2.5.4</version>
		<relativePath /> <!-- lookup parent from repository -->
	</parent>
	<groupId>ec.fin.servitect.adminSecurity</groupId>
	<artifactId>adminSecurity-api-ws</artifactId>
	<version>0.0.1</version>
	<packaging>war</packaging>
	<name>adminSecurity-api-ws</name>
	<description>Proyecto para Administracion de seguridad de acceso de usuarios</description>
	<properties>
		<java.version>1.8</java.version>
		<jboss.deploy.path>C:/wildfly-16.0.0.Final/standalone/deployments</jboss.deploy.path>
		<keycloak.version>11.0.1</keycloak.version>
	</properties>
	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-jdbc</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-jpa</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
            <!-- TAG PARA EXCLUIR EL SERVIDOR TOMCAT EMBEBIDO Y PODER DESPLEGARLO EN WILDFLY --> 
			<exclusions>
				<exclusion>
					<groupId>org.springframework.boot</groupId>
					<artifactId>spring-boot-starter-tomcat</artifactId>
				</exclusion>
			</exclusions>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-devtools</artifactId>
			<scope>runtime</scope>
			<optional>true</optional>
		</dependency>
		<dependency>
			<groupId>com.oracle.database.jdbc</groupId>
			<artifactId>ojdbc8</artifactId>
			<scope>runtime</scope>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-tomcat</artifactId>
			<scope>provided</scope>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
			<exclusions>
				<exclusion>
					<groupId>org.junit.vintage</groupId>
					<artifactId>junit-vintage-engine</artifactId>
				</exclusion>
			</exclusions>
		</dependency>
		<dependency>
			<groupId>org.keycloak</groupId>
			<artifactId>keycloak-spring-boot-starter</artifactId>
		</dependency>
		<dependency>
			<artifactId>keycloak-admin-client</artifactId>
			<groupId>org.keycloak</groupId>
			<version>${keycloak.version}</version>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-security</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter</artifactId>
			<exclusions>
				<exclusion>
					<groupId>org.springframework.boot</groupId>
					<artifactId>spring-boot-starter-logging</artifactId>
				</exclusion>
			</exclusions>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-log4j2</artifactId>
		</dependency>
		<dependency>
			<groupId>javax</groupId>
			<artifactId>javaee-api</artifactId>
			<version>7.0</version>
			<scope>provided</scope>
		</dependency>
        <!-- DEPENDENCIA PARA PODER CREAR LOS SERVLER Y PODER DESPLEGAR EN WILDFLY --> 
		<dependency>
			<groupId>javax.servlet</groupId>
			<artifactId>javax.servlet-api</artifactId>
			<scope>provided</scope>
		</dependency>
		<dependency>
			<groupId>org.owasp.esapi</groupId>
			<artifactId>esapi</artifactId>
			<version>2.2.1.0-RC1</version>
		</dependency>
		<!-- https://mvnrepository.com/artifact/org.apache.commons/commons-math3 -->
		<dependency>
		    <groupId>org.apache.commons</groupId>
		    <artifactId>commons-math3</artifactId>
		    <version>3.6.1</version>
		</dependency>

	</dependencies>

	<dependencyManagement>
		<dependencies>
			<dependency>
				<groupId>org.keycloak.bom</groupId>
				<artifactId>keycloak-adapter-bom</artifactId>
				<version>${keycloak.version}</version>
				<type>pom</type>
				<scope>import</scope>
			</dependency>
		</dependencies>
	</dependencyManagement>
    <!-- CAMBIO PARA PODER DESPLEGAR EN WILDFLY --> 
	<build>
		<finalName>${project.artifactId}</finalName>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
				<configuration>
					<outputDirectory>${jboss.deploy.path}</outputDirectory>
				</configuration>
			</plugin>
		</plugins>
	</build>

	<profiles>
		<profile>
			<id>local</id>
			<properties>
				<spring.profiles.active>local</spring.profiles.active>
			</properties>
		</profile>
		<profile>
			<id>dev</id>
			<properties>
				<spring.profiles.active>dev</spring.profiles.active>
			</properties>
		</profile>
		<profile>
			<id>cer</id>
			<properties>
				<spring.profiles.active>cer</spring.profiles.active>
			</properties>
		</profile>
		<profile>
			<id>prod</id>
			<properties>
				<spring.profiles.active>prod</spring.profiles.active>
			</properties>
		</profile>
	</profiles>

</project>
//POM POSTGRES

/* CAMBIO CLSE PRINCIPAL APPLICATION (ec.fin.servitect.adminSecurity.entities.servitec / ec.fin.servitect.adminSecurity.entities.persons) */
package ec.fin.servitect.adminSecurity;

import org.springframework.boot.CommandLineRunner;
@SpringBootApplication
@EntityScan("ec.fin.servitect.adminSecurity.entities")
public class AdminSecurityApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(AdminSecurityApplication.class, args);
	}

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(AdminSecurityApplication.class);
	}

	/*
	 * @Bean public String saluda(){ System.out.println("Hola mundo..."); return "";
	 * }
	 */

	@Bean
	CommandLineRunner commandLineRunner(TipoEmpleoRepository tipoEmpleoRepository) {
		return args -> {
			tipoEmpleoRepository.findAll();
		};
	}
}

/*  CLASE CONTROLLER PRIMERA PRUEBA */
package ec.fin.servitect.adminSecurity.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloControllet {
	@RequestMapping("/hello/{name}")
	String hello(@PathVariable String name) {

		return "Hi " + name + " !";

	}
	
	@RequestMapping("funcion")
	@ResponseBody
	public ResponseEntity<String> function(){
		return new ResponseEntity<>("Bienvenido Servidor Wildfly Ok", HttpStatus.OK);
	}
}

/*  EJEMPLO IMPLEMENTACION CLASES */
package ec.fin.servitect.entities.securityAdmin;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

/**
 * The persistent class for the TIPO_EMPLEO database table.
 * 
 */
@Entity
@Table(schema = "JST_PERSONAS", name = "TIPO_EMPLEO")
@NamedQuery(name = "TipoEmpleoDTO.findAll", query = "SELECT t FROM TipoEmpleoDTO t")
public class TipoEmpleoDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@SequenceGenerator(name = "SQCTipoEmpleo", sequenceName = "JST_PERSONAS.SQC_TIPO_EMPLEO", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SQCTipoEmpleo")
	private long codigo;

	private String activo;

	@Column(name = "COD_USU_CRE")
	private String codUsuCre;

	@Column(name = "COD_USU_MOD")
	private String codUsuMod;

	private String descripcion;

	@Column(name = "FECHA_CREACION")
	private LocalDateTime fechaCreacion;

	@Column(name = "FECHA_MODIFICACION")
	private LocalDateTime fechaModificacion;

	private String nombre;

	public TipoEmpleoDTO() {
	}

	public long getCodigo() {
		return this.codigo;
	}

	public void setCodigo(long codigo) {
		this.codigo = codigo;
	}

	public String getActivo() {
		return this.activo;
	}

	public void setActivo(String activo) {
		this.activo = activo;
	}

	public String getCodUsuCre() {
		return this.codUsuCre;
	}

	public void setCodUsuCre(String codUsuCre) {
		this.codUsuCre = codUsuCre;
	}

	public String getCodUsuMod() {
		return this.codUsuMod;
	}

	public void setCodUsuMod(String codUsuMod) {
		this.codUsuMod = codUsuMod;
	}

	public String getDescripcion() {
		return this.descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public LocalDateTime getFechaCreacion() {
		return fechaCreacion;
	}

	public void setFechaCreacion(LocalDateTime fechaCreacion) {
		this.fechaCreacion = fechaCreacion;
	}

	public LocalDateTime getFechaModificacion() {
		return fechaModificacion;
	}

	public void setFechaModificacion(LocalDateTime fechaModificacion) {
		this.fechaModificacion = fechaModificacion;
	}

	public String getNombre() {
		return this.nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
}

-----------------------------------------------------------------------------------
package ec.fin.servitect.adminSecurity.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import ec.fin.servitect.adminSecurity.entities.adminSecurity.TipoEmpleoDTO;

@Repository
public interface TipoEmpleoRepository extends CrudRepository<TipoEmpleoDTO, Long> {
	@Override
	@Query(value="SELECT t FROM TipoEmpleoDTO t ORDER BY t.codigo")
	Iterable<TipoEmpleoDTO> findAll();
}

-----------------------------------------------------------------------------------
package ec.fin.servitect.adminSecurity.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ec.fin.servitect.adminSecurity.config.Mensajes;
import ec.fin.servitect.adminSecurity.entities.adminSecurity.TipoEmpleoDTO;
import ec.fin.servitect.adminSecurity.mappers.EmpleoMapper;
import ec.fin.servitect.adminSecurity.model.request.MantenimientoRequest;
import ec.fin.servitect.adminSecurity.repository.TipoEmpleoRepository;
import ec.fin.servitect.adminSecurity.response.GenericResponse;
import ec.fin.servitect.adminSecurity.util.GeneralException;

@Service
public class TipoEmpleoService {

	@Autowired
	TipoEmpleoRepository tipoEmpleoRepository;

	@Autowired
	Validaciones validacion;

	@Autowired
	private Mensajes msjBundle;
	
	@Autowired
	private EmpleoMapper empleoMapper;

	private final static Logger LOGGER = LogManager.getLogger(TipoEmpleoService.class);

	/**
	 * 
	 * @param allData - Variable para definir si debe recuperar todos los campos de un registro
	 * @return
	 */
	public List<MantenimientoRequest> getTiposEmpleo(boolean allData) {
		return empleoMapper.toRequest(tipoEmpleoRepository.findAll().iterator(), allData);
	}

	public GenericResponse save(MantenimientoRequest mantenimientoRequest) {

		// Inicializa Variables
		GenericResponse response = new GenericResponse();

		// Validacion de datos de entrada
		validacion.validarInformacion(Validaciones.VALIDACION_ADD, mantenimientoRequest);
		TipoEmpleoDTO tipoEmpleoDTO = empleoMapper.toEmpleoDTO(mantenimientoRequest);

		tipoEmpleoDTO.setFechaCreacion(LocalDateTime.now());
		tipoEmpleoDTO.setFechaModificacion(LocalDateTime.now());
		tipoEmpleoRepository.save(tipoEmpleoDTO);

		response.setCodigo(GenericResponse.OPERACION_EXITOSA);
		response.setMensaje(msjBundle.get("datos.crear"));

		return response;
	}

	public TipoEmpleoDTO getTipoEmpleoDTO(Long id) {
		Optional<TipoEmpleoDTO> entity = tipoEmpleoRepository.findById(id);
		if (!Objects.isNull(entity)) {
			return entity.get();
		} else {
			return null;
		}
	}

	public GenericResponse update(MantenimientoRequest mantenimientoRequest) {
		GenericResponse response = new GenericResponse();

//		 if (Objects.isNull(mantenimientoRequest.getCodigo()) || mantenimientoRequest.getCodigo() <= 0) {
//			 throw new GeneralException(msjBundle.get("datos.error.codigo"));
//		 }
		
		TipoEmpleoDTO entity = getTipoEmpleoDTO(mantenimientoRequest.getCodigo());

		if (Objects.isNull(entity))
			throw new GeneralException(msjBundle.get("datos.error.consultar"));

		// Validacion de datos de entrada
		validacion.validarInformacion(Validaciones.VALIDACION_UPDATE, mantenimientoRequest);

		entity.setNombre(mantenimientoRequest.getNombre());
		entity.setDescripcion(mantenimientoRequest.getDescripcion());
		entity.setActivo(mantenimientoRequest.getActivo());
		entity.setCodUsuMod(mantenimientoRequest.getCodigoUsuarioModificacion());
		entity.setFechaModificacion(LocalDateTime.now());

		tipoEmpleoRepository.save(entity);

		response.setCodigo(GenericResponse.OPERACION_EXITOSA);
		response.setMensaje(msjBundle.get("datos.actualizar"));

		return response;
	}
	
	public GenericResponse delete(long codigoEmpleo, MantenimientoRequest mantenimientoRequest) {
		GenericResponse response = new GenericResponse();

		 if (Objects.isNull(codigoEmpleo) || codigoEmpleo <= 0) {
			 throw new GeneralException(msjBundle.get("datos.error.codigo"));
		 }
		
		TipoEmpleoDTO entity = getTipoEmpleoDTO(codigoEmpleo);

		if (Objects.isNull(entity))
			throw new GeneralException(msjBundle.get("datos.error.consultar"));

		// Validacion de datos de entrada
		validacion.validarInformacion(Validaciones.VALIDACION_DELETE, mantenimientoRequest);

		entity.setActivo("N");
		entity.setCodUsuMod(mantenimientoRequest.getCodigoUsuarioModificacion());
		entity.setFechaModificacion(LocalDateTime.now());

		tipoEmpleoRepository.save(entity);

		response.setCodigo(GenericResponse.OPERACION_EXITOSA);
		response.setMensaje(msjBundle.get("datos.eliminar"));

		return response;
	}

}
-----------------------------------------------------------------------------------
package ec.fin.servitect.adminSecurity.controller;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ec.fin.servitect.adminSecurity.model.request.MantenimientoRequest;
import ec.fin.servitect.adminSecurity.routes.PrecalificacionRoutes;
import ec.fin.servitect.adminSecurity.service.TipoEmpleoService;

@RestController
public class TipoEmpleoController {

	@Autowired
	TipoEmpleoService tipoEmpleoService;

	@GetMapping(<Precalificacion>Routes.EMPLEOS)
	public ResponseEntity<?> getTiposEmpleo(@Valid @RequestParam boolean allData) {
		return ResponseEntity.ok(tipoEmpleoService.getTiposEmpleo(allData));
	}

	@PostMapping(PrecalificacionRoutes.ADD_EMPLEO)
	public ResponseEntity<?> addEmpleo(HttpServletRequest headers, @Valid @RequestBody MantenimientoRequest request) {
		return ResponseEntity.ok(tipoEmpleoService.save(request));
	}

	@PostMapping(PrecalificacionRoutes.UPDATE_EMPLEO)
	public ResponseEntity<?> updateEmpleo(HttpServletRequest headers, @Valid @RequestBody MantenimientoRequest request) {
		return ResponseEntity.ok(tipoEmpleoService.update(request));
	}

	@PutMapping(PrecalificacionRoutes.DELETE_EMPLEO)
	public ResponseEntity<?> deleteEmpleo(HttpServletRequest headers, @PathVariable long codigoEmpleo,
			@Valid @RequestBody MantenimientoRequest request) {
		return ResponseEntity.ok(tipoEmpleoService.delete(codigoEmpleo, request));
	}
}
-----------------------------------------------------------------------------------
/*  w */


/*	PROGRAMACION JAVA	*/
¿Que es un Java Optional? . Un Java Optional es un tipo de variable que que puede almacenar dos valores .

El primer valor es un Objeto que nosotros necesitamos utilizar .
El segundo valor es un valor “vacio” o empty en el caso de que nos encontremos con una ausencia de un valor concreto y queramos informar al programador de que estamos ante dicha situación.

Optional<ClienteDTO> clienteDTO= buscarNotaSobresaliente(notas);
    if (clienteDTO.isPresent()) {
        ClienteDTO nota=clienteDTO.get();
      System.out.println(nota.getValor());
      System.out.println(nota.getAsignatura());
    }

