<template>
  <v-app>
    <v-app-bar app>
      new
      <v-spacer />
      <AuthBtn />
    </v-app-bar>
    <v-main>
      <v-container>
        <v-card class="pa-3">
          <div class="text-h4 font-weight-bold text-center">
            Todo App
          </div>
          <v-row
            justify="center"
            class="mt-5"
          >
            <v-col
              cols="12"
              sm="10"
              md="8"
              lg="6"
            >
              <v-text-field
                v-model="inputText"
                cols="4"
                counter="25"
                hint="This field uses counter prop"
                label="What are you doing work on?"
                @keyup.enter="addTodo"
              />
            </v-col>
          </v-row>
          <v-row
            justify="center"
            class="mt-5"
          >
            <v-col
              cols="12"
              sm="10"
              md="8"
              lg="6"
            >
              <Todo
                v-for="todo in todos"
                :key="todo.id"
                :todo="todo"
                @toggle-checkbox="toggleCheckbox"
                @btn-clicked="deleteTodo"
              />
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Todo from '@/components/Todo.vue'
import AuthBtn from '@/components/AuthBtn.vue'

export default {
  components: {
    Todo, AuthBtn
  },
  data () {
    return {
      todos: [
        { id: 1, text: 'Buy a car', checked: false },
        { id: 2, text: 'Play game', checked: false },
        { id: 3, text: 'Coding a webapp', checked: false }
      ],
      inputText: ''
    }
  },
  created () {
    console.log('created')
    // console.log(this.$firebase)
  },
  mounted () {
    console.log('mounted')
  },
  methods: {
    addTodo (e) {
      if (!e.target.value) return
      this.todos.push({ id: Date.now(), text: e.target.value, checked: false })
      this.inputText = ''
    },
    toggleCheckbox ({ id, checked }) {
      const index = this.todos.findIndex(todo => {
        return todo.id === id
      })
      this.todos[index].checked = checked
    },
    deleteTodo (id) {
      const index = this.todos.findIndex(todo => {
        return todo.id === id
      })
      this.todos.splice(index, 1)
    }
  }

}
</script>
