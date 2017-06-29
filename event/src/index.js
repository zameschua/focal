import {createStore} from 'redux';
import {wrapStore} from 'react-chrome-redux';
import {addURL,addTime} from './backend-actions';
import rootReducer from './reducers';



// chrome.storage.local.get("MAIN_STORE", (items) => {
//   alert("state gotten");
//   initialState = items.MAIN_STORE;
//   initApp();

// });

var initialState = (localStorage.MAIN_STORE) ? JSON.parse(localStorage.MAIN_STORE) : {};

// Create Redux store
const store = createStore(rootReducer, initialState);

// Every time the state changes, update state stored in chrome.storage
// unsubscribe() to stop listening to state updates
function handleChange() {
  localStorage.setItem("MAIN_STORE",JSON.stringify(store.getState()));
}

let unsubscribe = store.subscribe(handleChange);

// Wrap it in proxy so that front end is able to retrieve it (react-chrome-redux package)
wrapStore(store, {
  portName: 'MAIN_STORE'
});

/*************************************** BACKGROUND CODE GOES HERE *********************************************/

/**** START OF BACKGROUND CODE FOR VISUALS ****/

var interval = null;
var updateTime = 1000;
var currentTabInfo = {};
var userActive = true;

/**
  Used to init currentTabInfo by retrieving it from store
  or creating a new entry in the store if no records of current tab is found

  @params:
  
  url -> the url as String of the current tab

**/

var getURL = (url) => {
  var data = store.getState();
  var index, found;
  var hostname = new URL(url).hostname;

  // when data in store is not empty, loop through every tab detail and find
  // the one whose title is the same as current tab's title
  data.timeTracker.URL.forEach(function(value, Index) {
    if (value.title === hostname) {
      index = Index;
      found = true;
    }
  });

  // on finding a matching tab detail in the store, we retrieve the details of it
  // and set to currentTabInfo
  if (found) {  
    var retrieved = data.timeTracker.URL[index];
    currentTabInfo.id = retrieved.id;
    currentTabInfo.title = retrieved.title;
    currentTabInfo.time = retrieved.time;
  } 
  // if we can't find a matching tab detail, create a new tab detail at the end
  // of the store and set to currentTabInfo
  else {
    currentTabInfo.id = '_' + Math.random().toString(36).substr(2, 9);
    currentTabInfo.title = hostname;
    currentTabInfo.time = 1;

    // update new storage state by firing a dispatch call
    store.dispatch(addURL(currentTabInfo.id,currentTabInfo.title,currentTabInfo.time));
  }
};

/**
  Used to increment the details of the time spent on a current tab in the storage

  @params:
  
  currentTabInfo: JSON object that tracks the details of the current tab
  userActive: boolean to indicate whether user is currently active on the page

  returns -> nothing
**/
var updateURL = (currentTabInfo, userActive) => {
  if (userActive) { 
    // increment the time
    // update new storage state by firing a dispatch call
    store.dispatch(addTime(currentTabInfo.title));
  }
};

/**
  function that keeps track of current tab and increments the time counter of the tab in storage
  
  @params:

  userActive: boolean to indicate whether user is currently active on the page

**/
var getCurrentTab = () => {

  chrome.tabs.query({
    currentWindow: true,
    active: true
  }, function(tabs) {
    var blacklist = ['newtab', 'devtools', 'extensions', 'settings']; //blacklist consists of sites not meant to keep track of
    if (tabs[0].url) {
      var hostname = new URL(tabs[0].url).hostname;
      var found = (blacklist.indexOf(hostname) === -1) ? false : true;
    }
    else {
      var found = true;
    }
    

    // if hostname not part of blacklist
    if (!found) {
      getURL(tabs[0].url);
      clearInterval(interval);
      // every period, increment the time of tab details in storage
      interval = setInterval(function() {
        updateURL(currentTabInfo,userActive);
      }, updateTime);
    } else {
      clearInterval(interval);
    }
  });
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	
  if (sender.tab) { // if message is sent from a chrome tab
    userActive = message.userActive;
  }
});

getCurrentTab();


chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	getCurrentTab();
});
chrome.tabs.onActivated.addListener((activeInfo) => {
	getCurrentTab();
	
});

/**** END OF BACKGROUND CODE FOR VISUALS ****/

