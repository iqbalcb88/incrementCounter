const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
  counter.innerText = '0';
  const target = +counter.getAttribute('data-target');
  let currentValue = +counter.innerText;
  console.log(target, currentValue);

  /*   const increment = target / 100;
  console.log(increment);

  const interval = setInterval(() => {
    currentValue = currentValue + increment;
    counter.innerText = currentValue;
  }, 1000 / 100);

  setTimeout(() => {
    clearInterval(interval);
  }, 1000); */

  function updateCounter() {
    if (currentValue < target) {
      currentValue += Math.ceil(target / 400);
      counter.innerText = currentValue;
      setTimeout(updateCounter, 0);
    } else {
      counter.innerText = target;
    }
  }
  updateCounter();
});
