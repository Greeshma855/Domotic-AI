const ESP32_API_BASE_URL = "http://172.168.0.37"; // Replace with your ESP32's IP address

export const bulbService = {
  async toggleBulb(state) {
    try {
      const response = await fetch(`${ESP32_API_BASE_URL}/toggle`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ state: state ? "1" : "0" }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Error Response: ${errorText}`);
        throw new Error(`Failed to toggle bulb, status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Error toggling bulb:", error);
      throw error;
    }
  },

  async getBulbStatus() {
    try {
      const response = await fetch(`${ESP32_API_BASE_URL}/status`);
      if (!response.ok) {
        throw new Error("Failed to get bulb status");
      }
      return await response.json();
    } catch (error) {
      console.error("Error getting bulb status:", error);
      throw error;
    }
  },
};
