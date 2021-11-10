<template>
    <section class="section">
        <h1 class="title">HIIT Workouts</h1>
        <h2 class="subtitle">
            HIIT: <strong>H</strong>igh <strong>I</strong>ntensity <strong>I</strong>nterval <strong>T</strong>raining
            are workouts made to shed of those stubborn calories. Here are some that are sure to have
            you sweating in no time. 
        </h2>
        <div id="tabs-with-content">
            <div class="hero-foot">
                <div class="tabs is-centered is-toggled is-fullwidth">
                    <a v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]" >HIIT Workouts</a>
                    <a v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]" >More</a>
                </div>
          </div>
        </div>

        <div class="container" v-if="activetab === 1">
            <div class="box">
                <h2 class="subtitle"><strong>4 x 4 Interval Training:</strong></h2>
                <p>Recommended by the Norwegian University of Science and Technology, the 4 x 4 Interval Training HIIT workout is best implemented on a seven-week program. This 4X4 routine requires the participant to go at high intensity for four minutes usually around 85-95 per cent of maximum heart rate, followed by three minutes of active recovery at 60 per cent of maximum heart rate. To complete the 4 x 4 interval training workout:
                    <ol type="1" id="indent">
                    <li>Warm-up (10-minute moderate jog)</li>
                    <li>Interval 1 (1-2 minute sprint at 85-95% max heart rate)</li>
                    <li>Active break (3 minutes lower intensity moderate jogging)</li>
                    <li>Cool-down (5-minute moderate jogging)</li>
                    <li>This formula could easily be replicated to incorporate any exercise, however, for this example, the base model is running.</li>
                    </ol>
                    <br>
                    <strong>Interval</strong>: 1-2 minutes/3 minutes rest<br>
                    <strong>Rounds</strong>: 1-3</p>
            </div>
            <div class="box">
                <h2 class="subtitle"><strong>Tabata Protocol:</strong></h2>
                <p>Created by Izumi Tabata, the Tabata Protocol is one of the best workout methods to incorporate into your fitness routine. It only takes eight minutes (give or take) every three days, so this is a creating method system to add for beginners. The Tabata Protocol is best performed with  Stationary Bike, Versaclimber, Rowing Machine, Elliptical Trainer or another piece of cardio equipment that allows for gradually increasing resistance, speed and utilises the large muscles of your legs. To complete a Tabata Protocol HIIT workout:

                    <ol type="1" id="indent">
                            <li>Warm-up for 2 minutes at a moderate pace, before initiating 2 intervals.</li>
                            <li>First, increase the tension one notch above where your warmup ended.</li>
                            <li>Pedal at 100 per cent effort for 20 seconds.</li>
                            <li>Pedal slow for the next 10 seconds as a recovery. If you are wearing a heart rate monitor, you will see your Heart Rate go up after you stop pedalling. This is because of the Oxygen Debt created signals your body to get more oxygen to your energy system.</li>
                            <li>Repeat the full process 1 more time.</li>
                            <li>After 2 intervals, decrease the tension to 0 and pedal slow for 2 minutes.</li>
                            <li>Do this workout three times per week – allow yourself at least one full day of recovery between workouts. Your body needs to heal itself, increase the strength of your heart and lungs, etc.</li>
                    </ol><br>
                    <strong>Interval</strong>: 20 seconds/10 seconds rest<br>
                    <strong>Rounds</strong>: 4</p>
            </div>
            <div class="box">
                <h2 class="subtitle"><strong>The 30s Blast:</strong></h2>
                <p>To make this training protocol work, you must complete 3-5 rounds through the circuit, resting for 30-60 seconds between rounds. Try to avoid resting between moves, making sure you get the most out of your high-intensity points. To complete the 30s blast:
                    <ol type="1" id="indent">
                        <li>Tuck Jump Plank Tucks x 30 seconds</li>
                        <li>Plyo Jack Push-Ups x 30 seconds per side</li>
                        <li>Single Leg Deadlift Hops x 30 seconds</li>
                        <li>Plank Skaters x 30 seconds</li>
                        <li>Balance Bicycles x 30 seconds</li>
                        <li>30-60 seconds Rest</li>
                    </ol><br>
                    <strong>Interval</strong>: 30 seconds/60 seconds rest<br>
                    <strong>Rounds</strong>: 4</p>
            </div>
            <div class="box">
                <h2 class="subtitle"><strong> Sprint Interval HIIT Workout:</strong></h2>
                <p>The most basic form of HIIT exercise is the sprint interval workout. This method sees you progressively build your sprints over a sustained period with little rest to increase your endurance and health. To perform a sprint interval HIIT workout on a treadmill:
                    <ol type="1" id="indent">
                        <li>After warming up, sprint at 100 per cent effort for 35 seconds.</li>
                        <li>Rest for 25 seconds</li>
                        <li>Repeat for 10 rounds</li>
                    </ol><br>
                    <strong>Interval</strong>: 35 seconds/25 seconds rest<br>
                    <strong>Rounds</strong>: 10</p>
            </div>
        </div>

        <div class="container" v-if="activetab === 2">
            <div class="box" id="workouts">
                <div>
                    <h2 class="subtitle"> <strong>HIIT Workout</strong></h2>
                        <iframe src="https://www.youtube.com/embed/jpizoUy4K9s" width="560" height="315" frameborder="0" allowfullscreen></iframe>
                </div>
                <div>
                    <h2 class="subtitle"> <strong>Another HIIT Workout</strong></h2>
                        <iframe src="https://www.youtube.com/embed/edIK5SZYMZo" width="560" height="315" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data:()=>({
        activetab: 1,
    })
}
</script>

<style>
#workouts{
  text-align: center;
}
#indent{
  margin-left: 100px;
}
</style>