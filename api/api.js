import { API_URL } from "@/constants/constants";

export async function api(endpoint, options = {}) {
  //better to handle speficic exceptions rather than generic
  try {
    const response = await fetch(
      `${API_URL}${endpoint}`,
      {
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
        ...options,
      }
    );
    return response.json();
  } catch (error) {
    throw Error(`Error ${error.message}`);
  }

}
