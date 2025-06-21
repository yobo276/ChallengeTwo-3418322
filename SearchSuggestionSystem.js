
// SearchSuggestionSystem.js

class SearchSuggestionSystem {
  constructor(products) {
    // Sort the product list lexicographically
    this.products = products.sort();
  }

  getSuggestions(searchWord) {
    const results = [];
    let prefix = "";

    for (const char of searchWord) {
      prefix += char;
      const matches = [];

      for (const product of this.products) {
        if (product.startsWith(prefix)) {
          matches.push(product);
          if (matches.length === 3) break; // Only need top 3
        }
      }

      results.push(matches);
    }

    return results;
  }
}

// Example usage:
const products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
const searchWord = "mouse";

const system = new SearchSuggestionSystem(products);
console.log(system.getSuggestions(searchWord));

/*
Expected Output:
[
  ["mobile", "moneypot", "monitor"],
  ["mobile", "moneypot", "monitor"],
  ["mouse", "mousepad"],
  ["mouse", "mousepad"],
  ["mouse", "mousepad"]
]
*/
