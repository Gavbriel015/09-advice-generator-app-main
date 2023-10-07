document.addEventListener('DOMContentLoaded', function() {
    const rolldice = document.querySelector('#rolldice');
    const idHTML = document.querySelector('#idHTML');
    const adviceHTML = document.querySelector('#adviceHTML');
    const api = 'https://api.adviceslip.com/advice';

    async function updateAdvice() {
        try {
            const response = await fetch(api);
            const data = await response.json();
            if (data && data.slip) {
                const { advice, id } = data.slip;
                idHTML.textContent = '#' + id;
                adviceHTML.textContent = '\"' + advice + '\"';
            } else {
                console.log('No se pudo obtener el consejo.');
            }
        } catch (error) {
            console.error('Error al obtener el consejo:', error);
        }
    }

    updateAdvice();

    rolldice.addEventListener('click', updateAdvice);
});
