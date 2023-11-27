<template>
    <div class="container">
        <form action="http://localhost:3000/login" method="POST">
            <div class="card">
                <h1 :style="{marginBottom: '22px'}">Авторизуйтесь</h1>
                <input type="text" placeholder="Имя"
                    :class="errorPlace == 'name' ? 'styleWrong' : 'ok'"
                    v-model="name" name="name"><br>
                <input type="password" placeholder="Пароль"
                    :class="errorPlace == 'password' ? 'styleWrong' : 'ok'"
                    v-model="password" name="password"><br>
                <h3 
                    v-if="errorText.length > 0"
                    :style="{color: 'indianred'}">{{ errorText }}</h3>
                <input type="submit" value="Войти" id="submit"/>
                <button class="forget">
                    <router-link 
                        :to="{name: 'forget'}" 
                        :style="{
                            textDecoration: 'none', 
                            color: '#fff'
                        }">
                        Забыли пароль ?           
                    </router-link>
                </button>
                <router-link 
                    :to="{name: 'signup'}" 
                    :style="{
                        textDecoration: 'none', 
                        color: 'royalblue',
                        fontSize: '20px',
                        marginTop: '10px'
                    }">Пока нет аккаунта ? Создайте !</router-link>
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        data: () => ({
            errorText: '',
            errorPlace: '',
            name: '',
            password: '',
            userID: ''
        }),
        methods: {
            check() {
                if(this.name.length < 2) {
                    this.errorPlace = 'name';
                    this.errorText = 'Непрвильное имя аккаунта !';
                } else if(this.password.length == 0) {
                    this.errorPlace = 'password';
                    this.errorText = 'Введите пароль !';
                } else {
                    this.errorPlace = '';
                    this.errorText = '';
                    let users = JSON.parse(localStorage.crudVue)
                    users.forEach(user => {
                        if (user.user == this.name && user.password == this.password) {
                            users[users.length - 1].active = user.token
                            this.userID = user.token
                            console.log(user.active);
                        }
                    })
                    localStorage.crudVue = JSON.stringify(users);
                    this.$router.push({
                        path: '/admin',
                        query: {
                            token: this.userID,
                        }
                    })
                    
                }
            },
            toAdmin() {
                let userToken = JSON.parse(localStorage.crudVue)
                userToken = userToken[userToken.length - 1].active
                if (userToken.length == 0) {
                    console.log('hi')
                } else if (this.$route.query.aim == 'resigned') {
                    console.log('hi')
                } else {
                    this.$router.push({
                        path: '/admin?token=' + userToken,
                    })
                }

            },
            displaySentErrors() {
                
                if(localStorage.crudVueUser.length > 0 && this.$route.query.redirected === undefined && this.$route.query.error === undefined) {
                    this.$router.push({
                        path: '/admin'
                    })
                }
                if (this.$route.query.error === undefined) {
                  console.log('Welcome to crudVue !')
                } else {
                    let err = this.$route.query.error
                    this.errorText = err
                    console.log(err)        
                }

            }
        },
        created() {
            this.displaySentErrors()
            console.log('Created !')

//            this.toAdmin()
        }
    }
</script>
<style scoped>
    .container {
        margin-top: 20px;
        display: flex;
        justify-content: center;    
    }
    .card {
        padding: 20px;
        display: grid;
        background: #fff;
        border-radius: 20px;
        box-shadow: 1px 1px 10px white;
    }
    input {
        border-radius: 35px;
        padding: 10px;
        font-size: 22px;
    }
    .ok {
        border: 1px rgba(2, 197, 2, 0.815) solid;
        outline: 1px green solid;
    }
    #submit, button {
        margin-bottom: 10px;
        color: white;
        padding: 10px;
        font-size: 23px;
        border: none;
        border-radius: 15px;
        background: darkblue;
        cursor: pointer;
    }
    .forget {
        background: darkred;
    }
    #submit:hover {
        background: rgb(8, 8, 167);
    }
    .forget:hover {
        background: rgb(182, 21, 21);
    }
    .styleWrong {
        border: 1px red solid;
        outline: 1px red solid;
    }
</style>



