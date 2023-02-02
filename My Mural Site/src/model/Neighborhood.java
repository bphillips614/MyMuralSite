package model;

public class Neighborhood {

    private int id;
    private String name;
    private Photo logo;

    public Neighborhood(int id, String name, Photo logo) {
        this.id = id;
        this.name = name;
        this.logo = logo;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Photo getLogo() {
        return logo;
    }

    public void setLogo(Photo logo) {
        this.logo = logo;
    }

    public String createJson() {
		return "{\"id\":" + this.id + 
				", \"neighborhood\":\"" + this.name + 
				"\", \"photo\":\"" + this.logo.toString() + "\"}";
	}
}