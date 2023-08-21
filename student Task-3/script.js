const enrollmentForm = document.querySelector('.enrollment-form');
const enrolledStudentsTable = document.querySelector('#Enrolled-students tbody');

enrollmentForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const website = document.querySelector('#website').value;
  const imglink = document.querySelector('#imglink').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const skills = Array.from(document.querySelectorAll('input[name="skills"]:checked')).map(skill => skill.id).join(', ');

  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>
      <strong>Name:</strong> ${name}<br>
      <strong>Email:</strong> ${email}<br>
      <strong>Website:</strong> ${website}<br>
      <strong>Gender:</strong> ${gender}<br>
      <strong>Skills:</strong> ${skills}
    </td>
    <td><img src="${imglink}" alt="Student Photo" width="100"></td>
  `;

  enrolledStudentsTable.appendChild(newRow);
  enrollmentForm.reset();
});
