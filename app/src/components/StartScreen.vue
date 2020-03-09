<template>
    <div id="startscreen">
        <p>Train your A.I.M with the great Gabe.</p>
        <router-link to="game"><button>Start</button></router-link>
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

h1, h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
