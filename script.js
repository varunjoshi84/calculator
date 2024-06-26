document.addEventListener('DOMContentLoaded', (event) => {
    const display = document.getElementById('display');
    
    document.addEventListener('keydown', (event) => {
        const key = event.key;
        
        if ((key >= 0 && key <= 9) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
            event.preventDefault();
            display.value += key;
        } else if (key === 'Enter') {
            event.preventDefault();
            display.value = eval(display.value);
        } else if (key === 'Backspace') {
            event.preventDefault();
            display.value = display.value.slice(0, -1);
        } else if (key === 'Escape') {
            event.preventDefault();
            display.value = '';
        }
    });
});
