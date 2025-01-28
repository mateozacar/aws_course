from tests.test_hello_world import HelloWorldLambdaTestCase


class TestSuccess(HelloWorldLambdaTestCase):

    def test_success(self):
        """
        Tests the successful execution of the handle_request function
        ensuring it returns the appropriate response format and data.
        """
        expected_response = {
            "statusCode": 200,
            "message": "Hello from Lambda"
        }
        # We'll simulate the event and context as empty dicts since no specific
        # input handling is demonstrated in your provided lambda code.
        actual_response = self.HANDLER.handle_request({}, {})

        self.assertEqual(actual_response, expected_response)

