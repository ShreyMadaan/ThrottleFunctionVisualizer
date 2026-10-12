# Throttling Visualizer

An interactive, dependency-free visualizer for understanding how throttling
controls the rate at which a JavaScript callback can run.

Click **Trigger Event** repeatedly and compare:

- **Total Clicks** - every click received by the button.
- **Throttled Calls** - clicks that are allowed to execute the callback.
- **Status** - whether the throttled handler is ready or in its 500 ms
  cooldown period.

## Demo behavior

The visualizer uses a leading-edge throttle:

1. The first click executes immediately.
2. Further clicks during the next 500 ms are ignored.
3. After the cooldown ends, the next click can execute again.

This makes the difference between an incoming event stream and the controlled
callback execution easy to observe. The `throttle` function is also exposed as
`window.throttle` so it can be inspected from the browser console.

## Running locally

No build step or package installation is required.

### Option 1: Open the page directly

Open [`index.html`](./index.html) in a modern browser.

### Option 2: Serve it with a local HTTP server

From the project directory, use any static file server. For example, with
Python:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Project structure

| File | Purpose |
| --- | --- |
| [`index.html`](./index.html) | Defines the visualizer layout and counters. |
| [`script.js`](./script.js) | Implements `throttle` and wires the interaction logic. |
| [`styles.css`](./styles.css) | Provides the responsive dark theme and status styling. |

## Core implementation

The throttle accepts a callback and a cooldown duration:

```js
function throttle(fn, limit) {
  let inCooldown = false;

  return function (...args) {
    if (inCooldown) return;

    fn.apply(this, args);
    inCooldown = true;

    setTimeout(() => {
      inCooldown = false;
    }, limit);
  };
}
```

The visualizer configures the handler with a `500` millisecond limit:

```js
const throttledHandler = throttle(() => {
  console.log("Callback executed");
}, 500);
```

## Learning goals

This small project demonstrates:

- The difference between event frequency and callback execution frequency.
- Leading-edge throttling with a cooldown flag.
- Preserving callback context and arguments with `fn.apply(this, args)`.
- Updating a browser UI in response to event and timer state.

## Author

Created by **Shrey Madaan**.
