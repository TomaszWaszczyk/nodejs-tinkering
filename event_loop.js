// https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick

setTimeout(() => {
    const delay = Date.now() - timeoutScheduled;
  
    console.log(`${delay}ms have passed since I was scheduled`);
}, 100);

console.time('timeout');
