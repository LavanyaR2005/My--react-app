export function registerUser(user) {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  const exists = users.find(u => u.email === user.email);

  if (exists) {
    return { success: false, message: "User already exists" };
  }

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  return { success: true, message: "Registered successfully" };
}

export function loginUser(email, password) {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    return { success: false, message: "Invalid credentials" };
  }

  localStorage.setItem("currentUser", JSON.stringify(user));

  return { success: true, message: "Login successful" };
}