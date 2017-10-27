import { Router } from 'express'
import { dbGeoParse } from '../lib/util'

export default ({ config, db }) => {
    let county = Router();

    county.get('/', (req, res) => {
        const sql = 'SELECT * FROM nairobi'
        //query using pg-promise
        db.any(sql)
            .then(data => { //use dbgeo to convert WKB from PostGIS into topojson
                return dbGeoParse(data, 'geojson');
            })
            .then(data => {
                res.json(data);
            })
            .catch(err => { //send the error message if the query didn't work
                const msg = err.message || err;
                console.log("ERROR:", msg);
                res.send({
                    error: msg
                });
            });
    });

    return county;
}




