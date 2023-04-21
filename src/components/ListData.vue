<template>
   <ul>
    <li v-for="item in skills" :key="item">
        {{ item }}
    </li>
   </ul>
   <ul>
    <li v-for="item in users" :key="item.id">
        Name is : {{ item.name }}  and Email is : {{ item.email }}
    </li>
   </ul>
</template>

<script>
    export default {
        name: 'listData',
        data() {
          return {
            skills: ['PHP' ,'LARAVEL' ,'Vue Js' ,'PYTHON' ,'JAVA' ,'CPP' ,'SQL'],
            users :[
                {
                    id:1,
                    name: "sarman",
                    email: "dasa123@gmail.com",
                },
                {
                    id:2,
                    name: "Dharmik",
                    email: "dharmik@gmail.com",
                },
                {
                    id:3,
                    name: "hitesh",
                    email: "hitesh@gmail.com",
                },
                {
                    id:4,
                    name: "popat",
                    email: "popat12@gmail.com",
                },
            ]
          }
        }

    }
</script>

<style>
ul {
    margin-right: 50px;
}
li {
    color: green;
    align-items: start;

}
</style>