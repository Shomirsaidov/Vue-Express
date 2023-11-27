<template>
    <div class="cont navbar" :style="{position: 'fixed'}">
        <div :style="{flexWrap: 'wrap'}">
            <div v-bind:style="{display: 'flex', alignItems: 'center'}">
                <h1>{{ name }} &nbsp;</h1>
                <span class="chips" v-if="profileNavBar">{{ email }}</span>
            </div>
                <router-link 
                        :to="{name: 'redact'}" 
                        :style="{
                            textDecoration: 'none', 
                            color: 'black'
                        }">
                        <div id="redact" v-if="profileNavBar">
                            <img src="../assets/pencil.jpg" width="30" alt="">
                            <span>Редактривать</span>
                        </div>
                </router-link>
        </div>
        <div :style="{justifyContent: 'space-between'}">
                <div v-if="profileNavBar" :style="{display: 'flex',alignItems: 'center'}">
                    <img :src="require(`../assets/uploads/${avatar}`)" :style="{borderRadius: '50%', marginRight: '11px'}" width="60" height="45">
                    <h1 :style="{fontSize: '20px', color: '#03A9F4', marginTop: '5px'}">{{ job }} </h1>
                </div>
                <div class="navigation">
                    <h2>
                        <router-link 
                            :to="{name: 'admin'}"
                            :style="{textDecoration: 'none',color: 'inherit',fontWeight: theTab == 'admin' ? 'bold' : 'normal'}">
                            Профиль
                        </router-link>
                    </h2>

                    <h2>
                        <router-link 
                            :to="{name: 'feed'}"
                            :style="{textDecoration: 'none',color: 'inherit', fontWeight: theTab == 'feed' ? 'bold' : 'normal'}">
                            Лента
                        </router-link>
                    </h2>

                    <h2>
                        <span
                            @click="toLogin"
                            :style="{textDecoration: 'none',color: 'inherit'}">
                            Войти
                        </span>
                    </h2>

                    <h2>
                        <router-link 
                            :to="{name: 'about'}"
                            :style="{textDecoration: 'none',color: 'inherit', fontWeight: theTab == 'about' ? 'bold' : 'normal'}">
                            О нас
                        </router-link>
                    </h2>
                </div>
        </div>
         <img 
            v-if="profileNavBar"
           @click="addModeHandler" 
        src="../assets/additem.svg" alt="" width="70" id="addButton">
    </div>    
</template>
<script>
    export default {
        props: ['name', 'job', 'email','avatar','profileNavBar', 'theTab'],
        data: () => ({
            addMode: 0,
        }),
        methods: {
            addModeHandler() {
                this.addMode ? this.addMode = 0 : this.addMode = 1;
                this.$emit('addHandler', {
                    addMode: this.addMode
                })
            },
            toLogin() {
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
