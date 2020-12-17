<template>
    <div>
        <form method="POST" class="p-5" @submit.prevent="submitStudent">
            <div v-if="error" class="alert text-warning">{{error}}</div>
                <div class="row form-group">
                    <input type="text" name="fname" v-model="fname" placeholder="First name" id="fname" class="col-md-6 form-control"/>
                    <input type="text" name="lname" v-model="lname"  placeholder="Last name" id="lname" class="col-md-6 form-control"/>
                </div>

                <div class="row form-group">
                    <select name="sex" placeholder="Select gender" v-model="sex" class="form-control col-md-6" id="gender">
                        <option value="m">Male</option>
                        <option value="f">Female</option>
                    </select>
                    <input type="number" name="grade" v-model="grade" placeholder="Student grade" id="grade" class=" col-md-6 form-control"/>
                </div>
                <div class="form-group row">
                <div class="col-10"></div>
            <button class="btn col-2 btn-success float-right" type="submit">Submit </button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    
    name:'registrationForm',
    data(){
        return{
            fname:'',
            lname:'',
            sex:'',
            grade: 0,
            error:''
        }
    },
    methods:{
        resetForm(){
            this.fname =""
            this.lname =""
            this.sex =""
            this.grade = 0
            this.error =""
        },
        submitStudent(){
            // alert(this.fname+' '+this.lname)
            if(this.fname.length<3){
                this.error ="Your first name is too short"
            }else if(this.lname.length<3){
                 this.error ="Your last name is too short"
            }else if(this.sex ==="" ){
                this.error="Did you forget to choose a sex"
            }else if(this.grade<1){
                this.error="Are you in grade 0? That can't be possible"
            }else if(this.grade>11){
                this.error="You can't be in a grade greater than 11"
            }else{
                this.error=""
            }

            if(this.error == ""){
                let fd = new FormData()
                fd.append('fname', this.fname)
                fd.append('lname', this.lname)
                fd.append('grade', this.grade)
                fd.append('sex', this.sex)
                
                axios
                .post("http://localhost/vue-todo/apis/insertStudent.php" , fd)
                .then(res => this.$emit('resadd', res))

                this.resetForm();
                
            }
        }
    }
}
</script>