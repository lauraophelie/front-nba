/* eslint-disable no-prototype-builtins */
import { useEffect, useState } from "react";
import Header from "./Header";
import Liste from "./Liste";
import { Typography } from "@mui/material";
import "./assets/style.scss";

function createData(data) {
    const result = {};

    for(const prop in data) {
        if(data.hasOwnProperty(prop)) {
            result[prop] = data[prop];
        }
    }
    return result;
}

function Resultat() {
    const [resultats, setResultats] = useState([]);
    const [keys, setKeys] = useState([]);

    useEffect(() => {
        const resultats = [
            {
                "classement": 1,
                "joueur": "Joueur",
                "equipe": "",
                "m": 0,
                "mj": 0,
                "ppm": 0,
                "rpm": 0,
                "pdpm": 0,
                "mpm": 0,
                "fg%": 0,
                "3p%": 0,
                "%lf": 0
            },
            {
                "classement": 2,
                "joueur": "Joueur",
                "equipe": "",
                "m": 0,
                "mj": 0,
                "ppm": 0,
                "rpm": 0,
                "pdpm": 0,
                "mpm": 0,
                "fg%": 0,
                "3p%": 0,
                "%lf": 0
            },
            {
                "classement": 3,
                "joueur": "Joueur",
                "equipe": "",
                "m": 0,
                "mj": 0,
                "ppm": 0,
                "rpm": 0,
                "pdpm": 0,
                "mpm": 0,
                "fg%": 0,
                "3p%": 0,
                "%lf": 0
            },
            {
                "classement": 4,
                "joueur": "Joueur",
                "equipe": "",
                "m": 0,
                "mj": 0,
                "ppm": 0,
                "rpm": 0,
                "pdpm": 0,
                "mpm": 0,
                "fg%": 0,
                "3p%": 0,
                "%lf": 0
            },
            {
                "classement": 5,
                "joueur": "Joueur",
                "equipe": "",
                "m": 0,
                "mj": 0,
                "ppm": 0,
                "rpm": 0,
                "pdpm": 0,
                "mpm": 0,
                "fg%": 0,
                "3p%": 0,
                "%lf": 0
            },
            {
                "classement": 6,
                "joueur": "Joueur",
                "equipe": "",
                "m": 0,
                "mj": 0,
                "ppm": 0,
                "rpm": 0,
                "pdpm": 0,
                "mpm": 0,
                "fg%": 0,
                "3p%": 0,
                "%lf": 0
            }
        ];

        const data = createData(Object.keys(resultats[0]));
        const header = [];

        for (var key in data) {
            header.push(data[key]);
        }
        setResultats(resultats);
        setKeys(header);
    }, []);

    return (
        <div className="resultat">
            <Header />

            <div className="resultat__title">
                <Typography variant="h4" color={"black"}>
                    Résultats
                </Typography>
            </div>

            <div className="resultat__data">
                <Liste 
                    keys={keys}
                    rows={resultats}
                    width={1250}
                    height={200}
                />
            </div>
        </div>
    )
}

export default Resultat;