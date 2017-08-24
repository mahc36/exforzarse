package correo;

import java.util.Properties;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import dto.UsuarioDTO;


public class EnvioCorreo {

    public EnvioCorreo() {
    }
    
    public boolean enviarMail(UsuarioDTO usuario){
        try {
            String host = "smtp-mail.outlook.com";
            String correoOrigen = "linkcodev@outlook.com";
            Properties propiedades = System.getProperties();
            propiedades.put("mail.smtp.starttls.enable", "true");
            propiedades.put("mail.smtp.ssl.trust", "smtp-mail.outlook.com");
            propiedades.put("mail.smtp.host", host);
            propiedades.put("mail.smtp.user", correoOrigen);
            propiedades.put("mail.smtp.password", "ABCD.efgh.123");
            propiedades.put("mail.smtp.port", 587);
            propiedades.put("mail.smtp.auth", "true");
            
            Session sesion = Session.getInstance(propiedades, null);
            MimeMessage  mensaje = new MimeMessage(sesion);
            mensaje.setFrom(new InternetAddress(correoOrigen));
            mensaje.setRecipient(Message.RecipientType.TO, new InternetAddress("matteohenao36@gmail.com"));
            mensaje.setSubject("Mensaje de "+usuario.getNombre());
            mensaje.setText(usuario.getMensaje()+" \nDe: "+usuario.getNombre()+" \nCorreo: "+usuario.getCorreo()+" \nTeléfono "+usuario.getTelefono());
            
            Transport transporte = sesion.getTransport("smtp");
            transporte.connect(host,correoOrigen,"ABCD.efgh.123");
            transporte.sendMessage(mensaje, mensaje.getAllRecipients());
            transporte.close();
            
        } catch (MessagingException ex) {
            Logger.getLogger(EnvioCorreo.class.getName()).log(Level.SEVERE, null, ex);
        }
        return true;
    }
}
