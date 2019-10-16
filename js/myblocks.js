console.log('Файл myblocks.js подключен!');

Vue.component('content-item', {
  props: ['itemblock'],
  template: '<article><h3>{{ itemblock.title }}</h3><p>{{ itemblock.text }}</p><hr><br></article>',
});
let article = new Vue({
	el: '#items',
	data: {
		itemblocks: [
			{ id: 0, title: 'Элемент 0', text: 'Изучить JavaScript' },
			{ id: 1, title: 'Элемент 1', text: 'Изучить Vue.js' },
			{ id: 2, title: 'Элемент 2', text: 'Создать что-нибудь классное' },
		],
		clue: 'Элементы контента',
	},
});

article.itemblocks.push({ id: 3, title: 'Элемент 3', text: 'Profit!' });
