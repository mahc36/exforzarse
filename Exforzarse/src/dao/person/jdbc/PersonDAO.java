package dao.person.jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;

import dao.person.IPersonDAO;
import dao.secuencia.ISecuenciaDAO;
import dao.secuencia.jdbc.SecuenciaDAO;
import dto.PersonDTO;
import negocio.IPersonaNegocio;
import negocio.impl.PersonaNegocio;
import util.PersisUtil;

public class PersonDAO implements IPersonDAO {

	@Override
	public String agregarPersona(PersonDTO persona, Connection con) throws Exception {
		String message ="";
		String query;
        PreparedStatement instruccion = null;
        IPersonaNegocio personBussiness = new PersonaNegocio();
        try {
        	query = PersonSql.INSERT;	
        	instruccion = con.prepareStatement(query);
        	int index = 1;
        	ISecuenciaDAO secuenciaDao = new SecuenciaDAO();
        	int id = secuenciaDao.obtenerConsecutivo("sec_afiliado", con);
        	persona.setId(id);
        	instruccion.setInt(index++, persona.getId());
        	instruccion.setString(index++, persona.getNombre());
        	instruccion.setString(index++, persona.getLugarNacimiento());
        	instruccion.setString(index++, persona.getFechaNacimiento());
        	instruccion.setString(index++, persona.getTipoDocumento());
        	instruccion.setString(index++, persona.getNumeroDocumento());
        	instruccion.setString(index++, persona.getNombrePadre());
        	instruccion.setString(index++, persona.getOcupacionPadre());
        	instruccion.setString(index++, persona.getNombreMadre());
        	instruccion.setString(index++, persona.getOcupacionMadre());
        	instruccion.setInt(index++, persona.getCantidadHermanos());
        	instruccion.setString(index++, persona.getDireccion());
        	instruccion.setString(index++, persona.getCorreo());
        	instruccion.setString(index++, persona.getEps());
        	instruccion.setString(index++, persona.getTallaCamiseta());
        	instruccion.setString(index++, persona.getTallaPantaloneta());
        	instruccion.executeUpdate();
        	message="OK";
		} catch (Exception sql) {
			message ="ERROR";
        	con.rollback();
            throw new Exception(sql.toString());
		}
        finally {
            PersisUtil.closeResources(instruccion);
         }
        return message;
	}


}
