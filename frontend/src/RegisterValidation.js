function Validation(values) {
    const errors = {};

    // Validate Fullname
    if (!values.name) {
        errors.name = "Fullname is required";
    } else if (!/^[a-zA-Z\s]+$/.test(values.name)) {
        errors.name = "Fullname can only contain letters and spaces";
    } else if (values.name.length < 3) {
        errors.name = "Fullname must be at least 3 characters long";
    }
  
    // Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(values.email)) {
      errors.email = 'Please enter a valid email address';
    }
  
    // Password Validation
    const password = values.password;
    const passwordErrors = [];
  
    if (password.length < 8) {
      passwordErrors.push('at least 8 characters');
    }
    if (!/[A-Z]/.test(password)) {
      passwordErrors.push('an uppercase letter');
    }
    if (!/[a-z]/.test(password)) {
      passwordErrors.push('a lowercase letter');
    }
    if (!/[0-9]/.test(password)) {
      passwordErrors.push('a number');
    }
    if (!/[\W_]/.test(password)) {
      passwordErrors.push('a special character (e.g., !@#$%)');
    }
  
    if (passwordErrors.length > 0) {
      errors.password = `Password must contain ${passwordErrors.join(', ')}`;
    }
  
    return errors;
}

export default Validation;
  