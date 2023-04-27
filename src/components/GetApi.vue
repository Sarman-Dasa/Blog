<template>
    <table align="center">
        <tr>
            <th class="heading" colspan="7">Get Api Call</th>
        </tr>
        <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Image</th>
            <th colspan="2" align="center">Action</th>
        </tr>
        <tr v-for="item in list" :key="item">
            <td> {{ item.id }} </td>
            <td>{{ item.first_name }}</td>
            <td>{{ item.last_name }}</td>
            <td>{{ item.email }}</td>
            <td><img :src="item.avatar" alt=""></td>
            <td><button v-on:click="deleteUser(item.id)">Delete</button></td>
            <td><router-link :to="'/update-user/'+item.id">Edit</router-link></td>
        </tr>
    </table>
</template>

<script>
import axios from "axios";
export default {
    name: "GetApp",
    data() {
        return {
            list: [],
        }
    },
    methods: {
        async loadData() {
            //get a api uri to list a data
            let result = await axios.get("http://localhost:3000/users");
            this.list = result.data;
        },
        async deleteUser(id) {
            let result = await axios.delete("http://localhost:3000/users/" + id);
            if (result.status == 200) {
                this.loadData();
            }
        }
    },
    mounted() {
        this.loadData();
    }

}
</script>

<style>
table {
    background-color: white;
    padding: 20px;
    width: 100%;
    text-align: justify;
}

.heading {
    text-align: center;
    background-color: aqua;
}
</style>