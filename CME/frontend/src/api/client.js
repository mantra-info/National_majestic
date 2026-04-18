const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const parseResponse = async (response) => {
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data;
};

export const apiClient = {
  get: async (path) => {
    const response = await fetch(`${API_BASE_URL}${path}`);
    return parseResponse(response);
  },
  post: async (path, body, isFormData = false) => {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      method: "POST",
      headers: isFormData ? undefined : { "Content-Type": "application/json" },
      body: isFormData ? body : JSON.stringify(body)
    });
    return parseResponse(response);
  }
};
