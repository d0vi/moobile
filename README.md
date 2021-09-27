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
    <a href="https://github.com/d0vi/moobile"><strong>See source code »</strong></a>
    <br />
    <br />
    <a href="https://github.com/d0vi/moobile/issues">Report a bug</a>
    ·
    <a href="https://github.com/d0vi/moobile/issues">Request a feature</a>
  </p>
</p>

<details open="open">
  <summary>Table of contents</summary>
  <ol>
    <li>
      <a href="#🔉-about-the-project">About the project</a>
      <ul>
        <li><a href="#🔧-built-with">Built with</a></li>
      </ul>
    </li>
    <li>
      <a href="#👨‍💻-getting-started">Getting started</a>
      <ul>
        <li><a href="#📝-prerequisites">Prerequisites</a></li>
        <li><a href="#🔌-installation">Installation</a></li>
        <li><a href="#🏃‍♂️-running-the-application">Running the application</a></li>
        <li><a href="#🕵️-linting">Linting</li></a>
        <li><a href="#🎁-building-for-production">Building for production</li>
      </ul>
    </li>
    <li><a href="#🔝-contributing">Contributing</a></li>
    <li><a href="#📦-versioning">Versioning</a></li>
    <li><a href="#⚖️-license">License</a></li>
  </ol>
</details>

## 🔉 About the project

Either you are buying a new phone or just taking a little peek, this simple marketplace is all you need! We have over 100+ smartphones on sale and the best prices out there.

### 🔧 Built with

Here are some of the tools and frameworks that make moobile so awesome:

- [React](https://reactjs.org): a JavaScript library for building user interfaces. React is the esqueleton, muscles and nerves of moobile's web application. On this front, [Create React App](https://create-react-app.dev/) offers a modern build setup with zero configuration.
- [Bulma](https://bulma.io): a modern CSS framework. I decided to build my own atomic components using Bulma's CSS utilities instead of using a pre-built components library because I think the point of this project is to prove myself worth.
- [Prettier](https://prettier.io): an opinionated code formatter with great flexibility. Here it is configured with a few custom options.
- [Husky](https://typicode.github.io/husky): Git hooks. One pre-commit hook is in place to make sure all commits are correctly formatted.

## 👨‍💻 Getting started

To get a local copy up and running follow these simple example steps.

### 📝 Prerequisites

You only need [Node.js](https://nodejs.org/es/) and [npm](https://www.npmjs.com/) to be able to run this project.

### 🔌 Installation

Clone the repo using `git clone https://github.com/d0vi/moobile.git`.

Install the dependencies via npm with `npm install`.

### 🏃‍♂️ Running the application

This will launch the app on the port 3000:

```
npm start
```

### 🕵️ Linting

ESLint will analyze the code to find any problem:

```
npm run lint
```

### 🎁 Building for production

```
npm run build
```

## 🔝 Contributing

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

## 📦 Versioning

We use [SemVer](https://semver.org) for versioning. For the versions available, see the releases section on GitHub.

## ⚖️ License

Distributed under the MIT License. See `LICENSE` for more information.

[last-commit-shield]: https://img.shields.io/github/last-commit/d0vi/moobile
[license-shield]: https://img.shields.io/github/license/d0vi/moobile
