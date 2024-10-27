const { poolDonggi } = require("../../pool/poolDonggi");

const selectTlgL102Donggi = (yy, gte, lte, offset, limit) => {

    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tlg_l102_${yy} WHERE (timestamp >= ? AND timestamp <= ?) ORDER BY TIMESTAMP DESC LIMIT ? OFFSET ?`;
        poolDonggi.query(query, [gte, lte, limit, offset], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

const selectTlgL103Donggi = (yy, gte, lte, offset, limit) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tlg_l103_${yy} WHERE (timestamp >= ? AND timestamp <= ?) ORDER BY TIMESTAMP DESC LIMIT ? OFFSET ?`;
        poolDonggi.query(query, [gte, lte, limit, offset], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const selectTlgL104Donggi = (yy, gte, lte, offset, limit) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tlg_l104_${yy} WHERE (timestamp >= ? AND timestamp <= ?) ORDER BY TIMESTAMP DESC LIMIT ? OFFSET ?`;
        poolDonggi.query(query, [gte, lte, limit, offset], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const selectTlgL105Donggi = (yy, gte, lte, offset, limit) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tlg_l105_${yy} WHERE (timestamp >= ? AND timestamp <= ?) ORDER BY TIMESTAMP DESC LIMIT ? OFFSET ?`;
        poolDonggi.query(query, [gte, lte, limit, offset], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const selectTlgL202Donggi = (yy, gte, lte, offset, limit) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tlg_l202_${yy} WHERE (timestamp >= ? AND timestamp <= ?) ORDER BY TIMESTAMP DESC LIMIT ? OFFSET ?`;
        poolDonggi.query(query, [gte, lte, limit, offset], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const selectTlgL203Donggi = (yy, gte, lte, offset, limit) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tlg_l203_${yy} WHERE (timestamp >= ? AND timestamp <= ?) ORDER BY TIMESTAMP DESC LIMIT ? OFFSET ?`;
        poolDonggi.query(query, [gte, lte, limit, offset], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const selectTlgL204Donggi = (yy, gte, lte, offset, limit) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tlg_l204_${yy} WHERE (timestamp >= ? AND timestamp <= ?) ORDER BY TIMESTAMP DESC LIMIT ? OFFSET ?`;
        poolDonggi.query(query, [gte, lte, limit, offset], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const selectTlgL205Donggi = (yy, gte, lte, offset, limit) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tlg_l205_${yy} WHERE (timestamp >= ? AND timestamp <= ?) ORDER BY TIMESTAMP DESC LIMIT ? OFFSET ?`;
        poolDonggi.query(query, [gte, lte, limit, offset], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const selectTlgL209Donggi = (yy, gte, lte, offset, limit) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tlg_l209_${yy} WHERE (timestamp >= ? AND timestamp <= ?) ORDER BY TIMESTAMP DESC LIMIT ? OFFSET ?`;
        poolDonggi.query(query, [gte, lte, limit, offset], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const selectTlgL210Donggi = (yy, gte, lte, offset, limit) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tlg_l210_${yy} WHERE (timestamp >= ? AND timestamp <= ?) ORDER BY TIMESTAMP DESC LIMIT ? OFFSET ?`;
        poolDonggi.query(query, [gte, lte, limit, offset], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const selectTlgL212Donggi = (yy, gte, lte, offset, limit) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tlg_l212_${yy} WHERE (timestamp >= ? AND timestamp <= ?) ORDER BY TIMESTAMP DESC LIMIT ? OFFSET ?`;
        poolDonggi.query(query, [gte, lte, limit, offset], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const selectTlgL213Donggi = (yy, gte, lte, offset, limit) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tlg_l213_${yy} WHERE (timestamp >= ? AND timestamp <= ?) ORDER BY TIMESTAMP DESC LIMIT ? OFFSET ?`;
        poolDonggi.query(query, [gte, lte, limit, offset], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const selectTlgL215Donggi = (yy, gte, lte, offset, limit) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tlg_l215_${yy} WHERE (timestamp >= ? AND timestamp <= ?) ORDER BY TIMESTAMP DESC LIMIT ? OFFSET ?`;
        poolDonggi.query(query, [gte, lte, limit, offset], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const selectTlgL216Donggi = (yy, gte, lte, offset, limit) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tlg_l216_${yy} WHERE (timestamp >= ? AND timestamp <= ?) ORDER BY TIMESTAMP DESC LIMIT ? OFFSET ?`;
        poolDonggi.query(query, [gte, lte, limit, offset], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const selectTlgL217Donggi = (yy, gte, lte, offset, limit) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tlg_l217_${yy} WHERE (timestamp >= ? AND timestamp <= ?) ORDER BY TIMESTAMP DESC LIMIT ? OFFSET ?`;
        poolDonggi.query(query, [gte, lte, limit, offset], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const selectTlgL219Donggi = (yy, gte, lte, offset, limit) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tlg_l219_${yy} WHERE (timestamp >= ? AND timestamp <= ?) ORDER BY TIMESTAMP DESC LIMIT ? OFFSET ?`;
        poolDonggi.query(query, [gte, lte, limit, offset], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const selectTlgL220Donggi = (yy, gte, lte, offset, limit) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tlg_l220_${yy} WHERE (timestamp >= ? AND timestamp <= ?) ORDER BY TIMESTAMP DESC LIMIT ? OFFSET ?`;
        poolDonggi.query(query, [gte, lte, limit, offset], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const selectTlgL221Donggi = (yy, gte, lte, offset, limit) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tlg_l221_${yy} WHERE (timestamp >= ? AND timestamp <= ?) ORDER BY TIMESTAMP DESC LIMIT ? OFFSET ?`;
        poolDonggi.query(query, [gte, lte, limit, offset], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const selectTlgL223Donggi = (yy, gte, lte, offset, limit) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tlg_l223_${yy} WHERE (timestamp >= ? AND timestamp <= ?) ORDER BY TIMESTAMP DESC LIMIT ? OFFSET ?`;
        poolDonggi.query(query, [gte, lte, limit, offset], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const selectTlgL224Donggi = (yy, gte, lte, offset, limit) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tlg_l224_${yy} WHERE (timestamp >= ? AND timestamp <= ?) ORDER BY TIMESTAMP DESC LIMIT ? OFFSET ?`;
        poolDonggi.query(query, [gte, lte, limit, offset], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

module.exports = {
    selectTlgL102Donggi,
    selectTlgL103Donggi,
    selectTlgL104Donggi,
    selectTlgL105Donggi,
    selectTlgL202Donggi,
    selectTlgL203Donggi,
    selectTlgL204Donggi,
    selectTlgL205Donggi,
    selectTlgL209Donggi,
    selectTlgL210Donggi,
    selectTlgL212Donggi,
    selectTlgL213Donggi,
    selectTlgL215Donggi,
    selectTlgL216Donggi,
    selectTlgL217Donggi,
    selectTlgL219Donggi,
    selectTlgL220Donggi,
    selectTlgL221Donggi,
    selectTlgL223Donggi,
    selectTlgL224Donggi,
}