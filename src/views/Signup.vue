<template>
    <div class="container">
        <form action="http://localhost:3000/registerME" method="POST">
            <div class="card">
                
                    <h1 :style="{marginBottom: '22px'}">Зарегистрируйтесь</h1>
                    <input v-model="email" type="text" name="email" placeholder="Email"><br>
                    <input v-model="name" type="text" name="name" placeholder="Имя"><br>
                    <input v-model="password" name="password" type="password" placeholder="Пароль"><br>
                    <select v-model="job" name="job">
                        <option value="" selected disabled>Должность</option>
                        <option value="UI/UX Designer">UI/UX</option>
                        <option value="Graphic Designer">Graphic Design</option>
                        <option value="SMM">SMM</option>
                        <option value="Frontend developer">Frontend</option>
                        <option value="Backend developer">Backend</option>
                        <option value="Android developer">Android</option>
                        <option value="IOS developer">IOS</option>
                        <option value="Data Science developer">Data Science</option>
                        <option value="Full Stack developer">Full Stack</option>
                        <option value="Unity + C# Game developer">Game</option>
                        <option value="Python developer">Python</option>
                        <option value="Artificial Intelligence developer">AI</option>
                        <option value="SEO expert">SEO</option>
                        <option value="Volunteer">Volunteer</option>
                        <option value="Intern">Intern</option>
                        <option value="Client">Client</option>
                    </select><br>
                    <h3 
                    v-bind:style="{color: 'indianred'}"
                    v-if="errors.length > 0">{{ errors }}</h3>
                    <input @click="submit" type="button" value="Зарегистрироваться" id="submit" :style="{marginTop: '14px', marginBottom: '7px'}">
          
            
                <p  type="button" 
                        :style="{
                        textDecoration: 'none', 
                        color: 'royalblue',
                        fontSize: '20px',
                        cursor: 'pointer',
                        marginTop: '10px'
                    }"
                        @click="toSignup">
                            Уже есть аккаунт ? Авторизуйтесь !
                        </p>
            </div>
        </form>
    </div>
</template>
<script>
    import Router from 'vue-router'

    const mYheaders = {}
          mYheaders['Access-Control-Allow-Headers'] = "*"
          mYheaders['Access-Control-Allow-Origin'] = '*'
          mYheaders['Access-Control-Allow-Credentials'] = 'true'
          mYheaders['Content-Type'] = 'application/json;charset=utf-8'

    function tokenGenerate() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx-xxxxxxxx-xx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }

    export default {
        data: () => ({
            job: '',
            email: '',
            name: '',
            password: '',
            errors: ''
        }),
        methods: {
            async submit() {
                if(this.job.length > 0 && this.email.length > 4 && this.name.length > 1) {
                   try {
                        const request = await fetch('http://localhost:3000/registerME', {
                            method: 'POST',
                            headers: mYheaders,
                            body: JSON.stringify({
                                job: this.job,
                                email: this.email,
                                password: this.password,
                                name: this.name
                            })
                        })
                        const userAdminToken = await request.text()
                        this.$router.push({
                            path: '/admin',
                            query: {
                                token: userAdminToken,
                            }
                        })
                   }
                   catch (e) {
                        console.warn(e.message)
                   } 
                } else {
                    this.errors = 'Заполните все поля !';
                }

            },
            toSignup() {
                this.$router.push({
                    path: 'login',
                    query: {
                        redirected: 'yes'
                    }
                })
            }

        }
    }
</script>
<style scoped>
    .container {
        margin-top: 35px;
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
    input, select {
        margin-bottom: 0;
        border-radius: 35px;
        padding: 8px;
        font-size: 20px;
        border: 1px rgba(2, 197, 2, 0.815) solid;
        outline: 1px green solid;
    }
    #submit {
        margin-bottom: 10px;
        color: white;
        padding: 10px;
        font-size: 23px;
        border: none;
        border-radius: 15px;
        background: darkblue;
        outline: none;
    }
    .forget {
        background: darkred;
    }
    button:hover {
        background: rgb(8, 8, 167);
    }
    .forget:hover {
        background: rgb(182, 21, 21);
    }
</style>
<!-- '[{"token":"ffb91a85-9ae3-4134-a970-ebeda0a2d2ed","user":"Daler","email":"lo@mail.ru","job":"Full Stack","password":"daler","posts":[]},{"token":"c87fa703-7b2e-4b17-ac93-40dff5c0e2c1","user":"Ahrorov Karomatullo","email":"karomatulloAPK@mail.ru","job":"Android","password":"apk","posts":[{"id":5,"title":"I work","text":"As an Android"}],"active":"6c5e1a51-613f-4e87-8e1a-f631453aacc8"},{"active":"c87fa703-7b2e-4b17-ac93-40dff5c0e2c1"}]' -->



