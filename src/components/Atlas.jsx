import React, { useEffect, useState } from 'react';
import AtlasInfo from './AtlasInfo';
import axios from 'axios';
import AtlasInput from './AtlasInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Atlas() {
    const [infoItem, setInfoItem] = useState({});

    useEffect(() => {
        doApi('israel');
    }, []);

    const doApi = async (country) => {
        setInfoItem({});
        let url = 'https://restcountries.com/v3.1/name/' + country;
        try {
            let resp = await axios.get(url);
            console.log(resp.data);
            setInfoItem(resp.data[0]);
        }
        catch (err) {
            console.log(err);
            alert('we encounterd a problem please come back later');
        }
    }
    const doApiCountryCode = async (countryCode) => {
        setInfoItem({});
        let url = "https://restcountries.com/v3.1/alpha/" + countryCode;
        try {
            let response = await axios.get(url)
            console.log(response.data);
            setInfoItem(response.data[0]);

        }
        catch (err) {
            console.log(err);
            alert('we encounterd a problem please come back later');
        }
    }
    return (
        <div className='container mt-4'>
            <h2>Atlas App</h2>
            <AtlasInput doApi={doApi}></AtlasInput>
            <AtlasInfo item={infoItem} doApiCountryCode={doApiCountryCode}></AtlasInfo>
        </div>
    )
}

export default Atlas
