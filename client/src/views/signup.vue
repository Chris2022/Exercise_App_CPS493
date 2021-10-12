<template>
  <section class="hero is-link">
    <div class="hero-body">
        <div class="container">
            <div class="columns is-centered">
                <div class="columns is-5-tablet is-4-desktop is-3-widescreen">
                    <form class="box" action="">
                        <div class="container" style="width: 40%" >
                            <div class="field" style="text-align: center">
                                <label class="label">First Name</label>
                                    <input class="input" type="text" placeholder="First Name">
                            </div>
                            <div class="field" style="text-align: center">
                                <label class="label">Last Name</label>
                                    <input class="input" type="text" placeholder="Last Name">
                            </div>
                            <div class="field" style="text-align: center">
                                <label class="label">Email</label>
                                    <input class="input" type="text" placeholder="Email">
                            </div>
                            <div class="field" style="text-align: center" id="check">
                                <label class="label">Select Gender:</label>
                                <input type="checkbox" name="gender" value="male"> Male
                                <input type="checkbox" name="gender" value="female"> Female
                            </div>
                            <div class="field" style="text-align: center">
                                <label class="label">Date of Birth</label>
                                <input class="input" type="date" >
                            </div>
                            <div class="select is-fullwidth" id="select_state">
                                <select>
                                    <option>Select State</option>
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="DC">District Of Columbia</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="IA">Iowa</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="ME">Maine</option>
                                    <option value="MD">Maryland</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
                                </select>
                            </div>
                            <div class="field" style="text-align: center;">
                            <input type="checkbox" name="updates">
                            Yes, I would like to receive by email the latest news, innovation updates, and offers from Fit-Bud.
                            <p style="text-align: center;">By creating an account with Fit-Bud you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>
                            </div>    
                            <div class="signup-button " id="Sign-up-button">
                                <button class="button is-link" @click="sign">Sign Up</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {

}
</script>

<style>
.signup-button{
    text-align: center;
}
</style>