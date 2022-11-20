const INPUT = document.querySelector('input[data-js="phone-number"]');

const prohibitsLetters = () => {
  INPUT.addEventListener('input', () => {
    INPUT.value = INPUT.value.replace(/[^\d.]/g, '');
  });
};

export {prohibitsLetters as createMask};
