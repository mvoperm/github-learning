
let example5 = new Vue({
	el: '#example-5',
	data: {
		counter: 0,
	},
	methods: {
		addition: function()	{
			this.counter += 1;
		},
	},
});

Vue.component('todo-list-item', {
	template: '\
		<li>\
			{{ title }}\
			<button v-on:click="$emit(\'remove\')">Удалить</button>\
		</li>\
		',
	props: ['title'],
});
let example4 = new Vue({
	el: '#todo-list-example',
	data: {
		newTodoText: '',
		todos: [
			{
				id: 1,
				title: 'Помыть посуду',
			},
			{
				id: 2,
				title: 'Вынести мусор',
			},
			{
				id: 3,
				title: 'Подстричь газон',
			}
		],
		nextTodoId: 4,
	},
	methods: {
		addNewTodo: function () {
			this.todos.push({
				id: this.nextTodoId++,
				title: this.newTodoText
			});
			this.newTodoText = '';
		},
	},
});


let example3 = new Vue({
	el: '#v-for-object',
	data: {
		object: {
			title: 'Пробы на Vue.js',
			author: 'Максим Оскотский',
			publishedAt: '29.09.2019',
		},
	},
});

let example2 = new Vue({
	el: '#v-for-array',
	data: {
		parentMessage: 'Родитель',
		items: [
			{ message: 'Foo' },
			{ message: 'Bar' },
		],
	},
});

let watchExampleVM = new Vue({
	el: '#watch-example',
	data: {
		question: '',
		answer: 'Пока вы не зададите вопрос, я не могу ответить!'
	},
	watch: {
		// эта функция запускается при любом изменении вопроса
		question: function (newQuestion, oldQuestion) {
			this.answer = 'Ожидаю, когда вы закончите печатать...';
			this.debouncedGetAnswer();
		},
	},
	created: function () {
		// _.debounce — это функция lodash, позволяющая ограничить то, насколько часто может выполняться определённая операция. В данном случае мы ограничиваем частоту обращений к yesno.wtf/api, дожидаясь завершения печати вопроса перед отправкой ajax-запроса. Узнать больше о функции _.debounce (и её родственнице _.throttle), можно в документации: https://lodash.com/docs#debounce
		this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
	},
	methods: {
		getAnswer: function () {
			if (this.question.indexOf('?') === -1) {
				this.answer = 'Вопросы обычно заканчиваются вопросительным знаком. ;-)'
				return;
			}
			this.answer = 'Думаю...';
			let vm = this;
			axios.get('https://yesno.wtf/api')
				.then(function (response) {
					vm.answer = _.capitalize(response.data.answer)
				})
				.catch(function (error) {
					vm.answer = 'Ошибка! Не могу связаться с API. ' + error
				});
		},
	},
});

let vm2 = new Vue({
	el: '#demo-1',
	data: {
		firstName: 'Имя',
		lastName: 'Фамилия',
	},
	computed: {
		fullName: {
			// геттер
			get: function () {
				return this.firstName + ' ' + this.lastName;
			},
			// сеттер
			set: function (newValue) {
				var names = newValue.split(' ')
				this.firstName = names[0]
				this.lastName = names[names.length - 1]
			},
		},
	},
});
vm2.fullName = 'Иван Иванов';

let vm1 = new Vue({
	el: '#example-1',
	data: {
		message: '0123456789',
	},
	computed: {
		// геттер вычисляемого значения
		reversedMessageProperty: function () {
			// `this` указывает на экземпляр vm
			return this.message.split('').reverse().join('');
		},
	},
	methods: {
		reverseMessageMethod: function () {
			return this.message.split('').reverse().join('');
		},
	},
});
let app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Привет, Vue!',
  },
});

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>',
});
let app7 = new Vue({
	el: '#app-7',
	data: {
		todos: [
			{ id: 0, text: 'Изучить JavaScript' },
			{ id: 1, text: 'Изучить Vue.js' },
			{ id: 2, text: 'Создать что-нибудь классное' },
		],
		clue: 'Подсказка',
	},
});