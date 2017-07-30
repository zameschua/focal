import {toggleCompleted, addHabitSiteTime, addDailyRecord, resetCompletedStatus} from '../backendActions/index';
import moment from "moment";

const initHabitsTracker = store => {

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
    var hostname = new URL(url).origin;

    // when data in store is not empty, loop through every tab detail and find
    // the one whose url is the same as current tab's url

    data.habitsTracker.habitSites.forEach(function(value, Index) {
      if (value.url === hostname) {
        
        index = Index;
        found = true;
      }
    });

    // on finding a matching tab detail in the store, we retrieve the details of it
    // and set to currentTabInfo
    if (found) {  
      var retrieved = data.habitsTracker.habitSites[index];
      currentTabInfo.id = retrieved.id;
      currentTabInfo.completed = retrieved.completed;
      currentTabInfo.url = retrieved.url;
      currentTabInfo.atMost = retrieved.atMost;
      currentTabInfo.duration = retrieved.duration;
      currentTabInfo.timeSpent = retrieved.timeSpent;

    }
    else {
      currentTabInfo = {};
    }
  };

  /**
    Used to increment the details of the time spent on a current tab in the storage

    @params:

    returns -> nothing
  **/
  var updateURL = () => {
    if (currentTabInfo !== {}) { 
      // increment the time
      // update new storage state by firing a dispatch call
      store.dispatch(addHabitSiteTime(currentTabInfo.url));

      // if the time exceeds the duration timer
      // update completed status
      if (currentTabInfo.timeSpent + 1 >= (currentTabInfo.duration*60)) {
        
        
        // if failed
        if (currentTabInfo.atMost && currentTabInfo.completed) {
          store.dispatch(toggleCompleted(currentTabInfo.url));
          var data = store.getState();
          var record = {  
            date: new moment(),
            completed: data.habitsTracker.habitSites.filter(site => {return site.completed}).length,
            incomplete: data.habitsTracker.habitSites.filter(site => {return !site.completed}).length
          };

          currentTabInfo.completed = false;
          sendNotification(currentTabInfo.url, currentTabInfo.duration, currentTabInfo.completed);
          store.dispatch(addDailyRecord(record.date, record.completed, record.incomplete));
        }
        // if success
        else if (!currentTabInfo.atMost && !currentTabInfo.completed) {
          store.dispatch(toggleCompleted(currentTabInfo.url));
          var data = store.getState();
          var record = {  
            date: new moment(),
            completed: data.habitsTracker.habitSites.filter(site => {return site.completed}).length,
            incomplete: data.habitsTracker.habitSites.filter(site => {return !site.completed}).length
          };

          currentTabInfo.completed = true;
          sendNotification(currentTabInfo.url, currentTabInfo.duration, currentTabInfo.completed);
          store.dispatch(addDailyRecord(record.date, record.completed, record.incomplete));
        }
      }
    }
  };

  var updateDailyRecord = () => {
    var data = store.getState();
    var record = {
      date: new moment(),
      completed: data.habitsTracker.habitSites.filter(site => {return site.completed}).length,
      incomplete: data.habitsTracker.habitSites.filter(site => {return !site.completed}).length
    };
    // check when pastRecords is first initiated
    if (data.habitsTracker.pastRecords.length === 0) {
      // add first record
      store.dispatch(addDailyRecord(record.date, record.completed, record.incomplete));
    }
    else {
      var lastRecordIndex = data.habitsTracker.pastRecords.length-1;
      /* NOTE: Everytime the background page refreshes, the date object will become a default moment string */
      // check whether dates are same. If it's not the same, 
      // then it's a new day so add the record in and also reset the habitsTracker "completed" status
      if (record.date.get('date') !== new moment(data.habitsTracker.pastRecords[lastRecordIndex].date).get('date')) {
        // reset the goals status first
        store.dispatch(resetCompletedStatus());
        // update record's attributes
        record.completed = data.habitsTracker.habitSites.filter(site => {return site.completed}).length;
        record.incomplete = data.habitsTracker.habitSites.filter(site => {return !site.completed}).length;
        // update pastRecords
        store.dispatch(addDailyRecord(record.date, record.completed, record.incomplete));
      }
    }
  }

  /**
    function that keeps track of current tab and increments the time counter of the tab in storage

  **/
  var getCurrentTab = () => {

    chrome.tabs.query({
      currentWindow: true,
      active: true
    }, function(tabs) {
      var blacklist = ['newtab', 'devtools', 'extensions', 'settings']; //blacklist consists of sites not meant to keep track of
      if (tabs[0].url) {
        let hostname = new URL(tabs[0].url).hostname;
        var found = (blacklist.indexOf(hostname) === -1) ? false : true;
      }
      else {
        var found = true;
      }
      

      // if hostname not part of blacklist
      if (!found) {
        
        clearInterval(interval);
        // every period, increment the time of tab details in storage
        interval = setInterval(function() {
          updateDailyRecord();
          getURL(tabs[0].url);
          if (Object.keys(currentTabInfo).length !== 0) {
            updateURL();
          }
        }, updateTime);
      } else {
        clearInterval(interval);
      }
    });
  };

  var sendNotification = (siteUrl, timeSpent, completed) => {
    if (completed) {
      var title = "Success!";
      var message = "Congratulations! You have successfully spent " + timeSpent + " minutes on " + siteUrl + " and hence have completed your goal!";
    }
    else {
      var title = "Aww :(";
      var message = "Too bad, you spent " + timeSpent + " minutes on " + siteUrl + " and hence have failed your goal.";
    }
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icon.png",
      title: title,
      message: message,
    });
  }


  getCurrentTab();


  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  	getCurrentTab();
  });
  chrome.tabs.onActivated.addListener((activeInfo) => {
  	getCurrentTab();
  });
}

export default initHabitsTracker;


      