## Running Storybook

To run Storybook locally, follow these steps below:

1. Make sure you have [Docker](https://www.docker.com/get-started) installed.
2. Build the Docker image in the root directory of the project:
   ```bash
   docker build -t my-component-library .
   ```
3. Run a Docker container named "peixuan_coding_assignment13" and map the port to `8083`:
   ```bash
   docker run --name peixuan_coding_assignment13 -p 8018:6006 my-component-library
   ```
4. Open your browser and go to [http://localhost:8018](http://localhost:8083) to view Storybook.
