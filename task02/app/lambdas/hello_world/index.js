exports.handler = async (event) => {

    const expectedPath = '/hello';
     if (event.path !== expectedPath) {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    message: `Bad request syntax or unsupported method. Request path:  ${event.path}. HTTP method: ${event.httpMethod}`,
                    statusCode: 400  // Including status code in the body if required
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