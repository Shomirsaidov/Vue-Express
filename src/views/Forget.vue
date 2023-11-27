<template>
    <div class="container">
        <div class="card" :style="{marginTop: '40x'}">
            <div v-if="sent" class="sent">
                <h2 v-if="sent">Мы отправили на почту <span 
                    v-html="email" :style="{fontWeight: 'bold'}"></span> код для изменения пароля</h2>
                <input  v-if="sent" 
                        type="password" 
                        placeholder="Код" 
                        v-model="code"
                        :class="errorCode.length > 0 ? 'styleWrong' : 'ok'"><br>
                <h4 
                    v-if="errorCode.length > 0" 
                    :style="{color: 'indianred'}">
                    {{ errorCode }}
                </h4>
                <button v-if="sent" 
                        @click="checkCode">
                        Восстановить пароль</button><br>
            </div>
            <div v-else class="beforesend">
                <input 
                    type="text" 
                    placeholder="Email"
                    v-model="email"
                    :class="error.length > 0 ? 'styleWrong' : 'ok'"
                    ><br>
                <h4 
                    v-if="error.length > 0" 
                    :style="{color: 'indianred'}">
                    {{ error }}
                </h4>
                <button 
                    @click="check"
                    >Получить код</button><br>
            </div>
            
        </div>
    </div>
</template>
<script>
    export default {
        data: () => ({
            sent: false,
            email: '',
            code: '',
            error: '',
            errorCode: '',
            possibleEmails: ['@mail.ru', '@gmail.com', '@bk.ru']
        }),
        methods: {
            check() {
                
                this.possibleEmails.forEach(element => {
                    if(this.email.endsWith(element)) {
                        this.sent = true;
                    } else {
                        if(this.email.length == 0) {
                            this.error = 'Введите адрес почты !';                    
                        } else {
                            this.error = 'Неправильный адрес почты !';                    
                        }               
                    }
                });
            },
            checkCode() {
                if(this.code.length == 0) {
                    this.errorCode = 'Сначала введите код !';
                } else {
                    this.errorCode = '';                    
                }
            }
        }
    }
</script>
<style>
    .container {
        display: flex;
        justify-content: center;    
    }
    .card {
        margin-top: 35px;
        max-width: 450px;
        padding: 20px;
        display: grid;
        background: #fff;
        border-radius: 20px;
        box-shadow: 1px 1px 10px white;
    }
    input {
        border-radius: 35px;
        padding: 8px;
        font-size: 20px;
    }
    .beforesend, .sent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .ok {
        border: 1px rgba(2, 197, 2, 0.815) solid;
        outline: 1px green solid;
    }
    button {
        margin-bottom: 10px;
        margin-top: 0px;
        color: white;
        padding: 10px;
        font-size: 23px;
        border: none;
        border-radius: 15px;
        background: darkblue;
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
    h2 {
        font-weight: lighter;
    }
    .styleWrong {
        border: 1px red solid;
        outline: 1px red solid;
    }
    h4 {
        margin-top: 0;
    }
</style>



