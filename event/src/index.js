import {createStore} from 'redux';
import {wrapStore} from 'react-chrome-redux';

import rootReducer from './reducers';

// Create Redux store
const store = createStore(rootReducer, {});

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
  Used to init currentTabInfo by retrieving it from chrome.storage
  or creating a new entry in the storage if no records of current tab is found

  @params:
  
  url -> the url as String of the current tab

  returns -> the JSON object currentTabInfo
**/
var getURL = (url) => {
  chrome.storage.local.get('tracker', function(data) {
    var index, found;
    var hostname = new URL(url).hostname;

    // if no data is found in storage, create a new store with current tab details inside
    if (Object.keys(data).length === 0) {
      
      currentTabInfo.id = '_' + Math.random().toString(36).substr(2, 9);
      currentTabInfo.title = hostname;
      currentTabInfo.time = 0;
      var obj = {
        'tracker': [{
          'id': currentTabInfo.id,
          'title': currentTabInfo.title,
          'time': currentTabInfo.time
        }]
      };
      chrome.storage.local.set(obj);
      return;
    }

    // when data in storage is not empty, loop through every tab detail and find
    // the one whose title is the same as current tab's title
    data.tracker.forEach(function(value, Index) {
      if (value.title === hostname) {
        index = Index;
        found = true;
      }
    });

    // on finding a matching tab detail in the store, we retrieve the details of it
    // and set to currentTabInfo
    if (found) {
      var retrieved = data.tracker[index];
      currentTabInfo.id = retrieved.id;
      currentTabInfo.title = retrieved.title;
      currentTabInfo.time = retrieved.time;
    } 
    // if we can't find a matching tab detail, create a new tab detail at the end
    // of the storage and set to currentTabInfo
    else {
      currentTabInfo.id = '_' + Math.random().toString(36).substr(2, 9);
      currentTabInfo.title = hostname;
      currentTabInfo.time = 0;

      data.tracker.push({
        'id': currentTabInfo.id,
        'title': currentTabInfo.title,
        'time': currentTabInfo.time
      });
    }

    // update new storage state

    chrome.storage.local.set(data);
  });
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
    chrome.storage.local.get('tracker', function(data) {
      var index;

      // find the correct tab in the store to increment
      data.tracker.forEach(function(value, Index) {
        // alert("value: " + value.title + ", index: " + index + ", currentTabInfo: " + currentTabInfo.title);
        if (value.title === currentTabInfo.title) {
          index = Index;
        }
      });
      
      // increment the time
      data.tracker[index].time = data.tracker[index].time + 1;
      // update store
      chrome.storage.local.set(data);
    });
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
    var blacklist = ['newtab', 'devtools', 'extensions']; //blacklist consists of sites not meant to keep track of
    var hostname = new URL(tabs[0].url).hostname;
    var found = (blacklist.indexOf(hostname) === -1) ? false : true;

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

getCurrentTab(userActive);


chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	getCurrentTab(userActive);
});
chrome.tabs.onActivated.addListener((activeInfo) => {
	getCurrentTab(userActive);
	
});

/**** END OF BACKGROUND CODE FOR VISUALS ****/

