package service;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.json.JSONArray;
import org.json.JSONObject;


import model.Mural;
import model.Neighborhood;
import model.Photo;

import static util.Constants.SQL_DB;

public class MuralService {

	public String addMural(Mural mural) {

        Connection conn = null;
        try {
            // DB parameters
            String url = SQL_DB;
            // Create a connection to the database
            conn = DriverManager.getConnection(url);
            System.out.println("Connection to SQLite has been established.");
            
            // Insert photo
            String sqlPhoto = "INSERT INTO photos(photo) VALUES (?)";
            PreparedStatement pstmtPhoto = conn.prepareStatement(sqlPhoto);
            pstmtPhoto.setString(1, mural.getPhoto().toString());
            
            int  affectedPhotoRows = pstmtPhoto.executeUpdate();
            if (affectedPhotoRows < 1) {
            	System.out.println("Error adding photo");
            }
            else {
            	System.out.println("Successfully added photo");
            }
            
            // Get photo id
            String sqlPhotoId = "SELECT id FROM photos WHERE id = (SELECT MAX(id) FROM photos);";
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery(sqlPhotoId);
            int photoId = -1;
            while (rs.next()) {
            	photoId = rs.getInt(1);
            }
            
            // Insert mural
            String sqlMural = "INSERT INTO murals(neighborhood, artist, discovery_date, last_visit_date, current, latitude, longitude, street, photo_id)" +
            		" VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
            PreparedStatement pstmtMural = conn.prepareStatement(sqlMural);
            pstmtMural.setInt(1, mural.getNeighborhood());
            pstmtMural.setString(2, mural.getArtist());
            pstmtMural.setString(3, mural.getDiscoveryDate());
            pstmtMural.setString(4, mural.getLastVisitDate());
            pstmtMural.setBoolean(5, mural.isCurrent());
            pstmtMural.setDouble(6, mural.getLatitude());
            pstmtMural.setDouble(7, mural.getLongitude());
            pstmtMural.setString(8, mural.getStreet());
            pstmtMural.setInt(9, photoId);
            
            int affectedMuralRows = pstmtMural.executeUpdate();                             
            if (affectedMuralRows < 1) {
            	System.out.println("Error adding mural");
            }
            else {
            	System.out.println("Successfully added mural");
            }
            
        } catch (SQLException e) {
        	System.out.println(e.getMessage());
        } finally {
            try {
                if (conn != null) {
                    conn.close();
                }
            } catch (SQLException ex) {
            	System.out.println(ex.getMessage());
            }
        }
        
        return "";
    }
	
	public String getMuralsAndNeighborhoods() {

        Connection conn = null;
        JSONObject muralsAndNeighborhoods = new JSONObject();
        JSONArray murals = new JSONArray();
        JSONArray neighborhoods = new JSONArray();
        try {
            // db parameters
            String url = SQL_DB;
            // create a connection to the database
            conn = DriverManager.getConnection(url);
            System.out.println("Connection to SQLite has been established.");
            
            // Get murals
            String query = "select m.id, m.neighborhood, m.artist, m.discovery_date, "
            		+ "m.last_visit_date, m.current, m.latitude, m.longitude, m.street, p.photo "
            		+ "from murals m join photos p on m.photo_id = p.id;";
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery(query);
            while (rs.next()) {
            	int id = rs.getInt(1);
            	int neighborhood = rs.getInt(2);
				String artist = rs.getString(3);
				String discoveryDate = rs.getString(4);
				String lastVisitDate = rs.getString(5);
				boolean current = rs.getBoolean(6);
				double latitude = rs.getDouble(7);
				double longitude = rs.getDouble(8);
				String street = rs.getString(9);
				String photo = rs.getString(10);
				
				Mural mural = new Mural(id, neighborhood, artist, discoveryDate, lastVisitDate, current, latitude, longitude, street, new Photo(photo));
				
				murals.put(mural.createJson());
            }

            // Get neighborhoods
            query = "select n.id, n.neighborhood, p.photo from neighborhoods n"
                    + " join photos p on n.logo_id = p.id;";
            stmt = conn.createStatement();
            rs = stmt.executeQuery(query);
            while (rs.next()) {
                int id = rs.getInt(1);
                String name = rs.getString(2);
                String logo = rs.getString(3);

                Neighborhood neighborhood = new Neighborhood(id, name, logo);

                neighborhoods.put(neighborhood.createJson());
            }

            muralsAndNeighborhoods.put("murals", murals.toString());
            muralsAndNeighborhoods.put("neighborhoods", neighborhoods.toString());
            return muralsAndNeighborhoods.toString();
            
        } catch (SQLException e) {
        	System.out.println(e.getMessage());
        } finally {
            try {
                if (conn != null) {
                    conn.close();
                }
            } catch (SQLException ex) {
            	System.out.println(ex.getMessage());
            }
        }
        
        return "";
    }
	
}
