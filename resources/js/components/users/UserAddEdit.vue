<template>
    <div>
        <!-- Modal -->
        <div v-if="isModalOpen" class="modal fade show" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="display:block;">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <div class="modal-header" style="display: initial">
                        <div class="row">
                            <div class="col-md-6">
                                <h4 class="modal-title">{{title}}</h4>
                            </div>
                            <div class="col-md-6 text-end">
                                <button type="button" class="close" @click="closeModal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </div>


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
                                            :readOnly = "actionType == 'edit'"
                                            v-model="formData.userid"
                                            type="text"
                                            class="form-control"
                                            :class="{ 'is-invalid': errors.userid }"
                                            rules="required|min:3"
                                            @input="handleUserIdInput"
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
                                            :readOnly = "actionType == 'edit'"
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
                                            <option v-for="designation in designationList" :key="designation.id" :value="designation.DesignationID">
                                                {{ designation.DesignationName }}
                                            </option>
                                        </Field>
                                        <ErrorMessage name="designation" class="text-danger" />
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <!-- Designation -->
                                    <div class="form-group">
                                        <label for="Business">Business <span class="text-danger">*</span></label>
                                        <Field
                                            name="business"
                                            v-model="formData.business"
                                            as="select"
                                            class="form-control"
                                            :class="{ 'is-invalid': errors.business }"
                                            rules="required"
                                        >
                                            <option value="">Select Business</option>
                                            <option v-for="data in businessList" :key="data.BranchCode" :value="data.BranchCode">
                                                {{ data.BranchName }}
                                            </option>
                                        </Field>
                                        <ErrorMessage name="Business" class="text-danger" />
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

                                <div class="col-md-2">
                                    <!-- Staff ID -->
                                    <div class="form-group">
                                        <label for="levelCode">Level Code </label>
                                        <Field
                                            name="levelCode"
                                            v-model="formData.levelCode"
                                            type="text"
                                            class="form-control"
                                            :class="{ 'is-invalid': errors.levelCode }"

                                        />
                                        <ErrorMessage name="levelCode" class="text-danger" />
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <!-- User Level -->
                                    <div class="form-group">
                                        <label for="userType">User Type </label>
                                        <Field
                                            name="userType"
                                            v-model="formData.userType"
                                            as="select"
                                            class="form-control"
                                        >
                                            <option value="1">Admin</option>
                                            <option value="2">Field Force</option>
                                            <option value="3">Report User</option>
                                        </Field>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="row">
                                    <div class="col-md-3 "  v-for="(menuGroup, index) in menuList" :key="index">
                                        <!-- User Menu (Multi-select) -->
                                        <div class="form-group">
                                            <label class="form-label">{{ menuGroup.label }}</label>
                                            <Field :name="`usermenu_${menuGroup.label}`" v-slot="{ field, errorMessage }">
                                                <Multiselect
                                                    :key="key"
                                                    v-model="formData.usermenu[menuGroup.label]"
                                                    :options="menuGroup.options"
                                                    mode="tags"
                                                    :close-on-select="false"
                                                    :searchable="true"
                                                    placeholder="Select Menu"
                                                    label="label"
                                                    valueProp="value"
                                                    trackBy="value"
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
                                            <Field
                                                :rules="territoryRequired"
                                                name="territory"
                                                v-model="formData.territory"
                                                v-slot="{ field, errorMessage, value, handleChange }"
                                            >
                                                <Multiselect
                                                    :modelValue="value"
                                                    @update:modelValue="handleChange"
                                                    :options="territoryList"
                                                    mode="tags"
                                                    :close-on-select="false"
                                                    :searchable="true"
                                                    placeholder="Select Territory"
                                                    label="TTYName"
                                                    valueProp="TTYCode"
                                                    trackBy="TTYCode"
                                                    :class="{ 'is-invalid-multiselect': errorMessage }"
                                                />
                                                <span v-if="errorMessage" class="text-danger">{{ errorMessage }}</span>
                                            </Field>
                                        </div>
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
import { reactive,ref, onMounted, inject, onBeforeUnmount,nextTick } from 'vue';
import { Form, Field, ErrorMessage, defineRule } from 'vee-validate';
import Multiselect from '@vueform/multiselect';
import '@vueform/multiselect/themes/default.css';
// Inject common methods (make sure you've provided them in main.js)
const { axiosGet, axiosPost, errorNoti, successNoti } = inject('common');


