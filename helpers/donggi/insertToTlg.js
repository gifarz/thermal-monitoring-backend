const { 
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
} = require("../../services/query/donggi/insertTlgDonggi");

const insertToTlg = (group, yy, formattedDate, formattedTimestamp, outputRealtimeDonggi) => {

    const filterResult = outputRealtimeDonggi
    .filter(result => result.tname.match(new RegExp(`${group}_T\\d{2}$`)));

    const id = formattedDate
    const T01 = filterResult.find(item => item.tname == `${group}_T01`)?.tvalue
    const T02 = filterResult.find(item => item.tname == `${group}_T02`)?.tvalue
    const T03 = filterResult.find(item => item.tname == `${group}_T03`)?.tvalue
    const T04 = filterResult.find(item => item.tname == `${group}_T04`)?.tvalue
    const T05 = filterResult.find(item => item.tname == `${group}_T05`)?.tvalue
    const T06 = filterResult.find(item => item.tname == `${group}_T06`)?.tvalue
    const T07 = filterResult.find(item => item.tname == `${group}_T07`)?.tvalue
    const T08 = filterResult.find(item => item.tname == `${group}_T08`)?.tvalue
    const T09 = filterResult.find(item => item.tname == `${group}_T09`)?.tvalue
    const T10 = filterResult.find(item => item.tname == `${group}_T10`)?.tvalue
    const T11 = filterResult.find(item => item.tname == `${group}_T11`)?.tvalue
    const T12 = filterResult.find(item => item.tname == `${group}_T12`)?.tvalue
    const timestamp = formattedTimestamp


    if(group == 'L102'){

        insertTlgL102Donggi(yy, id, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11, T12, timestamp)
    } 
    else if(group == 'L103'){

        insertTlgL103Donggi(yy, id, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11, T12, timestamp)
    }
    else if(group == 'L104'){
        
        insertTlgL104Donggi(yy, id, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11, T12, timestamp)
    }
    else if(group == 'L105'){

        insertTlgL105Donggi(yy, id, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11, T12, timestamp)
    }
    else if(group == 'L202'){

        insertTlgL202Donggi(yy, id, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11, T12, timestamp)
    }
    else if(group == 'L203'){

        insertTlgL203Donggi(yy, id, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11, T12, timestamp)
    }
    else if(group == 'L204'){

        insertTlgL204Donggi(yy, id, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11, T12, timestamp)
    }
    else if(group == 'L205'){
        
        insertTlgL205Donggi(yy, id, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11, T12, timestamp)
    }
    else if(group == 'L209'){
        
        insertTlgL209Donggi(yy, id, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11, T12, timestamp)
    }
    else if(group == 'L210'){
        
        insertTlgL210Donggi(yy, id, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11, T12, timestamp)
    }
    else if(group == 'L212'){
        
        insertTlgL212Donggi(yy, id, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11, T12, timestamp)
    }
    else if(group == 'L213'){
        
        insertTlgL213Donggi(yy, id, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11, T12, timestamp)
    }
    else if(group == 'L215'){
        
        insertTlgL215Donggi(yy, id, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11, T12, timestamp)
    }
    else if(group == 'L216'){
        
        insertTlgL216Donggi(yy, id, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11, T12, timestamp)
    }
    else if(group == 'L217'){

        insertTlgL217Donggi(yy, id, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11, T12, timestamp)
    }
    else if(group == 'L219'){

        insertTlgL219Donggi(yy, id, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11, T12, timestamp)
    }
    else if(group == 'L220'){
        
        insertTlgL220Donggi(yy, id, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11, T12, timestamp)
    }
    else if(group == 'L221'){

        insertTlgL221Donggi(yy, id, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11, T12, timestamp)
    }
    else if(group == 'L223'){

        insertTlgL223Donggi(yy, id, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11, T12, timestamp)
    }
    else if(group == 'L224'){

        insertTlgL224Donggi(yy, id, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11, T12, timestamp)
    }
}

module.exports = insertToTlg