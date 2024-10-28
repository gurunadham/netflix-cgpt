export const checkValidData = (email, password) => {
     // const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
     const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
     const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
     // const isMobileValid = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(mobile);
     
     // if (!isNameValid) return "Name is not valid";
     if (!isEmailValid) return "Email ID is not valid";
     if (!isPasswordValid) return "Password is not valid";
     // if (!isMobileValid) return "Mobile number is not Valid";
   
     return null;
}