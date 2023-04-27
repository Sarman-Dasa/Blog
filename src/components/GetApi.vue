<template>
   <table align="center">
        <tr>
            <th class="heading" colspan="5">Get Api Call</th>
        </tr>
        <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Image</th>
        </tr>
        <tr v-for="item in list" :key="item">
            <td> {{ item.id }} </td>
            <td>{{ item.first_name }}</td>
            <td>{{ item.last_name }}</td>
            <td>{{ item.email }}</td>
            <td><img :src="item.avatar" alt=""></td>
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
    async mounted() {
        let result = await axios.get("https://reqres.in/api/users?page=1");
        console.log(result.data.data);
        this.list = result.data.data;
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