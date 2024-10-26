const { poolMatindok } = require("../../pool/poolMatindok");

const selectTlgL01Matindok = (yy, gte, lte) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tlg_l01_${yy} WHERE (timestamp >= ? AND timestamp <= ?)`;
        poolMatindok.query(query, [gte, lte], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const selectTlgL02Matindok = (yy, gte, lte) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tlg_l02_${yy} WHERE (timestamp >= ? AND timestamp <= ?)`;
        poolMatindok.query(query, [gte, lte], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const selectTlgL03Matindok = (yy, gte, lte) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tlg_l03_${yy} WHERE (timestamp >= ? AND timestamp <= ?)`;
        poolMatindok.query(query, [gte, lte], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const selectTlgL04Matindok = (yy, gte, lte) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tlg_l04_${yy} WHERE (timestamp >= ? AND timestamp <= ?)`;
        poolMatindok.query(query, [gte, lte], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const selectTlgL05Matindok = (yy, gte, lte) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tlg_l05_${yy} WHERE (timestamp >= ? AND timestamp <= ?)`;
        poolMatindok.query(query, [gte, lte], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const selectTlgL06Matindok = (yy, gte, lte) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tlg_l06_${yy} WHERE (timestamp >= ? AND timestamp <= ?)`;
        poolMatindok.query(query, [gte, lte], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const selectTlgL10Matindok = (yy, gte, lte) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tlg_l10_${yy} WHERE (timestamp >= ? AND timestamp <= ?)`;
        poolMatindok.query(query, [gte, lte], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const selectTlgL11Matindok = (yy, gte, lte) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tlg_l11_${yy} WHERE (timestamp >= ? AND timestamp <= ?)`;
        poolMatindok.query(query, [gte, lte], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const selectTlgL12Matindok = (yy, gte, lte) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tlg_l12_${yy} WHERE (timestamp >= ? AND timestamp <= ?)`;
        poolMatindok.query(query, [gte, lte], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const selectTlgL13Matindok = (yy, gte, lte) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tlg_l13_${yy} WHERE (timestamp >= ? AND timestamp <= ?)`;
        poolMatindok.query(query, [gte, lte], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const selectTlgL14Matindok = (yy, gte, lte) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tlg_l14_${yy} WHERE (timestamp >= ? AND timestamp <= ?)`;
        poolMatindok.query(query, [gte, lte], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const selectTlgL19Matindok = (yy, gte, lte) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tlg_l19_${yy} WHERE (timestamp >= ? AND timestamp <= ?)`;
        poolMatindok.query(query, [gte, lte], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const selectTlgL20Matindok = (yy, gte, lte) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tlg_l20_${yy} WHERE (timestamp >= ? AND timestamp <= ?)`;
        poolMatindok.query(query, [gte, lte], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const selectTlgL21Matindok = (yy, gte, lte) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tlg_l21_${yy} WHERE (timestamp >= ? AND timestamp <= ?)`;
        poolMatindok.query(query, [gte, lte], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const selectTlgL22Matindok = (yy, gte, lte) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tlg_l22_${yy} WHERE (timestamp >= ? AND timestamp <= ?)`;
        poolMatindok.query(query, [gte, lte], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const selectTlgL23Matindok = (yy, gte, lte) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tlg_l23_${yy} WHERE (timestamp >= ? AND timestamp <= ?)`;
        poolMatindok.query(query, [gte, lte], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const selectTlgL24Matindok = (yy, gte, lte) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tlg_l24_${yy} WHERE (timestamp >= ? AND timestamp <= ?)`;
        poolMatindok.query(query, [gte, lte], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const selectTlgL26Matindok = (yy, gte, lte) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tlg_l26_${yy} WHERE (timestamp >= ? AND timestamp <= ?)`;
        poolMatindok.query(query, [gte, lte], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const selectTlgL29Matindok = (yy, gte, lte) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tlg_l29_${yy} WHERE (timestamp >= ? AND timestamp <= ?)`;
        poolMatindok.query(query, [gte, lte], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const selectTlgL30Matindok = (yy, gte, lte) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tlg_l30_${yy} WHERE (timestamp >= ? AND timestamp <= ?)`;
        poolMatindok.query(query, [gte, lte], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const selectTlgL33Matindok = (yy, gte, lte) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tlg_l33_${yy} WHERE (timestamp >= ? AND timestamp <= ?)`;
        poolMatindok.query(query, [gte, lte], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

module.exports = {
    selectTlgL01Matindok,
    selectTlgL02Matindok,
    selectTlgL03Matindok,
    selectTlgL04Matindok,
    selectTlgL05Matindok,
    selectTlgL06Matindok,
    selectTlgL10Matindok,
    selectTlgL11Matindok,
    selectTlgL12Matindok,
    selectTlgL13Matindok,
    selectTlgL14Matindok,
    selectTlgL19Matindok,
    selectTlgL20Matindok,
    selectTlgL21Matindok,
    selectTlgL22Matindok,
    selectTlgL23Matindok,
    selectTlgL24Matindok,
    selectTlgL26Matindok,
    selectTlgL29Matindok,
    selectTlgL30Matindok,
    selectTlgL33Matindok,
}