const { 
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
} = require("../../services/query/matindok/insertTlgMatindok");

const insertToTlg = (group, yy, formattedDate, formattedTimestamp, outputRealtimeMatindok) => {
    
    const filterResult = outputRealtimeMatindok
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


    if(group == 'L01'){

        insertTlgL01Matindok(yy, id, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11, T12, timestamp)
    } 
    else if(group == 'L02'){

        insertTlgL02Matindok(yy, id, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11, T12, timestamp)
    }
    else if(group == 'L03'){

        insertTlgL03Matindok(yy, id, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11, T12, timestamp)
    }
    else if(group == 'L04'){
        
        insertTlgL04Matindok(yy, id, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11, T12, timestamp)
    }
    else if(group == 'L05'){

        insertTlgL05Matindok(yy, id, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11, T12, timestamp)
    }
    else if(group == 'L06'){

        insertTlgL06Matindok(yy, id, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11, T12, timestamp)
    }
    else if(group == 'L10'){

        insertTlgL10Matindok(yy, id, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11, T12, timestamp)
    }
    else if(group == 'L11'){

        insertTlgL11Matindok(yy, id, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11, T12, timestamp)
    }
    else if(group == 'L12'){
        
        insertTlgL12Matindok(yy, id, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11, T12, timestamp)
    }
    else if(group == 'L13'){
        
        insertTlgL13Matindok(yy, id, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11, T12, timestamp)
    }
    else if(group == 'L14'){
        
        insertTlgL14Matindok(yy, id, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11, T12, timestamp)
    }
    else if(group == 'L19'){
        
        insertTlgL19Matindok(yy, id, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11, T12, timestamp)
    }
    else if(group == 'L20'){
        
        insertTlgL20Matindok(yy, id, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11, T12, timestamp)
    }
    else if(group == 'L21'){
        
        insertTlgL21Matindok(yy, id, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11, T12, timestamp)
    }
    else if(group == 'L22'){
        
        insertTlgL22Matindok(yy, id, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11, T12, timestamp)
    }
    else if(group == 'L23'){

        insertTlgL23Matindok(yy, id, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11, T12, timestamp)
    }
    else if(group == 'L24'){

        insertTlgL24Matindok(yy, id, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11, T12, timestamp)
    }
    else if(group == 'L26'){
        
        insertTlgL26Matindok(yy, id, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11, T12, timestamp)
    }
    else if(group == 'L29'){

        insertTlgL29Matindok(yy, id, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11, T12, timestamp)
    }
    else if(group == 'L30'){

        insertTlgL30Matindok(yy, id, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11, T12, timestamp)
    }
    else if(group == 'L33'){

        insertTlgL33Matindok(yy, id, T01, T02, T03, T04, T05, T06, T07, T08, T09, T10, T11, T12, timestamp)
    }
}

module.exports = insertToTlg