// Wait until the DOM is fully loaded
window.addEventListener('DOMContentLoaded', () => {

  // Create a new section for employee list
  const container = document.createElement('section');
  container.id = 'employee-list';

  // Loop through each department in the employees object
  for (const department in employees) {
    // Create department heading
    const deptHeading = document.createElement('h4');
    deptHeading.textContent = department;
    container.appendChild(deptHeading);

    // Create a list for employee names
    const ul = document.createElement('ul');
    employees[department].forEach(name => {
      const li = document.createElement('li');
      li.textContent = name;
      ul.appendChild(li);
    });

    // Append the list to the section
    container.appendChild(ul);
  }

  // Append the section to the main element
  const main = document.querySelector('main');
  main.appendChild(container);

  // Dynamically insert current year in footer
  const year = new Date().getFullYear();
  const footer = document.getElementById('copyright');
  footer.textContent = `Copyright Pixell River Financial ${year}.`;
});
