```markdown
# CI Pipeline Practical — Sumanth Reddy K (ID: 9040660)

A concise demonstration of a GitHub Actions–driven CI pipeline for a sample Node.js application, featuring build, test, lint, Docker packaging, and multi-environment delivery.

---

##  Repository Structure

```

ci-practical-Sumanth-9040660/
├── .github/
│   └── workflows/
│       └── ci.yml              # CI pipeline definition
├── config/
│   ├── .env.dev                # Dev environment variables
│   └── .env.prod               # Prod environment variables
├── src/
│   └── index.js                # Express app entrypoint
├── tests/
│   └── index.test.js           # Jest unit tests (4+ tests)
├── Dockerfile                  # Docker image build
├── package.json                # NPM scripts & dependencies
├── .gitignore                  # Files to ignore in git
└── README.md                   # This document

````

---

##  Prerequisites

- **Git** & **Node.js** v16+  
- **Docker** & Docker Hub account  
- **GitHub** repository with secrets:
  - `DOCKER_USER`
  - `DOCKER_PASS`

---

##  Setup & Local Development

1. **Clone repository**  
   ```bash
   git clone https://github.com/SumanthReddyKConestoga/ci-pipeline-MIDExam-practical
   cd ci-practical-Sumanth-9040660
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure dev environment**
   Copy `config/.env.dev` (contains `PORT=3000` & `NODE_ENV=development`).

4. **Run application**

   ```bash
   npm start
   ```

   Visit `http://localhost:3000/` to see:

   ```json
   { "message": "Hello from Sumanth (ID: 9040660)!" }
   ```

---

##  Branching & Deployment Strategy

* **`develop`**

  * Automatic CI on push → builds & pushes Docker image tagged `:dev`.
* **`main`**

  * Manual trigger via GitHub Actions → builds & pushes Docker image tagged `:latest`.

Feature work should be done on branches off `develop`, with PRs targeting `develop`.

---

## CI Pipeline (`.github/workflows/ci.yml`)

1. **Checkout & Setup**
2. **Build** (`npm install` & optional `npm run build`)
3. **Test** (`npm test`, ≥4 Jest tests)
4. **Lint** (`npx eslint src/**/*.js`)
5. **Dockerize & Publish**

   * Tag as `dev` on `develop`, `latest` on manual/`main`.
   * Login to Docker Hub and push.

---

## 🐳 Docker Usage

```bash
# Development
docker run -d -p 3000:3000 $DOCKER_USER/my-app:dev

# Production
docker run -d -p 3000:3000 $DOCKER_USER/my-app:latest
```

---

## Environment Configuration

* **Development**: `config/.env.dev`
* **Production**:  `config/.env.prod`

*Load these in your code via [dotenv](https://www.npmjs.com/package/dotenv) based on `NODE_ENV`.*

---

## Repository Hygiene

* **`.gitignore`** includes:

  ```
  node_modules/
  .env*
  coverage/
  ```
* Clear folder separation for code, tests, config, and CI.

---

> *Seamless CI meets dependable delivery — a blend of modern agility and time-tested practices.*

```
```
