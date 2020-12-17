<template>
  <div>
          <registrationForm v-on:resadd="updateTable"/>

    <div  v-if="students"> 

           <studentTable v-bind:students="students"  @deletestudent="deleteStudent"/>
    </div>
    <div v-else class="alert alert-warning">Oops! no student found!</div>
  </div>
</template>


<script>
import axios from 'axios'
import studentTable from '../components/studentTable'
import registrationForm from '../components/studentAdd'
  export default {
    components:{
      studentTable,
      registrationForm
    },
    data() {
      return {
        students: [],
        loading:true
      }
      },

      methods: {
      fetchData: function(){
           axios
          .get("http://localhost/vue-todo/apis/getStudents.php")
          .then(response => (
            this.students = response.data.msg,
            this.loading = false
            ))
          .catch(error => console.log(error))
          },

      deleteStudent: function(id){
        axios
          .get(`http://localhost/vue-todo/apis/deleteStudent.php?id=${id}`)
          .then(this.fetchData)
          .catch(error => console.log(error))
      },

      updateTable: function(res){
        this.students = res.data.msg
      }

      },
    
    
    mounted() {
       this.fetchData()
      }
  }

</script>