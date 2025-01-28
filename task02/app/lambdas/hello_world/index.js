exports.handler = async (event) => {
    console.log('Received event:', JSON.stringify(event, null, 2));

    // Assuming GET is the only supported method and /cmtr-27d20cfd is the valid path.
    const validPath = '/hello';

    // Check for the HTTP method and path
    if (event.httpMethod !== 'GET' || event.path !== validPath) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                statusCode: 400,
                message: 'Bad request syntax or unsupported method. Request path: ${event.path}. HTTP method: ${event.httpMethod}'
            })
        };
    }

    // If the method is GET and path is correct, process the request
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            statusCode: 200,
            message: 'Hello from Lambda'
        })
    };

    return response;
};