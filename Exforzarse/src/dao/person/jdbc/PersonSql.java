package dao.person.jdbc;

public class PersonSql {
	
	private static final String TABLE_NAME="afiliado";
	public static final String INSERT="INSERT INTO "+TABLE_NAME+" (id,nombre, lugardenacimiento, fechadenacimiento, tipodocumento, numerodocumento, nombrepadre, ocupacionpadre, nombremadre, ocupacionmadre, cantidadhermanos, direccion, correo, eps, tallacamiseta, tallapantaloneta)  VALUES (?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
}
