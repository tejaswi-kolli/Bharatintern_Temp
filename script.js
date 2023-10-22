function convert() {
    const celsiusInput = document.getElementById('celsius');
    const resultParagraph = document.getElementById('result');

    if (celsiusInput.value === '') {
        resultParagraph.textContent = 'Please enter a temperature.';
    } else {
        const celsius = parseFloat(celsiusInput.value);
        const fahrenheit = (celsius * 9/5) + 32;
        resultParagraph.textContent = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
    }
}