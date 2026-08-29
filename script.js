function throttle(fn, limit) {
      // YOUR CODE HERE
      let inCooldown = false;
      return function(...args){
        if(inCooldown){
          return;
        }
        fn.apply(this,args);
        inCooldown = true;
        setTimeout(function(){
          inCooldown = false;
        },limit);
      }
    }

    // Interactive visualization logic
    let clickCount = 0;
    let executionCount = 0;

    const clickBtn = document.getElementById('clickBtn');
    const clickCountDisplay = document.getElementById('clickCountDisplay');
    const executionCountDisplay = document.getElementById('executionCountDisplay');
    const statusIndicator = document.getElementById('statusIndicator');

    // Attach throttled handler (500ms limit)
    const throttledHandler = throttle((time) => {
      executionCount++;
      executionCountDisplay.textContent = executionCount;
      statusIndicator.textContent = 'Cooldown';
      statusIndicator.classList.add('cooldown');
      
      // Visual feedback reset after the limit
      setTimeout(() => {
        statusIndicator.textContent = 'Ready';
        statusIndicator.classList.remove('cooldown');
      }, 500);
    }, 500);

    clickBtn.addEventListener('click', () => {
      clickCount++;
      clickCountDisplay.textContent = clickCount;
      // Pass the current timestamp as argument
      if (typeof throttledHandler === 'function') {
        throttledHandler(Date.now());
      }
    });

    // Make throttle globally accessible for evaluation
    window.throttle = throttle;