/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.parallax.server.blocklyprop.db.dao;


import com.parallax.server.blocklyprop.db.generated.tables.records.MotdRecord;
import java.util.List;
import java.sql.Timestamp;
import org.joda.time.DateTime;



/**
 *
 * @author developer
 */
public interface  MotdDao {
    

    /**
     * Create a new message of the day
     * 
     * @param message
     * @param enableDate
     * @param disableDate
     * @return 
     */
    MotdRecord create(
            String message,
            DateTime enableDate,
            DateTime disableDate); 
            
            
    /**
     * Retrieve a single message of the day
     * 
     * @param idMotd
     * 
     * @return a single MotdRecord or null if record is not found
     */
    MotdRecord get(Long idMotd);
    
    MotdRecord getFirst();

    
    /**
     * List all MOTD records
     * 
     * @return a list of MotdRecords or null if there are no records
     */
    List <MotdRecord> get();


    /**
     * Mark a record as deleted
     * 
     * @param idMotd
     * @return True if the action was successful, otherwise false
     */
    Boolean delete(Long idMotd);


    /**
     * Update an existing motd record
     *
     * @param record
     * @return True if update completes successfully, otherwise false
     */
    Boolean update(MotdRecord record);

    // Enable a message of the day
    Boolean enable(Long idMotdRecord);

    // Disable a message of the day
    Boolean disable(Long idMotdRecord);



}
