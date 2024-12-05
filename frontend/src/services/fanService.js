const ESP32_API_BASE_URL = "http://172.168.3.165"; // Replace with your ESP32's IP address

export const fanService = {
  async toggleFan(state) {
    try {
      const response = await fetch(`${ESP32_API_BASE_URL}/fan/toggle`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ state: state ? "1" : "0" }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Error Response: ${errorText}`);
        throw new Error(`Failed to toggle fan, status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Error toggling fan:", error);
      throw error;
    }
  },

  async getFanStatus() {
    try {
      const response = await fetch(`${ESP32_API_BASE_URL}/fan/status`);
      if (!response.ok) {
        throw new Error("Failed to get fan status");
      }
      return await response.json();
    } catch (error) {
      console.error("Error getting fan status:", error);
      throw error;
    }
  },
};
