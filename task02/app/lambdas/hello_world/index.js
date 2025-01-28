exports.handler = async (event) => {
    // Log the entire event object to understand what's being received
    console.log("Received event:", JSON.stringify(event, null, 2));

    const expectedPath = '/hello';
    if (event.rawPath !== expectedPath) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                statusCode: 400
                message: `Bad request syntax or unsupported method. Request path: ${event.rawPath || 'undefined'}. HTTP method: ${event.httpMethod}`,
                // Including status code in the body if required
            })
        };
    }

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            statusCode: 200,    // Including status code inside the body
            message: 'Hello from Lambda'
        })
    };
    return response;
};