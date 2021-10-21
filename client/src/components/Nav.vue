<template>
<div class="container">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <router-link class="navbar-item; is-size-3" to="/">
                    <img src="../assets/FitBud.png" width="175" height="10">
                </router-link>
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" :class="{'is-active': isActive }" @click="isActive = !isActive">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div class="navbar-menu" :class="{'is-active': isActive }">
                <div class="navbar-start">
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link is-arrowless is-tab">
                            Nutrition
                        </a>
                        <div class="navbar-dropdown" id="hidden-mobile" >
                            <router-link class="navbar-item is-tab" to="/weightloss" active-class="is-active"> 
                                Recipes for Weight Loss
                            </router-link>
                            <router-link class="navbar-item is-tab" to="/Protein" active-class="is-active"> 
                                Recipes to Gain Muscle
                            </router-link>
                        </div>
                    </div>
                    <router-link class="navbar-item is-tab" to="/progress" active-class="is-active">Progress</router-link>
                    <div class="navbar-item has-dropdown is-hoverable" >
                        <a class="navbar-link is-arrowless is-tab">
                            Workouts
                        </a>
                        <div class="navbar-dropdown" id="hidden-mobile-workout">
                            <router-link class="navbar-item is-tab" to="/Push" active-class="is-active">
                                Push Workouts
                            </router-link>
                            <router-link class="navbar-item is-tab" to="/Pull" active-class="is-active">
                                Pull Workouts
                            </router-link>
                            <router-link class="navbar-item is-tab" to="/Leg" active-class="is-active">
                                Leg Workouts
                            </router-link>
                            <router-link class="navbar-item is-tab" to="/cardio" active-class="is-active">
                                HIIT Workouts
                            </router-link>
                        </div>
                    </div>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link is-arrowless is-tab">
                            Journal
                        </a>
                        <div class="navbar-dropdown" id="hidden-mobile-journal">
                            <router-link class="navbar-item is-tab" to="/DailyWorkout" active-class="is-active">
                                Log Daily workout
                            </router-link>
                            <router-link class="navbar-item is-tab" to="/calories" active-class="is-active">
                                Log Calorie Intake
                            </router-link>
                        </div>
                    </div>
                    <div class="navbar-item is-tab">
                        <router-link class="navbar-link is-arrowless" to="/Friends" active-class="is-active">
                            Friends
                        </router-link>
                    </div>
                    <div class="navbar-item is-tab">
                        <router-link class="navbar-link is-arrowless" to="/activity" active-class="is-active">
                            Feed
                        </router-link>
                    </div>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link is-arrowless is-tab">
                            More
                        </a>
                        <div class="navbar-dropdown" id="hidden-mobile-journal">
                             <router-link class="navbar-item is-tab" to="/about" active-class="is-active">
                                About
                            </router-link>
                            <router-link class="navbar-item is-tab" to="/contact" active-class="is-active">
                                Contact
                            </router-link>
                            <router-link class="navbar-item is-tab" to="/FAQ" active-class="is-active">
                                FAQ
                            </router-link>
                        </div>
                    </div>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <login-badge />
                    </div>
                </div>
            </div>
        </nav>  
    </div>
</template>

<script>
import LoginBadge from './LoginBadge.vue';
export default {
    data(){
        return {
            isActive: false,
        }
    },
    components: {
        LoginBadge,
    }
}
</script>

<style>

</style>