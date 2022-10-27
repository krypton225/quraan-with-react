import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import { useState } from 'react';

import Loading from "../assets/loading.svg";

function SurahDetails({ surahName }) {
    const { idSurah } = useParams();

    const [surahComplete, setSurahComplete] = useState([]);

    const getCompleteSurah = () => {
        axios.get(`https://api.quran.gading.dev/surah/${idSurah}`)
            .then((res) => {
                setSurahComplete(res.data.data.verses);
            });
    }

    useEffect(() => {
        getCompleteSurah();
    }, []);

    return (
        <>
            <h4 className="surah__name mt-5">{surahName}</h4>
            {
                surahComplete.length === 0 ?
                    <div className="loading">
                        <img src={Loading} alt="Loading ..." />
                    </div>
                    :
                    <div className='container mt-5 surah__content'>
                        {surahComplete.map((aya) => (
                            <span key={aya.number.inSurah} className="surah__line">
                                <span className='surah__line__text'>{aya.text.arab}</span>
                                <div className='surah__line__number'>{aya.number.inSurah}</div>
                            </span>
                        ))}
                    </div>
            }
        </>
    )
}

export default SurahDetails
