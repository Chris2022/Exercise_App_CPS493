<template>
  <form class="card" @submit.prevent="$emit('add')">
    <div class="box">
      <div class="field">
        <div class="control">
          <label class="label">Title: </label>
          <input
            class="input"
            type="text"
            placeholder="Title of Review"
            v-model="rev.title"
          />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <label class="label">Review: </label>
          <textarea
            class="textarea"
            placeholder="Leave your review here"
            v-model="rev.review"
          ></textarea>
        </div>
      </div>
      <div class="field is-grouped" id="buttons">
        <div class="control">
          <button class="button is-link">Submit</button>
        </div>
        <div class="control">
          <button class="button is-link is-light" type="reset">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
    props :{
        newRev: Object
    },
    data (){
        return{
            rev : this.newRev
        }
    },
    watch: {
        newReview(){
            this.rev = this.newRev;
        }
    }
};
</script>

<style>
</style>