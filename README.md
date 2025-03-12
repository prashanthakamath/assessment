# Instructions to Run a React Project from GitHub on a New Machine

Before you begin, ensure you have the following installed on your new machine:

1. **Git** (for cloning the project from GitHub)
2. **Node.js and npm** (for installing dependencies and running the React app)

## Step 1: Install Git

### For Windows:

1. Download Git from [here](https://git-scm.com/download/win).
2. Run the installer and follow the installation steps.

### For macOS:

1. Install Git using [Homebrew](https://brew.sh/) (if you have it):
   ```bash
   brew install git
   ```

## Step 2: Install Node.js and NPM

### For Windows and macOS:

1. Download and install Node.js (which includes npm) from Node.js official website.(https://nodejs.org/en).

## Step 3: Clone React Project from GitHub

1. Open Command Prompt (Windows) or Terminal (macOS/Linux).
2. Clone the repository using the git clone command like :
   https://github.com/prashanthakamath/assessment.git

3. Navigate to project repository:
   cd assessment

## Step 4: Install Project Dependencies

1. Inside the project repository, run:
   npm install

## Step 5: Start the React development srver

1. Once the dependencies are installed, start the development server with:
   npm run dev
2. The React app will now start on a local server, typically at http://localhost:3000/. Open your browser and visit that address to see the React app running.
