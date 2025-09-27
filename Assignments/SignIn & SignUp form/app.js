// Select boxes
const mainBox = document.getElementById("mainBox");
const signinBox = document.getElementById("signinBox");
const signupBox = document.getElementById("signupBox");

// Buttons
const showSignin = document.getElementById("showSignin");
const showSignup = document.getElementById("showSignup");
const back1 = document.getElementById("back1");
const back2 = document.getElementById("back2");

// Forms
const signinForm = document.getElementById("signinForm");
const signupForm = document.getElementById("signupForm");

// Messages
const signinMessage = document.getElementById("signinMessage");
const signupMessage = document.getElementById("signupMessage");

// Show Sign In
showSignin.addEventListener("click", () => {
  mainBox.classList.add("hidden");
  signinBox.classList.remove("hidden");
});

// Show Sign Up
showSignup.addEventListener("click", () => {
  mainBox.classList.add("hidden");
  signupBox.classList.remove("hidden");
});

// Back Buttons
back1.addEventListener("click", () => {
  signinBox.classList.add("hidden");
  mainBox.classList.remove("hidden");
});

back2.addEventListener("click", () => {
  signupBox.classList.add("hidden");
  mainBox.classList.remove("hidden");
});

// Sign In Validation
signinForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("signinEmail").value.trim();
  const password = document.getElementById("signinPassword").value.trim();

  if (!email || !password) {
    signinMessage.textContent = "❌ Please fill all fields";
    signinMessage.className = "text-red-500 text-center mt-3 text-sm font-semibold";
    return;
  }

  signinMessage.textContent = `✅ Signed in as: ${email}`;
  signinMessage.className = "text-green-500 text-center mt-3 text-sm font-semibold";

  console.log("Sign In Data:", { email, password });
});

// Sign Up Validation
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value.trim();

  if (!name || !email || !password) {
    signupMessage.textContent = "❌ All fields are required";
    signupMessage.className = "text-red-500 text-center mt-3 text-sm font-semibold";
    return;
  }
  if (password.length < 6) {
    signupMessage.textContent = "❌ Password must be at least 6 characters";
    signupMessage.className = "text-red-500 text-center mt-3 text-sm font-semibold";
    return;
  }

  signupMessage.textContent = `✅ Account created for: ${name} (${email})`;
  signupMessage.className = "text-green-500 text-center mt-3 text-sm font-semibold";

  console.log("Sign Up Data:", { name, email, password });
});

// Real-time input logging
document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("input", () => {
    console.log(`${input.id}:`, input.value);
  });
});
