 function FormSubmissionAlerter(className) {
  const targetElement = document.querySelector(`.${className}`);

  if (!targetElement) {
    console.error(`Error: No se encontró ningún elemento con la clase "${className}".`);
    return;
  }

  const form = targetElement.tagName === 'FORM' ? targetElement : targetElement.querySelector('form');

  if (!form) {
    console.error(`Error: El elemento con la clase "${className}" no es un formulario y no contiene uno.`);
    return;
  }

  form.addEventListener('submit', function(event) {

    event.preventDefault();


    alert('¡El formulario se envió correctamente!');
    form.reset();
  });

}

document.addEventListener('DOMContentLoaded', function() {
  FormSubmissionAlerter('form');
});