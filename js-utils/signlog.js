function heroRightChange(area) {
    const heroRight = document.getElementById('hero-right');

    [...heroRight.children].forEach(child => {
        if ([...child.classList].some(cl => cl.includes(area))) {
            child.classList.remove('hidden');
        } else if (!child.classList.contains('hidden')) {
            child.classList.add('hidden')
        }
    });
}

document.getElementById('redir-signup-btn').addEventListener('click', () => heroRightChange('signup'));
document.getElementById('redir-login-btn').addEventListener('click', () => heroRightChange('login'));
document.querySelector('.signup-area').querySelector('.hr-alt-link').addEventListener('click', () => heroRightChange('login'))
document.querySelector('.login-area').querySelector('.hr-alt-link').addEventListener('click', () => heroRightChange('signup'))