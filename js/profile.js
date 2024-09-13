const targets = document.querySelectorAll('[data-target]');
const contents = document.querySelectorAll('[data-content]');

targets.forEach(target => {
    target.addEventListener('click', () => {
      
        contents.forEach(content => content.classList.remove('active'));

    
        const t = document.getElementById(target.dataset.target);
        t.classList.add('active');
        
     
        targets.forEach(t => t.classList.remove('active'));
        target.classList.add('active');
    });
});