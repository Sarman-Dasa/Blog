<template>
<div class="nav">
    <button @click="tab='php'">Php</button>
    <button @click="tab='LaravelView'">Laravel</button>
    <button @click="tab='VueJs'">Vue Js</button>
    <button @click="tab='UserForm'">User Form</button>
    <button @click="tab='UserData'">User Form Validation</button>
    <button @click="tab='Watcher'">Watcher</button>
</div>
<div class="main"> 
    <component :is="tab"/>
</div>


    <div class="left">
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

    <div class="right">
        <h2>Second Div</h2>
        <input type="number" v-model="count" />
        <input type="text" v-model="name" />
        <p>Your name is : {{ name }}</p>
    </div>

    <div class="right">
        <ListData />
        <!-- set data and get into child component -->
        <!-- Access parent component data into child component like:property , object ,function -->
        <Child email="sarmand@zignuts.com" :users="users" :myFunction="myFunction" />
        <h3>User Name Is : {{ userName }}</h3>
    </div>

    <!-- component reuse example -->
    <div class="left">
        <button v-on:click="tableDesign = !tableDesign">change table Style</button>
        <table :class="applyStyle">
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>gender</th>
                <th>Action</th>
            </tr>
            <tr v-for="user in users" :key="user.id">
                <UserList :user="user" :userId="getUserId" />
            </tr>
            <tr>
                <!-- Html Tag binding  -->
                <td colspan="5">
                    <div v-html="message"></div>
                </td>
            </tr>
        </table>
    </div>

    <div class="clearboth"></div>

    <div class="left">
       <SlotExample>
        <template v-slot:header>
            <h3>Multiple Solt with name</h3>
        </template>
        <template v-slot:main>
           <p>A vue js slot</p>
        </template>
        <template v-slot:footer>
           <button>Click</button>
        </template>
       </SlotExample>

       <SlotExample>
        <template v-slot:header>
            <h3>Slot Example</h3>
        </template>
        <template v-slot:main>
           <p>A vue js Product</p>
        </template>
        <template v-slot:footer>
           <button>Click</button>
        </template>
       </SlotExample>
    </div>

    <div class="right">
        <SlotExample>
            <h1>Hello from slot</h1>
        </SlotExample>

        <SlotExample>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur,
                porro!
            </p>
        </SlotExample>

        <SlotExample>
            <a href="#">Click</a>
        </SlotExample>

        <SlotExample></SlotExample>
    </div>

</template>

<script>
import UserForm from "./UserForm.vue";
import ListData from "./ListData.vue";
import Child from "./Child.vue";
import UserList from "./UserList.vue";
import UserData from "./UserData.vue";
import Watcher from "./Watcher.vue";
import SlotExample from "./SlotExample.vue";
import Php from "./Php.vue";
import LaravelView from "./Laravel.vue";
import VueJs from "./VueJs.vue";

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
            tableDesign: false,
            userName: null,
            tab: "Php",
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
        // get child to parent data component
        myFunction(name) {
            this.userName = name;
        },
        // call this function from userlist component and alert a user id
        getUserId(id) {
            alert(id);
        },
    },
    components: {
    UserForm,
    ListData,
    Child,
    UserList,
    UserData,
    Watcher,
    SlotExample,
    Php,
    LaravelView,
    VueJs
},
    computed: {
        applyStyle() {
            return {
                tabledesign: this.tableDesign,
                error: true,
            };
        },
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

.left {
    float: left;
    width: 45%;
    background-color: antiquewhite;
    padding: 10px;
    margin-bottom: 10px;
}

.right {
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

.clearboth {
    clear: both;
}

.tabledesign {
    background-color: aquamarine;
    font-size: 18px;
    font-family: monospace;
    border-collapse: collapse;
    /* border: 3px solid black; */
}

.tabledesign th {
    background-color: black;
    color: #fff;
    padding: 10px;
}

.error {
    color: red;
}
.nav
{
    padding: 10px;
    background-color:aquamarine;
}
.nav button {
    background-color: aliceblue;
    padding: 5px 10px;
    margin: 0px 10px;
    font-size: large;
}
.main {
    background-color:azure;
    padding: 20px;
    position: relative;
    width: 50%;
    margin: 2% 15%;
    border: #000 5px solid;
}
</style>
