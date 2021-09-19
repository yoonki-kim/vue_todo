<template>
  <v-app>
    <v-container >
      <v-card class="pa-3">
        <div class="text-h4 font-weight-bold text-center">Todo App</div>
        <v-row justify="center" class=mt-5>
          <v-col
            cols="12"
            sm="10"
            md="8"
            lg="6"
          >
            <v-text-field
              cols="4"
              counter="25"
              hint="This field uses counter prop"
              label="What are you doing work on?"
              @keyup.enter="addTodo"
              v-model="inputText"
            ></v-text-field>
          </v-col>
        </v-row>
        <Todo
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
        />
      </v-card>
    </v-container>

  </v-app>
</template>

<script>
import Todo from '@/components/Todo.vue'
export default {
  components: {
    Todo
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
  methods: {
    addTodo (e) {
      console.log(e.target.value, Date.now())
      if (!e.target.value) return
      this.todos.push({ id: Date.now(), text: e.target.value, checked: false })
      this.inputText = ''
    }
  }

}
</script>
