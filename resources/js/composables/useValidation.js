// composables/useValidation.js - Vue composable for form validation

import { useForm, useField } from 'vee-validate'
import { validationRules, commonValidations, createValidator } from '@/utils/validationRules'

/**
 * Vue composable for form validation with VeeValidate integration
 */
export const useValidation = () => {

    /**
     * Create a form with validation schema
     * @param {Object} schema - Validation schema for the form
     * @param {Object} options - Additional options for useForm
     */
    const createForm = (schema = {}, options = {}) => {
        const form = useForm({
            validationSchema: schema,
            ...options
        })

        return form
    }

    /**
     * Create a validated field
     * @param {string} name - Field name
     * @param {Function|Array|string} validation - Validation rule(s)
     * @param {Object} options - Additional field options
     */
    const createField = (name, validation, options = {}) => {
        let validator

        // Handle string references to common validations
        if (typeof validation === 'string' && commonValidations[validation]) {
            validator = commonValidations[validation]
        }
        // Handle array of validation rules
        else if (Array.isArray(validation)) {
            validator = createValidator(validation)
        }
        // Handle function validator
        else if (typeof validation === 'function') {
            validator = validation
        }
        // Handle object with validation config
        else if (typeof validation === 'object') {
            validator = createValidator(validation)
        }
        // Default to no validation
        else {
            validator = () => true
        }

        return useField(name, validator, options)
    }

    /**
     * Create multiple fields at once
     * @param {Object} fieldsConfig - Configuration for multiple fields
     */
    const createFields = (fieldsConfig) => {
        const fields = {}

        Object.entries(fieldsConfig).forEach(([name, config]) => {
            if (typeof config === 'object' && !Array.isArray(config) && !config.validation) {
                // Handle field with options
                fields[name] = createField(name, config.validation || (() => true), config.options || {})
            } else {
                // Handle simple validation rule
                fields[name] = createField(name, config)
            }
        })

        return fields
    }

    /**
     * Create custom validation rule
     * @param {Function} validatorFn - Custom validation function
     * @param {string} errorMessage - Default error message
     */
    const createCustomRule = (validatorFn, errorMessage = 'Invalid input') => {
        return (value) => {
            const isValid = validatorFn(value)
            return isValid === true ? true : (isValid || errorMessage)
        }
    }

    /**
     * Combine multiple validation rules
     * @param {...Function} rules - Validation rules to combine
     */
    const combineRules = (...rules) => {
        return (value) => {
            for (const rule of rules) {
                const result = rule(value)
                if (result !== true) {
                    return result
                }
            }
            return true
        }
    }

    return {
        // Form and field creators
        createForm,
        createField,
        createFields,

        // Validation utilities
        createCustomRule,
        combineRules,

        // Direct access to validation rules
        rules: validationRules,
        common: commonValidations,

        // Validator creator
        createValidator
    }
}

/**
 * Predefined form configurations for common use cases
 */
export const formConfigs = {
    // User registration form
    registration: {
        firstName: 'firstName',
        lastName: 'lastName',
        email: 'email',
        password: 'strongPassword',
        confirmPassword: {
            validation: (value, { password }) => {
                return validationRules.passwordConfirm(value, password)
            },
            options: { dependsOn: 'password' }
        },
        phone: 'phone',
        agreeToTerms: validationRules.required
    },

    // Login form
    login: {
        email: 'email',
        password: 'password'
    },

    // Contact form
    contact: {
        name: combineRules(
            validationRules.required,
            validationRules.minLength(2),
            validationRules.maxLength(100)
        ),
        email: 'email',
        subject: combineRules(
            validationRules.required,
            validationRules.minLength(5),
            validationRules.maxLength(200)
        ),
        message: combineRules(
            validationRules.required,
            validationRules.minLength(10),
            validationRules.maxLength(1000)
        )
    },

    // Profile form
    profile: {
        firstName: 'firstName',
        lastName: 'lastName',
        email: 'email',
        phone: validationRules.phone, // Optional phone
        birthDate: 'birthDate',
        bio: validationRules.maxLength(500)
    },

    // Payment form
    payment: {
        cardNumber: combineRules(
            validationRules.required,
            validationRules.creditCard
        ),
        expiryDate: 'expiryDate',
        cvv: combineRules(
            validationRules.required,
            validationRules.regex(/^\d{3,4}$/, 'CVV must be 3 or 4 digits')
        ),
        cardholderName: combineRules(
            validationRules.required,
            validationRules.alphabetic,
            validationRules.minLength(2)
        )
    },

    // Address form
    address: {
        street: combineRules(
            validationRules.required,
            validationRules.minLength(5),
            validationRules.maxLength(200)
        ),
        city: 'city',
        state: validationRules.required,
        zipCode: 'zipCode',
        country: validationRules.required
    }
}

// Helper function to combine validation rules (standalone)
export const combineRules = (...rules) => {
    return (value, context) => {
        for (const rule of rules) {
            const result = typeof rule === 'function' ? rule(value, context) : rule
            if (result !== true) {
                return result
            }
        }
        return true
    }
}
