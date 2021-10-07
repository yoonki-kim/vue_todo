<template>
  <v-btn
    v-if="!user"
    icon
    @click="signIn"
  >
    <v-icon>mdi-account</v-icon>
  </v-btn>
  <v-btn
    v-else
    @click="logOut"
  >
    <v-icon>mdi-logout</v-icon>{{ user.displayName }}
  </v-btn>
</template>

<script>
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User
} from 'firebase/auth'
import { auth } from '@/plugins/firebase.js'

const provider = new GoogleAuthProvider()
export default {
  data () {
    return {
      user: User | null
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    signIn () {
      signInWithPopup(auth, provider)
    },
    logOut () {
      signOut(auth)
    },
    init () {
      onAuthStateChanged(auth, user => {
        console.log(user)
        this.user = user
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
