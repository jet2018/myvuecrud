<template>
    <div class="pt-5">

    <div v-if="message" v-text="message"></div>
        <form v-for="resp in res" @submit.prevent="Update" v-bind:key="resp.id">
            <input type="text"  v-model="resp.fname" name="">
            <input type="text"  v-model="resp.lname" name="">
            <select v-model="resp.sex">
                <option value="m">Male</option>
                <option value="f">Female</option>
            </select>
            <input type="number"  v-model="resp.grade" name="">
            <input type="submit" name="update" :value="`Update ${resp.fname}`">
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            res:[],
            message:''
        }
    },

    name:'updateStudent',

    methods:{
        getOneStudent: function(){
           // const id = this.$route.params.id;
           axios
              .get(`http://localhost/vue-todo/apis/getOneStudent.php?id=${this.$route.params.id}`)
              .then(resp => (
                    this.res = resp.data.msg
                  ))
            .catch(error => console.log(error))
    },
        Update: function(){

            let fd = new FormData()
            let mydata = this.res[0]

            fd.append('fname', mydata.fname)
            fd.append('lname', mydata.lname)
            fd.append('sex', mydata.sex)
            fd.append('grade', mydata.grade)

            axios
                .get(`http://localhost/vue-todo/apis/updateStudent.php?id=${this.$route.params.id}`, fd)
                .then(response => {
                    this.message = response.data.message
                        if (response.data.msg) {
                            this.res = response.data.msg
                        }
                    })
                .catch(err => console.log(err))
    }
},
    mounted(){
        this.getOneStudent()
    }
}


</script>