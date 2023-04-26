<template>
    <h1>{{ profile }}' Profile page</h1>
    <AlertBox>
        Something bad happened.
    </AlertBox>
</template>

<script>
import { useRoute } from 'vue-router'
export default {
    name: "UserProfile",
    data() {
        return {
            profile: '',
        }
    },
    mounted() {
        const route = useRoute();
        console.log("Route", route.params.id);
        this.profile = route.params.id;
    }
}
</script>