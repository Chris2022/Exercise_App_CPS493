<template>
   <section class="section">
        <h1 class="title animate__animated animate__backInDown">Pull Workouts</h1>
        <h2 class="subtitle">
            Pull Workouts consist of workouts for back, biceps and forearms. Check some of these workouts out in case you need help geetting started.
        </h2>
        <div class="container">
            <div class="hero-foot">
                <div class="tabs is-toggle is-fullwidth">
                    <ul>
                        <li id="tabular">
                            <a v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]">
                                <span>Back</span>
                            </a>
                        </li>
                        <li id="tabular">
                            <a v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]">
                                <span>Biceps</span>
                            </a>
                        </li>
                        <li id="tabular">
                            <a v-on:click="activetab=3" v-bind:class="[ activetab === 3 ? 'active' : '' ]">
                                <span>Forearms</span>
                            </a>
                        </li>
                        <li id="tabular">
                            <a v-on:click="activetab=4" v-bind:class="[ activetab === 4 ? 'active' : '' ]">
                                <span>More</span>
                            </a>
                        </li>
                    </ul>
                </div>
          </div>
        </div>
        <div class="container" v-if="activetab===1">
            <div class="box">
                <figure id="centered" >
                    <img src="../assets/deadlift.gif" >
                </figure>
                <h2 class="subtitle"> Barbell Deadlift:</h2>
                <p><strong>How:</strong>Squat down and grasp a barbell with your hands roughly shoulder-width apart. Keep your chest up, pull your shoulders back and look straight ahead as you lift the bar. Focus on taking the weight back onto your heels and keep the bar as close as possible to your body at all times. Lift to thigh level, pause, then return under control to the start position.</p>
            </div>
            <div class="box">
                <figure id="centered" >
                    <img src="../assets/pullup.gif" >
                </figure>
                <h2 class="subtitle">Pull-Up:</h2>
                <p><strong>How:</strong>Grab the handles of the pull-up station with your palms facing away from you and your arms fully extended. Your hands should be around shoulder-width apart. Squeeze your shoulder blades together, exhale and drive your elbows towards your hips to bring your chin above the bar. Lower under control back to the start position.</p>
            </div>
            <div class="box">
                <figure id="centered" >
                    <img src="../assets/armRow.gif" >
                </figure>
                <h2 class="subtitle">Dumbbell Single-Arm Row:</h2>
                <p><strong>How:</strong>Head to a flat bench and place your right hand against it under your shoulder, keeping your arm straight. Rest your right knee on the bench and step your other leg out to the side. With your free hand grab a dumbbell off the floor and row it up to your side until your upper arm is parallel with the floor. Lower slowly back to the floor and repeat.</p>
            </div>
            <div class="box">
                <figure id="centered" >
                    <img src="../assets/dumbbell-row.gif" >
                </figure>
                <h2 class="subtitle">Chest-Supported Dumbbell Row:</h2>
                <p><strong>How:</strong>Lie face down on the bench with your feet other side to keep you stable. Hang the dumbbells beneath you using a neutral grip. Keep your head up and bring your shoulder blades together as you row the weights towards your chest. Lower to the starting position under control.</p>
            </div>
            <div class="box">
                <figure id="centered" >
                    <img src="../assets/latpull.gif" >
                </figure>
                <h2 class="subtitle">Lat Pulldown:</h2>
                <p><strong>How:</strong>Kneel in front of the cable machine and face away. Grab the bar with your palms facing away from you, shoulder-width apart. Lean back slightly and push your chest out. Pull the bar down to your chest, then return slowly to the start position. Your torso should remain still throughout.</p>
            </div>
            <div class="box">
                <figure id="centered" >
                    <img src="../assets/meadows-row.gif" >
                </figure>
                <h2 class="subtitle">Single-arm T-Bar Rows:</h2>
                <p><strong>How:</strong>Add weight to one end of a barbell. Bend forward until your torso is almost parallel to the floor and keep your knees slightly bent. Grab the bar with one arm just behind the plates. Pull the bar straight up with your elbow in until the plates touch your chest and squeeze your back muscles at the top of the move. Slowly lower to the starting position and repeat without letting the plates touch the floor.</p>
            </div>
        </div>

        <div class="container" v-if="activetab === 2">
            <div class="box">
                <figure id="centered">
                    <img src="../assets/curlsthor3.gif" >
                </figure>
                <h2 class="subtitle">Hammer Curl:</h2>
                <p><strong>How:</strong>Let a pair of dumbbells hang at arm’s length next to your sides with your palms facing your thighs.
                            Don’t move your arms. Instead, bend your elbows and curl the dumbbells as close to your shoulders as possible.
                            Pause at the top – remember to squeeze – before slowly lowering the weight back to the starting position.</p>
            </div>
            <div class="box">
                <figure id="centered" >
                    <img src="../assets/curlszottman.gif" >
                </figure>
                <h2 class="subtitle">Zottman Curl:</h2>
                <p><strong>How:</strong>With your dumbbells hanging by your side, turn your arms so your palms face forward.
                        Without moving your upper arms, bend your elbows and curl the dumbbells towards your shoulder.
                        Pause, then rotate the dumbbells so your palms face forward before slowly returning back to your starting position.</p>
                </div>
            <div class="box">
                <figure id="centered" >
                    <img src="../assets/chin-weight.gif" >
                </figure>
                <h2 class="subtitle">Chin-Up:</h2>
                <p><strong>How:</strong>Grab the bar with your palms facing towards you and a grip that is narrows than shoulder width.
                        Pull yourself up until your head is above the bar. Slowly lower back to the start position.</p>
            </div>
            <div class="box">
                <figure id="centered" >
                    <img src="../assets/reverseEZ.gif" >
                </figure>
                <h2 class="subtitle">Regular EZ Bar Curl:</h2>
                <p><strong>How:</strong>Hold the EZ bar in front of your thighs with an underhand, shoulder-width grip.
                    As you breathe in, curl the bar until your hands are at your shoulders.
                    Squeeze your bicep then lower under control.</p>
            </div>
            <div class="box">
                <figure id="centered" >
                    <img src="../assets/concentrationcurl.jpeg" >
                </figure>
                <h2 class="subtitle">Concentration Curl:</h2>
                <p><strong>How:</strong>Sit on a bench and rest your right arm against your right leg, letting the weight hang down.
                            Curl the weight up, pause, then lower. Repeat with other arm.</p>
            </div>
            <div class="box">
                <figure id="centered" >
                    <img src="../assets/twisting-bicep-curl.gif" >
                </figure>
                <h2 class="subtitle">Twisting Dumbbell Curl:</h2>
                <p><strong>How:</strong>Hold a dumbbell in each hand at your side with palms facing each other.
                        Use your bicep to curl the dumbbells up to your shoulders alternately, twisting your palms to face your chest as you lift them.
                        Slowly lower the dumbbells back down to your side and repeat.</p>
            </div>
        </div>
        
        <div class="container" v-if="activetab===3">
            <div class="box">
                <figure id="centered" >
                    <img src="../assets/wrist_extension.jpeg" >
                </figure>
                <h2 class="subtitle">Dumbbell Wrist Flextion:</h2>
                <p><strong>How:</strong>Sit on the edge of a bench or chair holding a dumbbell in your right hand. Place your right forearm on your right thigh, with the back of your right wrist on top of your right kneecap.
                                Moving just your hand, slowly lower the dumbbell as far as you can, maintaining a tight grip throughout the movement.
                                Without lifting your arm off of your thigh, curl the dumbbell up toward your bicep, and slowly lower the dumbbell back to neutral.
                                Repeat to fatigue, then switch arms, performing equal reps on each side.</p>
            </div>
            <div class="box">
                <figure id="centered" >
                    <img src="../assets/dumbbell-wrist-extension-forearm-exercises.jpeg" >
                </figure>
                <h2 class="subtitle">Dumbbell Wrist Extension:</h2>
                <p><strong>How:</strong>Sit on the edge of a bench or chair holding a dumbbell in your right hand. Place your right forearm on your right thigh, palm down, with your right wrist on top of your right kneecap.
                            Without lifting your arm off your thigh, curl the dumbbell up as far as you can towards your bicep, maintaining a tight grip throughout the movement.
                            Slowly lower the dumbbell back to neutral.
                            Repeat to fatigue, and then switch arms, performing equal reps on each side.</p>
            </div>
            <div class="box">
                <figure id="centered" >
                    <img src="../assets/reverseCurll.jpeg" >
                </figure>
                <h2 class="subtitle">Dumbbell Reverse Curl:</h2>
                <p><strong>How:</strong>Stand with feet hip-width apart, holding a dumbbell in each hand, arms by your sides, palms facing behind you.
                            Keeping the elbows tucked, slowly curl the weights up slightly above 90 degrees.
                            Reverse the move to return to the starting position, and repeat.</p>
            </div>
             <div class="box">
                <figure id="centered" >
                    <img src="../assets/farmers_walk.gif" >
                </figure>
                <h2 class="subtitle">Farmer’s Walk:</h2>
                <p><strong>How:</strong>Stand with feet hip-width apart, holding a pair of heavy dumbbells at your sides, palms facing in.
                            Keeping your core braced and your spine straight, walk in a straight line with your shoulders engaged for distance or steps.
                            Rest. Repeat.</p>
            </div>
        </div>

        <div class="box" id="workouts" v-if="activetab===4">
            <div>
                <h2 class="subtitle"> <strong>Back Workout</strong></h2>
                <iframe src="https://www.youtube.com/embed/8LJ3Q3Fsrzs"
                width="560" height="315" frameborder="0" allowfullscreen></iframe>
            </div>
            <div>
                <h2 class="subtitle"> <strong>Bicep Workout</strong></h2>
                <iframe src="https://www.youtube.com/embed/20ibpB635Rw"
                width="560" height="315" frameborder="0" allowfullscreen></iframe>
            </div>
            <div>
                <h2 class="subtitle"><strong>Forearm Workout</strong></h2>
                <iframe src="https://www.youtube.com/embed/0XS0j1Gtobw"
                width="560" height="315" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data : () =>({
        activetab:1,
    })
}
</script>

<style>
.workouts{
  text-align: center;
}
#tabular :hover {
    background-color:hsl(217, 71%, 53%);
}
</style>