<template>
  <div class="container">
    <section class="section">
      <h1 class="title">Frequently Asked Questions</h1>
      <h2 class="subtitle is-4">FAQ's is the fastest way to find an answer to your question!</h2>
      <div class="columns" v-if="faqs && faqs.length">
        <div class="column is-one-third" v-for="faq in faqs" :key="faq">
          <div class="card">
            <div class="card-content">
              <p class="title">{{faq.title}}</p>
              <p class="answer">{{faq.body}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'faq',
  data: ()=>({
    faqs: [],
    errors: [],
  }),
  //since the processing of the options is finished you have access to 
  //reactive data properties and change them if you want. 
  //At this stage DOM has not been mounted or added yet. So you cannot do any DOM manipulation here
  created(){
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response =>{
      this.faqs =response.data.slice(0,10);
    })
    .catch(e => {
      this.errors.push(e)
    })
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