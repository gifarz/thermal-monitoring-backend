const { poolDonggi } = require("../../pool/poolDonggi");

const insertTlgL102Donggi = (yy,id,L102_T01,L102_T02,L102_T03,L102_T04,L102_T05,L102_T06,L102_T07,L102_T08,L102_T09,L102_T10,L102_T11,L102_T12,timestamp) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO tlg_l102_${yy} (id,L102_T01,L102_T02,L102_T03,L102_T04,L102_T05,L102_T06,L102_T07,L102_T08,L102_T09,L102_T10,L102_T11,L102_T12,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        poolDonggi.query(query, [id,L102_T01,L102_T02,L102_T03,L102_T04,L102_T05,L102_T06,L102_T07,L102_T08,L102_T09,L102_T10,L102_T11,L102_T12,timestamp], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const insertTlgL103Donggi = (yy,id,L103_T01,L103_T02,L103_T03,L103_T04,L103_T05,L103_T06,L103_T07,L103_T08,L103_T09,L103_T10,L103_T11,L103_T12,timestamp) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO tlg_l103_${yy} (id,L103_T01,L103_T02,L103_T03,L103_T04,L103_T05,L103_T06,L103_T07,L103_T08,L103_T09,L103_T10,L103_T11,L103_T12,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        poolDonggi.query(query, [id,L103_T01,L103_T02,L103_T03,L103_T04,L103_T05,L103_T06,L103_T07,L103_T08,L103_T09,L103_T10,L103_T11,L103_T12,timestamp], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const insertTlgL104Donggi = (yy,id,L104_T01,L104_T02,L104_T03,L104_T04,L104_T05,L104_T06,L104_T07,L104_T08,L104_T09,L104_T10,L104_T11,L104_T12,timestamp) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO tlg_l104_${yy} (id,L104_T01,L104_T02,L104_T03,L104_T04,L104_T05,L104_T06,L104_T07,L104_T08,L104_T09,L104_T10,L104_T11,L104_T12,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        poolDonggi.query(query,[id,L104_T01,L104_T02,L104_T03,L104_T04,L104_T05,L104_T06,L104_T07,L104_T08,L104_T09,L104_T10,L104_T11,L104_T12,timestamp], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const insertTlgL105Donggi = (yy,id,L105_T01,L105_T02,L105_T03,L105_T04,L105_T05,L105_T06,L105_T07,L105_T08,L105_T09,L105_T10,L105_T11,L105_T12,timestamp) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO tlg_l105_${yy} (id,L105_T01,L105_T02,L105_T03,L105_T04,L105_T05,L105_T06,L105_T07,L105_T08,L105_T09,L105_T10,L105_T11,L105_T12,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        poolDonggi.query(query, [id,L105_T01,L105_T02,L105_T03,L105_T04,L105_T05,L105_T06,L105_T07,L105_T08,L105_T09,L105_T10,L105_T11,L105_T12,timestamp], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const insertTlgL202Donggi = (yy,id,L202_T01,L202_T02,L202_T03,L202_T04,L202_T05,L202_T06,L202_T07,L202_T08,L202_T09,L202_T10,L202_T11,L202_T12,timestamp) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO tlg_l202_${yy} (id,L202_T01,L202_T02,L202_T03,L202_T04,L202_T05,L202_T06,L202_T07,L202_T08,L202_T09,L202_T10,L202_T11,L202_T12,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        poolDonggi.query(query, [id,L202_T01,L202_T02,L202_T03,L202_T04,L202_T05,L202_T06,L202_T07,L202_T08,L202_T09,L202_T10,L202_T11,L202_T12,timestamp], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const insertTlgL203Donggi = (yy,id,L203_T01,L203_T02,L203_T03,L203_T04,L203_T05,L203_T06,L203_T07,L203_T08,L203_T09,L203_T10,L203_T11,L203_T12,timestamp) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO tlg_l203_${yy} (id,L203_T01,L203_T02,L203_T03,L203_T04,L203_T05,L203_T06,L203_T07,L203_T08,L203_T09,L203_T10,L203_T11,L203_T12,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        poolDonggi.query(query, [id,L203_T01,L203_T02,L203_T03,L203_T04,L203_T05,L203_T06,L203_T07,L203_T08,L203_T09,L203_T10,L203_T11,L203_T12,timestamp], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const insertTlgL204Donggi = (yy,id,L204_T01,L204_T02,L204_T03,L204_T04,L204_T05,L204_T06,L204_T07,L204_T08,L204_T09,L204_T10,L204_T11,L204_T12,timestamp) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO tlg_l204_${yy} (id,L204_T01,L204_T02,L204_T03,L204_T04,L204_T05,L204_T06,L204_T07,L204_T08,L204_T09,L204_T10,L204_T11,L204_T12,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        poolDonggi.query(query, [id,L204_T01,L204_T02,L204_T03,L204_T04,L204_T05,L204_T06,L204_T07,L204_T08,L204_T09,L204_T10,L204_T11,L204_T12,timestamp], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const insertTlgL205Donggi = (yy,id,L205_T01,L205_T02,L205_T03,L205_T04,L205_T05,L205_T06,L205_T07,L205_T08,L205_T09,L205_T10,L205_T11,L205_T12,timestamp) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO tlg_l205_${yy} (id,L205_T01,L205_T02,L205_T03,L205_T04,L205_T05,L205_T06,L205_T07,L205_T08,L205_T09,L205_T10,L205_T11,L205_T12,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        poolDonggi.query(query, [id,L205_T01,L205_T02,L205_T03,L205_T04,L205_T05,L205_T06,L205_T07,L205_T08,L205_T09,L205_T10,L205_T11,L205_T12,timestamp], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const insertTlgL209Donggi = (yy,id,L209_T01,L209_T02,L209_T03,L209_T04,L209_T05,L209_T06,L209_T07,L209_T08,L209_T09,L209_T10,L209_T11,L209_T12,timestamp) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO tlg_l209_${yy} (id,L209_T01,L209_T02,L209_T03,L209_T04,L209_T05,L209_T06,L209_T07,L209_T08,L209_T09,L209_T10,L209_T11,L209_T12,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        poolDonggi.query(query, [id,L209_T01,L209_T02,L209_T03,L209_T04,L209_T05,L209_T06,L209_T07,L209_T08,L209_T09,L209_T10,L209_T11,L209_T12,timestamp], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const insertTlgL210Donggi = (yy,id,L210_T01,L210_T02,L210_T03,L210_T04,L210_T05,L210_T06,L210_T07,L210_T08,L210_T09,L210_T10,L210_T11,L210_T12,timestamp) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO tlg_l210_${yy} (id,L210_T01,L210_T02,L210_T03,L210_T04,L210_T05,L210_T06,L210_T07,L210_T08,L210_T09,L210_T10,L210_T11,L210_T12,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        poolDonggi.query(query, [id,L210_T01,L210_T02,L210_T03,L210_T04,L210_T05,L210_T06,L210_T07,L210_T08,L210_T09,L210_T10,L210_T11,L210_T12,timestamp], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const insertTlgL212Donggi = (yy,id,L212_T01,L212_T02,L212_T03,L212_T04,L212_T05,L212_T06,L212_T07,L212_T08,L212_T09,L212_T10,L212_T11,L212_T12,timestamp) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO tlg_l212_${yy} (id,L212_T01,L212_T02,L212_T03,L212_T04,L212_T05,L212_T06,L212_T07,L212_T08,L212_T09,L212_T10,L212_T11,L212_T12,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        poolDonggi.query(query, [id,L212_T01,L212_T02,L212_T03,L212_T04,L212_T05,L212_T06,L212_T07,L212_T08,L212_T09,L212_T10,L212_T11,L212_T12,timestamp], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const insertTlgL213Donggi = (yy,id,L213_T01,L213_T02,L213_T03,L213_T04,L213_T05,L213_T06,L213_T07,L213_T08,L213_T09,L213_T10,L213_T11,L213_T12,timestamp) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO tlg_l213_${yy} (id,L213_T01,L213_T02,L213_T03,L213_T04,L213_T05,L213_T06,L213_T07,L213_T08,L213_T09,L213_T10,L213_T11,L213_T12,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        poolDonggi.query(query, [id,L213_T01,L213_T02,L213_T03,L213_T04,L213_T05,L213_T06,L213_T07,L213_T08,L213_T09,L213_T10,L213_T11,L213_T12,timestamp], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const insertTlgL215Donggi = (yy,id,L215_T01,L215_T02,L215_T03,L215_T04,L215_T05,L215_T06,L215_T07,L215_T08,L215_T09,L215_T10,L215_T11,L215_T12,timestamp) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO tlg_l215_${yy} (id,L215_T01,L215_T02,L215_T03,L215_T04,L215_T05,L215_T06,L215_T07,L215_T08,L215_T09,L215_T10,L215_T11,L215_T12,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        poolDonggi.query(query, [id,L215_T01,L215_T02,L215_T03,L215_T04,L215_T05,L215_T06,L215_T07,L215_T08,L215_T09,L215_T10,L215_T11,L215_T12,timestamp], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const insertTlgL216Donggi = (yy,id,L216_T01,L216_T02,L216_T03,L216_T04,L216_T05,L216_T06,L216_T07,L216_T08,L216_T09,L216_T10,L216_T11,L216_T12,timestamp) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO tlg_l216_${yy} (id,L216_T01,L216_T02,L216_T03,L216_T04,L216_T05,L216_T06,L216_T07,L216_T08,L216_T09,L216_T10,L216_T11,L216_T12,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        poolDonggi.query(query, [id,L216_T01,L216_T02,L216_T03,L216_T04,L216_T05,L216_T06,L216_T07,L216_T08,L216_T09,L216_T10,L216_T11,L216_T12,timestamp], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const insertTlgL217Donggi = (yy,id,L217_T01,L217_T02,L217_T03,L217_T04,L217_T05,L217_T06,L217_T07,L217_T08,L217_T09,L217_T10,L217_T11,L217_T12,timestamp) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO tlg_l217_${yy} (id,L217_T01,L217_T02,L217_T03,L217_T04,L217_T05,L217_T06,L217_T07,L217_T08,L217_T09,L217_T10,L217_T11,L217_T12,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
        poolDonggi.query(query, [id,L217_T01,L217_T02,L217_T03,L217_T04,L217_T05,L217_T06,L217_T07,L217_T08,L217_T09,L217_T10,L217_T11,L217_T12,timestamp], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const insertTlgL219Donggi = (yy,id,L219_T01,L219_T02,L219_T03,L219_T04,L219_T05,L219_T06,L219_T07,L219_T08,L219_T09,L219_T10,L219_T11,L219_T12,timestamp) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO tlg_l219_${yy} (id,L219_T01,L219_T02,L219_T03,L219_T04,L219_T05,L219_T06,L219_T07,L219_T08,L219_T09,L219_T10,L219_T11,L219_T12,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        poolDonggi.query(query, [id,L219_T01,L219_T02,L219_T03,L219_T04,L219_T05,L219_T06,L219_T07,L219_T08,L219_T09,L219_T10,L219_T11,L219_T12,timestamp], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const insertTlgL220Donggi = (yy,id,L220_T01,L220_T02,L220_T03,L220_T04,L220_T05,L220_T06,L220_T07,L220_T08,L220_T09,L220_T10,L220_T11,L220_T12,timestamp) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO tlg_l220_${yy} (id,L220_T01,L220_T02,L220_T03,L220_T04,L220_T05,L220_T06,L220_T07,L220_T08,L220_T09,L220_T10,L220_T11,L220_T12,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        poolDonggi.query(query, [id,L220_T01,L220_T02,L220_T03,L220_T04,L220_T05,L220_T06,L220_T07,L220_T08,L220_T09,L220_T10,L220_T11,L220_T12,timestamp], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const insertTlgL221Donggi = (yy,id,L221_T01,L221_T02,L221_T03,L221_T04,L221_T05,L221_T06,L221_T07,L221_T08,L221_T09,L221_T10,L221_T11,L221_T12,timestamp) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO tlg_l221_${yy} (id,L221_T01,L221_T02,L221_T03,L221_T04,L221_T05,L221_T06,L221_T07,L221_T08,L221_T09,L221_T10,L221_T11,L221_T12,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        poolDonggi.query(query, [id,L221_T01,L221_T02,L221_T03,L221_T04,L221_T05,L221_T06,L221_T07,L221_T08,L221_T09,L221_T10,L221_T11,L221_T12,timestamp], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const insertTlgL223Donggi = (yy,id,L223_T01,L223_T02,L223_T03,L223_T04,L223_T05,L223_T06,L223_T07,L223_T08,L223_T09,L223_T10,L223_T11,L223_T12,timestamp) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO tlg_l223_${yy} (id,L223_T01,L223_T02,L223_T03,L223_T04,L223_T05,L223_T06,L223_T07,L223_T08,L223_T09,L223_T10,L223_T11,L223_T12,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        poolDonggi.query(query, [id,L223_T01,L223_T02,L223_T03,L223_T04,L223_T05,L223_T06,L223_T07,L223_T08,L223_T09,L223_T10,L223_T11,L223_T12,timestamp], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const insertTlgL224Donggi = (yy,id,L224_T01,L224_T02,L224_T03,L224_T04,L224_T05,L224_T06,L224_T07,L224_T08,L224_T09,L224_T10,L224_T11,L224_T12,timestamp) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO tlg_l224_${yy} (id,L224_T01,L224_T02,L224_T03,L224_T04,L224_T05,L224_T06,L224_T07,L224_T08,L224_T09,L224_T10,L224_T11,L224_T12,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        poolDonggi.query(query, [id,L224_T01,L224_T02,L224_T03,L224_T04,L224_T05,L224_T06,L224_T07,L224_T08,L224_T09,L224_T10,L224_T11,L224_T12,timestamp], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

module.exports = {
    insertTlgL102Donggi,
    insertTlgL103Donggi,
    insertTlgL104Donggi,
    insertTlgL105Donggi,
    insertTlgL202Donggi,
    insertTlgL203Donggi,
    insertTlgL204Donggi,
    insertTlgL205Donggi,
    insertTlgL209Donggi,
    insertTlgL210Donggi,
    insertTlgL212Donggi,
    insertTlgL213Donggi,
    insertTlgL215Donggi,
    insertTlgL216Donggi,
    insertTlgL217Donggi,
    insertTlgL219Donggi,
    insertTlgL220Donggi,
    insertTlgL221Donggi,
    insertTlgL223Donggi,
    insertTlgL224Donggi,
}