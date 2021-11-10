<template>
     <section class="section">
        <h1 class="title">Leg Workouts</h1>
        <h2 class="subtitle">
            Not sure what to do for leg day?
            Well don't stress, here are some simple routines you can do
            to get start your road on getting them tree trunks!
            Check out some of the workouts you can do for either quads, calves, or hamstrings!
        </h2>
        <div id="tabs-with-content">
            <div class="hero-foot">
                <div class="tabs is-centered is-toggled is-fullwidth">
                    <a v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]" >Quads</a>
                    <a v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]" >Calves</a>
                    <a v-on:click="activetab=3" v-bind:class="[ activetab === 3 ? 'active' : '' ]" >Hamstrings</a>
                </div>
          </div>
        </div>
    <div class="container" v-if="activetab === 1">
        <div class="box">
            <figure id="centered" >
                <img src="../assets/_main_frontsquat_1.jpeg" >
            </figure>
            <h2 class="subtitle">Front Squat:</h2>
            <p>Set a barbell on a power rack at about shoulder height. 
                Grab the power with an overhand grip at shoulder width and 
                raise your elbows until your upper arms are parallel to the floor. 
                Take the bar out of the rack and let it rest on your fingertips. 
                Your elbows should be all the way up throughout the movement. 
                Step back and set your feet at shoulder width with toes turned out slightly. 
                Squat as low as you can without losing the arch in your lower back.</p>
        </div>
        <div class="box">
            <figure id="centered" >
                <img src="../assets/_main_bulgariansplitsquat.jpeg" >
            </figure>
            <h2 class="subtitle">Bulgarian Split Squat: </h2>
            <p>Stand lunge-length in front of a bench. Hold a dumbbell in each hand and rest the top of your left foot on the bench behind you. Lower your body until your rear knee nearly touches the floor and your front thigh is parallel to the floor. Single-leg training can yield serious strength gains. </p>
        </div>
        <div class="box">
            <figure id="centered" >
                <img src="../assets/_main_romaniandeadlift.jpeg" >
            </figure>
            <h2 class="subtitle">Romanian Deadlift:  </h2>
            <p>A killer deadlift variation, hold a barbell with a shoulder-width grip and stand with feet hip-width apart. Bend your hips back as far as you can. Allow your knees to bend as needed while you lower the bar along your shins until you feel a stretch in your hamstrings. Keep your lower back in its natural arched position throughout.</p>
        </div>
        <div class="box">
            <figure id="centered" >
                <img src="../assets/squat_main_1.jpeg" >
            </figure>
            <h2 class="subtitle">Squat:</h2>
            <p>In a squat rack or cage, grasp the bar as far apart as is comfortable and step under it. Place it on your lower traps, squeeze your shoulder blades together, push your elbows up and nudge the bar out of the rack. Take a step or two back and stand with your feet at shoulder width and your toes turned slightly out. Take a deep breath and bend your hips back, then bend your knees to lower your body as far as you can without losing the arch in your lower back. Push your knees out as you descend. Drive vertically with your hips to come back up, continuing to push your knees out.</p>
        </div>
        <div class="box">
            <figure id="centered" >
                <img src="../assets/kb_press_out-the-30-best-legs-exercises-of-all-time.jpeg" >
            </figure>
            <h2 class="subtitle">Kettlebell Press Out:</h2>
            <p>Hold the weight close to your chest at shoulder level with both hands on the handle and palms facing each other. Squat down as deeply as you can, then press the bell straight out in front of you with arms extended. Bring it back to your chest and repeat for reps while maintaining the squat position.</p>
        </div>
        <div class="box" id="workouts">
            <div>
                <h2 class="subtitle"> <strong>Leg Workout</strong></h2>
                <iframe src="https://www.youtube.com/embed/Xg9B6pqHUQE"
                width="560" height="315" frameborder="0" allowfullscreen></iframe>
            </div>
            <div>
                <h2 class="subtitle"> <strong>Another Leg Workout</strong></h2>
                <iframe src="https://www.youtube.com/embed/_kLBi8tF6Kk"
                width="560" height="315" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
    </div>
    <div class="container" v-if="activetab === 2">
        <div class="box">
            <figure id="centered" >
                <img src="../assets/Seated-Calf-Raise.jpeg" >
            </figure>
            <h2 class="subtitle">Seated Calf Raise: </h2>
            <p>Sit tall on a bench or chair with your feet flat on the ground holding two heavy dumbbells on top of your thighs.
               Keeping your core engaged, lift your heels off the ground as high as possible.
                Slowly lower your heels back down to the ground, and repeat. </p>
        </div>
        <div class="box">
            <figure id="centered" >
                <img src="../assets/man-training-on-agility-ladder-drill.jpeg" >
            </figure>
            <h2 class="subtitle">Agility Ladder: </h2>
            <p>The agility ladder exercise is not exclusively reserved for footballers, you know. Don’t have an agility ladder? That’s not a problem. You can always improvise with chalk or tape. Here’s how to do it:
                    Place the ladder on the floor. If you are using tape or drawing, make sure there’s ample space between the rungs.
                    Stand at one end of the agility ladder
                    Hop between the spaces of the rungs until you get to the end of the ladder
                    Walk back to the start of the ladder
                    Repeat </p>
        </div>
        <div class="box">
            <figure id="centered" >
                <img src="../assets/athletic-legs.jpeg" >
            </figure>
            <h2 class="subtitle">Stair Run: </h2>
            <p>You can train your calves by running up the stairs in a stadium or at home. The action of constantly flexing and extending your foot gives your calves a good workout. This is not running for cardio endurance, though. So, here’s how to do it properly.
                    Start at the bottom of the stairs
                    Run up the flight of stairs on the balls of your feet, making sure that you don’t skip any of the steps
                    Walk down the to the starting position when you reach the top, or where you intend to stop (depending on the number of rows on the stairs)
                    Repeat</p>
        </div>
        <div class="box">
            <figure id="centered" >
                <img src="../assets/calf-raise-with-dumbbels.jpeg" >
            </figure>
            <h2 class="subtitle">Farmer's Walk: </h2>
            <p>The farmer’s walk will strengthen your overall muscle and improve your balance while also working your calves.
                        Here’s how to do it:
                        Grab a pair of dumbbells in both hands, letting them hang at your sides
                        Raise yourself until you are on your toes
                        Walk forward quickly, making sure your steps and short and light
                        Start with lighter weight and increase it as you gain more balance</p>
        </div>
    </div>
    <div class="container" v-if="activetab === 3">
        <div class="box">
            <figure id="centered" >
                <img src="../assets/_main2_hipthrust.jpeg" >
            </figure>
            <h2 class="subtitle">Bench Hip Thrust: </h2>
            <p>Prop your upper back and shoulders on a bench, and hug your arms across your chest, Ibrahim says. Place your feet flat on the floor, sitting your hips low. Drive both feet into the ground as you press both hips up toward the ceiling. At the top of the movement, squeeze your glutes and hold for two seconds. Lower, and repeat. Use just your bodyweight, or add weight for a greater challenge.</p>
        </div>
        <div class="box">
            <figure id="centered" >
                <img src="../assets/single_leg_hip_thrust_main_0.jpeg" >
            </figure>
            <h2 class="subtitle">Single-leg Bench Hip Thrust: </h2>
            <p>Prop your upper back and shoulders on a bench, and hug your arms across your chest. Place your feet flat on the floor, sitting your hips low. Lift one leg, bending your knee and flexing your toes toward your head. Drive your anchor foot into the ground as you press both hips up toward the ceiling. At the top of the movement, squeeze your glutes and hold for two seconds. Lower, and repeat all reps on one side, then switch. Use just your bodyweight, or add weight for a greater challenge.</p>
        </div>
        <div class="box">
            <figure id="centered" >
                <img src="../assets/1280-hamstring-curl-exercise-ball.jpeg" >
            </figure>
            <h2 class="subtitle">Swiss Ball Hamstring Curl: </h2>
            <p>Position a Swiss ball in front of your feet. Lie down with your back and palms flat on the floor. Place your heels on top of the ball, then press your hips and glutes off the floor. Keep your back straight and abs engaged. Dig your heels into the ball as you curl it toward your glutes. Reverse the motion, and press the Swiss ball away from your glutes to the start position.</p>
        </div>
        <div class="box">
            <figure id="centered" >
                <img src="../assets/cable-pull-through.jpeg" >
            </figure>
            <h2 class="subtitle">Cable or Band Pull-through: </h2>
            <p>Set up a resistance band or cable pulley at ankle height. Straddle the cable/band between your legs, and face away from the column. Grab the end and walk away from the anchor point until you feel some resistance. While keeping your arms straight and core engaged, bend over at the hips and allow the pulley system to drive the rope and your hips back toward the column. Pause at the bottom, and squeeze your glutes together for a strong lockout, Ibrahim says. Hinge, then drive yourself back to the top position.</p>
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
#workouts{
  text-align: center;
}
#centered{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}
</style>