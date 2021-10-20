<template>
  <section>
    <div class="hero is-body">
      <div class="box">
        <div class="columns is-centered">
              <form class="section" @submit.prevent="login()">
                  <div class="field">
                    <label for="" class="label">Email</label>
                    <p class="control has-icons-left has-icons-right" >
                      <input class="input" type="text" placeholder="Email" v-model="email">
                        <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                        </span>
                        <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                        </span>
                        <span v-if="errors.length == 2" id="error-message">{{errors[0]}}</span>
                        <span v-else-if="errors[0] == '*Username Required' " id="error-message">{{"*Username Required"}}</span>
                    </p>
                  </div>
                  <div class="field">
                    <label for="" class="label">Password</label>
                    <p class="control has-icons-left">
                        <input class="input" type="password" placeholder="Password" v-model="password">
                          <span class="icon is-small is-left">
                          <i class="fas fa-lock"></i>
                          </span>
                          <span v-if="errors.length ==2" id="error-message">{{errors[1]}}</span>
                          <span v-else-if="errors[0]=='*Password Required'" id="error-message">{{"*Password Required"}}</span>
                    </p>
                  </div>
                  <div class="field">
                    <p class="control">
                      <button class="button is-link" @click="checkForm()">
                        Login
                      </button>
                    </p>
                  </div>
                </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Session from "../services/session";
export default {
    data: ()=>({
        errors: [],
        email: null,
        password: null,
        Session
    }),
    methods: {
        login(){
            this.Session.Login(this.email, this.password);
        },
        checkForm(){
                if(this.email && this.password){
                    return true
                }
                this.errors = []
                if(!this.email){
                    this.errors.push("*Username Required")
                }
                if(!this.password){
                    this.errors.push("*Password Required")
                }
        }
    }
}
</script>
<style>
#error-message{
  color:red;
}
</style>