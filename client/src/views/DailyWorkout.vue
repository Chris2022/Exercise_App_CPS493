<template>
    <section class="section">
        <h1 class="title">Daily Workout</h1>
        <h2 class="subtitle">
            Log your daily workouts here.
        </h2>
                <div class="box">
            <table class="table">
                <tbody>
                    <tr>
                        <th>Enter a workout</th>
                        <td><input class="input" type="text" placeholder="Enter Workout: " v-model="workout"></td>
                        <th>Calories Burned: </th>
                        <td><input class="input" type="number" placeholder="Enter Calorie Amount:" v-model="calories"></td>
                         <th>Total Time: </th>
                        <td><input class="input" type="number" placeholder="Enter Time Lapsed:" v-model="time"></td>
                        <td><button class="button is-link" @click.prevent="submit()">Submit</button></td>
                        <td><button class="button is-light" @click.prevent="clear()">Clear</button></td>
                    </tr>
                </tbody>
            </table>
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
        calories:'',
        workout: '',
        time: '',
    }),
    methods: {
        login(){
            this.Session.Login(this.email, this.password);
        },
        clear(){
            this.calories='';
            this.workout='';
            this.time='';
        },
        submit(){
            this.$oruga.notification.open({
                message: 'Workout Succesfully Recorded!',
                variant: 'info',
                position: 'top',
                closable: true
        })
        }
    }
}
</script>

<style>
</style>