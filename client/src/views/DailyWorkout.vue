<template>
    <section class="section">
        <h1 class="title">Daily Workout</h1>
        <h2 class="subtitle">
            keep Track of those gains and log your daily workout here.
            Just input the required data and hit submit and bam you are
            another step closer to reaaching your goal!
        </h2>
        <div id="tabs-with-content">
        <div class="hero-foot">
            <div class="tabs is-centered is-toggled is-fullwidth">
                <a v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]" >Log Cardio Training</a>
                <a v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]" >Log Weight Training</a>
            </div>
          </div>
      </div>
        <div class="box" v-if="activetab === 1">
            <table class="table">
                <tbody>
                    <tr>
                        <th>Enter a workout:</th>
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
        <div v-if="activetab === 2">
                    <table class="table">
                <tbody>
                    <tr>
                        <th>Workout Name:</th>
                        <td><input class="input" type="text" placeholder="Enter Workout:"></td>
                    </tr>
                    <tr>
                        <th>Number of Reps:</th>
                        <td><input class="input" type="number" placeholder="Enter Rep amount:"></td>
                        <th>Work Set(lbs): </th>
                        <td><input class="input" type="number" placeholder="Enter weight of set: "></td>
                    </tr>
                    <tr>
                        <th>Total Time: </th>
                        <td><input class="input" type="number" placeholder="Enter Time Lapsed:" v-model="time"></td>
                    </tr>
                    <tr>
                        <th>Notes:</th>
                        <td>
                            <textarea class="textarea is-link" placeholder="Enter Notes:" rows="5"></textarea>
                        </td>
                    </tr>
                    <tr>
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
        activetab: 1,
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