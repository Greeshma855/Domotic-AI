const ESP32_API_BASE_URL = "http://172.168.0.37"; // Replace with your ESP32's IP address

export const humidityService = {
  async getHumidity() {
    try {
      const response = await fetch(`${ESP32_API_BASE_URL}/humidity`);
      if (!response.ok) {
        throw new Error("Failed to get humidity");
      }
      return await response.json();
    } catch (error) {
      console.error("Error getting humidity:", error);
      throw error;
    }
  },
};