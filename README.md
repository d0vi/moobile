![Last commit][last-commit-shield]
![MIT License][license-shield]

<br />
<p align="center">
  <a href="https://github.com/d0vi/moobile">
    <img src="images/logo.png" alt="I'm a cow, mooo!" width="80" height="80">
  </a>

  <h3 align="center">moobile</h3>

  <p align="center">
    The best smartphone marketplace in the world!
    <br />
    <a href="https://github.com/d0vi/moobile"><strong>See source code ยป</strong></a>
    <br />
    <br />
    <a href="https://github.com/d0vi/moobile/issues">Report a bug</a>
    ยท
    <a href="https://github.com/d0vi/moobile/issues">Request a feature</a>
  </p>
</p>

<details open="open">
  <summary>Table of contents</summary>
  <ol>
    <li>
      <a href="#๐-about-the-project">About the project</a>
      <ul>
        <li><a href="#๐ง-built-with">Built with</a></li>
      </ul>
    </li>
    <li>
      <a href="#๐จโ๐ป-getting-started">Getting started</a>
      <ul>
        <li><a href="#๐-prerequisites">Prerequisites</a></li>
        <li><a href="#๐-installation">Installation</a></li>
        <li><a href="#๐โโ๏ธ-running-the-application">Running the application</a></li>
        <li><a href="#๐ต๏ธ-linting">Linting</li></a>
        <li><a href="#๐-building-for-production">Building for production</li>
      </ul>
    </li>
    <li><a href="#๐-contributing">Contributing</a></li>
    <li><a href="#๐ฆ-versioning">Versioning</a></li>
    <li><a href="#โ๏ธ-license">License</a></li>
  </ol>
</details>

## ๐ About the project

Either you are buying a new phone or just taking a little peek, this simple marketplace is all you need! We have over 100+ smartphones on sale and the best prices out there.

### ๐ง Built with

Here are some of the tools and frameworks that make moobile so awesome:

- [React](https://reactjs.org): a JavaScript library for building user interfaces. React is the esqueleton, muscles and nerves of moobile's web application. On this front, [Create React App](https://create-react-app.dev/) offers a modern build setup with zero configuration.
- [Bulma](https://bulma.io): a modern CSS framework. I decided to build my own atomic components using Bulma's CSS utilities instead of using a pre-built components library because I think the point of this project is to prove myself worth.
- [Prettier](https://prettier.io): an opinionated code formatter with great flexibility. Here it is configured with a few custom options.
- [Husky](https://typicode.github.io/husky): Git hooks. One pre-commit hook is in place to make sure all commits are correctly formatted.

## ๐จโ๐ป Getting started

To get a local copy up and running follow these simple example steps.

### ๐ Prerequisites

You only need [Node.js](https://nodejs.org/es/) and [npm](https://www.npmjs.com/) to be able to run this project.

### ๐ Installation

Clone the repo using `git clone https://github.com/d0vi/moobile.git`.

Install the dependencies via npm with `npm install`.

### ๐โโ๏ธ Running the application

This will launch the app on the port 3000:

```
npm start
```

### ๐ต๏ธ Linting

ESLint will analyze the code to find any problem:

```
npm run lint
```

### ๐ Building for production

```
npm run build
```

## ๐ Contributing

Any contributions are greatly appreciated.

1. Fork the project.

2. Create your feature branch.
   ```sh
   git switch -c feature/something-amazing
   ```
3. Commit your changes.
   ```sh
   git commit -m "Add a new amazing feature"
   ```
4. Push your branch to your remote fork.
   ```sh
   git push origin feature/something-amazing
   ```
5. Open a pull request.

## ๐ฆ Versioning

We use [SemVer](https://semver.org) for versioning. For the versions available, see the releases section on GitHub.

## โ๏ธ License

Distributed under the MIT License. See `LICENSE` for more information.

[last-commit-shield]: https://img.shields.io/github/last-commit/d0vi/moobile
[license-shield]: https://img.shields.io/github/license/d0vi/moobile
