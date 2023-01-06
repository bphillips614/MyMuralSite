package util;

import org.json.JSONObject;
import org.json.JSONException;

public class JSONUtil extends JSONObject {

	public JSONUtil(String json) {
		super(json);
	}
	
	@Override
	public int getInt(String key) {
		int value;
		try {
			value = super.getInt(key);
		} catch(JSONException e) {
			// null exception handler
			value = -1;
		}
		return value;
	}
	
	@Override
	public boolean getBoolean(String key) {
		boolean value;
		try {
			value = super.getBoolean(key);
		} catch(JSONException e) {
			// handle "1" being true
			value = this.getString(key).equals("1");
		}
		return value;
	}
	
	@Override
	public double getDouble(String key) {
		double value;
		try {
			value = super.getDouble(key);
		} catch(JSONException e) {
			// null exception handler
			value = -1;
		}
		return value;
	}
	
}
