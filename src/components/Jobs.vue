<template>
    <ul>
        <li v-for="job in jobs" :key="job.id">
           <router-link :to="{name:'JobDetails',params:{id:job.id}}"> 
            <span>{{ job.name }}</span>
        </router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "JobsView",
        data() {
            return {
                jobs: [],
            }
        },
       async mounted() {
            fetch("http://localhost:3000/jobs")
            .then(response => response.json())
            .then(data => this.jobs = data)
            .catch(err => console.log(err.message));
        }
    }
</script>

<style>
ul li {
    display: inline-block;
    margin: 0px 20px;
    background-color: aqua;
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 18px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #000;
    text-decoration: none;
}
a {
    text-decoration: none !important;
}
li:hover {
    background-color: brown;
    color: #fff;
    cursor: pointer;
}
</style>