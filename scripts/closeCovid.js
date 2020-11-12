function closeCovid(event) {

    let covidBanner = event.currentTarget.parentElement;

    covidBanner.style.display = "none";

}

function closeCovidMobile(event) {

    let covidBanner = event.currentTarget.parentElement.parentElement.parentElement;

    covidBanner.style.display = "none";

}