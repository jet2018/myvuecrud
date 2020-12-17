<template>
    <div class="pt-5 bg-primary">
            Am at the about page
            <Contact phone="0781109107" location="Mbarara High Street"/>
    </div>
</template>

<script>
import Contact from '../components/contact.vue';
export default {
    name: 'ContactUs',
    components: {
    Contact
  }
}
</script>