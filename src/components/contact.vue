<template>
    <div id="contact">
            Hello, you can reach out to us on {{ phone }} or physically on {{ location }}
    </div>
</template>

<script>
export default {
    name: 'Contact',
    props:{
        phone:String,
        location: String
    }
}
</script>