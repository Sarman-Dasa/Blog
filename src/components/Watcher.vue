<template>
    <h1>Volume Tracker (0-20)</h1>
    <h2 ref="volume">Current Volume :{{ volume }}</h2>
    <input type="range" v-model="volume" min="0" max="20">
</template>

<script>
export default {
    name: "watchersView",
    data() {
        return {
            volume: 0,
        }
    },
    watch: {
        volume(newValue, oldValue) {
            //console.log("New Value:" + newValue + " oldValue: "+oldValue);
            if (newValue > oldValue && newValue == 15) {
                alert("Volume is high to damage your ears!!!");
            }
        }
    },
    // life cycle method
    beforeUpdate() {
        console.log("before update volume :", this.$refs['volume'].textContent);
    },
    updated() {
        console.log("after update volume :", this.$refs['volume'].textContent);
    },
    beforeUnmount() {
        console.log("before unmount", this.$refs['volume'].textContent);
    },
    unmounted() {
        console.log("after mounted", this.$el);
    },
}
</script>

<style scoped>
* {
    text-align: center;
}
</style>