const emitter = inject('emitter');

onMounted(() => {
    emitter.on('add-edit-user', async (item) => {
        isModalOpen.value = true;


        // Fetch supporting data first
        await fetchSupportingData();

        if (item.UserId) {
            title.value = 'Edit User';
            actionType.value = 'edit';

            // Use async/await or handle the callback properly
            axiosGet('users/get-existing-user-data/' + item.UserId, async (response) => {

                //User Data
                formData.userid = response.user.UserId;
                formData.staffid = response.user.StaffID;
                formData.username = response.user.UserName;
                formData.designation = response.user.Designation;
                formData.business = response.user.Branch;
                formData.userLevel = response.user.UserLevel;
                formData.active = response.user.Active;
                formData.levelCode = response.user.LevelCode;
                formData.userType = response.user.UserType;
                formData.password = response.user.DecodedPassword || '';  // Default to empty string if undefined
                formData.confirmpassword = response.user.DecodedPassword || '';


                //Menu Assign
                // Step 1: Format menu list
                menuList.value = formatMenuData(response.menu);
                // Step 2: Initialize empty structure
                formData.usermenu = {};
                menuList.value.forEach(group => {
                    formData.usermenu[group.label] = [];
                });
                // Step 3: Wait for DOM
                await nextTick();
                // Step 4: Set selected values
                const selected = initializeSelectedMenus(response.menu);
                Object.assign(formData.usermenu, selected);
                // Step 5: Force re-render
                await nextTick();
                key.value++;


                //Territory
                if (response.territory && Array.isArray(response.territory)) {
                    // This is assuming `response.territory` contains TTYCode values
                    formData.territory = response.territory
                        .map(item => item.TTYCode) // Just extract TTYCode values
                        .filter(code => code !== undefined);
                }

            }, (error) => {
                errorNoti(error);
            });
        } else {
            title.value = 'Add User';
            actionType.value = 'add';

        }
    });
});
const loading = ref(false);
const isModalOpen = ref(false);
const formData = reactive({
    userid: '',
    staffid: '',
    password: '',
    confirmpassword: '',
    username: '',
    business: '',
    designation: '',
    userLevel: 'Level1',
    active: 'Y',
    usermenu: {},
    territory: [],
    levelCode: '',
    userType: ''
});
const designationList = ref([]);
const menuList = ref([]);
const territoryList = ref([]);
const businessList = ref([]);
const title = ref('');
const key = ref(0);
const actionType = ref('');
const userIdError = ref('');
const userIdValid = ref(false);
const checkingUserId = ref(false);
let checkTimeout = null;


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


