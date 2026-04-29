# AI Debugging Companion

A browser-based tool that analyzes code and explains bugs instead of fixing them.

## Features

- Monaco Editor integration for code input
- Real-time bug detection and explanation
- Execution flow visualization
- Variable state tracking
- Session persistence with localStorage

## Setup

1. Install frontend dependencies:
   ```
   npm install
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Set OpenAI API key:
   ```
   export OPENAI_API_KEY=your_api_key_here
   ```

4. Start backend:
   ```
   cd backend
   npm start
   ```

5. Start frontend (in new terminal):
   ```
   npm start
   ```

Open http://localhost:4200 in your browser.

## Usage

- Paste or type code in the editor
- View real-time bug explanations
- See execution timeline and variable changes

## Architecture

- Frontend: Angular 17 (standalone components, signals, RxJS)
- Backend: Node.js + Express + OpenAI API
- Editor: Monaco Editor
- State: In-memory with localStorage persistence