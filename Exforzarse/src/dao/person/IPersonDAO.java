package dao.person;

import java.sql.Connection;

import dto.PersonDTO;

public interface IPersonDAO {

	public String agregarPersona(PersonDTO persona,Connection con) throws Exception;
	
}
