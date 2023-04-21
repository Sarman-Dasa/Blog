<template>
<div id="left">
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
    <p>Total Click : {{ count }}</p>
    <button v-on:click="countClicks()">Click!!!</button>
    <button v-on:dblclick="getMobilenumber()" >Double Click</button>
</div>
<div id="rigth">
    <h2>Second Div</h2>
    <input type="number" v-model="count">
    <input type="text" v-model="name">
    <p>Your name is : {{ name }}</p>
    <UserForm />
</div>
<div id="clearboth">

</div>
</template>

<script>
import UserForm from './UserForm.vue';

export default {
    name: 'HomeView',
    data() {
        return {
            firstName: 'sarman',
            lastName: 'Dasa',
            email: 'dasa12@gmail.com',
            mobile: '9078564534',
            count: 0,
            name:""
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
        countClicks() {
            this.count += 1;
        },
        getMobilenumber() {
            alert(this.mobile)
        },
        getConsole() {
            console.log('mousemove event called')
        }
    },
    components: {
        UserForm,
    }
}
</script>

<style scoped>
h1 {
    color: rgb(17, 187, 187);
}

p {
    text-align: justify;
    font-weight: bold;
}
#left
{
    float: left;
    width: 45%;
    background-color: antiquewhite;
    padding: 10px;
}
#rigth
{
    float: right;
    width: 50%;
    text-align: left;
    background-color: aqua;
    padding: 10px;
}
#rigth h2 {
    color: brown;
}
#clearboth {
    clear: both;
}
</style>