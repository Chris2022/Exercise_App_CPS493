<template>
<div class="container">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item; is-size-3" href="index.html" :title="message">
                    <img src="../assets/FitBud.png" width="175" height="10">
                </a>
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" :class="{'is-active': navBarIsActive}" @click="navBarIsActive= !navBarIsActive">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div class="navbar-menu" :class="{'is-active': navBarIsActive}">
                <div class="navbar-start">
                    <a class="navbar-item" href="about.html">
                        About
                    </a>
                    <div class="navbar-item has-dropdown is-hoverable" onclick="show()">
                        <a class="navbar-link is-arrowless">
                            Nutrition
                        </a>
                        <div class="navbar-dropdown" id="hidden-mobile" >
                            <a class="navbar-item" href="weightLossRecipes.html" > 
                                Recipes for Weight Loss
                            </a>
                            <a class="navbar-item" href="proteinRecipes.html" > 
                                Recipes to Gain Muscle
                            </a>
                        </div>
                    </div>
                    <a class="navbar-item" href="progress.html">Progress</a>
                    <div class="navbar-item has-dropdown is-hoverable"  onclick="displayWorkout()">
                        <a class="navbar-link is-arrowless">
                            Workouts
                        </a>
                        <div class="navbar-dropdown" id="hidden-mobile-workout">
                            <a class="navbar-item" href="push.html">
                                Push Workouts
                            </a>
                            <a class="navbar-item" href="pull.html">
                                Pull Workouts
                            </a>
                            <a class="navbar-item" href="leg.html">
                                Leg Workouts
                            </a>
                            <a class="navbar-item" href="cardio.html">
                                HIIT Workouts
                            </a>
                        </div>
                    </div>
                    <div class="navbar-item has-dropdown is-hoverable" onclick="showJournal()">
                        <a class="navbar-link is-arrowless">
                            Journal
                        </a>
                        <div class="navbar-dropdown" id="hidden-mobile-journal">
                            <a class="navbar-item" href="DailyWorkout.html">
                                Log Daily workout
                            </a>
                            <a class="navbar-item" href="CalorieIntake.html">
                                Log Calorie Intake
                            </a>
                        </div>
                    </div>
                    <div class="navbar-item">
                        <a class="navbar-link is-arrowless" href="Friends.html">
                            Friends
                        </a>
                    </div>
                    <div class="navbar-item">
                        <a class="navbar-link is-arrowless" href="activity.html">
                            Activity
                        </a>
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
            isActive: false
        }
    },
    components: {
        LoginBadge
    }
}
</script>

<style>

</style>