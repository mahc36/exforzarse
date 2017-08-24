package dao.secuencia;

import java.sql.Connection;

public interface ISecuenciaDAO {
	
	public Integer obtenerConsecutivo(String nombreSecuencia,Connection con) throws Exception;

}
