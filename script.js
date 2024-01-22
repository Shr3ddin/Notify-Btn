const notify = document.querySelector('.notification');
const btn = document.querySelector('.notifi-btn');

const addNotify = () => {
	let add = parseInt(notify.getAttribute('data-count') || 0);

	if (add < 9) {
		notify.setAttribute('data-count', add === 8 ? '9+' : add + 1);
		notify.classList.add('add-notify');
	}
};

btn.addEventListener('click', addNotify);

