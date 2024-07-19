(() => {  
    const speedCounter = document.createElement('div');
    speedCounter.id = 'speedCounter';
    speedCounter.style.color = 'lime';
    speedCounter.style.position = 'fixed';
    speedCounter.style.bottom = "0%";
    speedCounter.style.textAlign = 'center';
    speedCounter.style.padding = '10px';
    speedCounter.style.fontWeight = 'bold';
    speedCounter.style.fontFamily = "Rubik, sans-serif";
    speedCounter.style.textShadow = 'rgb(0, 0, 0) 1px 1px 10px';
    speedCounter.style.fontSize = '30px';
    speedCounter.textContent = 1;
    document.body.appendChild(speedCounter);
    
    let speedMultiplier = 1;
    const speedHackDateNow = function() {
      const real = oldDn.call(Date);
      const elapsed = (real - lastDn) * speedMultiplier;

      const result = Math.floor(startDn + cumulativeDn + elapsed);

      cumulativeDn += elapsed;
      lastDn = real;

      return result
    };

    const speedHackPerformanceNow = function() {
      const real = oldPn.call(performance);
      const elapsed = (real - lastPn) * speedMultiplier;

      const result = Math.floor(startPn + cumulativePn + elapsed);

      cumulativePn += elapsed;
      lastPn = real;

      return result
    };

    let oldDn = Date.now;
    Date.now = speedHackDateNow;

    let oldPn = performance.now;
    performance.now = speedHackPerformanceNow;

    let startDn = oldDn.call(Date);
    let startPn = oldPn.call(performance);
    let lastDn = startDn;
    let lastPn = startPn;
    let cumulativeDn = 0;
    let cumulativePn = 0;

    window.addEventListener('keydown', (event) => {
        if (event.code === "ArrowUp" || event.code === "KeyW") {
            speedMultiplier += 0.1
            speedCounter.textContent = Number((speedMultiplier).toFixed(1));
        }
        if ((event.code === "ArrowDown" || event.code === "KeyS") && speedMultiplier > 0.1) {
            speedMultiplier -= 0.1
            speedCounter.textContent = Number((speedMultiplier).toFixed(1));
        }
    });
    
})();
