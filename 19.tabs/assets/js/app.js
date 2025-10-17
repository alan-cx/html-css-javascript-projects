const tabs = document.querySelectorAll('.tab');
const tabLinks = document.querySelectorAll('a');
let tabIndex; 

tabLinks.forEach((link, index) => {

    link.addEventListener('click', () => {
        tabIndex = index;
        localStorage.setItem('tab', `${tabIndex}`);

        tabs.forEach(tab => {
            tab.classList.remove('active');
            tab.removeAttribute('aria-current');
        });

        tabLinks.forEach(link => link.classList.remove('active'));

        tabs[index].classList.add('active');
        tabs[index].setAttribute('aria-current', 'true');

        tabLinks[index].classList.add('active');
    })

})

tabIndex = localStorage.getItem('tab');
tabs.forEach(tab => {
    tab.classList.remove('active');
    tab.removeAttribute('aria-current');
});
tabLinks.forEach(link => link.classList.remove('active'));

tabs[tabIndex].classList.add('active');
tabs[tabIndex].setAttribute('aria-current', 'true');
tabLinks[tabIndex].classList.add('active');