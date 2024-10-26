const { poolMatindok } = require("../../pool/poolMatindok");

const insertTlgL01Matindok = (yy,id,L01_T01,L01_T02,L01_T03,L01_T04,L01_T05,L01_T06,L01_T07,L01_T08,L01_T09,L01_T10,L01_T11,L01_T12,timestamp) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO tlg_l01_${yy} (id,L01_T01,L01_T02,L01_T03,L01_T04,L01_T05,L01_T06,L01_T07,L01_T08,L01_T09,L01_T10,L01_T11,L01_T12,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        poolMatindok.query(query, [id,L01_T01,L01_T02,L01_T03,L01_T04,L01_T05,L01_T06,L01_T07,L01_T08,L01_T09,L01_T10,L01_T11,L01_T12,timestamp], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const insertTlgL02Matindok = (yy,id,L02_T01,L02_T02,L02_T03,L02_T04,L02_T05,L02_T06,L02_T07,L02_T08,L02_T09,L02_T10,L02_T11,L02_T12,timestamp) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO tlg_l02_${yy} (id,L02_T01,L02_T02,L02_T03,L02_T04,L02_T05,L02_T06,L02_T07,L02_T08,L02_T09,L02_T10,L02_T11,L02_T12,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        poolMatindok.query(query, [id,L02_T01,L02_T02,L02_T03,L02_T04,L02_T05,L02_T06,L02_T07,L02_T08,L02_T09,L02_T10,L02_T11,L02_T12,timestamp], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const insertTlgL03Matindok = (yy,id,L03_T01,L03_T02,L03_T03,L03_T04,L03_T05,L03_T06,L03_T07,L03_T08,L03_T09,L03_T10,L03_T11,L03_T12,timestamp) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO tlg_l03_${yy} (id,L03_T01,L03_T02,L03_T03,L03_T04,L03_T05,L03_T06,L03_T07,L03_T08,L03_T09,L03_T10,L03_T11,L03_T12,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        poolMatindok.query(query, [id,L03_T01,L03_T02,L03_T03,L03_T04,L03_T05,L03_T06,L03_T07,L03_T08,L03_T09,L03_T10,L03_T11,L03_T12,timestamp], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const insertTlgL04Matindok = (yy,id,L04_T01,L04_T02,L04_T03,L04_T04,L04_T05,L04_T06,L04_T07,L04_T08,L04_T09,L04_T10,L04_T11,L04_T12,timestamp) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO tlg_l04_${yy} (id,L04_T01,L04_T02,L04_T03,L04_T04,L04_T05,L04_T06,L04_T07,L04_T08,L04_T09,L04_T10,L04_T11,L04_T12,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        poolMatindok.query(query,[id,L04_T01,L04_T02,L04_T03,L04_T04,L04_T05,L04_T06,L04_T07,L04_T08,L04_T09,L04_T10,L04_T11,L04_T12,timestamp], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const insertTlgL05Matindok = (yy,id,L05_T01,L05_T02,L05_T03,L05_T04,L05_T05,L05_T06,L05_T07,L05_T08,L05_T09,L05_T10,L05_T11,L05_T12,timestamp) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO tlg_l05_${yy} (id,L05_T01,L05_T02,L05_T03,L05_T04,L05_T05,L05_T06,L05_T07,L05_T08,L05_T09,L05_T10,L05_T11,L05_T12,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        poolMatindok.query(query, [id,L05_T01,L05_T02,L05_T03,L05_T04,L05_T05,L05_T06,L05_T07,L05_T08,L05_T09,L05_T10,L05_T11,L05_T12,timestamp], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const insertTlgL06Matindok = (yy,id,L06_T01,L06_T02,L06_T03,L06_T04,L06_T05,L06_T06,L06_T07,L06_T08,L06_T09,L06_T10,L06_T11,L06_T12,timestamp) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO tlg_l06_${yy} (id,L06_T01,L06_T02,L06_T03,L06_T04,L06_T05,L06_T06,L06_T07,L06_T08,L06_T09,L06_T10,L06_T11,L06_T12,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        poolMatindok.query(query, [id,L06_T01,L06_T02,L06_T03,L06_T04,L06_T05,L06_T06,L06_T07,L06_T08,L06_T09,L06_T10,L06_T11,L06_T12,timestamp], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const insertTlgL10Matindok = (yy,id,L10_T01,L10_T02,L10_T03,L10_T04,L10_T05,L10_T06,L10_T07,L10_T08,L10_T09,L10_T10,L10_T11,L10_T12,timestamp) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO tlg_l10_${yy} (id,L10_T01,L10_T02,L10_T03,L10_T04,L10_T05,L10_T06,L10_T07,L10_T08,L10_T09,L10_T10,L10_T11,L10_T12,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        poolMatindok.query(query, [id,L10_T01,L10_T02,L10_T03,L10_T04,L10_T05,L10_T06,L10_T07,L10_T08,L10_T09,L10_T10,L10_T11,L10_T12,timestamp], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const insertTlgL11Matindok = (yy,id,L11_T01,L11_T02,L11_T03,L11_T04,L11_T05,L11_T06,L11_T07,L11_T08,L11_T09,L11_T10,L11_T11,L11_T12,timestamp) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO tlg_l11_${yy} (id,L11_T01,L11_T02,L11_T03,L11_T04,L11_T05,L11_T06,L11_T07,L11_T08,L11_T09,L11_T10,L11_T11,L11_T12,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        poolMatindok.query(query, [id,L11_T01,L11_T02,L11_T03,L11_T04,L11_T05,L11_T06,L11_T07,L11_T08,L11_T09,L11_T10,L11_T11,L11_T12,timestamp], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const insertTlgL12Matindok = (yy,id,L12_T01,L12_T02,L12_T03,L12_T04,L12_T05,L12_T06,L12_T07,L12_T08,L12_T09,L12_T10,L12_T11,L12_T12,timestamp) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO tlg_l12_${yy} (id,L12_T01,L12_T02,L12_T03,L12_T04,L12_T05,L12_T06,L12_T07,L12_T08,L12_T09,L12_T10,L12_T11,L12_T12,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        poolMatindok.query(query, [id,L12_T01,L12_T02,L12_T03,L12_T04,L12_T05,L12_T06,L12_T07,L12_T08,L12_T09,L12_T10,L12_T11,L12_T12,timestamp], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const insertTlgL13Matindok = (yy,id,L13_T01,L13_T02,L13_T03,L13_T04,L13_T05,L13_T06,L13_T07,L13_T08,L13_T09,L13_T10,L13_T11,L13_T12,timestamp) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO tlg_l13_${yy} (id,L13_T01,L13_T02,L13_T03,L13_T04,L13_T05,L13_T06,L13_T07,L13_T08,L13_T09,L13_T10,L13_T11,L13_T12,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        poolMatindok.query(query, [id,L13_T01,L13_T02,L13_T03,L13_T04,L13_T05,L13_T06,L13_T07,L13_T08,L13_T09,L13_T10,L13_T11,L13_T12,timestamp], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const insertTlgL14Matindok = (yy,id,L14_T01,L14_T02,L14_T03,L14_T04,L14_T05,L14_T06,L14_T07,L14_T08,L14_T09,L14_T10,L14_T11,L14_T12,timestamp) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO tlg_l14_${yy} (id,L14_T01,L14_T02,L14_T03,L14_T04,L14_T05,L14_T06,L14_T07,L14_T08,L14_T09,L14_T10,L14_T11,L14_T12,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        poolMatindok.query(query, [id,L14_T01,L14_T02,L14_T03,L14_T04,L14_T05,L14_T06,L14_T07,L14_T08,L14_T09,L14_T10,L14_T11,L14_T12,timestamp], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const insertTlgL19Matindok = (yy,id,L19_T01,L19_T02,L19_T03,L19_T04,L19_T05,L19_T06,L19_T07,L19_T08,L19_T09,L19_T10,L19_T11,L19_T12,timestamp) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO tlg_l19_${yy} (id,L19_T01,L19_T02,L19_T03,L19_T04,L19_T05,L19_T06,L19_T07,L19_T08,L19_T09,L19_T10,L19_T11,L19_T12,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        poolMatindok.query(query, [id,L19_T01,L19_T02,L19_T03,L19_T04,L19_T05,L19_T06,L19_T07,L19_T08,L19_T09,L19_T10,L19_T11,L19_T12,timestamp], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const insertTlgL20Matindok = (yy,id,L20_T01,L20_T02,L20_T03,L20_T04,L20_T05,L20_T06,L20_T07,L20_T08,L20_T09,L20_T10,L20_T11,L20_T12,timestamp) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO tlg_l20_${yy} (id,L20_T01,L20_T02,L20_T03,L20_T04,L20_T05,L20_T06,L20_T07,L20_T08,L20_T09,L20_T10,L20_T11,L20_T12,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        poolMatindok.query(query, [id,L20_T01,L20_T02,L20_T03,L20_T04,L20_T05,L20_T06,L20_T07,L20_T08,L20_T09,L20_T10,L20_T11,L20_T12,timestamp], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const insertTlgL21Matindok = (yy,id,L21_T01,L21_T02,L21_T03,L21_T04,L21_T05,L21_T06,L21_T07,L21_T08,L21_T09,L21_T10,L21_T11,L21_T12,timestamp) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO tlg_l21_${yy} (id,L21_T01,L21_T02,L21_T03,L21_T04,L21_T05,L21_T06,L21_T07,L21_T08,L21_T09,L21_T10,L21_T11,L21_T12,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        poolMatindok.query(query, [id,L21_T01,L21_T02,L21_T03,L21_T04,L21_T05,L21_T06,L21_T07,L21_T08,L21_T09,L21_T10,L21_T11,L21_T12,timestamp], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const insertTlgL22Matindok = (yy,id,L22_T01,L22_T02,L22_T03,L22_T04,L22_T05,L22_T06,L22_T07,L22_T08,L22_T09,L22_T10,L22_T11,L22_T12,timestamp) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO tlg_l22_${yy} (id,L22_T01,L22_T02,L22_T03,L22_T04,L22_T05,L22_T06,L22_T07,L22_T08,L22_T09,L22_T10,L22_T11,L22_T12,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        poolMatindok.query(query, [id,L22_T01,L22_T02,L22_T03,L22_T04,L22_T05,L22_T06,L22_T07,L22_T08,L22_T09,L22_T10,L22_T11,L22_T12,timestamp], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const insertTlgL23Matindok = (yy,id,L23_T01,L23_T02,L23_T03,L23_T04,L23_T05,L23_T06,L23_T07,L23_T08,L23_T09,L23_T10,L23_T11,L23_T12,timestamp) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO tlg_l23_${yy} (id,L23_T01,L23_T02,L23_T03,L23_T04,L23_T05,L23_T06,L23_T07,L23_T08,L23_T09,L23_T10,L23_T11,L23_T12,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
        poolMatindok.query(query, [id,L23_T01,L23_T02,L23_T03,L23_T04,L23_T05,L23_T06,L23_T07,L23_T08,L23_T09,L23_T10,L23_T11,L23_T12,timestamp], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const insertTlgL24Matindok = (yy,id,L24_T01,L24_T02,L24_T03,L24_T04,L24_T05,L24_T06,L24_T07,L24_T08,L24_T09,L24_T10,L24_T11,L24_T12,timestamp) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO tlg_l24_${yy} (id,L24_T01,L24_T02,L24_T03,L24_T04,L24_T05,L24_T06,L24_T07,L24_T08,L24_T09,L24_T10,L24_T11,L24_T12,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        poolMatindok.query(query, [id,L24_T01,L24_T02,L24_T03,L24_T04,L24_T05,L24_T06,L24_T07,L24_T08,L24_T09,L24_T10,L24_T11,L24_T12,timestamp], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const insertTlgL26Matindok = (yy,id,L26_T01,L26_T02,L26_T03,L26_T04,L26_T05,L26_T06,L26_T07,L26_T08,L26_T09,L26_T10,L26_T11,L26_T12,timestamp) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO tlg_l26_${yy} (id,L26_T01,L26_T02,L26_T03,L26_T04,L26_T05,L26_T06,L26_T07,L26_T08,L26_T09,L26_T10,L26_T11,L26_T12,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        poolMatindok.query(query, [id,L26_T01,L26_T02,L26_T03,L26_T04,L26_T05,L26_T06,L26_T07,L26_T08,L26_T09,L26_T10,L26_T11,L26_T12,timestamp], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const insertTlgL29Matindok = (yy,id,L29_T01,L29_T02,L29_T03,L29_T04,L29_T05,L29_T06,L29_T07,L29_T08,L29_T09,L29_T10,L29_T11,L29_T12,timestamp) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO tlg_l29_${yy} (id,L29_T01,L29_T02,L29_T03,L29_T04,L29_T05,L29_T06,L29_T07,L29_T08,L29_T09,L29_T10,L29_T11,L29_T12,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        poolMatindok.query(query, [id,L29_T01,L29_T02,L29_T03,L29_T04,L29_T05,L29_T06,L29_T07,L29_T08,L29_T09,L29_T10,L29_T11,L29_T12,timestamp], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const insertTlgL30Matindok = (yy,id,L30_T01,L30_T02,L30_T03,L30_T04,L30_T05,L30_T06,L30_T07,L30_T08,L30_T09,L30_T10,L30_T11,L30_T12,timestamp) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO tlg_l30_${yy} (id,L30_T01,L30_T02,L30_T03,L30_T04,L30_T05,L30_T06,L30_T07,L30_T08,L30_T09,L30_T10,L30_T11,L30_T12,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        poolMatindok.query(query, [id,L30_T01,L30_T02,L30_T03,L30_T04,L30_T05,L30_T06,L30_T07,L30_T08,L30_T09,L30_T10,L30_T11,L30_T12,timestamp], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

const insertTlgL33Matindok = (yy,id,L33_T01,L33_T02,L33_T03,L33_T04,L33_T05,L33_T06,L33_T07,L33_T08,L33_T09,L33_T10,L33_T11,L33_T12,timestamp) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO tlg_l33_${yy} (id,L33_T01,L33_T02,L33_T03,L33_T04,L33_T05,L33_T06,L33_T07,L33_T08,L33_T09,L33_T10,L33_T11,L33_T12,timestamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        poolMatindok.query(query, [id,L33_T01,L33_T02,L33_T03,L33_T04,L33_T05,L33_T06,L33_T07,L33_T08,L33_T09,L33_T10,L33_T11,L33_T12,timestamp], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

module.exports = {
    insertTlgL01Matindok,
    insertTlgL02Matindok,
    insertTlgL03Matindok,
    insertTlgL04Matindok,
    insertTlgL05Matindok,
    insertTlgL06Matindok,
    insertTlgL10Matindok,
    insertTlgL11Matindok,
    insertTlgL12Matindok,
    insertTlgL13Matindok,
    insertTlgL14Matindok,
    insertTlgL19Matindok,
    insertTlgL20Matindok,
    insertTlgL21Matindok,
    insertTlgL22Matindok,
    insertTlgL23Matindok,
    insertTlgL24Matindok,
    insertTlgL26Matindok,
    insertTlgL29Matindok,
    insertTlgL30Matindok,
    insertTlgL33Matindok,
}