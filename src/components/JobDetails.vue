<template>
    <div class="container" v-if="job">
        <div class="row bg-primary p-3 text-light">
            <div class="col">
                ID
            </div>
            <div class="col">
               Name
            </div>
            <div class="col">
               Member
            </div>
        </div>
        <div class="row mt-3 text-danger">
            <div class="col">
                {{ job.name }}
            </div>
            <div class="col">
              {{ job.name }}
            </div>
            <div class="col">
               {{ job.member }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "JobDetails",
        data() {
            return {
                job: null,
            }
        },
        mounted() {
            const id = this.$route.params.id;
            fetch("http://localhost:3000/jobs/"+id)
            .then(response => response.json())
            .then(data => this.job = data)
            .catch(err => console.log(err.message))
        }
    }
</script>