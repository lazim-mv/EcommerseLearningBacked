const CryptoJS = require("crypto-js");
const User = require("./models/User"); // Adjust the path as per your project structure

const initializeAdmin = async () => {
  try {
    // Define your new JWT_SEC here
    const newJWT_SEC = "SECRET";

    // Encrypt password using CryptoJS
    const encryptedPassword = CryptoJS.AES.encrypt(
      "admin", // Adjust the password as needed
      newJWT_SEC
    ).toString();

    // Create new admin user
    const adminUser = new User({
      username: "lazim4",
      email: "admin4@gmail.com",
      password: encryptedPassword,
      isAdmin: true, // Assuming admin user has isAdmin flag set to true
    });

    // Save admin user to database
    const savedAdmin = await adminUser.save();
    console.log("Admin user created:", savedAdmin);
  } catch (err) {
    console.error("Error creating admin user:", err);
  }
};

module.exports = initializeAdmin; // Export the function
