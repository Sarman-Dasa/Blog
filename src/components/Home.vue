<template>
    <h1 v-on:mousemove="getConsole()">Home component</h1>
    <p>Employee FirstName : {{ firstName }}</p>
    <p>Employee LastName : {{ lastName }}</p>
    <p>Email : {{ email }}</p>
    <p>Mobile Number : {{ mobile }}</p>
    <!-- print a full name  -->
    <p>Full Name : {{ getFullName() }}</p>
    <!-- print all data -->
    <p>Get All Detail :{{ getDeta() }}</p>
    <!-- print a only first name into data -->
    <p>Name : {{ getDeta().firstName }}</p>
    <button v-on:click="test()">Click!!!</button>
    <button v-on:dblclick="getMobilenumber()" >Double Click</button>

</template>

<script>
export default {
    name: 'HomeView',
    data() {
        return {
            firstName: 'rahul',
            lastName: 'sharma',
            email: 'rahul12@gmail.com',
            mobile: '9078564534',
        }
    },
    methods: {
        getFullName() {
            return this.firstName + " " + this.lastName;
        },
        getDeta() {
            return {
                // send data into key-value pair 
                firstName: 'vijay',
                lastName: 'sharma',
                email: 'vijay12@gmail.com',
                mobile: '9078564533',
            }
        },
        test() {
            alert("Button click")
        },
        getMobilenumber() {
            alert(this.mobile)
        },
        getConsole() {
            console.log('mousemove event called')
        }
    }
}
</script>

<style scoped>
h1 {
    color: rgb(17, 187, 187);
}

p {
    text-align: justify;
    margin-left: 40%;
    font-weight: bold;
}
</style>