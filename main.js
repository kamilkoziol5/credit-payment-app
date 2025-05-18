// Pobieram elemnty DOM
const clearBtn = document.querySelector('#clear');
const amountInput = document.querySelector('#amount-input');
const errorAmount = document.querySelector('.error-amount');
const yearsInput = document.querySelector('#years-input');
const errorYear = document.querySelector('.error-year');
const percentInput = document.querySelector('#percent-input');
const errorPercent = document.querySelector('.error-percent');
const checkboxPayment = document.querySelector('#repayment');
const checkboxInterested = document.querySelector('#interest-only');
const errorCheckboxes = document.querySelector('.error-checkboxes');
const calculateBtn = document.querySelector('#calculate-btn');
const rightContainer = document.querySelector('.right-side');
const rightContainerActive = document.querySelector('.right-side.active');
const h4Monthly = document.querySelector('.monthly-payment');
const h4Total = document.querySelector('.total-payment');
const icon1 = document.querySelector('.icon1');
const icon2 = document.querySelector('.icon2');
const icon3 = document.querySelector('.icon3');

function calculateCredit() {
	const creditValue = Number(amountInput.value);
	const years = Number(yearsInput.value);
	const percent = Number(percentInput.value);

	if (!creditValue) {
		errorAmount.style.display = 'block';
		icon1.style.backgroundColor = '#d73328';
		icon1.style.color = '#ffffff';
	} else {
		errorAmount.style.display = 'none';
		icon1.style.backgroundColor = '#e3f3fd';
		icon1.style.color = '#122f3f';
	}
	if (!years) {
		errorYear.style.display = 'block';
		icon2.style.backgroundColor = '#d73328';
		icon2.style.color = '#ffffff';
	} else {
		errorYear.style.display = 'none';
		icon2.style.backgroundColor = '#e3f3fd';
		icon2.style.color = '#122f3f';
	}
	if (!percent) {
		errorPercent.style.display = 'block';
		icon3.style.backgroundColor = '#d73328';
		icon3.style.color = '#ffffff';
	} else {
		errorPercent.style.display = 'none';
		icon3.style.backgroundColor = '#e3f3fd';
		icon3.style.color = '#122f3f';
	}

	if (!checkboxPayment.checked && !checkboxInterested.checked) {
		errorCheckboxes.style.display = 'block';
	} else {
		errorCheckboxes.style.display = 'none';
	}

	
	if (checkboxPayment.checked && creditValue && years && percent) {
		const months = years * 12;
		const monthlyRate = percent / 100 / 12;
		const pow = Math.pow(1 + monthlyRate, months);
		monthlyPayment = (creditValue * monthlyRate * pow) / (pow - 1);
		totalPayment = monthlyPayment * months;

		h4Monthly.textContent = monthlyPayment.toFixed(2);
		h4Total.textContent = totalPayment.toFixed(2);

		rightContainer.style.display = 'none';
		rightContainerActive.style.display = 'flex';
	} 

	if (checkboxInterested.checked && creditValue && years && percent) {
		const months = years * 12;
		const monthlyRate = percent / 100 / 12;

		const monthlyPayment = creditValue * monthlyRate;
		const totalPayment = monthlyPayment * months;

		h4Monthly.textContent = monthlyPayment.toFixed(2);
		h4Total.textContent = totalPayment.toFixed(2);

		rightContainer.style.display = 'none';
		rightContainerActive.style.display = 'flex';
	}
}

function clearAll() {
	amountInput.value = '';
	yearsInput.value = '';
	percentInput.value = '';

	errorAmount.style.display = 'none';
	icon1.style.backgroundColor = '#e3f3fd';
	icon1.style.color = '#122f3f';

	errorYear.style.display = 'none';
	icon2.style.backgroundColor = '#e3f3fd';
	icon2.style.color = '#122f3f';

	errorPercent.style.display = 'none';
	icon3.style.backgroundColor = '#e3f3fd';
	icon3.style.color = '#122f3f';

	checkboxInterested.checked = false;
	checkboxPayment.checked = false;
	errorCheckboxes.style.display = 'none';

	rightContainer.style.display = 'flex';
	rightContainerActive.style.display = 'none';
}
calculateBtn.addEventListener('click', calculateCredit);
clearBtn.addEventListener('click', clearAll);
