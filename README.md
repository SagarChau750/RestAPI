# E-commerce REST API with Sorting, Paging, and Frontend Integration

This project is a comprehensive e-commerce application that includes a REST API built with Node.js, Express, and MongoDB for backend operations, with features such as sorting and pagination. 

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Configuration](#configuration)
- [Contributing](#contributing)

## Introduction

This project provides an e-commerce REST API that allows users to add, update, delete, and fetch products. It includes features such as sorting and pagination to enhance data retrieval. The frontend fetches and displays this data from the API.

## Features

- RESTful API with CRUD operations
- Sorting and pagination capabilities
- MongoDB integration for data storage

## Technologies Used

- Backend:
  - [Node.js](https://nodejs.org/)
  - [Express](https://expressjs.com/)
  - [MongoDB](https://www.mongodb.com/)
  - [Mongoose](https://mongoosejs.com/)


## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine
- [MongoDB](https://www.mongodb.com/) server running locally or on the cloud

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/SagarChau750/RestAPI.git
   
    ```

2. Install backend dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the following:
    ```plaintext
    MONGODB_URL=your_mongodb_connection_string
    PORT=5000
    ```

### Running the Application

1. Start the server:
    ```bash
    npm start
    ```

2. The API will be running on `http://localhost:5000`.

## API Endpoints

### Products

- **Get All Products**
  - **URL:** `/api/products`
  - **Method:** `GET`
  - **Description:** Retrieves a list of all products with optional sorting and pagination.
  - **Query Parameters:**
    - `sort`: Sort by a field (e.g., `name`, `price`)
    - `page`: Page number for pagination
    - `limit`: Number of items per page


## Configuration
MongoDB Connection: Ensure that the MONGODB_URL in your .env file is correctly set to your MongoDB connection string.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## Fork the repository

1. Create your feature branch (git checkout -b feature/AmazingFeature)
2. Commit your changes (git commit -m 'Add some AmazingFeature')
3. Push to the branch (git push origin feature/AmazingFeature)
4. Open a pull request



