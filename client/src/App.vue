<template>
    <div class="container">
        <div class="columns">
            <div class="column">
            </div>
        </div>
        <Nav />
        <router-view/>  
        <Foot />      
    </div>
</template>

<style lang="scss">
</style>

<script>
import Nav from "./components/Nav";
import Foot from './components/foot.vue';
export default {
    components: {
        Nav,
        Foot
    }
}
</script>