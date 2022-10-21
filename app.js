const App = {
    data() {
        return {
            placeholderString: 'Add some task',
            title: 'To-Do list',
            inputValue: '',
            tasks: []
        }
    },
    methods: {
        inputChangeHendler(event) {
            this.inputValue = event.target.value
        },
        addNewTask() {
            if (this.inputValue !== '') {
                this.tasks.push(this.inputValue)
                this.inputValue = ''
            }
        },
        deleteTask(index) {
            this.tasks.splice(index, 1)
        }
    }
}


Vue.createApp(App).mount('#app')