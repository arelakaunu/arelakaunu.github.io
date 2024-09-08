function handleSubmit(event) {
  event.preventDefault(); // Prevent form from refreshing the page

  // Collect form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const dob = document.getElementById('dob').value;

  // Display the collected data (for demo purposes)
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Date of Birth:', dob);

  // You can send the data to your server or process it further here
}
