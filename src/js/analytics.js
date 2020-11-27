function createAnalytics() {
  let counter = 0;
  let Destroyed = false;

  const listener = () => counter++;

  document.addEventListener('click', listener);

  return {
    destroy() {
      document.removeEventListener('click', listener);
      Destroyed = true;
    },
    getClics() {
      if (Destroyed) {
        return 'Analitics is destroyed! total clicks = ${counter}';
      }
      return counter;
    }
  }
}

window.analytics = createAnalytics();
