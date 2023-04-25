<template>
    <h1> Hello for Child component</h1>
    <p>Email From parent component : {{ email }}</p>
   <ul>
    <li v-for="user in users" :key="user.id">
        {{ user.name }} || {{ user.email }} || {{ user.phone }} || {{ user.gender }}
    </li>
   </ul>
   <button v-on:click="myFunction">Get Data</button>
</template>

<script>
    export default {
        name: 'ChildView',
        props: {
            email: String,
            users:Object,
            myFunction: Function,
        }
    }
</script>