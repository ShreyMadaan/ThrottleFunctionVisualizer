# Throttling Visualizer

A simple interactive front-end project that demonstrates how a throttling function works in JavaScript. It lets users click a button repeatedly and visually shows that the actual callback is executed at most once every 500 milliseconds, even when many clicks occur in rapid succession.

## Features

- Real-time click counter
- Throttled execution counter
- Visual status indicator showing when the cooldown is active
- Pure HTML, CSS, and JavaScript implementation
- No external libraries or build tools required

## Project Structure

```text
ThrottlingVisualizer/
├── index.html
├── styles.css
├── script.js
├── README.md
```

## File Overview

### index.html
This file contains the UI for the visualizer and includes:
- a button labeled "Trigger Event"
- a total click count display
- a throttled execution count display
- a status badge that switches between "Ready" and "Cooldown"

### styles.css
This file defines the page styling, including:
- centered layout and card-like stat panels
- button visuals and hover states
- status badge colors for ready and cooldown states

### script.js
This file contains the throttle implementation and interaction logic:
- defines a `throttle(fn, limit)` helper
- tracks total clicks and actual throttled executions
- updates the UI on every click and execution
- exposes the throttle function on `window` for testing or debugging

## How It Works

1. The user clicks the trigger button multiple times quickly.
2. Every click increments the total click counter.
3. The throttled function checks whether it is currently in cooldown.
4. If the cooldown is active, the function returns without executing.
5. If not active, it runs once and then blocks further calls for 500 milliseconds.
6. The status indicator updates to show the active cooldown state.

## Running the Project

Because this is a static front-end app, you can run it in either of these ways:

### Option 1: Open directly in a browser
- Open `index.html` in your preferred browser.
- The visualizer will work immediately without any setup.

### Option 2: Use a local web server
From the project folder, run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Behavior Summary

- Total Clicks: increases on every click
- Throttled Calls: increases only when the function is allowed to execute
- Cooldown period: 500 ms
- Status: changes from "Ready" to "Cooldown" while waiting

## Example Use Cases

This project is useful for understanding:
- input throttling for search bars
- window resize event optimization
- scroll event handling
- debouncing and rate-limiting concepts in front-end development

## Notes

This project is intentionally lightweight and educational. It focuses on the core mechanics of throttling using native browser JavaScript, making it easy to understand and extend for learning or experimentation.
