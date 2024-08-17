This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Pantry Management App
### Overview
This project is a simple web application for managing a pantry inventory using Firebase Firestore as the backend. The app allows users to add, update, and remove items from their pantry, displaying the current list of items and their quantities.

### Features
- **Add Items**: Add new items to your pantry. If an item already exists, its quantity is increased.
- **Remove Items**: Remove items from your pantry. If an item's quantity is more than one, it decreases the quantity; otherwise, it removes the item.
- **View Pantry**: Displays all pantry items with their respective quantities in a user-friendly interface.

### Technologies Used
- **React**: Frontend library for building the user interface.
- **Firebase Firestore**: Cloud database for storing pantry items.
- **Material-UI (MUI)**: UI components for React to create the layout and design.
- **JavaScript (ES6+)**: For handling the app's logic and Firebase interactions.

### How It Works
1. **Data Retrieval**: The app fetches all pantry items from the Firestore database on load and whenever items are added or removed.
2. **Adding Items**: Users can add an item by opening a modal, typing the item name, and clicking "Add." If the item exists, its quantity is incremented.
3. **Removing Items**: Users can remove an item or decrease its quantity directly from the pantry list displayed on the screen.
4. **Real-Time Updates**: The app updates the pantry list in real-time to reflect changes made to the inventory.


## Getting Started
### Prerequisites
- Node.js and npm installed on your machine.
- Firebase project set up with Firestore.

### Installation
1. Clone the repository:
```
git clone https://github.com/yourusername/pantry-management.git
```
2. Navigate to the project directory:
```
cd pantry-management
```
3. Install the dependencies:
```
npm install
```
### Configuration
Set up Firebase:
- Replace `@/firebase` with your Firebase configuration file.
Running the App

### Running the App
1. Start the development server
```
npm run dev
```
2. Open the app in your browser at `http://localhost:3000`

### Usage
- Click on the "ADD" button to open the modal for adding items.
- Enter the item name and click "Add" to add the item to the pantry.
- View all items in the pantry with their quantities.
- Remove items or decrease their quantity using the "Remove" button next to each item.


### License
This project is licensed under the MIT License. See the LICENSE file for more details.