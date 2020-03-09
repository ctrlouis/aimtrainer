<template>
    <div id="startscreen">
        <p>Train your A.I.M with the great Gabe.</p>
        <router-link to="game"><button type="button" class="nes-btn is-warning">Start</button></router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
}
</script>

<style lang="scss">
#startscreen {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
