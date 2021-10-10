<template>
  <v-list>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
        <v-list-item-subtitle>{{ item.body }}</v-list-item-subtitle>
        <v-list-item-subtitle>{{ item.id }}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-menu
          v-model="menu"
          offset-y
          :close-on-content-click="false"
        >
          <template v-slot:activator="{on}">
            <v-btn
              icon
              v-on="on"
            >
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-text>
              <v-text-field v-model="title" />
              <v-text-field v-model="body" />
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn @click="update">
                update
              </v-btn>
              <v-btn @click="remove">
                delete
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-list-item-action>
    </v-list-item>
  </v-list>
</template>

<script>
import {
  doc,
  updateDoc,
  deleteDoc
} from 'firebase/firestore'
import { db } from '@/plugins/firebase.js'

export default {
  props: {
    snapshot: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      title: '',
      body: '',
      menu: false
    }
  },
  computed: {
    item: {
      get () {
        return this.snapshot.data()
      }
    },
    ref: {
      get () {
        return doc(db, 'articles', this.snapshot.id)
      }
    }
  },
  created () {
    this.title = this.item.title
    this.body = this.item.body
  },
  methods: {
    async update () {
      const c = { title: this.title, body: this.body }
      await updateDoc(this.ref, c)
      this.menu = false
    },
    remove () {
      deleteDoc(this.ref)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
