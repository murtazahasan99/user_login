<template>
     <div class="login-box">
        <form class="login-form">
            <h1>welcome</h1>
            <input class="txtb" type="email" placeholder="Enter The E-mail">
            <input class="txtb" type="password" placeholder="Enter The Password">
            <input class="login-btn" type="submit" value="Login">    
        </form>
    </div>

</template>

<style >
 .login-box{
            position: absolute;
            top: 0;
            width: 100%;
            height: 100vh;
            background-image: linear-gradient(45deg,#9fbaa8,#31354c);
            transition: 0.5s;
        }
        .login-form{
            position: absolute;
            top: 50%;
            left: 50%;
            transform:translate(-50%,-50%);
            color: white;
            text-align: center;
        }
        .login-form h1{
            font-weight: 400;
            margin-top: 0;
        }
        .txtb{
            display: block;
            width: 240px;
            background: #ffffff28;
            text-align: center;
            outline: none;
            padding: 10px;
            margin: 10px;
            border-radius: 6px;
            box-sizing: border-box;
            color: white;
            border: 1px solid white;
        }
        .login-btn{
            width: 240px;
            background: #2c3e50;
            border: 0;
            color: white;
            padding: 10px;
            border-radius: 6px;
            cursor: pointer;
        }
</style>