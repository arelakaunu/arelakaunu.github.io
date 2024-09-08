---
permalink: /newsletter/
title: "Newsletter"
---
<form id="newsletter-form">
  <fieldset>
    <legend>Newsletter Signup:</legend>
    Name: <input type="text" name="name" size="30" required><br>
    Email: <input type="email" name="email" size="30" required><br>
    Occupation: 
    <select name="occupation" id="occupation" required>
      <option value="student">Student (Undergrad or Postgrad)</option>
      <option value="professional">Professional</option>
      <option value="lecturer">Lecturer</option>
      <option value="other">Other</option>
    </select><br>
    <div id="other-occupation-field" style="display:none;">
      Please specify: <input type="text" name="other_occupation" id="other_occupation">
    </div><br>
    <button type="submit">Sign Up</button>
  </fieldset>
</form>

<script src="/assets/js/form-handler.js"></script>
