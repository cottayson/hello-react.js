// 1. загрузить raw text c помощью webpack
// 2. перекинуть файлы из src в папку dest без изменений с помощью gulp или webpack
// console.log('hello index.js')
// console.log(merge([1,2,3]))
// function merge(...a) {
	// return a + [1];
// }

// 


import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.js'

ReactDOM.render(
	<App />,
	document.querySelector('#app')
)