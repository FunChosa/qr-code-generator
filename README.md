# qr-code-generator

This React application, built with Vite, generates QR codes from any text input using the qrserver.com API.  It provides a simple way to create QR codes from arbitrary text and URLs, showcasing the use of the qrserver.com API within a React application.


## Project Setup

1. **Clone the repository:** `git clone https://github.com/FunChosa/qr-code-generator.git`
2. **Navigate to the project directory:** `cd qr-code-generator`
3. **Install dependencies:** `npm install`
4. **Start the development server:** `npm run dev`


## Features

* **Text Input:**  Enter any text to generate a QR code.
* **QR Code Generation:** Click the "Generate" button to create the QR code.
* **Image Display:** The generated QR code is displayed as an image.
* **Reset Button:** Clears the text input field.
* **Error Handling:** Displays a message if the API request fails.


## Technology Stack

* React: ^18.3.1
* Vite: ^5.4.10
* CSS


## State Management

The application's state is managed using the `useState` hook.


## API Interaction

The application uses `fetch` to make API calls to `api.qrserver.com`.  If the API request fails, a generic error message ("Something went wrong") is displayed to the user.

## Deployment

Deployed on Netlify: https://funchosa-qr-code-generator.netlify.app


## Future Enhancements

* Implement a download functionality for the QR code in various sizes.


## Contributing

Contributions are welcome! Please open an issue or submit a pull request.