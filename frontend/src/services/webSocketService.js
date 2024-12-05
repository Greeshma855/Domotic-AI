class WebSocketService {
    constructor(url) {
      this.url = url;
      this.socket = null;
      this.listeners = {
        bulbState: [],
        fanState: [],
        initialState: []
      };
    }
  
    connect() {
      this.socket = new WebSocket(this.url);
  
      this.socket.onopen = () => {
        console.log('WebSocket Connected');
      };
  
      this.socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        
        switch(data.type) {
          case 'initial_state':
            this.listeners.initialState.forEach(
              callback => callback(data)
            );
            break;
          case 'bulb_state':
            this.listeners.bulbState.forEach(
              callback => callback(data.state === 1)
            );
            break;
          case 'fan_state':
            this.listeners.fanState.forEach(
              callback => callback(data.state === 1)
            );
            break;
        }
      };
  
      this.socket.onclose = () => {
        console.log('WebSocket Disconnected');
        // Optional: Attempt reconnection
        setTimeout(() => this.connect(), 3000);
      };
    }
  
    toggleBulb(state) {
      this.send({
        type: 'toggle_bulb',
        state: state
      });
    }
  
    toggleFan(state) {
      this.send({
        type: 'toggle_fan',
        state: state
      });
    }
  
    send(message) {
      if (this.socket && this.socket.readyState === WebSocket.OPEN) {
        this.socket.send(JSON.stringify(message));
      }
    }
  
    // Register listeners
    onBulbStateChange(callback) {
      this.listeners.bulbState.push(callback);
    }
  
    onFanStateChange(callback) {
      this.listeners.fanState.push(callback);
    }
  
    onInitialState(callback) {
      this.listeners.initialState.push(callback);
    }
  
    // Optional: Remove listeners
    removeBulbStateListener(callback) {
      this.listeners.bulbState = 
        this.listeners.bulbState.filter(cb => cb !== callback);
    }
  
    removeFanStateListener(callback) {
      this.listeners.fanState = 
        this.listeners.fanState.filter(cb => cb !== callback);
    }
  }
  
  // Create and export the WebSocket service
  export const webSocketService = new WebSocketService('ws://172.168.3.165:81');