console.log('Файл myblocks.js подключен!');

Vue.component('content-item', {
  props: ['itemblock'],
  //template: '<article><h3>{{ itemblock.title }}</h3><p>{{ itemblock.text }}</p><hr><br></article>',
  template: '<p>{{ itemblock.text }}</p>',
});
let article = new Vue({
	el: '#items',
	data: {
		itemblocks: [
			{ id: 0, title: 'Элемент 0', text: 'Изучить JavaScript' },
			{ id: 1, title: 'Элемент 1', text: 'Изучить Vue.js' },
			{ id: 2, title: 'Элемент 2', text: 'Создать что-нибудь классное' },
		],
    cssproperties: [],
		clue: 'Элементы контента',
	},
});

article.itemblocks.push({ id: 3, title: 'Элемент 3', text: 'Profit!' });


/* ПОЛУЧЕНИЕ ДАННЫХ ИЗ ФАЙЛА JSON ТРЕМЯ СПОСОБАМИ: (1) CALLBACH / XHR, (2) PROMISE, (3) ASYNC / AWAIT */
const cssRulesList = ['basic_hue', 'article_transparency', 'bg_image', 'basic_font_type', 'basic_font_size',];
/*
// (1) callback, XHR
let loadDoc = function(url, cFunction) {
  let xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      cFunction(this);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
};
let getJson = function(xhttp) {
  let str = xhttp.responseText;
  let jsonObj = JSON.parse(str);
  cssRulesList.forEach((item, index) => {
    article.cssproperties.push({ id: index, text: jsonObj[item] });
  });
  console.log(str);
};
loadDoc('../data/data.json', getJson);
*/
/*
// (2) promise
fetch('../data/data.json')
    .then((response) => {return response.json();})
    .then((jsonObj) => {
      cssRulesList.forEach((item, index) => {
        article.cssproperties.push({ id: index, text: jsonObj[item] });
      });
      console.log(JSON.stringify(jsonObj));
    });
*/
// (3) async / await
(async () =>	{
  let jsonFile = await fetch('../data/data.json');
  let jsonObj = await jsonFile.json();
  cssRulesList.forEach((item, index) => {
    article.cssproperties.push({ id: index, text: jsonObj[item] });
  });
  console.log(JSON.stringify(jsonObj));
})();
/* */
