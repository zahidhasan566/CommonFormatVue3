<template>
    <div>
        <!-- Modal -->
        <div v-if="isModalOpen" class="modal fade show" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="display:block;">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">{{title}}</h4>
                        <button type="button" class="close" @click="closeModal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <Form @submit="submitForm" v-slot="{ errors }">

                            <div class="row">
                                <!-- User ID -->
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label for="userid">User ID <span class="text-danger">*</span></label>
                                        <Field
                                            name="userid"
                                            v-model="formData.userid"
                                            type="text"
                                            class="form-control"
                                            :class="{ 'is-invalid': errors.userid }"
                                            rules="required|min:3"
                                        />
                                        <ErrorMessage name="userid" class="text-danger" />
                                    </div>
                                </div>

                                <div class="col-md-2">
                                    <!-- Staff ID -->
                                    <div class="form-group">
                                        <label for="staffid">Staff ID <span class="text-danger">*</span></label>
                                        <Field
                                            name="staffid"
                                            v-model="formData.staffid"
                                            type="text"
                                            class="form-control"
                                            :class="{ 'is-invalid': errors.staffid }"
                                            rules="required|min:3"
                                        />
                                        <ErrorMessage name="staffid" class="text-danger" />
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <!-- Password -->
                                    <div class="form-group">
                                        <label for="password">Password <span class="text-danger">*</span></label>
                                        <Field
                                            name="password"
                                            v-model="formData.password"
                                            type="password"
                                            class="form-control"
                                            :class="{ 'is-invalid': errors.password }"
                                            rules="required|min:6"
                                        />
                                        <ErrorMessage name="password" class="text-danger" />
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <!-- Confirm Password -->
                                    <div class="form-group">
                                        <label for="confirmpassword">Confirm Password <span class="text-danger">*</span></label>
                                        <Field
                                            name="confirmpassword"
                                            v-model="formData.confirmpassword"
                                            type="password"
                                            class="form-control"
                                            :class="{ 'is-invalid': errors.confirmpassword }"
                                            :rules="confirmPasswordRule"
                                        />
                                        <ErrorMessage name="confirmpassword" class="text-danger" />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-4">
                                    <!-- User Name -->
                                    <div class="form-group">
                                        <label for="username">User Name <span class="text-danger">*</span></label>
                                        <Field
                                            name="username"
                                            v-model="formData.username"
                                            type="text"
                                            class="form-control"
                                            :class="{ 'is-invalid': errors.username }"
                                            rules="required|min:3"
                                        />
                                        <ErrorMessage name="username" class="text-danger" />
                                    </div>
                                </div>

                                <div class="col-md-2">
                                    <!-- Designation -->
                                    <div class="form-group">
                                        <label for="designation">Designation <span class="text-danger">*</span></label>
                                        <Field
                                            name="designation"
                                            v-model="formData.designation"
                                            as="select"
                                            class="form-control"
                                            :class="{ 'is-invalid': errors.designation }"
                                            rules="required"
                                        >
                                            <option value="">Select Designation</option>
                                            <option v-for="designation in designationList" :key="designation.id" :value="designation.id">
                                                {{ designation.name }}
                                            </option>
                                        </Field>
                                        <ErrorMessage name="designation" class="text-danger" />
                                    </div>
                                </div>

                                <div class="col-md-2">
                                    <!-- User Level -->
                                    <div class="form-group">
                                        <label for="userLevel">User Level <span class="text-danger">*</span></label>
                                        <Field
                                            name="userLevel"
                                            v-model="formData.userLevel"
                                            as="select"
                                            class="form-control"
                                            rules="required"
                                        >
                                            <option value="Level0">Level0</option>
                                            <option value="Level1">Level1</option>
                                            <option value="Level2">Level2</option>
                                            <option value="Level3">Level3</option>
                                            <option value="Level4">Level4</option>
                                        </Field>
                                    </div>
                                </div>

                                <div class="col-md-2">
                                    <!-- Active Status -->
                                    <div class="form-group">
                                        <label for="active">Active Status</label>
                                        <Field
                                            name="active"
                                            v-model="formData.active"
                                            as="select"
                                            class="form-control"
                                        >
                                            <option value="Y">Active</option>
                                            <option value="N">Inactive</option>
                                        </Field>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-3">
                                    <!-- User Menu (Multi-select) -->
                                    <div class="form-group">
                                        <label for="usermenu">User Menu <span class="text-danger">*</span></label>
                                        <Field name="usermenu" v-slot="{ field, errorMessage }">
                                            <Multiselect
                                                v-model="formData.usermenu"
                                                :options="menuList"
                                                mode="tags"
                                                :close-on-select="false"
                                                :searchable="true"
                                                placeholder="Select Menu"
                                                :class="{ 'is-invalid-multiselect': errorMessage }"
                                            />
                                            <span v-if="errorMessage" class="text-danger">{{ errorMessage }}</span>
                                        </Field>
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <!-- Territory (Multi-select) -->
                                    <div class="form-group">
                                        <label for="territory">Territory <span class="text-danger">*</span></label>
                                        <Field name="territory" v-slot="{ field, errorMessage }">
                                            <Multiselect
                                                v-model="formData.territory"
                                                :options="territoryList"
                                                mode="tags"
                                                :close-on-select="false"
                                                :searchable="true"
                                                placeholder="Select Territory"
                                                :class="{ 'is-invalid-multiselect': errorMessage }"
                                            />
                                            <span v-if="errorMessage" class="text-danger">{{ errorMessage }}</span>
                                        </Field>
                                    </div>
                                </div>
                            </div>

                            <!-- Submit Button -->
                            <div class="row">
                                <div class="col-md-12 text-end">
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </div>

                        </Form>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal Backdrop -->
        <div v-if="isModalOpen" class="modal-backdrop fade show"></div>
    </div>
