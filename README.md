[![NPM Version](https://badge.fury.io/js/get-combos.svg)](https://badge.fury.io/js/get-combos)
[![CI](https://github.com/justinlettau/get-combos/workflows/CI/badge.svg)](https://github.com/justinlettau/get-combos/actions)
[![codecov](https://codecov.io/gh/justinlettau/get-combos/branch/master/graph/badge.svg)](https://codecov.io/gh/justinlettau/get-combos)
[![Dev Dependency Status](https://david-dm.org/justinlettau/get-combos/dev-status.svg)](https://david-dm.org/justinlettau/get-combos?type=dev)

# Get Combinations

Get all possible combinations / permutations of an array of items.

# Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)

# Installation

```bash
npm install get-combos --save
```

# Usage

```ts
import { combinations } from 'get-combos';

const result = combinations(['A', 'B']);

console.log(result);
// => [
//  ['A', 'A'],
//  ['A', 'B'],
//  ['B', 'A'],
//  ['B', 'B'],
// ]
```

# Development

```
npm install
npm run build
```
