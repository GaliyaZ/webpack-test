import * as $ from 'jquery'

function createAnalytics() {
  let counter = 0;
  let Destroyed = false;

  const listener = () => counter++;

  $(document).on('click', listener);

  return {
    destroy() {
      $(document).off('click', listener);
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
