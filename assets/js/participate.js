// Participate page — choice reveal + two-step demo signup flow.

(function () {
  const step1 = document.getElementById('participateStep1');
  const step2 = document.getElementById('participateStep2');
  if (!step1 || !step2) return;

  const choiceButtons = step1.querySelectorAll('[data-choice]');
  const panels = {
    volunteer: document.getElementById('panel-volunteer'),
    fundraise: document.getElementById('panel-fundraise'),
    'not-sure': document.getElementById('panel-not-sure'),
  };
  const nextButton = document.getElementById('participateNext');

  choiceButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      choiceButtons.forEach(function (b) { b.classList.remove('is-selected'); });
      btn.classList.add('is-selected');
      Object.values(panels).forEach(function (panel) { panel.classList.add('is-hidden'); });
      panels[btn.dataset.choice].classList.remove('is-hidden');
      nextButton.classList.remove('is-hidden');
    });
  });

  nextButton.addEventListener('click', function () {
    step2.classList.remove('is-hidden');
    nextButton.classList.add('is-hidden');
    step2.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  const mobile = document.getElementById('participantMobile');
  mobile && mobile.addEventListener('input', function () {
    mobile.value = mobile.value.replace(/\D/g, '').slice(0, 11);
  });

  const form2 = document.getElementById('participateForm2');
  const successPanel = document.getElementById('participateSuccess');
  form2.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!form2.checkValidity()) {
      form2.reportValidity();
      return;
    }
    const firstName = document.getElementById('participantFirstName').value.trim();
    successPanel.querySelector('p').textContent = `Thank you, ${firstName}, for taking action!`;
    step1.classList.add('is-hidden');
    step2.classList.add('is-hidden');
    successPanel.classList.remove('is-hidden');
    successPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
})();
