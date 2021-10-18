<template>
    <section class="section">
        <h1 class="title">Daily Workout</h1>
        <h2 class="subtitle">
            Log your daily workouts here.
        </h2>
        <div class="control" id="workout">
            <label class="label">Enter Workout:</label>
        <div class="control">
            <input class="input" type="text" placeholder="Workout">
        </div>
      </div>
    </section>
</template>

<script>
import Session from "../services/session";
export default {
    data: ()=>({
        email: null,
        password: null,
        Session,
    }),
    methods: {
        login(){
            this.Session.Login(this.email, this.password);
        }
    }
}
</script>

<style>
</style>