<template>
    <section class="section">
        <h1 class="title">Calorie Intake</h1>
        <h2 class="subtitle">
            Keeping track of your calorie intake is important, so keep a track of the foods you eat
            and their calories throughout the day. Fill the form the form out and hit submit and
            you're all set!
        </h2>
        <div class="box">
            <table class="table">
                <tbody>
                    <tr>
                        <th>Enter a Breakfast: </th>
                        <td><input class="input" type="text" placeholder="Enter Breakfast" v-model="breakfast"></td>
                        <th>Enter Calorie Amount: </th>
                        <td><input class="input" type="text" placeholder="Enter Calorie Amount" v-model="breakfast_amount"></td>
                        <td><button class="button is-link" @click.prevent="submit()">Submit</button></td>
                        <td><button class="button is-light" @click.prevent="clear()">Clear</button></td>
                    </tr>
                    <tr>
                        <th>Enter a Lunch: </th>
                        <td><input class="input" type="text" placeholder="Enter Lunch" v-model="lunch"></td>
                        <th>Enter Calorie Amount: </th>
                        <td><input class="input" type="text" placeholder="Enter Calorie Amount" v-model="lunch_amount"></td>
                        <td><button class="button is-link" @click.prevent="submit()">Submit</button></td>
                        <td><button class="button is-light" @click.prevent="clear()">Clear</button></td>
                    </tr>
                    <tr>
                        <th>Enter a Dinner: </th>
                        <td><input class="input" type="text" placeholder="Enter Dinner" v-model="dinner"></td>
                        <th>Enter Calorie Amount: </th>
                        <td><input class="input" type="text" placeholder="Enter Calorie Amount" v-model="dinner_amount"></td>
                        <td><button class="button is-link" @click.prevent="submit()">Submit</button></td>
                        <td><button class="button is-light" @click.prevent="clear()">Clear</button></td>

                    </tr>
                    <tr>
                        <th>Enter a Snack: </th>
                        <td><input class="input" type="text" placeholder="Enter Snack" v-model="snack"></td>
                        <th>Enter Calorie Amount: </th>
                        <td><input class="input" type="text" placeholder="Enter Calorie Amount" v-model="snack_amount"></td>
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
        breakfast:'',
        lunch:'',
        dinner:'',
        snack:'',
        breakfast_amount:'',
        lunch_amount:'',
        dinner_amount:'',
        snack_amount:'',
    }),
    methods: {
        login(){
            this.Session.Login(this.email, this.password);
        },
        clear(){
            this.breakfast='';this.lunch='';this.dinner='';this.snack='';
            this.breakfast_amount='';this.lunch_amount='';this.dinner_amount='';this.snack_amount='';
        },
        submit(){
            this.$oruga.notification.open({
            message: 'Food Successfully Recorded!',
            variant: 'info',
            position: 'top',
            closable: true
        })
        }
    }
}
</script>

<style>
.tabular {
    text-align: center;
} 
</style>