const redis = require('redis');
const client = redis.createClient({
    url: 'redis://127.0.0.1:6379'
}); // Connect to Redis

// Connect to Redis server
client.connect().then(() => {
    console.log('Connected to Redis');
}).catch(err => {
    console.error('Redis connection error:', err);
});

// Function to get and update the state in Redis
const redisCheckState = async (tag, newStatus, alarmId, timestamp) => {

    try {

        const getValue = await client.get(tag)
        const prevStatus = getValue?.split('_')[2]

        if (prevStatus !== newStatus) {
            // console.log(`State changed for ${tag}: ${prevStatus} => ${newStatus}`);

            // Update Redis value with the alarmId_newState
            await client.set(tag, `${timestamp}_${alarmId}_${newStatus}`);

            return true
        }

        // console.log(`State remains the same for ${newStatus}: ${prevStatus}`);

        return false

    } catch (err) {
        console.log('err redisCheckState', err)

        throw err;
    }
}

const redisAllKeys = async () => {

    try {

        const allKeys = await client.keys('*')

        const dataArray = []

        if (allKeys.length > 0) {

            for (const key of allKeys) {

                const value = await client.get(key)
                const timestamp = value.split('_')[0]
                const alarmid = value.split('_')[1]
                const status = value.split('_')[2]

                const dataObject = {
                    timestamp: timestamp,
                    alarmid: alarmid,
                    tag: key,
                    status: status
                }

                dataArray.push(dataObject)
            }
        }

        return dataArray

    } catch (err) {
        console.log('err redisAllKeys', err)

        throw err
    }
}

const redisGetKey = async (tag) => {

    try {

        const getValue = await client.get(tag)

        return getValue

    } catch (err) {
        console.log('err redisGetKey', err)

        throw err;
    }
}

module.exports = { redisCheckState, redisAllKeys, redisGetKey }