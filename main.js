document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Here you can handle the signup logic, such as sending data to a server
  console.log('User Signed Up:', { name, email, password });

  // Redirect to sign-in page after signup
  alert('Sign Up Successful! Redirecting to Sign In.');
  window.location.href = 'signin.html';
});

document.getElementById('signinForm')?.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('signinEmail').value;
  const password = document.getElementById('signinPassword').value;

  // Here you can handle the sign-in logic
  console.log('User Signed In:', { email, password });

  alert('Sign In Successful! Welcome back.');
});
