
<template>
    <div class="buttons" v-if="!Session.user">
          <router-link class="button is-link" to='/signup'>
            <strong>Sign up</strong>
          </router-link>
          <a class="button is-light" @click="login">
            Log in
          </a>
    </div>
    <div v-else>
        Hello {{name}} 
    </div>
</template>

<script>
import Session from "../services/session";
export default {
    data (){
        return ({ 
            Session
        })
    },
    methods: {
        login(){
            this.$router.push('/login');
        }
    },
    computed:{
        name(){
            return this.Session.user.firstName + ' ' + this.Session.user.lastName;
        }
    }
}
</script>

<style>
</style>