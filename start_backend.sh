#!/bin/bash
# Uses the current user's home directory for logs and PIDs
LOG_FILE="$HOME/backend.log"
PID_FILE="$HOME/backend.pid"

# Create log file and start logging
echo "Starting Python backend..." > "$LOG_FILE" 2>/dev/null || {
    echo "Warning: Cannot write to log file $LOG_FILE, continuing without logging"
    LOG_FILE="/dev/null"
}

cd "$(dirname "$0")/python_backend" || {
    echo "Error: Cannot change to python_backend directory"
    exit 1
}

source .venv/bin/activate || {
    echo "Error: Cannot activate virtual environment"
    exit 1
}

uvicorn main:app --host 0.0.0.0 --port 4009 --reload >> "$LOG_FILE" 2>&1 &
BACKEND_PID=$!

# Try to save PID, but don't fail if we can't
if echo "$BACKEND_PID" > "$PID_FILE" 2>/dev/null; then
    echo "Backend started with PID $BACKEND_PID" >> "$LOG_FILE" 2>/dev/null
    echo "Backend started with PID $BACKEND_PID (saved to $PID_FILE)"
else
    echo "Backend started with PID $BACKEND_PID (could not save PID file)"
fi