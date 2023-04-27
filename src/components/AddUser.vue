<template>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <div class="container">
        <div class="row">
        <div class="col">
            <ul>
                <li v-for="item in error" v-bind:key="item">
                    {{ item }} not valid !!!
                </li>
            </ul>
        </div>
    </div>
    <div class="row">
        <div class="col text-center">
            <h3 class="bg-primary p-3">User Data</h3>
        </div>
    </div>

    <div class="row">
        <div class="col">
            <input type="text" class="form-control" placeholder="First Name" id="first_name" v-model="form.first_name">
        </div>
        <div class="col">
            <input type="text" class="form-control" placeholder="Last Name" id="last_name" v-model="form.last_name">
        </div>
    </div>

    <div class="row mt-3">
        <div class="col">
            <input type="email" class="form-control" placeholder="Email" v-model="form.email">
        </div>

        <div class="col">
            <input type="url" class="form-control" placeholder="put profile url" v-model="form.avatar">
        </div>
    </div>

    <div class="row mt-3">
        <div class="col">
            <button class="btn btn-primary b-block" v-on:click="addUser()">Add User</button>
        </div>
    </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "AddUser",
    data() {
        return {
            form: {
                first_name: null,
                last_name: null,
                email: null,
                avatar: null,
            },
            error: [],
        }
    },
    methods: {
       async addUser() {
            this.error = [];
            for (const item in this.form) {
                if (this.form[item] === null) {
                    this.error.push(item);
                }
            }

            if (this.error.length === 0) {
                let result = await axios.post("http://localhost:3000/users",{
                    first_name: this.form.first_name,
                    last_name: this.form.last_name,
                    email: this.form.email,
                    avatar: this.form.avatar
                });

                if(result.status == 201) {
                    this.$router.push({name:"GetApi"});
                }
            console.log("Result :",result);
            }
        }
    }

}
</script>

<style scoped>
li {
    color: red;
}
.container {
    width: 50%;
    border: 2px solid black;
    padding: 10px;
}
</style>