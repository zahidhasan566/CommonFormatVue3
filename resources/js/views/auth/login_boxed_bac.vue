<template>
    <div class="login-container">
        <div class="login-box">
            <h1>Group Expense</h1>
            <form class="login-form" @submit.prevent="handleSubmit">
                <!-- Email Input -->
                <div class="input-group">
                    <input
                        type="text"
                        v-model="usernameValue"
                        placeholder="Email"
                        class="form-control"
                        :class="{'error-border': usernameError}"
                    />
                    <span v-if="usernameError" class="error-message">{{ usernameError }}</span>
                </div>

                <!-- Password Input -->
                <div class="input-group">
                    <input
                        :type="pwdType"
                        v-model="passwordValue"
                        placeholder="Password"
                        class="form-control"
                        :class="{'error-border': passwordError}"
                    />
                    <span v-if="passwordError" class="error-message">{{ passwordError }}</span>
                    <svg
                        @click="togglePwdVisibility"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-eye"
                    >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                </div>

                <button :disabled="isSubmitting" type="submit" class="btn login-btn">
                    Log In
                </button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useForm, useField } from 'vee-validate'
import { useRouter } from 'vue-router'

// Validation rules
const validateEmail = (value) => {
    if (!value) return 'Email is required'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value)) return 'Please enter a valid email address'
    return true
}
const validateText = (value) => {
    if (!value) return 'Email is required '
    return true
}

const validatePassword = (value) => {
    if (!value) return 'Password is required'
    if (value.length < 3) return 'Password must be at least 6 characters long'
    return true
}

// Form setup with VeeValidate
const { handleSubmit, isSubmitting } = useForm()

// Field setup with proper validation
const { value: usernameValue, errorMessage: usernameError } = useField('username', validateText)
const { value: passwordValue, errorMessage: passwordError } = useField('password', validatePassword)

const pwdType = ref('password')
const router = useRouter()

// Toggle password visibility
const togglePwdVisibility = () => {
    pwdType.value = pwdType.value === 'password' ? 'text' : 'password'
}

// Submit handler
const onSubmit = (values) => {
    console.log('Form submitted with values:', values)
    // Here you would usually make an API call to validate the credentials
    // For now, just navigate to dashboard
    router.push({ name: 'Dashboard' })
}

// Wrap the submit handler
const handleFormSubmit = handleSubmit(onSubmit)
</script>

<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: url('http://app.acibd.com/la_monitoring/assets/images/geb.png') no-repeat top;
    background-size: cover;
    background-position: center;
}

.login-box {
    background: rgba(255, 255, 255, 0.9);
    padding: 30px;
    border-radius: 10px;
    width: 350px;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
}

h1 {
    font-size: 2.5em;
    color: #3e8e41;
    margin-bottom: 30px;
}

.login-form {
    display: flex;
    flex-direction: column;
}

.input-group {
    margin-bottom: 20px;
    position: relative;
}

.input-group input {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    box-sizing: border-box;
}

.input-group input:focus {
    border-color: #3e8e41;
    box-shadow: 0 0 5px rgba(62, 142, 65, 0.3);
}

.error-border {
    border-color: #e74c3c !important;
}

.error-message {
    color: #e74c3c;
    font-size: 12px;
    text-align: left;
    margin-top: 5px;
    display: block;
}

.login-btn {
    background-color: #3e8e41;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    transition: background-color 0.3s ease;
}

.login-btn:hover:not(:disabled) {
    background-color: #2d6a32;
}

.login-btn:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}

.feather.feather-eye {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    cursor: pointer;
    color: #666;
    width: 20px;
    height: 20px;
}

.feather.feather-eye:hover {
    color: #3e8e41;
}
</style>
