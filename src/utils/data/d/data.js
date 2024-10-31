const users = [
  {
    id: 1,
    email: "test@example.com",
    password: "password123", // In real app, never store plain text passwords
    createdAt: "2024-03-19",
  },
];

// Get all users
export const getAllUsers = () => users;

// Add new user
export const addUser = (userData) => {
  const newUser = {
    id: users.length + 1,
    ...userData,
    createdAt: new Date().toISOString().split("T")[0],
  };
  users.push(newUser);
  return newUser;
};

// Find user by email
export const findUserByEmail = (email) => {
  return users.find((user) => user.email === email);
};

// Validate user login
export const validateUser = (email, password) => {
  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
  return null;
};
