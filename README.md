# Project Title: WebSocket Communication Suite

## Introduction
This project facilitates communication between a client and a server using WebSockets. The client can connect to a WebSocket server, exchange messages, and receive periodic updates.

## Features
- **WebSocket Client:** Connects to a WebSocket server, sends initial greetings, and logs messages from the server.
- **WebSocket Server:** Accepts client connections, replies with a welcome message, and periodically broadcasts random stock prices.

## Project Structure

├── .gitignore ├── package.json ├── package-lock.json ├── webSocketClient.js └── webSocketServer.js

- **webSocketClient.js:** Establishes WebSocket connection, manages messages, and handles connection events.
- **webSocketServer.js:** Sets up a server to manage client connections and broadcasts updates.

## Installation

### Prerequisites
Ensure you have Node.js and npm installed.

### Step-by-Step Process
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate into the project directory:
   ```bash
   cd <project-directory>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Running the Server
To start the WebSocket server, run:

    node webSocketServer.js

### Running the Client
To initiate a WebSocket client connection, run:

    node webSocketClient.js

## Contributions
Feel free to contribute by submitting pull requests or opening issues.

## License
This project is licensed under the MIT License.