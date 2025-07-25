#!/bin/bash

# This pattern is specifically chosen to match Vite dev server processes
PATTERN="vite"

echo "Finding frontend processes matching '$PATTERN'..."

# pgrep -f checks the full command line for the pattern.
if pgrep -f "$PATTERN" > /dev/null
then
    echo "Found running frontend. Terminating process group..."
    # pkill -f finds and terminates all processes matching the pattern.
    pkill -f "$PATTERN"
    echo "Frontend process group terminated."
else
    echo "No running frontend process found."
fi