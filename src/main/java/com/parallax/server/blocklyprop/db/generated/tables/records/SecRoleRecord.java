/**
 * This class is generated by jOOQ
 */
package com.parallax.server.blocklyprop.db.generated.tables.records;


import com.parallax.server.blocklyprop.db.enums.Role;
import com.parallax.server.blocklyprop.db.generated.tables.SecRole;

import javax.annotation.Generated;

import org.jooq.Field;
import org.jooq.Record1;
import org.jooq.Record2;
import org.jooq.Row2;
import org.jooq.impl.UpdatableRecordImpl;


/**
 * This class is generated by jOOQ.
 */
@Generated(
	value = {
		"http://www.jooq.org",
		"jOOQ version:3.7.4"
	},
	comments = "This class is generated by jOOQ"
)
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class SecRoleRecord extends UpdatableRecordImpl<SecRoleRecord> implements Record2<Long, Role> {

	private static final long serialVersionUID = 72148659;

	/**
	 * Setter for <code>blocklyprop.sec_role.id</code>.
	 */
	public void setId(Long value) {
		setValue(0, value);
	}

	/**
	 * Getter for <code>blocklyprop.sec_role.id</code>.
	 */
	public Long getId() {
		return (Long) getValue(0);
	}

	/**
	 * Setter for <code>blocklyprop.sec_role.name</code>.
	 */
	public void setName(Role value) {
		setValue(1, value);
	}

	/**
	 * Getter for <code>blocklyprop.sec_role.name</code>.
	 */
	public Role getName() {
		return (Role) getValue(1);
	}

	// -------------------------------------------------------------------------
	// Primary key information
	// -------------------------------------------------------------------------

	/**
	 * {@inheritDoc}
	 */
	@Override
	public Record1<Long> key() {
		return (Record1) super.key();
	}

	// -------------------------------------------------------------------------
	// Record2 type implementation
	// -------------------------------------------------------------------------

	/**
	 * {@inheritDoc}
	 */
	@Override
	public Row2<Long, Role> fieldsRow() {
		return (Row2) super.fieldsRow();
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public Row2<Long, Role> valuesRow() {
		return (Row2) super.valuesRow();
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public Field<Long> field1() {
		return SecRole.SEC_ROLE.ID;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public Field<Role> field2() {
		return SecRole.SEC_ROLE.NAME;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public Long value1() {
		return getId();
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public Role value2() {
		return getName();
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public SecRoleRecord value1(Long value) {
		setId(value);
		return this;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public SecRoleRecord value2(Role value) {
		setName(value);
		return this;
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public SecRoleRecord values(Long value1, Role value2) {
		value1(value1);
		value2(value2);
		return this;
	}

	// -------------------------------------------------------------------------
	// Constructors
	// -------------------------------------------------------------------------

	/**
	 * Create a detached SecRoleRecord
	 */
	public SecRoleRecord() {
		super(SecRole.SEC_ROLE);
	}

	/**
	 * Create a detached, initialised SecRoleRecord
	 */
	public SecRoleRecord(Long id, Role name) {
		super(SecRole.SEC_ROLE);

		setValue(0, id);
		setValue(1, name);
	}
}
