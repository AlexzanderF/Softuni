function attachEvents() {
    const getBtn = document.getElementById('submit');
    const mainForecastDiv = document.getElementById('forecast');
    const locationInput = document.getElementById('location');
    const currForecastDiv = document.getElementById('current');
    const upcomingForecastDiv = document.getElementById('upcoming');
    let localtionsUrl = 'https://judgetests.firebaseio.com/locations.json';

    getBtn.addEventListener('click', () => {
        let location = locationInput.value;

        //reset the forecast <div> before displaying new forecasts
        mainForecastDiv.style.display = 'none';
        if (mainForecastDiv.children.length > 2) {
            mainForecastDiv.firstElementChild.remove();
            currForecastDiv.style.display = 'block';
            upcomingForecastDiv.style.display = 'block';
        }
        currForecastDiv.innerHTML = '<div class="label">Current conditions</div>';
        upcomingForecastDiv.innerHTML = '<div class="label">Three-day forecast</div>';


        //fetch location
        fetch(localtionsUrl)
            .then(res => {
                if (!res.ok) {
                    throw res;
                }
                return res.json();
            })
            .then(data => {
                let { code } = data.find(x => x.name === location);
                let todayUrl = `https://judgetests.firebaseio.com/forecast/today/${code}.json`;
                let upcomingUrl = `https://judgetests.firebaseio.com/forecast/upcoming/${code}.json`;

                //fetch today
                fetch(todayUrl)
                    .then(res => {
                        if (!res.ok) {
                            throw res;
                        }
                        return res.json();
                    })
                    .then(data => {
                        let { forecast: { condition, low, high } } = data;
                        currForecastDiv.innerHTML +=
                            `<div class="forecasts">
                                <span class="condition symbol">${weatherSymbol(condition)}</span>
                                <span class="condition">
                                    <span class="forecast-data">${data.name}</span>
                                    <span class="forecast-data">${low}&#176;/${high}&#176;</span>
                                    <span class="forecast-data">${condition}</span>
                                </span>
                            </div>`;
                    })
                    .catch(err => displayErr());

                //fetch upcoming
                fetch(upcomingUrl)
                    .then(res => {
                        if (!res.ok) {
                            throw res;
                        }
                        return res.json();
                    })
                    .then(data => {
                        data.forecast.forEach(x => {
                            let { condition, low, high } = x;
                            upcomingForecastDiv.innerHTML +=
                                `<span class="upcoming">
                            <span class="symbol">${weatherSymbol(condition)}</span>
                            <span class="forecast-data">${low}&#176;/${high}&#176;</span>
                            <span class="forecast-data">${condition}</span>
                            </span>`;
                        });
                        mainForecastDiv.style.display = 'block';  // displays all of the fetched data only after everything is loaded(fetched)
                    })
                    .catch(err => displayErr());

            })
            .catch(err => displayErr());


        locationInput.value = null;   // clears the input field
    });

    function weatherSymbol(cond) {
        switch (cond) {
            case 'Sunny':
                return '&#x2600;';
            case 'Partly sunny':
                return '&#x26C5;';
            case 'Overcast':
                return '&#x2601;';
            case 'Rain':
                return '&#x2614;';
        }
    }
    function displayErr() {
        mainForecastDiv.style.display = 'block';
        currForecastDiv.style.display = 'none';
        upcomingForecastDiv.style.display = 'none';
        let h1 = document.createElement('h1');
        h1.style.textAlign = 'center';
        h1.textContent = 'Error!';
        mainForecastDiv.prepend(h1);
    }
}

attachEvents();