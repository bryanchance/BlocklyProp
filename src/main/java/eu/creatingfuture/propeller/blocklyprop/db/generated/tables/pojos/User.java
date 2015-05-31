/**
 * This class is generated by jOOQ
 */
package eu.creatingfuture.propeller.blocklyprop.db.generated.tables.pojos;


import eu.creatingfuture.propeller.blocklyprop.db.enums.AuthenticationProvider;

import java.io.Serializable;
import java.util.GregorianCalendar;

import javax.annotation.Generated;


/**
 * This class is generated by jOOQ.
 */
@Generated(
	value = {
		"http://www.jooq.org",
		"jOOQ version:3.6.1"
	},
	comments = "This class is generated by jOOQ"
)
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class User implements Serializable {

	private static final long serialVersionUID = 441284554;

	private Long                   id;
	private String                 screenname;
	private String                 email;
	private String                 password;
	private String                 salt;
	private Boolean                blocked;
	private GregorianCalendar      created;
	private GregorianCalendar      modified;
	private AuthenticationProvider authenticationprovider;

	public User() {}

	public User(User value) {
		this.id = value.id;
		this.screenname = value.screenname;
		this.email = value.email;
		this.password = value.password;
		this.salt = value.salt;
		this.blocked = value.blocked;
		this.created = value.created;
		this.modified = value.modified;
		this.authenticationprovider = value.authenticationprovider;
	}

	public User(
		Long                   id,
		String                 screenname,
		String                 email,
		String                 password,
		String                 salt,
		Boolean                blocked,
		GregorianCalendar      created,
		GregorianCalendar      modified,
		AuthenticationProvider authenticationprovider
	) {
		this.id = id;
		this.screenname = screenname;
		this.email = email;
		this.password = password;
		this.salt = salt;
		this.blocked = blocked;
		this.created = created;
		this.modified = modified;
		this.authenticationprovider = authenticationprovider;
	}

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getScreenname() {
		return this.screenname;
	}

	public void setScreenname(String screenname) {
		this.screenname = screenname;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getSalt() {
		return this.salt;
	}

	public void setSalt(String salt) {
		this.salt = salt;
	}

	public Boolean getBlocked() {
		return this.blocked;
	}

	public void setBlocked(Boolean blocked) {
		this.blocked = blocked;
	}

	public GregorianCalendar getCreated() {
		return this.created;
	}

	public void setCreated(GregorianCalendar created) {
		this.created = created;
	}

	public GregorianCalendar getModified() {
		return this.modified;
	}

	public void setModified(GregorianCalendar modified) {
		this.modified = modified;
	}

	public AuthenticationProvider getAuthenticationprovider() {
		return this.authenticationprovider;
	}

	public void setAuthenticationprovider(AuthenticationProvider authenticationprovider) {
		this.authenticationprovider = authenticationprovider;
	}
}
