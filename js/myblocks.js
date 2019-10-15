console.log('Файл myblocks.js подключен!');

Vue.component('content-item', {
  props: ['itemblock'],
  template: '<article>{{ itemblock.text }}</article>',
});
let article = new Vue({
	el: '#items',
	data: {
		itemblocks: [
			{ id: 0, text: 'Изучить JavaScript' },
			{ id: 1, text: 'Изучить Vue.js' },
			{ id: 2, text: 'Создать что-нибудь классное' },
		],
		clue: 'Элементы контента',
	},
});
