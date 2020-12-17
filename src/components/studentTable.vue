<template>
    <table class="table">
            <thead> Table of registered students.</thead>
              <thead>
              <tr>
               <th>Student full name</th>
               <th>Student gender</th>
               <th>Student grade</th>
               <th>update</th>
               <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="student in students" v-bind:key="student.id">
                  <td>{{ student.fname }} {{student.lname}}</td>
                  <td>{{ student.sex }}</td>
                  <td>{{ student.grade }}</td>
                  <td>
                  <router-link :to="{name:'update', params:{id:student.id}}" class="btn btn-sm btn-primary">Update</router-link>
                  </td>
                  <td>
                  <button class="btn btn-sm btn-danger" @click="$emit('deletestudent', student.id)">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
</template>


<script>
export default {
    name: 'studentTable',
    props:{
        students: Array
    }
}
</script>