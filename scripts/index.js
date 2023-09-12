const userForm = document.getElementById('user-form');
const usersData = document.getElementById('users-data');

userForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const roles = [];
  document.querySelectorAll('input[type="checkbox"]:checked').forEach((role) => {
    roles.push(role.id);
  });

  const gender = document.querySelector('input[type="radio"]:checked').value;

  const newRow = document.createElement('tr');
  newRow.innerHTML = `
  <td>${username}</td>
  <td>${password}</td>
  <td>${roles.join(',')}</td>
  <td>${gender}</td>
  `;

  usersData.appendChild(newRow);
});
