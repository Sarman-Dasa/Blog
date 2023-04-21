<template>
    <h2>
        <table id="usertable">
            <h3>User Data</h3>
            Name : <input type="text" placeholder="Enter name" v-model="name">
            Email : <input type="email" placeholder="Enter email" v-model="email">
            Password : <input type="password" placeholder="Enter password" v-model="password">
            <br>
            <button v-on:click="getData()">Get Data</button>
            <br>
            <p>{{ output }}</p>
        </table>
    </h2>
</template>

<script>
export default {
    name: "UserForm",
    data() {
        return {
            name: null,
            email: null,
            password: null,
            output: null,
        }
    },
    methods: {
        getData() {
            this.output = this.name + " " + this.email + " " + this.password;
        }
    }
}
</script>

<style scoped>
h1 {
    color: white;
}
</style>