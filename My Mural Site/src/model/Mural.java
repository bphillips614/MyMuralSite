package model;

public class Mural {

	private int id;
	private int neighborhood;
	private String artist;
	private String discoveryDate;
	private String lastVisitDate;
	private boolean current;
	private double latitude;
	private double longitude;
	private String street;
	private Photo photo;
	
	public Mural() {}
	
	public Mural(int id, int neighborhood, String artist, String discoveryDate, String lastVisitDate, boolean current, double latitude, double longitude, String street, Photo photo) {
		this.id = id;
		this.neighborhood = neighborhood;
		this.artist = artist;
		this.discoveryDate = discoveryDate;
		this.lastVisitDate = lastVisitDate;
		this.current = current;
		this.latitude = latitude;
		this.longitude = longitude;
		this.street = street;
		this.photo = photo;
	}
	
	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public int getNeighborhood() {
		return neighborhood;
	}
	
	public void setNeighborhood(int neighborhood) {
		this.neighborhood = neighborhood;
	}
	
	public String getArtist() {
		return artist;
	}
	
	public void setArtist(String artist) {
		this.artist = artist;
	}
	
	public String getDiscoveryDate() {
		return discoveryDate;
	}
	
	public void setDiscoveryDate(String discoveryDate) {
		this.discoveryDate = discoveryDate;
	}
	
	public String getLastVisitDate() {
		return lastVisitDate;
	}
	
	public void setLastVisitDate(String lastVisitDate) {
		this.lastVisitDate = lastVisitDate;
	}
	
	public boolean isCurrent() {
		return current;
	}
	
	public void setCurrent(boolean current) {
		this.current = current;
	}
	
	public double getLatitude() {
		return latitude;
	}
	
	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}
	
	public double getLongitude() {
		return longitude;
	}
	
	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}
	
	public String getStreet() {
		return street;
	}
	
	public void setStreet(String street) {
		this.street = street;
	}
	
	public Photo getPhoto() {
		return photo;
	}
	
	public void setPhoto(Photo photo) {
		this.photo = photo;
	}	
	
	public String createJson() {
		return "{\"id\":" + this.id + 
				", \"neighborhood\":\"" + this.neighborhood + 
				"\", \"artist\":\"" + this.artist + 
				"\", \"discoveryDate\":\"" + this.discoveryDate + 
				"\", \"lastVisitDate\":\"" + this.lastVisitDate + 
				"\", \"current\":\"" + this.current + 
				"\", \"latitude\":" + this.latitude + 
				", \"longitude\":" + this.longitude +
				", \"street\":\"" + this.street + 
				"\", \"photo\":\"" + this.photo.toString() + "\"}";
	}
}