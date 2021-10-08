<template>
  <v-card class="my-4">
    <v-subheader>TestFirestore</v-subheader>
    <v-card-text>
      <v-text-field v-model="title" />
      <v-text-field v-model="body" />
    </v-card-text>
    <v-card-actions>
      <v-btn @click="create">
        create
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { collection, addDoc } from 'firebase/firestore'
import { db } from '@/plugins/firebase.js'

export default {
  data () {
    return {
      title: '',
      body: ''
    }
  },
  methods: {
    async create () {
      try {
        const docRef = await addDoc(collection(db, 'articles'), {
          title: this.title,
          body: this.body
        })
        console.log('Document written with ID: ', docRef.id)
      } catch (e) {
        console.error('Error adding document: ', e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
