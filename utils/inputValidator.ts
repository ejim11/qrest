export const registrationOption = {
  firstName: {
    required: "First name is required",
    minLength: {
      value: 3,
      message: "Name must have at least 3 characters",
    },
    maxLength: {
      value: 90,
      message: "Name cannot be greater than 90 characters",
    },
    pattern: {
      value: /^(?!\s*$).+/,
      message: "First name is required",
    },
  },
  lastName: {
    required: "Last name is required",
    minLength: {
      value: 3,
      message: "Name must have at least 3 characters",
    },
    maxLength: {
      value: 90,
      message: "Name cannot be greater than 90 characters",
    },
    pattern: {
      value: /^(?!\s*$).+/,
      message: "Last name is required",
    },
  },
  email: {
    required: "Email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Valid email address is required",
    },
    message: {
      required: "Message is required",
      maxLength: {
        value: 150,
        message: "Message cannot be greater than 150 characters",
      },
    },
  },
  company: {
    // required: "Company name is required",
    // minLength: {
    //   value: 3,
    //   message: "Name must have at least 3 characters",
    // },
    // maxLength: {
    //   value: 200,
    //   message: "Name cannot be greater than 200 characters",
    // },
    // pattern: {
    //   value: /^(?!\s*$).+/,
    //   message: "Company name is required",
    // },
  },
};
