<template>
    <div id="startscreen">
        <p>Train your A.I.M with the great Gabe.</p>
        <router-link to="game"><button type="button" class="nes-btn is-warning"><span class="animated flash blink-late">Start</span></button></router-link>
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
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
