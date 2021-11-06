<template>
    <div class="box">
        <h1 class="title animate__animated animate__bounceInLeft">Contact Us!</h1>
        <h2 class="subtitle">
            If you're having any issues or comments please feel do not hesitate to
            let us know, just leave your name, email, and message and we will contact you as
            soon as possible. Please also view the 
            <router-link to='/FAQ'>FAQ's</router-link> to learn all the features or common 
            questions about Fit-Bud.
        </h2>
        <div class="field">
            <label class="label">Name</label>
            <div class="control">
                <input class="input" type="text" placeholder="Enter First and Last Name">
            </div>
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
                <input class="input" type="email" placeholder="e.g bobsmith123@email.com">
                <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                </span>
            </div>
            </div>
            <label class="label">Message</label>
            <div class="control">
                <textarea class="textarea" placeholder="Type your message here"></textarea>
            </div>
            <div class="field is-grouped" id="buttons">
                <div class="control">
                    <button class="button is-link">Submit</button>
                </div>
                <div class="control">
                    <button class="button is-link is-light">Cancel</button>
                </div>
            </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
#buttons {
  padding-top: 10px;
}
</style>