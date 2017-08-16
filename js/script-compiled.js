/**
 * Created by enrique.cantillo on 16.08.17.
 */

const inputs = document.querySelectorAll('.controls input');

function updateValue() {
    const dataSetValue = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + dataSetValue);
    //console.log(this.dataset.sizing);
    //console.log(this.name);
    //console.log(this.dataset);
    //console.log(this.value);
}

inputs.forEach(input => input.addEventListener('change', updateValue));
inputs.forEach(input => input.addEventListener('mousemove', updateValue));
