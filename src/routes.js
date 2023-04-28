import { createWebHistory, createRouter } from 'vue-router';
import Home from './components/Home.vue'
import LaravelView from "./components/Laravel.vue"
import Php from "./components/Php.vue"
import VueJs from "./components/VueJs.vue"
import UserData from "./components/UserData.vue";
import Watcher from "./components/Watcher.vue";
import Profile from "./components/Profile.vue";
import PageNotFound from "./components/PageNotFound.vue";
import GetApi from "./components/GetApi.vue";
import Adduser from "./components/AddUser.vue";
import UpdateUser from "./components/UpdateUser.vue";
import Jobs from "./components/Jobs.vue";
import JobDetails from "./components/JobDetails.vue"

const routes = [
    {
        name: "Home",
        path: "/",
        component: Home
    },
    {
        name: "Laravel",
        path: "/laravel",
        component: LaravelView
    },
    {
        name: "Php",
        path: "/php",
        component: Php
    },
    {
        name: "VueJs",
        path: "/vue",
        component: VueJs
    },
    {
        name: "VueJs",
        path: "/vue",
        component: VueJs
    },
    {
        name: "UserData",
        path: "/user-data",
        component: UserData
    },
    {
        name: "Watcher",
        path: "/watcher",
        component: Watcher
    },
    {
        name: "Profile",
        path: "/profile/:id",
        component: Profile
    },
    {
        name: "NotFound",
        path: "/:pathMatch(.*)*",
        component: PageNotFound
    },
    {
        name: "GetApi",
        path: "/get-api",
        component: GetApi
    },
    {
        name: "AddUser",
        path: "/add-user",
        component: Adduser
    },
    {
        name: "UpdateUser",
        path: "/update-user/:id",
        component: UpdateUser
    },
    {
        name: "Jobs",
        path: "/jobs",
        component: Jobs
    },
    {
        name: "JobDetails",
        path: "/job-JobDetails/:id",
        component: JobDetails
    }


    
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;