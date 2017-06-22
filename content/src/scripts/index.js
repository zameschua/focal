// http://www.kirupa.com/html5/detecting_if_the_user_is_idle_or_inactive.htm

// Background events for visuals
// Used to keep track of user's time spent on different sites

var timeoutID;

function setup() {
  // any action by the mouse will reset the timer
  document.onmousemove = resetTimer;
  document.onmousedown = resetTimer;
  document.onkeypress = resetTimer;
  document.onscroll = resetTimer;
  document.ontouchmove = resetTimer;
  document.onpointermove = resetTimer;

  startTimer();
}

setup();

function startTimer() {
  // send goInactive callback after 5 seconds
  timeoutID = window.setTimeout(goInactive, 5000);
}

function resetTimer(e) {
  // restart the timer and send goActive callback
  window.clearTimeout(timeoutID);
  goActive();
}

function goInactive() {
  // sends a runtime message to all event listeners in the chrome extension
  // used to send message to visuals backend
  chrome.runtime.sendMessage({ userActive: false });
}

function goActive() {
  // sends a runtime message to all event listeners in the chrome extension
  // used to send message to visuals backend
  chrome.runtime.sendMessage({ userActive: true });
  startTimer();
}
