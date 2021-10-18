<template>
    <section class="section">
        <h1 class="title">Calorie Intake</h1>
        <h2 class="subtitle">
            Keeping track of your calorie intake is important, so keep a track of them here.
        </h2>
        <div class="control" id="calorie">
            <label class="label">Enter Calorie Intake</label>
        <div class="control">
            <input class="input" type="text" placeholder="Calorie Intake">
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
        activetab:1
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