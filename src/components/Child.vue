<template>
    <h1> Hello for Child component</h1>
    <p>Email From parent component : {{ email }}</p>
   <ul>
    <li v-for="user in users" :key="user.id">
        {{ user.name }} || {{ user.email }} || {{ user.phone }} || {{ user.gender }}
        <button v-on:click="getUserId(user.id)">Get ID</button>
    </li>
   </ul>
   <!-- send child to parent data component -->
   <button v-on:click="myFunction(userName)">send User Name</button>
</template>

<script>
    export default {
        name: 'ChildView',
        data() {
            return {
                userName: "sarmand",
            }
        },
        props: {
            email: String,
            users:Object,
            myFunction: Function,
        },
        methods:{
            getUserId(id) {
                alert(id);
            }
        }
        
    }
</script>