#!/bin/bash
# Uses the current user's home directory for logs and PIDs
LOG_FILE="$HOME/frontend.log"
PID_FILE="$HOME/frontend.pid"

# Create log file and start logging
echo "Starting Vite frontend..." > "$LOG_FILE" 2>/dev/null || {
    echo "Warning: Cannot write to log file $LOG_FILE, continuing without logging"
    LOG_FILE="/dev/null"
}

cd "$(dirname "$0")" || {
    echo "Error: Cannot change to project directory"
    exit 1
}

npm run dev >> "$LOG_FILE" 2>&1 &
FRONTEND_PID=$!

# Try to save PID, but don't fail if we can't
if echo "$FRONTEND_PID" > "$PID_FILE" 2>/dev/null; then
    echo "Frontend started with PID $FRONTEND_PID" >> "$LOG_FILE" 2>/dev/null
    echo "Frontend started with PID $FRONTEND_PID (saved to $PID_FILE)"
else
    echo "Frontend started with PID $FRONTEND_PID (could not save PID file)"
fi