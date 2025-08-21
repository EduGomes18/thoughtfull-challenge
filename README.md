# Thoughtfull Challenge

## Overview

This project contains a function for dispatching packages to the correct stack in a robotic automation factory, based on their volume and mass.

### Function: `sort`

- **Location:** `sort.ts`
- **Purpose:** Determines if a package is `STANDARD`, `SPECIAL`, or `REJECTED`.
- **Rules:**
  - **Bulky:** Volume ≥ 1,000,000 cm³ or any dimension ≥ 150 cm
  - **Heavy:** Mass ≥ 20 kg
  - **STANDARD:** Not bulky or heavy
  - **SPECIAL:** Bulky or heavy
  - **REJECTED:** Both bulky and heavy
 
## Actual Test Ran

<img width="674" height="345" alt="image" src="https://github.com/user-attachments/assets/5de4cc8a-d0c8-48bf-8ecf-a5dc3bdbf73f" />


## How to Run

### Prerequisites

- Node.js
- npm

### Install dependencies

```sh
npm install
```

### Run the sample script

```sh
npm run start
```

This will execute `index.ts` and print sample results to the console.

## How to Run Tests

```sh
npm test
```

This will run the Jest test suite and verify the logic of the `sort` function.

## Files

- `sort.ts`: Main function implementation
- `sort.test.ts`: Jest test cases
- `index.ts`: Sample usage and output
- `tsconfig.json`: TypeScript configuration
- `jest.config.js`: Jest configuration
- `package.json`: Project metadata and scripts
