<script setup>
import {computed, ref, watch} from 'vue'
import {reactive} from "vue";

const counter = reactive({count: 0})
const message = ref('Hello World!')

const titleClass = ref('title')

function changeTitleColor() {
  if (titleClass.value === 'title') titleClass.value = 'subTitle'
  else titleClass.value = 'title'
}

function onInput(e) {
  message.value = e.target.value
}

const text = ref("")
const showTextInput = ref(false)

function toggleTextInput() {
  showTextInput.value = showTextInput.value === true ? false : true
}


// give each todo a unique id
let id = 0

const newTodo = ref('')
const todos = ref([
  {id: id++, text: 'Learn HTML', done: true},
  {id: id++, text: 'Learn JavaScript', done: false},
  {id: id++, text: 'Learn Vue', done: false}
])

function addTodo() {
  todos.value.push({id: id++, text: newTodo.value, done: false})
  newTodo.value = ''
}
function removeTodo(todo) {
  todos.value = todos.value.filter(t => t.id !== todo.id)
}

const hideCompleted = ref(false)
const filteredTodos = computed(() => {
  return hideCompleted.value
      ? todos.value.filter((t) => !t.done)
      : todos.value
    }
)




const todoId = ref(1)
const todoData = ref(null)

async function fetchData() {
  todoData.value = null
  const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )
  todoData.value = await res.json()
}

fetchData()

watch(todoId, fetchData)


const greeting = ref('Hello from parent')

const childMsg = ref("No child msg yet")


</script>

<template>

  <h1 :class="titleClass">{{ message }}</h1>
  <p>Count is: {{ counter.count }}</p>

  <button @click="changeTitleColor">Change title color</button>
  <br>


  <input :value="message" @input="onInput">
  <br>

  <button @click="toggleTextInput">Show text input</button>

  <div v-if="showTextInput">
    <p>{{ text }}</p>
    <input v-model="text" placeholder="Placeholder">
  </div>
  <div v-else>No input to show</div>

  <br>


  <input v-model="newTodo" placeholder="Insert todo">
  <button @click="addTodo">Add</button>
  <button @click="hideCompleted = !hideCompleted">Hide completed</button>

  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <input type="checkbox" v-model="todo.done">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>

  <p>Todo id: {{ todoId }}</p>
  <button @click="todoId++">Fetch next todo</button>
  <p v-if="!todoData">Loading...</p>
  <pre v-else>{{ todoData }}</pre>

  <ChildComponent :msg="greeting" />

  <ChildComponent @response="(msg) => childMsg = msg" />
  <p>{{ childMsg}}</p>

</template>


<style>
.title {
  color: red;
}

.subTitle {
  color: yellow;
}

.done {
  text-decoration: line-through;
}
</style>