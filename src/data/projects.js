const projects = [
  {
    slug: 'transformer-visualization-dashboard',
    title: 'Transformer Visualization Dashboard',
    summary: 'Interactive attention maps, heads, and layer introspection with a cohesive dark theme. Built to explore token flows and interpret behavior.',
    tags: ['Transformers', 'Visualization', 'LLM'],
    metrics: [
      { label: 'Heads compared', value: '48+' },
      { label: 'Latency per view', value: '< 120 ms' },
      { label: 'Model support', value: 'Open / Local' },
      { label: 'Theme', value: 'Neon dark' },
    ],
    demo: '', // add link if hosted
    repo: 'https://github.com/Bmocc/Transformer-Visualization-Dashboard',
    cover: '/covers/transformer-dashboard.png',
    details: `
Features
• Attention head comparison and aggregation
• Layer selection and token highlighting
• Export of views for reports

Stack
• React, MUI, Vite
• Optional: WebGPU shaders for heatmaps
    `.trim(),
  },
  {
    slug: 'lunar-lander-rl',
    title: 'Lunar Lander — Reinforcement Learning',
    summary: 'Training agents to land safely in the LunarLander environment; experiments with policy gradient and actor‑critic variants, entropy reg, and reward shaping.',
    tags: ['RL', 'LunarLander', 'Actor‑Critic'],
    metrics: [
      { label: 'Avg reward', value: '≥ 200' },
      { label: 'Solved episodes', value: 'Consistent' },
      { label: 'Stability', value: 'Entropy + baseline' },
      { label: 'Env', value: 'Gymnasium' },
    ],
    cover: '/covers/lunar-lander.gif',
    details: `
Approach
• REINFORCE baseline, then Actor‑Critic (A2C‑style)
• Entropy regularization for exploration; advantage baseline for variance reduction
• Reward shaping to balance fuel use and soft landings

Outputs
• Training curves (moving avg reward)
• Policy/value heatmaps and episode gifs
    `.trim(),
  },
  {
    slug: 'po-review-agent',
    title: 'GPT‑Powered Purchase‑Order Review Agent',
    summary: 'Autonomous agents parsing POs, querying ERP, and drafting compliance reports. Reduced review cycle time and elevated precision.',
    tags: ['Agentic AI', 'Automation', 'RAG'],
    metrics: [
      { label: 'Cycle time', value: '< 8 hrs' },
      { label: 'Precision', value: '94%' },
      { label: 'Integrations', value: 'Oracle ERP' },
      { label: 'Throughput', value: 'Hundreds/day' },
    ],
    cover: '/covers/po-agent.svg',
  },
  {
    slug: 'agentic-document-extraction',
    title: 'Agentic Document Extraction',
    summary: 'Multi‑tool agent pipeline that ingests PDFs/scans, performs OCR, schema extraction, and validation with retrieval checks. Built for messy unstructured docs.',
    tags: ['Agentic AI', 'Extraction', 'OCR', 'RAG'],
    metrics: [
      { label: 'Docs/day', value: '5k+' },
      { label: 'Latency P90', value: '< 2 min' },
      { label: 'Field F1', value: '≥ 0.92' },
      { label: 'Sources', value: 'PDF, Scans, Emails' },
    ],
    cover: '/covers/agentic-docs.svg',
    repo: 'https://github.com/Bmocc/Agentic-Document-Extraction',
    details: `
Flow
• Ingestion → OCR → chunking → extraction prompts → heuristics/validators → RAG‑backed verification → export (JSON/CSV)

Highlights
• Auto‑retry with function/tool calling on ambiguous fields
• Cross‑field consistency checks; confidence scores and audit trails
• Pluggable vector DB and storage backends
    `.trim(),
  },
  {
    slug: 'kb-rag-system',
    title: 'Engineering Knowledge‑Base RAG',
    summary: 'FAISS + SQL hybrid store with 10M embeddings and sub‑400 ms retrieval latency. Boosts first‑response accuracy significantly.',
    tags: ['RAG', 'Vector Search', 'Infra'],
    metrics: [
      { label: 'Latency P50', value: '< 400 ms' },
      { label: 'Embeddings', value: '10M' },
      { label: 'Accuracy lift', value: '+28%' },
      { label: 'Store', value: 'FAISS + Postgres' },
    ],
    cover: '/covers/rag-kb.svg',
  },
  {
    slug: 'rl-policy-gradient-playground',
    title: 'RL Policy Gradient Playground',
    summary: 'Experiments comparing REINFORCE and Actor‑Critic with reward shaping and entropy regularization across gridworld and cartpole‑like tasks.',
    tags: ['RL', 'Policy Gradients', 'Research'],
    metrics: [
      { label: 'Environments', value: '2+' },
      { label: 'Avg steps to solve', value: '↓ 35%' },
      { label: 'Time/epoch', value: 'Fast' },
      { label: 'Reproducibility', value: 'Seeds + plots' },
    ],
    cover: '/covers/rl-policy.svg',
    details: `
• Baselines for REINFORCE and A2C
• Reward shaping experiments and ablations
• Visualize training curves and policy heatmaps
    `.trim(),
  },
]

export default projects
