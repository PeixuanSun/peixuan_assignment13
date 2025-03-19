## Running Storybook

To run Storybook locally, follow these steps below:

1. Clone the repository:

   ```sh
   git clone git@github.com:PeixuanSun/peixuan_assignment13.git

   cd peixuan_assignment13

   ```

2. Make sure you have [Docker](https://www.docker.com/get-started) installed.

3. Build the Docker image in the root directory of the project:
   ```bash
   docker build -t my-component-library .
   ```
4. Run a Docker container named "peixuan_coding_assignment13" and map the port to `8018`:
   ```bash
   docker run --name peixuan_coding_assignment13 -p 8018:6006 my-component-library
   ```
5. Open your browser and go to [http://localhost:8018](http://localhost:8018) to view Storybook.
