const projects = [
  {
    "title": "Parity",
    "tools": "Python · Rust · TypeScript · ArkTS · openJiuwen · SwarmFlow · HarmonyOS",
    "details": [
      "Autonomous multi-agent code migration system; won first place in Huawei’s openJiuwen Multi-Agent Challenge at Hack the North 2026.",
      "Coordinated ReAct agents for planning, code generation, expert guidance, and adversarial testing.",
      "Migrated 23 functions across three language pairs, passing 2,146 hidden tests."
    ],
    "url": "https://github.com/AidanHT/Parity",
    "link": "View Parity on GitHub"
  },
  {
    "title": "Promptly",
    "tools": "Rust · Python · TypeScript · React · PostgreSQL · AWS",
    "details": [
      "Launched a platform scoring LLM prompt efficiency, reaching more than 250 users in five days.",
      "Built a distributed execution engine with a Rust daemon and CLI, Docker, and AWS, supporting seven language runtimes with per-job isolation.",
      "Implemented Ed25519 request signing, anti-cheat verification, and row-level access control."
    ],
    "url": "https://github.com/AidanHT/promptly-daemon",
    "link": "View Promptly on GitHub"
  },
  {
    "title": "FuseML",
    "tools": "Python · CUDA · Triton · PyTorch · cuBLASLt · TorchDynamo/FX",
    "details": [
      "Built a PyTorch JIT compiler that fuses GEMM and pointwise operations into CUDA and Triton kernels.",
      "Reduced HBM traffic by 70% with a 1.79× speedup.",
      "Designed a ten-stage compiler pipeline with a three-tier cost model and SRAM autotuning; validated with 888 pytest cases across 12 GPU benchmarks."
    ],
    "url": "https://github.com/AidanHT/FuseML",
    "link": "View FuseML on GitHub"
  },
  {
    "title": "Personal Portfolio",
    "tools": "HTML · CSS · JavaScript · GitHub Pages",
    "details": [
      "Personal website featuring my experience, projects, skills, and a map of Hawaii."
    ],
    "url": "https://github.com/AidanHT/AidanHT.github.io",
    "link": "View Personal Portfolio on GitHub"
  }
];

let displayedProjects = 0;
const projectList = document.getElementById('project-list');
const loadMoreButton = document.getElementById('load-more-projects');

function displayProjects() {
  const nextProjects = projects.slice(displayedProjects, displayedProjects + 2);
  nextProjects.forEach((project) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-content">
        <span class="card-title teal-text">${project.title}</span>
        <p class="brown-text">${project.tools}</p>
        <ul>${project.details.map((detail) => `<li>${detail}</li>`).join('')}</ul>
      </div>
      <div class="card-action"><a href="${project.url}">${project.link}</a></div>`;
    projectList.appendChild(card);
  });
  displayedProjects += nextProjects.length;
  if (displayedProjects >= projects.length) loadMoreButton.style.display = 'none';
}

loadMoreButton.addEventListener('click', displayProjects);
displayProjects();
