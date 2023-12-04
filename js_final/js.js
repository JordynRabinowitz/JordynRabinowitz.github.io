document.getElementById('clearButton').addEventListener('click', clearPhoneNumber);
document.getElementById('submitButton').addEventListener('click', submitPhoneNumber);

function getRandomPosition() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    return { x, y };
  }

  function createFloatingNumber(number) {
    const numberElement = document.createElement('div');
    numberElement.className = 'floatingNumber';
    numberElement.textContent = number;

    const position = getRandomPosition();
    numberElement.style.left = position.x + 'px';
    numberElement.style.top = position.y + 'px';

    numberElement.addEventListener('click', function() {
      const phoneNumberField = document.getElementById('phoneNumber');
      phoneNumberField.value += number;
    });

    return numberElement;
  }

  function startAnimation() {
    const numberContainer = document.getElementById('numberContainer');

    setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 10);
      const floatingNumber = createFloatingNumber(randomNumber);

      numberContainer.appendChild(floatingNumber);

      setTimeout(() => {
        floatingNumber.remove();
      }, 2000);
    }, 500);
  }

  function clearPhoneNumber() {
    document.getElementById('phoneNumber').value = '';
  }

  function submitPhoneNumber() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    alert('Submitted phone number: ' + phoneNumber);
  }

  startAnimation();