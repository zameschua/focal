/**
  Fires off actions to the reducers, informing the reducer of changes to be made
**/

// used to get unique id of a to-do item via its text composition
const getTextId = text => {
  let output = 0;
  for (let i=0;i<text.length;i++) {
    output += text.charCodeAt(i)*(i+1);
  }
  return output
}

export const addURL = url => {
  return {
    type: 'ADD_URL',
    id: getTextId(url),
    url
  }
}
