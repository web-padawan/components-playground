import '@vaadin/popover';

const sample = document.querySelector('.sample');
const element = sample && sample.firstElementChild;

// Boolean attributes
document.querySelectorAll('.control--attr input').forEach((input) => {
  input.addEventListener('change', (e) => {
    const { name, checked } = e.target;
    if (element) {
      element.toggleAttribute(name, checked);
    }
  });
});

// Enum attributes
document.querySelectorAll('.control--attr select').forEach((input) => {
  input.addEventListener('change', (e) => {
    const { name, value } = e.target;
    if (element) {
      element.setAttribute(name, value);
    }
  });
});

// Custom CSS properties
document.querySelectorAll('.control--cssprop input').forEach((input) => {
  input.addEventListener('change', (e) => {
    const { name, value } = e.target;
    if (element) {
      if (value !== '') {
        element.style.setProperty(name, value);
      } else {
        element.style.removeProperty(name);
      }
    }
  });
});
