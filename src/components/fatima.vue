<template>
    <div>
            <form action="Post" enctype="multipart/form-data" id="myForm" v-on:submit.prevent="uplod()">
            <h1>welcome</h1>
            <input  type="text" placeholder="Enter The titel"  v-model="titel" name="title">
            <input  type="text" placeholder="Enter The titelar" v-model="titelar" name="titleAr">
            <input type="file" @change="update" name="image">
            <input class="login-btn" type="submit" value="Login" > 
            
            </form>
          
       
    </div>
</template>
<script>
import axios from'axios'

export default {
    data() {
        return {
           titel :"null",
           titelar:"null",
           img:null
        }
    },
    methods:{
        update(event){
            this.img=event.target.files[0]  
        },
        uplod(){
           let myForm = document.getElementById('myForm');
            let formData = new FormData(myForm);
           
            console.log(formData)
            axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
               axios.post("https://alrawaj-api.herokuapp.com/api/v1/service",formData,
            {
                "headers": {
                    "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTkzNjkzNzA2fQ.WcSv5pBLlGj22a7f9Zi7xSwmFzZMV6pPtiNkKForz9E",
                    "cache-control": "no-cache",
                    "postman-token": "65efba77-4fa4-e8d8-302a-caa312852db3"
             },
            }
            )
            .then(res=>{
                console.log(res)
            })
        }

    }
}
</script>