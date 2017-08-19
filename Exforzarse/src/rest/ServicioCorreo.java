package rest;


import javax.ws.rs.Consumes;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import correo.EnvioCorreo;
import dto.UsuarioDTO;

@Path("/servicioCorreo")
public class ServicioCorreo {
	
	@PUT
	@Path("/enviarCorreo")
	@Consumes (MediaType.APPLICATION_JSON)
	@Produces (MediaType.TEXT_PLAIN)
	public String enviarCorreo(UsuarioDTO usuario) {
		EnvioCorreo correo = new EnvioCorreo();
		correo.enviarMail(usuario);
		return "correo enviado con exito";
	}
}