// Custom validation rule for password confirmation
const confirmPasswordRule = (value) => {
    if (value !== formData.password) {
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
    formData.userid = '';
    formData.staffid = '';
    formData.password = '';
    formData.confirmpassword = '';
    formData.username = '';
    formData.business = '';
    formData.designation = '';
    formData.userLevel = 'Level1';
    formData.active = 'Y';
    formData.usermenu = {};
    formData.territory = [];
    formData.levelCode = '';
    formData.userType = '';
};

// Check if user ID exists

const checkUserIdExists = () => {
    // Skip check if in edit mode
    if (actionType.value === 'edit') return;

    // Skip if userid is empty or too short
    if (!formData.userid || formData.userid.length < 3) {
        userIdError.value = '';
        userIdValid.value = false;
        return;
    }

    // Prevent duplicate calls if already checking
    if (checkingUserId.value) return;

    checkingUserId.value = true;
    userIdError.value = '';
    userIdValid.value = false;

    axiosGet(
        `users/check-userid/${formData.userid}`,
        (response) => {
            // Success callback
            console.log(response, 'exist');

            console.log('Success response:', response);

            // Check if the response structure has the data we need
            if (response && typeof response.exists !== 'undefined') {
                if (response.exists === true) {
                    userIdError.value = 'This User ID already exists';
                    userIdValid.value = false;
                    errorNoti('User ID already exists');
                    formData.userid = '';
                } else {
                    userIdError.value = '';
                    userIdValid.value = true;
                }
            } else {
                userIdError.value = '';
                userIdValid.value = true;
            }
            checkingUserId.value = false;
        },
        (error) => {
            console.log('dfdfff')
            // Error callback - handle custom error message here
            console.error('Error checking user ID:', error);

            // Check if error has a custom message from backend
            if (error && error.message) {
                userIdError.value = error.message;
                errorNoti(error.message);
            } else if (error && error.error) {
                userIdError.value = error.error;
                errorNoti('Error checking user ID');
                // errorNoti(error.error);
            } else {
                userIdError.value = 'Error checking user ID';
                errorNoti('Error checking user ID');
            }

            checkingUserId.value = false;
        }
    );
};
// Handle input with debounce
const handleUserIdInput = () => {
    userIdValid.value = false;
    userIdError.value = '';

    // Clear previous timeout
    if (checkTimeout) {
        clearTimeout(checkTimeout);
    }

    // Skip if in edit mode
    if (actionType.value === 'edit') return;

    // Set new timeout for debounced check
    checkTimeout = setTimeout(() => {
        if (formData.userid && formData.userid.length >= 3) {
            checkUserIdExists();
        }
    }, 500); // Wait 500ms after user stops typing
};

const fetchSupportingData = async () => {
    try {
        axiosGet('users/supporting-data', (response) => {
            designationList.value = response.designation.map(item => ({
                DesignationID: item.DesignationID,
                DesignationName: item.DesignationName
            }));
            businessList.value = response.businessBranch
            menuList.value = formatMenuData(response.menu);
            // Initialize selected menus
           // formData.usermenu = initializeSelectedMenus(response.menu);
            territoryList.value = response.territory;

        }, (error) => {
            errorNoti(error);
        });

    } catch (error) {
        console.error('Error fetching supporting data:', error);
    }
};
// Format the fetched menu data to the structure needed for Vue Multiselect
const formatMenuData = (menus) => {
    const formattedMenus = [];

    // Group menus by ParentMenuName
    for (let [parentMenu, subMenus] of Object.entries(menus)) {
        formattedMenus.push({
            label: parentMenu,  // Parent menu name
            options: subMenus   // Array of submenu items
        });
    }
    return formattedMenus;
};

// Initialize selected menus grouped by parent
const initializeSelectedMenus = (menus) => {
    const selectedMenus = {};

    for (let [parentMenu, subMenus] of Object.entries(menus)) {
        selectedMenus[parentMenu] = subMenus
            .filter(menu => menu.selected)
            .map(menu => menu.value);
    }

    console.log(selectedMenus)

    return selectedMenus;
};

// Function to get all selected menu IDs as flat array (for submission)
const territoryRequired = (value) => {
    if (!value || value.length === 0) {
        return 'At least one territory is required';
    }
    return true;
};
const submitForm = (values) => {
    console.log('Form data:', formData);
    console.log('Validated values:', values);
    try {
        var submitUrl = 'users/add';
        if (actionType.value == 'edit') {
            submitUrl = 'users/update';
        }
        axiosPost(submitUrl, {
            formData: formData,
        }, (response) => {
            successNoti(response.message);
            emitter.emit('refresh-datatable', null, null);
            closeModal();
        }, (error) => {
            errorNoti(error);
        })
    } catch (error) {
        console.error(error)
    }

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
