// validationRules.js - Common validation rules and utilities

/**
 * Common validation rules that can be used across the application
 */
export const validationRules = {
    // Basic validations
    required: (value, fieldName = 'Field') => {
        if (!value || (typeof value === 'string' && !value.trim())) {
            return `${fieldName} is required`
        }
        return true
    },

    // Email validations
    email: (value) => {
        if (!value) return true // Only validate if value exists (use with required for mandatory)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(value) || 'Please enter a valid email address'
    },

    emailRequired: (value) => {
        if (!value) return 'Email is required'
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(value) || 'Please enter a valid email address'
    },

    // Password validations
    password: (value) => {
        if (!value) return 'Password is required'
        if (value.length < 6) return 'Password must be at least 6 characters long'
        return true
    },

    passwordStrong: (value) => {
        if (!value) return 'Password is required'
        if (value.length < 8) return 'Password must be at least 8 characters long'
        if (!/(?=.*[a-z])/.test(value)) return 'Password must contain at least one lowercase letter'
        if (!/(?=.*[A-Z])/.test(value)) return 'Password must contain at least one uppercase letter'
        if (!/(?=.*\d)/.test(value)) return 'Password must contain at least one number'
        if (!/(?=.*[@$!%*?&])/.test(value)) return 'Password must contain at least one special character'
        return true
    },

    passwordConfirm: (confirmValue, originalValue) => {
        if (!confirmValue) return 'Please confirm your password'
        if (confirmValue !== originalValue) return 'Passwords do not match'
        return true
    },

    // Text validations
    minLength: (min) => (value) => {
        if (!value) return true
        return value.length >= min || `Must be at least ${min} characters long`
    },

    maxLength: (max) => (value) => {
        if (!value) return true
        return value.length <= max || `Must be no more than ${max} characters long`
    },

    alphabetic: (value) => {
        if (!value) return true
        const alphabeticRegex = /^[A-Za-z\s]+$/
        return alphabeticRegex.test(value) || 'Only letters and spaces are allowed'
    },

    alphanumeric: (value) => {
        if (!value) return true
        const alphanumericRegex = /^[A-Za-z0-9]+$/
        return alphanumericRegex.test(value) || 'Only letters and numbers are allowed'
    },

    // Numeric validations
    numeric: (value) => {
        if (!value) return true
        const numericRegex = /^\d+$/
        return numericRegex.test(value) || 'Only numbers are allowed'
    },

    decimal: (value) => {
        if (!value) return true
        const decimalRegex = /^\d*\.?\d+$/
        return decimalRegex.test(value) || 'Please enter a valid number'
    },

    min: (minValue) => (value) => {
        if (!value) return true
        const num = parseFloat(value)
        return !isNaN(num) && num >= minValue || `Value must be at least ${minValue}`
    },

    max: (maxValue) => (value) => {
        if (!value) return true
        const num = parseFloat(value)
        return !isNaN(num) && num <= maxValue || `Value must be no more than ${maxValue}`
    },

    between: (min, max) => (value) => {
        if (!value) return true
        const num = parseFloat(value)
        return !isNaN(num) && num >= min && num <= max || `Value must be between ${min} and ${max}`
    },

    // Phone validations
    phone: (value) => {
        if (!value) return true
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
        return phoneRegex.test(value.replace(/[\s\-\(\)]/g, '')) || 'Please enter a valid phone number'
    },

    phoneRequired: (value) => {
        if (!value) return 'Phone number is required'
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
        return phoneRegex.test(value.replace(/[\s\-\(\)]/g, '')) || 'Please enter a valid phone number'
    },

    // Date validations
    date: (value) => {
        if (!value) return true
        const date = new Date(value)
        return !isNaN(date.getTime()) || 'Please enter a valid date'
    },

    dateAfter: (afterDate) => (value) => {
        if (!value) return true
        const inputDate = new Date(value)
        const compareDate = new Date(afterDate)
        return inputDate > compareDate || `Date must be after ${afterDate}`
    },

    dateBefore: (beforeDate) => (value) => {
        if (!value) return true
        const inputDate = new Date(value)
        const compareDate = new Date(beforeDate)
        return inputDate < compareDate || `Date must be before ${beforeDate}`
    },

    age: (minAge) => (value) => {
        if (!value) return true
        const birthDate = new Date(value)
        const today = new Date()
        const age = today.getFullYear() - birthDate.getFullYear()
        const monthDiff = today.getMonth() - birthDate.getMonth()

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--
        }

        return age >= minAge || `You must be at least ${minAge} years old`
    },

    // URL validation
    url: (value) => {
        if (!value) return true
        try {
            new URL(value)
            return true
        } catch {
            return 'Please enter a valid URL'
        }
    },

    // File validations
    fileSize: (maxSizeMB) => (file) => {
        if (!file) return true
        const maxSizeBytes = maxSizeMB * 1024 * 1024
        return file.size <= maxSizeBytes || `File size must be less than ${maxSizeMB}MB`
    },

    fileType: (allowedTypes) => (file) => {
        if (!file) return true
        const fileType = file.type.toLowerCase()
        const isAllowed = allowedTypes.some(type =>
            fileType.includes(type.toLowerCase()) ||
            file.name.toLowerCase().endsWith(`.${type.toLowerCase()}`)
        )
        return isAllowed || `File must be one of: ${allowedTypes.join(', ')}`
    },

    // Credit card validation
    creditCard: (value) => {
        if (!value) return true
        const cleaned = value.replace(/\D/g, '')

        // Luhn algorithm
        let sum = 0
        let isEven = false

        for (let i = cleaned.length - 1; i >= 0; i--) {
            let digit = parseInt(cleaned.charAt(i))

            if (isEven) {
                digit *= 2
                if (digit > 9) {
                    digit -= 9
                }
            }

            sum += digit
            isEven = !isEven
        }

        return sum % 10 === 0 || 'Please enter a valid credit card number'
    },

    // Social security number (US format)
    ssn: (value) => {
        if (!value) return true
        const ssnRegex = /^\d{3}-?\d{2}-?\d{4}$/
        return ssnRegex.test(value) || 'Please enter a valid SSN (xxx-xx-xxxx)'
    },

    // ZIP code validations
    zipCode: (value) => {
        if (!value) return true
        const zipRegex = /^\d{5}(-\d{4})?$/
        return zipRegex.test(value) || 'Please enter a valid ZIP code'
    },

    // Custom regex validation
    regex: (pattern, message = 'Invalid format') => (value) => {
        if (!value) return true
        const regex = new RegExp(pattern)
        return regex.test(value) || message
    },

    // Array validations
    arrayMinLength: (min) => (array) => {
        if (!array) return `Please select at least ${min} item(s)`
        return array.length >= min || `Please select at least ${min} item(s)`
    },

    arrayMaxLength: (max) => (array) => {
        if (!array) return true
        return array.length <= max || `Please select no more than ${max} item(s)`
    }
}

