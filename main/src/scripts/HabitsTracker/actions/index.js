const getTextId = (text) => {
  let output = 0;
  for (let i = 0; i < text.length; i++) {
    output += text.charCodeAt(i) * (i + 1);
  }
  return output;
};


export const toggleModal = () => ({
  type: 'TOGGLE_MODAL',
  payload: {},
});

export const addHabitSite = (url, atMost, duration) => ({
	type: 'ADD_HABIT_SITE',
	payload: {
		id: getTextId(url),
		completed: atMost,
		url,
		atMost,
		duration
	}
});

export const deleteHabitSite = id => ({
	type: "DELETE_HABIT_SITE",
	payload: {
		id
	}
});

export const toggleStatsModal = () => ({
	type: "TOGGLE_STATS_MODAL",
	payload: {}
});

export const updateDailyRecordAdd = (date, atMost) => ({
	type: "UPDATE_DAILY_RECORD_ADD",
	payload: {
		date: date,
		atMost: atMost
	}
});

export const updateDailyRecordMinus = (date, completed) => ({
	type: "UPDATE_DAILY_RECORD_MINUS",
	payload: {
		date: date,
		completed: completed
	}
});