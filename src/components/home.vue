<template>
    <div >
         <div class="show-login">
        <router-Link to ="/login" class="fas fa-sign-in-alt aa"> show login form</router-Link>
    </div>
    <div class="show-register">
      <router-Link to ="/register"  class="fas fa-sign-in-alt aa">
         show Register form
      </router-Link>
    </div>    

    </div>
</template>
<style >
body{
            margin:0 ;
            padding: 0;
            background: #333;
        }
.show-login{
            position: absolute;
            top: 50%;
            left: 50%;
            transform:translate(-50%,-50%);
            color: white;
            text-align: center;
            border: 2px solid;
            cursor: pointer;
            padding: 10px;
            width: 180px;
        }
.show-register{
            position: absolute;
            top: 40%;
            left: 50%;
            transform:translate(-50%,-50%);
            color: white;
            text-align: center;
            border: 2px solid;
            cursor: pointer;
            padding: 10px;
            width: 180px;
        }
.aa{
  color: white;
  text-decoration: none;
}
</style>