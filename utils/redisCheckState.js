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
const redisCheckState = async (tag, newStatus) => {

    // console.log('tag', tag)
    // console.log('status', newStatus)

    try {

        const prevStatus = await client.get(tag)

        // console.log('prevStatus', prevStatus)

        if(prevStatus !== newStatus){
            // console.log(`State changed for ${tag}: ${prevStatus} => ${newStatus}`);

            // Update Redis with the new state
            await client.set(tag, newStatus);

            return true
        }

        // console.log(`State remains the same for ${newStatus}: ${prevStatus}`);

        return false

    } catch(err){
        console.log('err redisCheckState', err)

        throw err;
    }
}

module.exports = redisCheckState