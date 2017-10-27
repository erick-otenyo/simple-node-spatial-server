import dbgeo from 'dbgeo'

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