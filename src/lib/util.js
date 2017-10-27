import dbgeo from 'dbgeo'

//use dbgeo (as a Promise function) to convert the db response to geojson and return the geojson
export const dbGeoParse = (data, format) => {
    return new Promise((resolve, reject) => {
        dbgeo.parse(data, {
            outputFormat: format
        }, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}