<template>
  <div class="container">
    <section class="section">
      <h1 class="title animate__animated animate__heartBeat">Frequently Asked Questions</h1>
      <h2 class="subtitle is-4">FAQ's is the fastest way to find an answer to your question!</h2>
      <div class="columns">
        <div class="column is-one-third" v-for="faq in faqs" :key="faq">
          <div class="card">
            <div class="card-content">
              <p class="title">{{faq.title}}</p>
              <p class="answer">{{faq.review}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {  GetAll } from "../services/reviews"
export default {
    data() {
        return {
            faqs: []
        }
    },
    async mounted(){
        this.faqs = await GetAll();
    }
}
</script>
<style>
* {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
.pd{
  padding:2.5em 0 1.5em 0;
}
.answer{
  margin-top: 10px !important;
  color:gray;
}
.columns{
  flex-wrap: wrap;
}
</style>