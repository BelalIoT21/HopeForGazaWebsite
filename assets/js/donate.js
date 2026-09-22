// Donate page — two-step demo flow. No payment details are sent or stored
// anywhere; this is a front-end-only demonstration.

(function () {
  const step1 = document.getElementById('donateStep1');
  const step2 = document.getElementById('donateStep2');
  if (!step1 || !step2) return;

  let frequency = 'one-off';
  let amount = 5;

  const frequencyButtons = step1.querySelectorAll('[data-frequency]');
  const amountButtons = step1.querySelectorAll('[data-amount]');
  const otherInput = document.getElementById('customAmount');
  const nextButton = document.getElementById('donateNext');
  const changeButton = document.getElementById('donateChange');
  const summary = document.getElementById('donationSummary');

  frequencyButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      frequencyButtons.forEach(function (b) { b.classList.remove('is-selected'); });
      btn.classList.add('is-selected');
      frequency = btn.dataset.frequency;
    });
  });

  amountButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      amountButtons.forEach(function (b) { b.classList.remove('is-selected'); });
      btn.classList.add('is-selected');
      const isOther = btn.dataset.amount === 'other';
      otherInput.classList.toggle('is-hidden', !isOther);
      if (isOther) {
        otherInput.focus();
        amount = parseInt(otherInput.value, 10) || 0;
      } else {
        amount = parseInt(btn.dataset.amount, 10);
      }
    });
  });

  otherInput.addEventListener('input', function () {
    amount = parseInt(otherInput.value, 10) || 0;
  });

  nextButton.addEventListener('click', function () {
    if (!amount || amount <= 0) {
      otherInput.classList.remove('is-hidden');
      otherInput.focus();
      otherInput.setCustomValidity('Please choose or enter a donation amount.');
      otherInput.reportValidity();
      return;
    }
    otherInput.setCustomValidity('');
    const label = frequency === 'monthly' ? 'monthly' : 'one-off';
    summary.textContent = `Donating £${amount} (${label}) to the General Fund`;
    step1.classList.add('is-hidden');
    step2.classList.remove('is-hidden');
    step2.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  changeButton.addEventListener('click', function () {
    step2.classList.add('is-hidden');
    step1.classList.remove('is-hidden');
    step1.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // Light input formatting for the demo card fields.
  const cardNumber = document.getElementById('cardNumber');
  const cardExpiry = document.getElementById('cardExpiry');
  const cardCvc = document.getElementById('cardCvc');
  const mobile = document.getElementById('donorMobile');

  cardNumber && cardNumber.addEventListener('input', function () {
    cardNumber.value = cardNumber.value.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
  });
  cardExpiry && cardExpiry.addEventListener('input', function () {
    let v = cardExpiry.value.replace(/\D/g, '').slice(0, 4);
    if (v.length > 2) v = v.slice(0, 2) + ' / ' + v.slice(2);
    cardExpiry.value = v;
  });
  cardCvc && cardCvc.addEventListener('input', function () {
    cardCvc.value = cardCvc.value.replace(/\D/g, '').slice(0, 3);
  });
  mobile && mobile.addEventListener('input', function () {
    mobile.value = mobile.value.replace(/\D/g, '').slice(0, 11);
  });

  const form2 = document.getElementById('donateForm2');
  const successPanel = document.getElementById('donateSuccess');
  form2.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!form2.checkValidity()) {
      form2.reportValidity();
      return;
    }
    const firstName = document.getElementById('donorFirstName').value.trim();
    successPanel.querySelector('p').textContent =
      `Thank you, ${firstName}! Your £${amount} donation is confirmed (demo only — no payment was taken).`;
    step2.classList.add('is-hidden');
    successPanel.classList.remove('is-hidden');
    successPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
})();
