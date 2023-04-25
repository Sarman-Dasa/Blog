<template>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <div class="row">
        <div class="col">
            <ul>
                <li v-for="item in error" v-bind:key="item">
                    {{ item }} not valid !!!
                </li>
            </ul>
        </div>
    </div>
    <div class="row">
        <div class="col text-center">
            <h3>User Data</h3>
        </div>
    </div>

    <div class="row">
        <div class="col">
            <input type="text" class="form-control" placeholder="user Name" id="userName" v-model="form.username">
        </div>
        <div class="col">
            <input type="email" class="form-control" placeholder="Email" v-model="form.email">
        </div>
    </div>

    <div class="row mt-3">
        <div class="col">
            <input type="text" class="form-control" placeholder="Phone Number" id="phone" v-model="form.phone">
        </div>
        <div class="col">
            <input type="password" class="form-control" placeholder="pasword" v-model="form.password">
        </div>
    </div>

    <div class="row mt-3">
        <div class="col">
            <label for="" class="d-block">Skill</label>
            <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                <!-- Php checkbox -->
                <input type="checkbox" id="phpchk" value="php" class="btn-check" autocomplete="off" v-model="form.skills">
                <label for="phpchk" class="btn btn-outline-primary">Php</label>
                <!-- laravel checkbox -->
                <input type="checkbox" id="laravelchk" value="laravel" class="btn-check" autocomplete="off"
                    v-model="form.skills">
                <label for="laravelchk" class="btn btn-outline-primary">Laravel</label>
                <!-- Vue js -->
                <input type="checkbox" id="vuejschk" value="vuejs" class="btn-check" autocomplete="off"
                    v-model="form.skills">
                <label for="vuejschk" class="btn btn-outline-primary">Vue js</label>
            </div>
        </div>
        <div class="col">
            <label for="" class="d-block">gender</label>
            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="btnradio" id="malerdo" autocomplete="off" v-model="form.gender">
                <label class="btn btn-outline-primary" for="malerdo">Male</label>

                <input type="radio" class="btn-check" name="btnradio" id="femalerdo" autocomplete="off"
                    v-model="form.gender">
                <label class="btn btn-outline-primary" for="femalerdo">Female</label>
            </div>
        </div>
    </div>

    <div class="row mt-3">
        <div class="col">
            <label for="">Select City</label>
            <select name="city" id="city" class="form-select" v-model="form.city">
                <option value="1">Gandhinagar</option>
                <option value="2">Rajkot</option>
                <option value="3">Porbandar</option>
                <option value="4">Surat</option>
            </select>
        </div>
    </div>
    <div class="row mt-3">
        <div class="col">
            <button class="btn btn-primary b-block" v-on:click="printData()">Print Data</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserData",
    data() {
        return {
            form: {
                username: null,
                email: null,
                password: null,
                skills: [],
                gender: null,
                phone: null,
                city: null
            },
            error: [],
        }
    },
    methods: {
        printData() {
            this.error = [];
            for (const item in this.form) {
                if (this.form[item] === null || this.form[item].length === 0) {
                    this.error.push(item);
                }
            }
            
            if (this.error.length === 0) {
                alert("Data sumitted successfully");
            }
        }
    }

}
</script>

<style scoped>
li {
    color: red;
}
</style>