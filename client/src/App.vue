<template>
    <div class="container">
        <Nav />
        <router-view/>  
        <foot />
    </div>
</template>

<style lang="scss">
</style>

<script>
import Nav from "./components/Nav.vue";
import foot from "./components/foot.vue";
export default {
    components: {
        Nav,
        foot
    }
}
</script>