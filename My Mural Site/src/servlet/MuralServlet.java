package servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import service.MuralService;
import model.Mural;
import model.Photo;
import util.JSONUtil;

public class MuralServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	protected void processRequest(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String action = request.getParameter("action");
		
		String message = "Error";
		switch (action) {
			case "get": {
				MuralService muralService = new MuralService();
				message = muralService.getMurals();
				break;
			}
			case "add": {
				JSONUtil data = new JSONUtil(request.getParameter("data"));
				MuralService muralService = new MuralService();
				Mural mural = new Mural();
				Photo photo = new Photo(data.getString("photo"));
				mural.setNeighborhood(data.getInt("neighborhood"));
				mural.setArtist(data.getString("artist"));
				mural.setDiscoveryDate(data.getString("discoveryDate"));
				mural.setLastVisitDate(data.getString("lastVisitDate"));
				mural.setCurrent(data.getBoolean("current"));
				mural.setLatitude(data.getDouble("latitude"));
				mural.setLongitude(data.getDouble("longitude"));
				mural.setStreet(data.getString("street"));
				mural.setPhoto(photo);
				message = muralService.addMural(mural);
				break;			
			}	
		}
	
		PrintWriter out = response.getWriter();
		out.write(message);
		out.close();
	}
	
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		processRequest(request, response);
	}
	
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		processRequest(request, response);
	}
}