exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            statusCode: 200,    // Including status code inside the body
            message: 'Hello from Lambda'
        })
    };
    return response;
};