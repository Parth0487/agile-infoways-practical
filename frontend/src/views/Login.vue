<template>

    <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">

    <div class="card card0 border-0">

           
            <div class="col-lg-5">
                <div class="card2 card border-0 px-4 py-5">
                    <h4>Login</h4>
                    <div class="row px-3">
                        <label class="mb-1"> <h6 class="mb-0 text-sm">Email Address</h6> </label>
                        <input class="" type="email" name="email" placeholder="Enter your email address" v-model="email">
                        <span v-if="vuelidate.email.$error" class="text-danger text-sm"> {{vuelidate.email.$errors[0].$message}} </span>
                    </div>

                    <div class="row px-3 mt-3">
                        <label class="mb-1"> <h6 class="mb-0 text-sm">Password</h6> </label>
                        <input type="password" name="password" placeholder="Enter your password" v-model="password" @keypress="onKeyPress($event)">
                        <span v-if="vuelidate.password.$error" class="text-danger text-sm"> {{ vuelidate.password.$errors[0].$message }} </span>
                    </div>

                    <div class="row mb-3 px-3"> <button type="submit" class="btn btn-success text-center" @click="login()"> Login </button> </div>

                    <router-link to="/application">Go to application form</router-link>

                </div>
        </div>

    </div>
</div>
</template>


<script>

import useValidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import { apiCall } from '@/utils/common.js'

export default {
    name: "Login",

    data() {
        return {
            vuelidate: useValidate(),
            email: "",
            password: "",
        }
    },

    validations() {
      return {
        email: { required, email },
        password: { required, minLength: minLength(6) }
      }
    },



    methods: {

        onKeyPress(e) {
            if (e.keyCode === 13) {
                this.login();
            }
        },

        async login() {

            await this.vuelidate.$validate();

            if (this.vuelidate.$error) {

                return;

            } else {

                let requestBody = {
                    email: this.email,
                    password: this.password
                }

                try {
                    let user = await apiCall("POST", "login", requestBody, {}, {})
                    if (user && user._id) {

                        localStorage.setItem('auth', user.token)
                        this.$store.commit('userLogin', true)

                        this.$store.commit('setUserData', user)
                        // this.$router.push({
                        //     name: 'list'
                        // })
                    }
                } catch(err) {
                    alert("incorrect creds")
                }

            }


        }
    }
}
</script>


<style scoped>
/* body {
    color: #000;
    overflow-x: hidden;
    height: 100%;
    background-color: #B0BEC5;
    background-repeat: no-repeat
} */

.card0 {
    box-shadow: 0px 2px 8px 0px #757575;
    border-radius: 0px
}

.card2 {
    margin: 0px 40px
}



.image {
    width: -webkit-fill-available;
}

.border-line {
    border-right: 1px solid #EEEEEE
}


.or {
    width: 10%;
    font-weight: bold
}

.text-sm {
    font-size: 14px !important
}

::placeholder {
    color: #BDBDBD;
    opacity: 1;
    font-weight: 300
}

:-ms-input-placeholder {
    color: #BDBDBD;
    font-weight: 300
}

::-ms-input-placeholder {
    color: #BDBDBD;
    font-weight: 300
}

input,
textarea {
    padding: 10px 12px 10px 12px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    margin-bottom: 5px;
    margin-top: 2px;
    width: 100%;
    box-sizing: border-box;
    color: #2C3E50;
    font-size: 14px;
    letter-spacing: 1px
}

input:focus,
textarea:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border: 1px solid #349727;
    outline-width: 0
}

button:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    outline-width: 0
}

a {
    color: inherit;
    cursor: pointer
}

@media screen and (max-width: 991px) {
    .logo {
        margin-left: 0px
    }

    .image {
        width: 300px;
        height: 220px
    }

    .border-line {
        border-right: none
    }

    .card2 {
        border-top: 1px solid #EEEEEE !important;
        margin: 0px 15px
    }
}
</style>