export async function API_HANDLER(method, endpoint, data = null, token = null) {
    try {
      const headers = {
        "Content-Type": "application/json",
      };
  
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }
  
      const options = {
        method,
        headers,
        cache: "no-store",
      };
  
      if (data && method !== "GET") {
        options.body = JSON.stringify(data);
      }
  
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + endpoint, options);
  
      if (!res.ok) {
        console.error(`API ${method} request to ${endpoint} failed`, await res.text());
        return {};
      }
  
      const json = await res.json();
      return json?.data?.data || {}; 
    } catch (error) {
      console.error("API_HANDLER error:", error);
      return {};
    }
  }
  