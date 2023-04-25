<template>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.gender }}</td>
            <td>
                <button v-on:click="userId(user.id)">User Id</button>
            </td>
</template>

<script>
    export default {
        name: "UserLisr",
        props: {
            user: Object,
            userId: Function,
        }
    }
</script>