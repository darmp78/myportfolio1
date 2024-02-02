function loadCountries(){
document.addEventListener('DOMContentLoaded',() => {
        const selectDrop = document.getElementById("drop-countries");

        fetch('https://restcountries.com/v3.1/all').then(res => {
            return res.json();
        }).then(data => {
            let outputData = [];
            outputData.push(`<option selected="" hidden=""></option>`);
            data.forEach(country => {
                outputData.push(`<option value="${country.name.common}">${country.name.common}</option>`);
            })
            outputData.sort();
            sortedCountries = "";
            outputData.forEach(countryLabeled =>{
                sortedCountries += countryLabeled;
            })
            console.log(sortedCountries);
            selectDrop.innerHTML = sortedCountries;

        }).catch(err => {
            console.log(err);
        })

});
}

loadCountries();