<template>
    <div class="main">
        <div class="form">
            <div>
                <p class="title">LOGIN</p>
            </div>
            <form @submit.prevent="submitForm">
                <div class="container">
                    <label for="email" class="formTxt">Email</label>
                    <input type="email" placeholder="Username" name="Username" required v-model="username">
                
                    <label for="password"><p class="formTxt">Password</p></label>
                    <input type="password" placeholder="Password" name="password" required v-model="password">
                    <br>
                    <button type="submit">Login</button>
                    <p class="register">You don't have an account ? <RouterLink class='link' to="/register" >Create one !</RouterLink>  </p>
                    <p id="error">{{ error }}</p>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    .main{
        display: flex;
        height: 100vh;
        width: 100%;
        align-items: center;
        justify-content: center;
    }
    .form{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .container{
        width: 400px;
        height: 500px;
        background-color: rgb(51, 109, 154);
        border-radius: 40px;
        border: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .title{
        font-size: 40px;
    }
    .container input{
        width: 300px;
        height: 30px;
        border: 0;
        padding: 4px;
        color: black;
        margin-bottom: 30px;
        margin-top: 10px;
    }
    .container input:focus{
        outline: none;
    }
    .container button{
        margin-top: 20px;
        margin-bottom: 20px;
        width: 150px;
        height: 40px;
        color: black;
    }
    
</style>