<template>
    <h1>Home component</h1>
    <p>Employee FirstName : {{ firstName }}</p>
    <p>Employee LastName : {{ lastName }}</p>
    <p>Email : {{ email }}</p>
    <p>Mobile Number : {{ mobile }}</p>
    <p>Full Name : {{ getFullName() }}</p>
</template>

<script>
    export default {
        name:'HomeView',
        data() {
            return {
                firstName: 'vijay',
                lastName: 'sharma',
                email: 'vijay12@gmail.com',
                mobile: '9078564534',
                getFullName: function()
                {
                    return this.firstName + " " + this.lastName;
                }
            }
        }
    }
</script>

<style scoped>
    h1{
        color: rgb(17, 187, 187);
    }
    p{
        text-align: justify;
        margin-left: 40%;
       font-weight: bold;
    }
</style>