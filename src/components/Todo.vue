<template>
  <v-row justify="center" dense no-gutters>
    <v-col
      cols="12"
      sm="10"
      md="8"
      lg="6"
    >
      <v-container
        class="py-0"
        fluid
        dense
      >
        <v-checkbox
          dense
          v-model="todo.checked"
          :label="todo.text"
        ></v-checkbox>
      </v-container>
    </v-col>
  </v-row>
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

    }
  },
  methods: {
  }
}
</script>
