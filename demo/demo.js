window.addEventListener('DOMContentLoaded', () => {
  var connect = new FoxBoxConnect('f1f594213593b6de', 'profile');
  debugger;
  document.getElementById('connect').onclick = () => {
    try {
      connect.onmessage = (aMessage) => {
        console.log('Message received', aMessage);
      };
      connect.postMessage('hello');
    } catch(e) {
      console.error(e);
    }
  };
});