</template>

<script setup>
import { ref, inject, onMounted, onBeforeUnmount } from 'vue';
import { Form, Field, ErrorMessage, defineRule } from 'vee-validate';
import Multiselect from '@vueform/multiselect';
import '@vueform/multiselect/themes/default.css';
// Inject common methods (make sure you've provided them in main.js)
const { axiosGet, axiosPost, errorNoti, successNoti } = inject('common');

// Define validation rules with custom messages
defineRule('required', (value) => {
    if (!value || (typeof value === 'string' && !value.trim())) {
        return 'This field is required';
    }
    return true;
});

defineRule('min', (value, [limit]) => {
    if (!value || String(value).length < limit) {
        return `Must be at least ${limit} characters`;
    }
    return true;
});

defineRule('email', (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value && !emailRegex.test(value)) {
        return 'Must be a valid email';
    }
    return true;
});

// Custom rule for array validation (multiselect)
defineRule('requiredArray', (value) => {
    if (!value || !Array.isArray(value) || value.length === 0) {
        return 'This field is required';
    }
    return true;
});

const loading = ref(false);
const isModalOpen = ref(false);
const formData = ref({
    userid: '',
    staffid: '',
    password: '',
    confirmpassword: '',
    username: '',
    designation: '',
    userLevel: 'Level1',
    active: 'Y',
    usermenu: [],
    territory: [],
});
const designationList = ref([]);
const menuList = ref([]);
const territoryList = ref([]);
const title = ref('');

// Custom validation rule for password confirmation
const confirmPasswordRule = (value) => {
    if (value !== formData.value.password) {
        return 'Passwords do not match';
    }
    return true;
};

const openModal = () => {
    isModalOpen.value = true;
};

const closeModal = () => {
    isModalOpen.value = false;
    // Reset form data
    formData.value = {
        userid: '',
        staffid: '',
        password: '',
        confirmpassword: '',
        username: '',
        designation: '',
        userLevel: 'Level1',
        active: 'Y',
        usermenu: [],
        territory: [],
    };
};

const emitter = inject('emitter');

onMounted(() => {
    emitter.on('add-edit-user', () => {
        isModalOpen.value = true;
        title.value = 'Add User';
        fetchSupportingData();
    });
});

const fetchSupportingData = async () => {
    try {
        // Mock data for demonstration
        designationList.value = [
            { id: 1, name: 'Manager' },
            { id: 2, name: 'Developer' },
            { id: 3, name: 'Designer' }
        ];
        menuList.value = ['Dashboard', 'Reports', 'Settings', 'Users'];
        territoryList.value = ['North', 'South', 'East', 'West'];

        axiosGet('users/supporting-data', (response) => {

        }, (error) => {
            errorNoti(error);
        });

        // Uncomment for actual API calls
        // const [designations, menus, territories] = await Promise.all([
        //     fetch('/api/your-endpoint-for-designations').then((res) => res.json()),
        //     fetch('/api/your-endpoint-for-menus').then((res) => res.json()),
        //     fetch('/api/your-endpoint-for-territories').then((res) => res.json()),
        // ]);
        // designationList.value = designations;
        // menuList.value = menus;
        // territoryList.value = territories;
    } catch (error) {
        console.error('Error fetching supporting data:', error);
    }
};

const submitForm = (values) => {
    console.log('Form data:', formData.value);
    console.log('Validated values:', values);
    // Make API call here to submit the form data
    // Example: fetch('/api/submit-user', { method: 'POST', body: JSON.stringify(formData.value) });
    closeModal();
};

onBeforeUnmount(() => {
    emitter.off('add-edit-user');
});
</script>

<style scoped>
.modal.fade.show {
    display: block;
}

.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: 0.5;
}

.modal {
    z-index: 1050;
}

.close {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
}

.form-group {
    margin-bottom: 1rem;
}

label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
}

.is-invalid {
    border-color: #dc3545;
}

.is-invalid-multiselect {
    border: 1px solid #dc3545;
    border-radius: 4px;
}

.text-danger {
    color: #dc3545;
    font-size: 0.875rem;
    /*margin-top: 0.25rem;*/
    /*display: block;*/
}
</style>
