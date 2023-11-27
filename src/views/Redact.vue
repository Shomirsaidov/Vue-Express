<template>
    <div class="container">
        <form action="http://localhost:3000/updateUserInfo" method="POST" enctype="multipart/form-data">
            <div class="card">
                    <div :style="{display: 'grid'}">
                        <h1 :style="{marginBottom: '10px'}">Редактируйте свой профиль</h1>
                        <input v-model="email" type="text" name="email" placeholder="Email"><br>
                        <input v-model="name" type="text" name="name" placeholder="Имя"><br>
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
                        <label for="userAvatar" :style="{fontSize: '20px', marginBottom: '10px'}">Выберите фото профиля</label>
                        <input type="file" name="userAvatar">
                        <input type="hidden" name="token" v-model="userToken">
                    </div>
                    <h3 v-if="errors.length > 0" :style="{color: 'indianred',fontWeight: 'bolder'}">{{ errors }}</h3>
                    <div :style="{display: 'flex', justifyContent: 'center'}">
                        <input type="submit" value="Внести изменения" id="submit">        
                    </div>
                </div>

        </form>
    </div>
</template>
<script>
    import Router from 'vue-router'

    
    export default {
        data: () => ({
            job: '',
            email: '',
            name: '',
            password: '',
            userToken: localStorage.crudVueUser,
            errors: ''
        }),
        methods: {
        },
        created() {
            if (this.$route.query.error === undefined) {
                console.log('Welcome to crudVue !')
            } else {
                    let err = this.$route.query.error
                    this.errors = err
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
        background: #fff;
        border-radius: 20px;
        box-shadow: 1px 1px 10px white;
    }
    input, select {
        margin-bottom: 15px;
        border-radius: 35px;
        padding: 8px;
        font-size: 20px;
        border: 1px rgba(2, 197, 2, 0.815) solid;
        outline: 1px green solid;
    }
    #submit {
        margin-top: 13px;
        margin-bottom: 10px;
        color: white;
        padding: 15px;
        font-size: 23px;
        border: none;
        border-radius: 40px;
        background: #5c5cbe;
        outline: none;
        cursor: pointer;
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



