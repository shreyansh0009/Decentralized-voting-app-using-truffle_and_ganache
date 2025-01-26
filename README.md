# Full-Stack Voting-Dapp

Build using Ethereum, React.js, Tailwind CSS, The Graph, and ethers.js.

## Project Title and Description:
This repository contains a decentralized voting application built using Truffle and Ganache.
The purpose of this project is to provide a secure and transparent platform for conducting voting processes using blockchain technology.
Through the use of Ethereum smart contracts, voters can cast their votes securely, and the results can be verified by all participants in the network.


### Introduction

The Full-Stack dApp for Secure Decentralized Voting System is a cutting-edge application that leverages the power of blockchain technology to revolutionize the way we conduct elections.
It addresses critical challenges associated with traditional voting systems and introduces a secure, transparent, and tamper-proof platform for elections. 
This dApp provides a seamless experience for both candidates and voters while ensuring the integrity of the democratic process.

### The Problem

Traditional voting systems are burdened with various issues that include:

1. **Security Concerns**: Vulnerable to fraud and manipulation, traditional elections often lack a robust security framework to safeguard the integrity of the voting process.

2. **Transparency**: Voters and candidates may question the legitimacy of the outcome.

3. **Accessibility**: Physical voting locations can be challenging to access for certain individuals, such as those with disabilities or those living in remote areas.

4. **Timeliness**: The time it takes to count and declare results can lead to delays in announcing the winner, potentially causing uncertainty and disputes.

### The Solution

Our Full-Stack dApp offers an innovative solution to these challenges:

1. **Blockchain Security**: The heart of our dApp is a Solidity-based smart contract. It ensures the highest level of security and transparency, making it virtually impossible for malicious actors to manipulate the election results.

2. **Transparent Voting**: Each vote is recorded on the blockchain, providing an immutable record of every vote cast. This ensures that the entire voting process is transparent and easily auditable.

3. **Accessibility**: Our dApp is accessible to anyone with an internet connection and an Ethereum wallet (e.g., MetaMask). This includes people with disabilities and those living in remote areas.

4. **Automated Counting**: Votes are automatically counted by the smart contract, eliminating the possibility of counting errors and ensuring real-time, accurate results.

5. **Timely Results**: With automated vote counting, results are available as soon as the election ends. This quick turnaround reduces uncertainty and minimizes the potential for disputes.

### Key Features

- **Candidate Registration**: Aspiring candidates can easily register, providing their name, party affiliation, and personal information.

- **Voter Registration**: Eligible voters can register with their name, age, and gender.

- **Secure Voting**: Voters can securely cast their votes using the dApp during the designated voting period.

- **Efficient Results**: After voting ends, the dApp automatically calculates and declares the election results.

- **Trustworthy Data**: The Graph is integrated for efficient and trustless data querying, further enhancing transparency.

- **Ethers.js Integration**: The dApp interacts with the Ethereum blockchain through ethers.js, ensuring data integrity and security.

### Conclusion

The Full-Stack dApp for Secure Decentralized Voting System marks a significant leap forward in the world of elections.
It brings much-needed transparency, security, and accessibility to the voting process.
With this dApp, we aim to rebuild trust in democratic systems, reduce disputes, and ensure that the voice of every eligible voter is heard.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- An Ethereum wallet (e.g., MetaMask) for interacting with the dApp
- Node.js and npm (Node Package Manager) for running the frontend

## Technologies Used
- Solidity: Used for developing the smart contract to manage elections.
- React.js: Created the user interface for the dApp.
- Tailwind CSS: Styled the frontend components.
- The Graph: Utilized for efficient data querying.
- ethers.js: Interacted with the Ethereum blockchain.

## Getting Started

### Installation

To set up and run the project, follow these steps:

1. Clone this repository:
   ```bash
   git clone https://github.com/shreyansh0009/Decentralized-voting-app-using-truffle_and_ganache.git

2. Change into the project directory:
   ```bash
   cd Voting-dapp
3. Change into the project directory:
   ```bash
   cd client
4. Install the required dependencies for the front end:
   ```bash
   npm install
5. Start the React development server:
   ```bash
   npm start
6. Connect your wallet (MetaMask) to the dApp to participate in elections.

## Configuration:
- Ensure that Ganache is running on your local machine.
- Configure the network settings in Truffle to connect to your Ganache instance.

## Usage
- Election 
- Register as a Candidate: If you want to run for a candidate in the elections, you can register as a candidate.
- Register as a Voter: If you're eligible to vote, you can register as a voter.
- Vote: During the voting period, you can vote for your preferred candidate.
- View Results: Once the election ends, you can view the election results.

## API Reference:
The smart contract exposes the following functions:
- `registerVoter(address _voter)`: Registers a voter with the specified Ethereum address.
- `castVote(uint _candidateId)`: Allows a registered voter to cast their vote for a specific candidate.
- `getVoter(address _voter) returns (bool)`: Checks if the given address is a registered voter.
- `getVoteCount(uint _candidateId) returns (uint)`: Returns the total number of votes received by a candidate.

## Testing:
To run tests for the smart contract, use the following command:
```
truffle test
```

## Smart Contract
The Solidity smart contract is responsible for managing elections, candidates, and voters. The contract includes functions for candidate and voter registration, voting, and result declaration.

## Frontend
The React.js frontend provides a user-friendly interface for interacting with the smart contract. Users can register as candidates and voters, vote during the voting period, and view election results.

## The Graph
The Graph is used to efficiently query data from the Ethereum blockchain. It optimizes data retrieval and enhances the dApp's performance.

## Ethersjs
Ether.js is used for interacting with the Ethereum blockchain, allowing the dApp to send and receive data securely.

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please open an issue or create a pull request with your changes.

## License:
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.

## Contact Information:
For any questions or inquiries, please contact at [saurabhsharraf@gmail.com](mailto:saurabhsharraf@gmail.com).

## Acknowledgments:
ThankYou!
