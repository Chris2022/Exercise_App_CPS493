<template>
    <div class="container">
        <div class="columns">
            <div class="column">
            </div>
        </div>
        <Nav />
        <messages />
        <router-view/>  
        <Foot />      
    </div>
</template>

<style lang="scss">
</style>

<script>
import Nav from "./components/Nav";
import Foot from './components/foot.vue';
import Messages from "./components/Messages.vue";
export default {
    components: {
        Nav,
        Messages,
        Foot
    }
}
</script>