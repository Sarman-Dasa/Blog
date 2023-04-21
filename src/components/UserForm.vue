<template>
    <h2>
        <table id="usertable">
            <h3>User Data</h3>
            
            <label for="">Name</label>
            <input type="text" placeholder="Enter name" v-model="name">
            
            <label for="">email</label>
            <input type="email" placeholder="Enter email" v-model="email">
            <br>
            
            <label for="">Pasword</label>
            <input type="password" placeholder="Enter password" v-model="password">

            <label for="">phone</label>
            <input type="text" placeholder="Enter mobile number">
            <br>

            <label for="snumber" style="font-size: 12px;">2nd number</label>
            <input type="checkbox" id="snumber" v-on:click="snumber=!snumber">
            <br>
            <label v-if="snumber" for="">phone</label>
            <input v-if="snumber" type="text" placeholder="Enter mobile number">

            <br>
            <br>
            <!-- User skill checkbox -->
            <label for="">Select Skill :</label>
            <!-- php checkbox -->
            <label for="php">Php</label>
            <input type="checkbox" id="php" value="php" v-model="skills">
        
            <!-- laravel checkbox -->
            <label for="laravel">Laravel</label>
            <input type="checkbox" id="laravel" value="laravel" v-model="skills">
        
            <!-- Vue js -->
            <label for="vuejs">Vue js</label>
            <input type="checkbox" id="vuejs" value="vuejs" v-model="skills">
            <br>

            <!--Radio Button select gender -->
            <label for="">Select your gender :</label>

            <!-- male radio button -->
            <label for="male">Male</label>
            <input type="radio" name="gender" id="male" value="male" v-model="gender">

            <!-- female radio button -->
            <label for="female">Female</label>
            <input type="radio" name="gender" id="female" value="female" v-model="gender">

            <br>
            <button v-on:click="getData()">Get Data</button>

            <p>{{ output }}</p>
        </table>
    </h2>
</template>

<script>
export default {
    name: "UserForm",
    data() {
        return {
            name: null,
            email: null,
            password: null,
            output: null,
            skills: [],
            gender: null,
            snumber:false,
        }
    },
    methods: {
        getData() {
            this.output = this.name + " " + this.email + " " + this.password +" Skills :"+ this.skills + " Gender :" + this.gender;
        },
    }
}
</script>

<style scoped>
h1 {
    color: white;
}
label {
   margin: 0px 20px;
   font-size: 14px;
}

</style>