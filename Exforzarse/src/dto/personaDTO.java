package dto;

import java.util.ArrayList;

public class personaDTO {
	
	private String nombe;
	private String lugarDeNacimiento;
	private String fechaDeNacimiento;
	private String tipoDedocumento;
	private String numeroDocumento;
	private String nombrePadre;
	private String ocupaconPadre;
	private String nombrMadre;
	private String ocupaconMadre;
	private int cantidadHermanos;
	private ArrayList<String> nombreHermanos; //new ArrayList<String>();
	private String direccion;
	private String correo;
	private String eps;
	private String tallaCamiseta;
	private String tallaPantaloneta;
	public String getNombe() {
		return nombe;
	}
	public void setNombe(String nombe) {
		this.nombe = nombe;
	}
	public String getLugarDeNacimiento() {
		return lugarDeNacimiento;
	}
	public void setLugarDeNacimiento(String lugarDeNacimiento) {
		this.lugarDeNacimiento = lugarDeNacimiento;
	}
	public String getFechaDeNacimiento() {
		return fechaDeNacimiento;
	}
	public void setFechaDeNacimiento(String fechaDeNacimiento) {
		this.fechaDeNacimiento = fechaDeNacimiento;
	}
	public String getTipoDedocumento() {
		return tipoDedocumento;
	}
	public void setTipoDedocumento(String tipoDedocumento) {
		this.tipoDedocumento = tipoDedocumento;
	}
	public String getNumeroDocumento() {
		return numeroDocumento;
	}
	public void setNumeroDocumento(String numeroDocumento) {
		this.numeroDocumento = numeroDocumento;
	}
	public String getNombrePadre() {
		return nombrePadre;
	}
	public void setNombrePadre(String nombrePadre) {
		this.nombrePadre = nombrePadre;
	}
	public String getOcupaconPadre() {
		return ocupaconPadre;
	}
	public void setOcupaconPadre(String ocupaconPadre) {
		this.ocupaconPadre = ocupaconPadre;
	}
	public String getNombrMadre() {
		return nombrMadre;
	}
	public void setNombrMadre(String nombrMadre) {
		this.nombrMadre = nombrMadre;
	}
	public String getOcupaconMadre() {
		return ocupaconMadre;
	}
	public void setOcupaconMadre(String ocupaconMadre) {
		this.ocupaconMadre = ocupaconMadre;
	}
	public int getCantidadHermanos() {
		return cantidadHermanos;
	}
	public void setCantidadHermanos(int cantidadHermanos) {
		this.cantidadHermanos = cantidadHermanos;
	}
	public ArrayList<String> getNombreHermanos() {
		return nombreHermanos;
	}
	public void setNombreHermanos(ArrayList<String> nombreHermanos) {
		this.nombreHermanos = nombreHermanos;
	}
	public String getDireccion() {
		return direccion;
	}
	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}
	public String getCorreo() {
		return correo;
	}
	public void setCorreo(String correo) {
		this.correo = correo;
	}
	public String getEps() {
		return eps;
	}
	public void setEps(String eps) {
		this.eps = eps;
	}
	public String getTallaCamiseta() {
		return tallaCamiseta;
	}
	public void setTallaCamiseta(String tallaCamiseta) {
		this.tallaCamiseta = tallaCamiseta;
	}
	public String getTallaPantaloneta() {
		return tallaPantaloneta;
	}
	public void setTallaPantaloneta(String tallaPantaloneta) {
		this.tallaPantaloneta = tallaPantaloneta;
	}

}
