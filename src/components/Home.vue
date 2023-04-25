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
        <button v-on:dblclick="getMobilenumber()">Double Click</button>
    </div>

    <div id="right">
        <h2>Second Div</h2>
        <input type="number" v-model="count" />
        <input type="text" v-model="name" />
        <p>Your name is : {{ name }}</p>
        <UserForm />
    </div>

    <div id="clearboth"></div>

    <div id="left">
        <ListData />
        <!-- set data and get into child component -->
        <!-- Access parent component data into child component like:property , object ,function -->
        <Child email="sarmand@zignuts.com" :users="users" :myFunction="myFunction" />
    </div>

    <div id="right">
        <!-- <li v-for="user in users" :key="user.id">
            <UserList :user="user"/>
        </li> -->
        <table border="1" align="center">
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>gender</th>
                <th>Action</th>
            </tr>
            <tr v-for="user in users" :key="user.id">
                <UserList :user="user" :userId="getUserId"/>
            </tr>
            <tr>
                <!-- Html Tag binding  -->
                <td colspan="5">
                    <div v-html="message"></div>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import UserForm from "./UserForm.vue";
import ListData from "./ListData.vue";
import Child from "./Child.vue";
import UserList from "./UserList.vue";

export default {
    name: "HomeView",
    data() {
        return {
            firstName: "sarman",
            lastName: "Dasa",
            email: "dasa12@gmail.com",
            mobile: "9078564534",
            count: 0,
            name: "",
            users: [
                {
                    id: 1,
                    name: "sarman",
                    email: "sarmand@zignuts.com",
                    phone: "9767453445",
                    gender: "Male",
                },
                {
                    id: 2,
                    name: "dharmik",
                    email: "dharmikd@zignuts.com",
                    phone: "9767453444",
                    gender: "Male",
                },
            ],
            message: "<h1>user List</h1>",
        };
    },
    methods: {
        getFullName() {
            return this.firstName + " " + this.lastName;
        },
        getDeta() {
            return {
                // send data into key-value pair
                firstName: "vijay",
                lastName: "sharma",
                email: "vijay12@gmail.com",
                mobile: "9078564533",
            };
        },
        countClicks() {
            this.count += 1;
        },
        getMobilenumber() {
            alert(this.mobile);
        },
        getConsole() {
            console.log("mousemove event called");
        },
        myFunction() {
            alert("call from child component");
        },
        // call this function from userlist component and alert a user id
        getUserId(id) {
            alert(id);
        }
    },
    components: {
        UserForm,
        ListData,
        Child,
        UserList
    },
};
</script>

<style scoped>
h1 {
    color: rgb(17, 187, 187);
}

p {
    text-align: justify;
    font-weight: bold;
}

#left {
    float: left;
    width: 45%;
    background-color: antiquewhite;
    padding: 10px;
    margin-bottom: 10px;
}

#right {
    float: right;
    width: 50%;
    text-align: left;
    background-color: aqua;
    padding: 10px;
    margin-bottom: 10px;
}

h2 {
    color: #000;
}

#clearboth {
    clear: both;
}
</style>
