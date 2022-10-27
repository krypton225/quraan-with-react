import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../assets/loading.svg";
import SurahName from "./SurahName";

function Surah() {
    const [surahsInfo, setSurahsInfo] = useState([]);

    const getAllSurahs = () => {
        axios.get("https://api.quran.gading.dev/surah")
            .then((res) => setSurahsInfo(res.data.data))
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        getAllSurahs();
    }, []);

    return (
        <>
            {
                surahsInfo.length === 0 ?

                    <div className="loading">
                        <img src={Loading} alt="Loading ..." />
                    </div>

                    :

                    <div className="my-container">
                        {
                            surahsInfo.map((surah) => (
                                <Link to={`/surah-details/${surah.number}`} key={surah.number} className="surah">
                                    <SurahName nameSurah={surah.name.long} />
                                    <h3 className="surah__number-ayat">عدد الآيات: {surah.numberOfVerses}</h3>
                                    <h3 className="surah__part">نزلت في: {surah.revelation.arab}</h3>
                                    <h3 className="surah__sequence">ترتيب النزول: {surah.sequence}</h3>
                                </Link>
                            ))
                        }
                    </div>
            }

            <br /><br /><br /><br /><br />
        </>
    )
}

export default Surah;
