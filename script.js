const signupForm = document.getElementById('signup-form');
const signupMessage = document.getElementById('signup-message');

signupForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Simulate form data submission (replace with actual backend interaction)
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Clear any previous messages
  signupMessage.textContent = '';

  try {
    // Simulate successful signup (replace with actual logic)
    const response = await fetch('https://beasmeraraabwasda.github.io/login', {
      method: 'POST', // Simulate a POST request (replace with actual endpoint)
      body: JSON.stringify({ username, email, password }), // Simulate sending data
    });

    if (response.ok) {
      // Redirect to login page on successful signup (replace with redirect logic)
      window.location.href = 'https://beasmeraraabwasda.github.io/login';
    } else {
      signupMessage.textContent = 'Signup failed. Please try again.';
    }
  } catch (error) {
    console.error(error);
    signupMessage.textContent = 'An error occurred. Please try again.';
  }
});
