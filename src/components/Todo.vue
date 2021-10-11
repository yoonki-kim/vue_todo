<template>
  <v-list-item>
    <v-list-item-action>
      <v-checkbox
        v-model="todo.checked"
        dense
        @change="toggleCheckbox"
      >
        <template v-slot:label>
          <div
            :class="todo.checked ? 'text-decoration-line-through' : ''"
            class="ml-2"
            v-text="todo.text"
          />
        </template>
      </v-checkbox>
    </v-list-item-action>
    <v-spacer />
    <v-btn
      icon
      @click="btnClicked"
    >
      <v-icon>mdi-delete</v-icon>
    </v-btn>
  </v-list-item>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      lineThrough: ''
    }
  },
  methods: {
    toggleCheckbox (e) {
      this.$emit('toggle-checkbox', {
        id: this.todo.id,
        checked: e
      })
    },
    btnClicked (e) {
      // console.log(e, this.todo.id)
      this.$emit('btn-clicked', this.todo.id)
    }
  }
}
</script>
