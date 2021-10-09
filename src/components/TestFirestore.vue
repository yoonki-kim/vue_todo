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
      <v-btn @click="read">
        read
      </v-btn>
      <v-switch
        label="auto"
        class="ml-2"
        @change="onChange"
      />
    </v-card-actions>
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
      >
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.body }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import {
  collection,
  addDoc,
  getDocs,
  onSnapshot
} from 'firebase/firestore'
import { db } from '@/plugins/firebase.js'

const colectionDb = collection(db, 'articles')
export default {
  data () {
    return {
      title: '',
      body: '',
      unsubscribe: null,
      snapshots: []
    }
  },
  computed: {
    get items () {
      return this.snapshots.map(doc => doc.data())
    }
  },
  destroyed () {
    this.releaseSubscribe()
  },
  methods: {
    async create () {
      try {
        const docRef = await addDoc(colectionDb, {
          title: this.title,
          body: this.body
        })
        console.log('Document written with ID: ', docRef.id)
      } catch (e) {
        console.error('Error adding document: ', e)
      }
    },
    async read () {
      const snapshot = await getDocs(colectionDb)
      this.snapshots = snapshot.docs
      // querySnapshot.forEach((doc) => {
      //   console.log(`${doc.id} => ${doc.data()}`)
      // })
    },
    subscribe () {
      this.unsubscribe = onSnapshot(colectionDb, snapshot => {
        this.snapshots = snapshot.docs
        // snapshot.forEach((doc) => {
        //   console.log(`${doc.id} => ${doc.data()}`)
        // })
      })
    },
    releaseSubscribe () {
      if (this.unsubscribe) this.unsubscribe()
    },
    onChange (auto) {
      // console.log(auto)
      if (auto) {
        this.subscribe()
      } else {
        this.releaseSub()
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
