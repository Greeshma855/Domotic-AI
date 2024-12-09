const ESP32_API_BASE_URL = "http://172.168.0.37"; // Replace with your ESP32's IP address

export const temperatureService = {
  async getTemperature() {
    try {
      const response = await fetch(`${ESP32_API_BASE_URL}/temperature`);
      if (!response.ok) {
        throw new Error("Failed to get temperature");
      }
      return await response.json();
    } catch (error) {
      console.error("Error getting temperature:", error);
      throw error;
    }
  },
};