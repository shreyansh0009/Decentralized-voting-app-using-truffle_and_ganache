const Web3 = require('web3');
const contract = require('@truffle/contract');

const votingArtifacts = require('../../build/contracts/Voting.json');
var VotingContract = contract(votingArtifacts);

window.App = {
  eventStart: function() {
    window.ethereum.request({ method: 'eth_requestAccounts' });
    VotingContract.setProvider(window.ethereum);
    VotingContract.defaults({ from: window.ethereum.selectedAddress, gas: 6654755 });

    // Load account data
    App.account = window.ethereum.selectedAddress;
    $("#accountAddress").html("Your Account: " + window.ethereum.selectedAddress);

    VotingContract.deployed().then(function(instance) {
      instance.getCountCandidates().then(function(countCandidates) {
        // Fetch candidates from the database (via FastAPI)
        $.get("http://localhost:8000/get_candidates", function(data) {
          var candidates = data.candidates;

          // Loop through the candidates and display them in the table
          candidates.forEach(function(candidate) {
            var id = candidate[0];  // Assuming the first column is candidate_id
            var name = candidate[1];  // Assuming the second column is name
            var party = candidate[2];  // Assuming the third column is party
            var voteCount = candidate[3];  // Assuming the fourth column is vote_count

            // Generate the HTML to display the candidate in the table
            var viewCandidates = `<tr><td> <input class="form-check-input" type="radio" name="candidate" value="${id}" id=${id}>` + name + "</td><td>" + party + "</td><td>" + voteCount + "</td></tr>";
            $("#boxCandidate").append(viewCandidates);
          });
        }).fail(function(error) {
          console.error("Error fetching candidates from database", error);
        });

        window.countCandidates = countCandidates;
      });

      instance.checkVote().then(function(voted) {
        if (!voted) {
          $("#voteButton").attr("disabled", false);
        }
      });
    }).catch(function(err) {
      console.error("ERROR! " + err.message);
    });
  },

  vote: function() {
    var candidateID = $("input[name='candidate']:checked").val();
    if (!candidateID) {
      $("#msg").html("<p>Please vote for a candidate.</p>");
      return;
    }
    VotingContract.deployed().then(function(instance) {
      instance.vote(parseInt(candidateID)).then(function(result) {
        $("#voteButton").attr("disabled", true);
        $("#msg").html("<p>Voted</p>");
        window.location.reload(1);
      });
    }).catch(function(err) {
      console.error("ERROR! " + err.message);
    });
  }
}

window.addEventListener("load", function() {
  if (typeof web3 !== "undefined") {
    console.warn("Using web3 detected from external source like Metamask");
    window.eth = new Web3(window.ethereum);
  } else {
    console.warn("No web3 detected. Falling back to http://localhost:9545. You should remove this fallback when you deploy live, as it's inherently insecure.");
    window.eth = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:9545"));
  }
  window.App.eventStart();
});
