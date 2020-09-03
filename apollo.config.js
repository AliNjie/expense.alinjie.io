const path = require("path");

module.exports = {
  client: {
    name: "Expense manager",
    includes: ["./pages/**/*.{tsx,ts}"],
    tagName: "gql",
    service: {
      name: "expense-manager",
      url: "http://localhost:3000/api/graphql",
    },
  },
};
