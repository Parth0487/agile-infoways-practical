<template>

    <div class="card card0">
        <div class="row d-flex justify-content-center">

            <div class="col-lg-6">
                <div class="card2 card border-0 px-4 py-5">
                    <div class="row px-3">
                        <label class="mb-1"> <h6 class="mb-0 text-sm">Name</h6> </label>
                        <input type="text" name="name" placeholder="Enter your Name" v-model="name">
                        <span v-if="vuelidate.name.$error" class="text-danger text-sm"> {{vuelidate.name.$errors[0].$message}} </span>
                    </div>

                    <div class="row px-3 mt-3">
                        <label class="mb-1"> <h6 class="mb-0 text-sm">Email</h6> </label>
                        <input type="email" name="email" placeholder="Enter your Email" v-model="email">
                        <span v-if="vuelidate.email.$error" class="text-danger text-sm"> {{vuelidate.email.$errors[0].$message}} </span>
                    </div>

                    <div class="row px-3 mt-3">
                        <label class="mb-1"> <h6 class="mb-0 text-sm" >Address</h6> </label>
                        <textarea class="" name="address" cols="40" rows="8" v-model="address" placeholder="Enter your Address"></textarea>
                        <span v-if="vuelidate.address.$error" class="text-danger text-sm"> {{vuelidate.address.$errors[0].$message}} </span>
                    </div>

                    <div class="row px-3  mt-3">
                        <label class="mb-1"> <h6 class="mb-0 text-sm">Contact No.</h6> </label>
                        <input type="text" name="contact" placeholder="Enter your Contact no." v-model="contact">
                        <span v-if="vuelidate.contact.$error" class="text-danger text-sm"> {{vuelidate.contact.$errors[0].$message}} </span>
                    </div>

                    <div class="row px-3 justify-content-end"> <button type="submit" class="btn btn-success text-center" @click="onSubmit()"> Submit </button> </div>

                </div>
            </div>
        </div>

    </div>

</template>

<script>

import useVuelidate from '@vuelidate/core'
import { required, email, numeric } from '@vuelidate/validators'
import { apiCall } from '@/utils/common.js'

export default {
  name: "Application",

	data() {
		return {

            vuelidate: useVuelidate(),

			name: "",
			email: "",
			address: "",
			contact: "",
		}
	},

    validations() {
        return {
            name: { required, name },
            email: { required, email },
            address: { required },
            contact: { required, numeric },
        }
    },

    methods: {
        async onSubmit() {
            await this.vuelidate.$validate();

            if (this.vuelidate.$error) {
                return;
            } else {
                let requestBody = {
                    name: this.name,
                    email: this.email,
                    contact: this.contact,
                    address: this.address
                }
                let response = await apiCall("POST", "application", requestBody, {}, {})
                alert("Form has been submited.")
            }
        }
    }
};
</script>



<style scoped>

.card0 {
    /* box-shadow: 0px 2px 8px 0px #e7e7e7; */
    border: 1px solid rgb(204, 204, 204) !important;
    border-radius: 5px
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
