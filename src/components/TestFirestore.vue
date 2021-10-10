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
        v-model="autoRead"
        label="auto"
        class="ml-2"
        @change="onChange"
      />
    </v-card-actions>
    <v-list>
      <TestFirestoreItem
        v-for="snapshot in snapshots"
        :key="snapshot.id"
        :snapshot="snapshot"
      />
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
import TestFirestoreItem from '@/components/TestFirestoreItem.vue'

const colectionDb = collection(db, 'articles')
export default {
  components: {
    TestFirestoreItem
  },
  data () {
    return {
      title: '',
      body: '',
      unsubscribe: null,
      snapshots: [],
      autoRead: true
    }
  },
  mounted () {
    this.subscribe()
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
        this.releaseSubscribe()
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
