export async function submitForm(event) {
  event.preventDefault();
  const arrayInput = Array.from(event.srcElement);
  const checkedInput = arrayInput.filter(input => {
    return input.checked === true;
  });

  const { variant, quantity } = checkedInput[0].dataset;

  const response = await fetch('https://google.com/search', {
    method: 'POST',
    body: JSON.stringify({ variant, quantity }),
  });

  return response.json();
}
