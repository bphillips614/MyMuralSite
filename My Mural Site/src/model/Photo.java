package model;

public class Photo {

	private int id;
	private String base64;
	
	public Photo(String base64) {
		this.base64 = base64;
	}
	
	public Photo(int id) {
		this.id = id;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getBase64() {
		return base64;
	}
	public void setBase64(String base64) {
		this.base64 = base64;
	}
	
	@Override
	public String toString() {
		return base64;
	}
	
}
