<template>
    <slot>
        <p>default value</p>
    </slot>
    <div class="box">
        <header>
            <slot name="header"></slot>
        </header>
        <content>
            <slot name="main"></slot>
        </content>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
    
</template>

<script>
export default {
    name: "SlotExample",
}
</script>

<style>
.box {
   border: 2px solid gold;
   text-align: center;
   width: 200px;
   padding: 10px;
}
</style>