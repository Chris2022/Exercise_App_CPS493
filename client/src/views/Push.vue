<template>
    <section class="section">
        <h1 class="title animate__animated animate__backInDown">Push Workouts</h1>
        <h2 class="subtitle">
            Push Workouts consist of working out the chest, shoulders and triceps.
            Here are some workouts to help you get started on your road to the top.
        </h2>
        <div class="container">
            <div class="hero-foot">
                <div class="tabs is-toggle is-fullwidth">
                    <ul>
                        <li id="tabular">
                            <a v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]">
                                <span>Chest</span>
                            </a>
                        </li>
                        <li id="tabular">
                            <a v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]">
                                <span>Shoulders</span>
                            </a>
                        </li>
                        <li id="tabular">
                            <a v-on:click="activetab=3" v-bind:class="[ activetab === 3 ? 'active' : '' ]">
                                <span>Triceps</span>
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
                    <img src="../assets/neutralgripchestpress.gif" >
                </figure>
                <h2 class="subtitle">Dumbbell Squeeze Press:</h2>
                <p><strong>How:</strong>Lie on a flat bench and hold a dumbbell in each hand. Maintain a neutral grip and begin with your arms straight, directly above you. Bend your arms and lower them to the side of your body so the dumbbells lie just above your chest. Pause and then lift your arms to repeat.</p>
            </div>
            <div class="box">
                <figure id="centered" >
                    <img src="../assets/incline-bench-press.gif" >
                </figure>
                <h2 class="subtitle">Incline barbell bench press:</h2>
                <p><strong>How:</strong>Lie back on a bench set to an incline angle and lift a barbell to shoulder height, palms facing away from you. Breathe out as you press up with both arms. Lock out your arms and squeeze your chest before returning slowly to the start position.</p>
            </div>
            <div class="box">
                <figure id="centered" >
                    <img src="../assets/inclinedumbbellpress.gif" >
                </figure>
                <h2 class="subtitle">Incline dumbbell bench press:</h2>
                <p><strong>How:</strong> Lie back on a bench set to a 45-degree angle and lift the weights over your chest, palms facing away from you. Slowly lower one weight, then drive it back up and squeeze your chest at the top.Repeat with the other side.</p>
            </div>
        </div>
        <div class="container" v-if="activetab===2">
            <div class="box">
                <figure id="centered" >
                    <img src="../assets/barbell_overhead.jpeg" >
                </figure>
                <h2 class="subtitle">Barbell Overhead Shoulder Press:</h2>
                <p><strong>How:</strong>
                    Put your feet at shoulder-width, and tighten your core as you hold a barbell at your shoulders, palms facing forward.
                    Next, push the bar upward and squeeze your shoulder blades together at the peak.
                    Lower steadily and carefully.</p>
            </div>
            <div class="box">
                <figure id="centered" >
                    <img src="../assets/seated_barbell.jpeg" >
                </figure>
                <h2 class="subtitle">Seated Dumbbell Shoulder Press:</h2>
                <p><strong>How:</strong>
                        Sit on a low-back bench and hold a dumbbell in each hand at shoulder level, palms facing forward.
                        Keeping your head and spine perfectly straight, lift the dumbbells overhead toward one another, stopping just short of having them touch at the top.
                        Hold the position for a few seconds and then carefully reverse course. Repeat.</p>
            </div>
            <div class="box">
                <figure id="centered" >
                    <img src="../assets/bent-over.jpeg" >
                </figure>
                <h2 class="subtitle">Bent-Over Dumbbell Lateral Raise:</h2>
                <p><strong>How:</strong>
                        Start with a dumbbell in each hand, keeping your chest up, your back flat, your knees slightly bent, and your eyes focussed toward a fixed point on the floor.
                        Now, bend over until your core is basically parallel with the ground, and hang the dumbbells directly underneath you, all while keeping your elbows in a slightly bent position.
                        Next, raise both dumbbells up and out to your sides, forming an arc until your upper arms are even with your torso.
                        Take a brief pause at the top before lowering the dumbbells back into starting position.
                        Repeat.</p>
            </div>
        </div>
        <div class="container" v-if="activetab===3">
            <div class="box">
                <figure id="centered" >
                    <img src="../assets/close-grip-bench-press-1603445716.jpeg" >
                </figure>
                <h2 class="subtitle">Close-grip Bench Press:</h2>
                <p><strong>How:</strong> Grasp a barbell with an overhand grip that’s shoulder-width apart, and hold it above your sternum with arms completely straight.
                    Lower the bar straight down, pause, and then press the bar back up to the starting position.</p>
            </div>
              <div class="box">
                <figure id="centered" >
                    <img src="../assets/close-grip-bench-press-1603445716.jpeg" >
                </figure>
                <h2 class="subtitle">Rope Tricep Pushdown:</h2>
                <p><strong>How:</strong> Attach a rope handle to the high pulley of a cable station. Bend your arms and grab the bar with an overhand grip, your hands shoulder-width apart. Tuck your upper arms next to your sides.
                            Without moving your upper arms, push the bar down until your elbows are locked. Slowly return to the starting position.</p>
            </div>
            <div class="box">
                <figure id="centered" >
                    <img src="../assets/skullcrushergif.gif" >
                </figure>
                <h2 class="subtitle">Skullcrushers (Lying Triceps Extensions):</h2>
                <p><strong>How:</strong> Grip the EZ bar on the inner grips using an overhand grip and extend your arms straight up.
                        Keeping your elbows fixed and tucked in, slowly lower the bar until it is about an inch from your forehead. Always keep your upper arms perpendicular to the floor.
                        Slowly extend your arms back to the starting position without locking your elbows.</p>
            </div>
        </div>
        <div class="box" id="workouts" v-if="activetab===4">
            <div>
                <h2 class="subtitle"> <strong>Chest Workout</strong></h2>
                <iframe src="https://www.youtube.com/embed/gd5i6hQQwcg"
                width="560" height="315" frameborder="0" allowfullscreen></iframe>
            </div>
            <div>
                <h2 class="subtitle"> <strong>Shoulder Workout</strong></h2>
                <iframe src="https://www.youtube.com/embed/2Vprklw8cu8"
                width="560" height="315" frameborder="0" allowfullscreen></iframe>
            </div>
            <div>
                <h2 class="subtitle"> <strong>Tricep Workouts</strong></h2>
                <iframe src="https://www.youtube.com/embed/tmgfpdpQ5sk"
                width="560" height="315" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data: ()=>({
        activetab:1,
    })
}
</script>

<style>
#workouts{
  text-align: center;
}
#centered{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
#tabular :hover {
    background-color:hsl(217, 71%, 53%);
}
</style>