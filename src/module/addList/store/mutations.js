
 export const add = state => {
	  var text = state.newText.trim()
	  if (text) {
	    state.texts.push({text: text})
	    state.newText = ''
	  }
  }
 export const remove = (state,index) => {
    state.texts.splice(index, 1)
  }