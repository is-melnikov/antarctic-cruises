const INPUT = document.querySelector('input[data-js="phone-number"]');

const validatePhone = () => {
  INPUT.addEventListener('input', () => {
    INPUT.value = INPUT.value.replace(/[^\d.]/g, '');
  });
};

export {validatePhone};