/**
 * Validation rule composer - combines multiple validation rules
 */
export const compose = (...validators) => {
    return (value, ...args) => {
        for (const validator of validators) {
            const result = typeof validator === 'function'
                ? validator(value, ...args)
                : validator

            if (result !== true) {
                return result
            }
        }
        return true
    }
}

/**
 * Common validation patterns for easy use
 */
export const commonValidations = {
    // User registration
    firstName: compose(
        validationRules.required,
        validationRules.alphabetic,
        validationRules.minLength(2),
        validationRules.maxLength(50)
    ),

    lastName: compose(
        validationRules.required,
        validationRules.alphabetic,
        validationRules.minLength(2),
        validationRules.maxLength(50)
    ),

    username: compose(
        validationRules.required,
        validationRules.alphanumeric,
        validationRules.minLength(3),
        validationRules.maxLength(20)
    ),

    email: validationRules.emailRequired,
    password: validationRules.password,
    strongPassword: validationRules.passwordStrong,

    // Contact information
    phone: validationRules.phoneRequired,
    address: compose(
        validationRules.required,
        validationRules.minLength(10),
        validationRules.maxLength(200)
    ),

    city: compose(
        validationRules.required,
        validationRules.alphabetic,
        validationRules.minLength(2),
        validationRules.maxLength(50)
    ),

    zipCode: compose(
        validationRules.required,
        validationRules.zipCode
    ),

    // Business information
    companyName: compose(
        validationRules.required,
        validationRules.minLength(2),
        validationRules.maxLength(100)
    ),

    // Financial
    amount: compose(
        validationRules.required,
        validationRules.decimal,
        validationRules.min(0)
    ),

    currency: validationRules.required,

    // Dates
    birthDate: compose(
        validationRules.required,
        validationRules.date,
        validationRules.age(18)
    ),

    expiryDate: compose(
        validationRules.required,
        validationRules.date,
        validationRules.dateAfter(new Date().toISOString().split('T')[0])
    )
}

/**
 * Dynamic validator creator
 * Creates validation functions based on configuration
 */
export const createValidator = (config) => {
    return (value) => {
        // Handle array of validation rules
        if (Array.isArray(config)) {
            for (const rule of config) {
                const result = typeof rule === 'function' ? rule(value) : rule
                if (result !== true) {
                    return result
                }
            }
            return true
        }

        // Handle single validation rule
        if (typeof config === 'function') {
            return config(value)
        }

        // Handle validation config object
        if (typeof config === 'object' && config.rules) {
            return createValidator(config.rules)(value)
        }

        return true
    }
}

/**
 * Form validation helper
 * Validates entire form object against validation schema
 */
export const validateForm = (formData, validationSchema) => {
    const errors = {}
    let isValid = true

    for (const [field, value] of Object.entries(formData)) {
        if (validationSchema[field]) {
            const validator = createValidator(validationSchema[field])
            const result = validator(value)

            if (result !== true) {
                errors[field] = result
                isValid = false
            }
        }
    }

    return {
        isValid,
        errors
    }
}

/**
 * Real-time validation helper for individual fields
 */
export const validateField = (value, validationRules) => {
    const validator = createValidator(validationRules)
    return validator(value)
}

// Export default for easy importing
export default {
    validationRules,
    commonValidations,
    compose,
    createValidator,
    validateForm,
    validateField
}
