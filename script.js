// Agentic AI in CI/CD — Interactive Tutorial
// 100 MCQs (10 per section) + navigation & UI
"use strict";

/* ------------------------------------------------------------------ */
/*  QUIZ DATA — exactly 100 questions, 10 per section                 */
/* ------------------------------------------------------------------ */
const QUIZZES = {
  1: [
    { q: "What is the main assumption of this tutorial regarding programming experience?", options: ["You must know Python", "Zero programming experience is assumed", "You need 5+ years of DevOps", "You must have a CS degree"], correct: 1, explain: "The prerequisites section explicitly states zero programming experience is assumed. A web browser and curiosity are enough to start." },
    { q: "In the simplest terms used here, what does CI/CD refer to?", options: ["A type of AI model", "A way to automatically build, test, and ship software", "A cloud storage service", "A programming language"], correct: 1, explain: "CI/CD is Continuous Integration / Continuous Delivery (or Deployment) — an automated pipeline for building, testing, and releasing software." },
    { q: "What is an 'agent' in the context of this tutorial?", options: ["A human project manager", "Software that can take actions on its own to reach a goal", "A type of database", "A CSS framework"], correct: 1, explain: "An agent is software that acts autonomously toward a goal — not just answering questions but taking steps (run tests, edit files, deploy)." },
    { q: "Which type of AI exists today according to the tutorial?", options: ["General AI", "Narrow AI", "Superintelligent AI", "Conscious AI"], correct: 1, explain: "Narrow AI is specialized for specific tasks (spam filters, chatbots, photo tagging). General AI does not exist yet." },
    { q: "What is Generative AI?", options: ["AI that only classifies images", "AI that creates new content like text, images, or code", "AI that runs hardware only", "AI that replaces all human jobs instantly"], correct: 1, explain: "Generative AI produces new content — text, images, code — rather than only labeling or filtering existing data." },
    { q: "The vending machine vs. chef analogy illustrates that traditional programs are ___ while AI is more ___.", options: ["flexible / rigid", "rigid / adaptive", "slow / fast only", "free / expensive"], correct: 1, explain: "Traditional programs follow fixed rules (vending machine: same input → same output). AI adapts based on patterns learned from vast examples (chef improvises)." },
    { q: "Which item is listed as optional but helpful for learning?", options: ["A paid cloud server", "A free AI account like ChatGPT or Claude", "A mechanical keyboard", "A GitHub Enterprise license"], correct: 1, explain: "A free AI account is optional but helps concepts 'click' faster as you experiment while reading." },
    { q: "General AI (human-level intelligence across any task) is:", options: ["Available in ChatGPT today", "Hypothetical and does not exist yet", "Required for CI/CD pipelines", "The same as narrow AI"], correct: 1, explain: "General AI remains a research goal. All production AI today is narrow/specialized." },
    { q: "This tutorial focuses on generative AI growing into agents that help with:", options: ["Only image editing", "Software delivery pipelines (CI/CD)", "Hardware manufacturing only", "Social media marketing only"], correct: 1, explain: "The arc of the tutorial moves from generative AI basics to agents that can participate in building, testing, and shipping software." },
    { q: "What three things does the tutorial say you need to start?", options: ["Python, Docker, Kubernetes", "Curiosity, a web browser, and optionally a free AI account", "A GPU cluster and $10,000", "A computer science PhD"], correct: 1, explain: "The prerequisites are intentionally minimal: curiosity, a modern browser, and optionally a free AI chat account." }
  ],
  2: [
    { q: "What is the core task a Large Language Model (LLM) is trained to do?", options: ["Predict the next word/token", "Browse the internet in real time", "Run unit tests automatically", "Store files in the cloud"], correct: 0, explain: "LLMs are trained on massive text to predict the next token — a simple task that scales into complex language understanding." },
    { q: "In the phone-autocomplete analogy, an LLM is like autocomplete but:", options: ["Much smaller and slower", "Supercharged — it can produce paragraphs or code", "Only works for numbers", "Cannot stay on topic"], correct: 1, explain: "LLMs extend the autocomplete idea to full paragraphs, functions, and essays while generally staying coherent." },
    { q: "What are tokens?", options: ["Physical keys on a keyboard", "Chunks of text (roughly parts of words) the model reads", "Git commit hashes", "Docker container images"], correct: 1, explain: "Tokens are sub-word units. Pricing, limits, and context windows are measured in tokens, not whole words." },
    { q: "What is 'inference'?", options: ["The one-time expensive training process", "Each time you actually use the model to get an answer", "Deleting model weights", "Converting code to assembly"], correct: 1, explain: "Training teaches the model once (expensive). Inference is every live use — each chat message or API call." },
    { q: "What is a hallucination in LLM terms?", options: ["A visual glitch on screen", "When the model confidently states something incorrect", "A successful deployment", "A type of GPU error"], correct: 1, explain: "Hallucinations occur because LLMs predict plausible text — they can invent facts. Always verify critical output." },
    { q: "By itself, what can a raw LLM primarily produce?", options: ["Text", "Direct button clicks in a browser", "Automatic production deployments", "Database migrations without code"], correct: 0, explain: "An LLM alone outputs text. To act in CI/CD it needs tools, context, memory, and orchestration wrapped around it." },
    { q: "Parameters in an LLM roughly correspond to:", options: ["The number of users", "Internal learned 'dials' from training — more often means more capability", "Lines of HTML", "Git branches"], correct: 1, explain: "Parameters are the weights the model learned. Larger models have more parameters and typically greater capability (and cost)." },
    { q: "Training vs. inference: which is typically one-time and very expensive?", options: ["Inference", "Training", "Both are free", "Neither — both are cheap"], correct: 1, explain: "Training consumes enormous compute once. Inference runs per request and is comparatively cheaper per call but adds up at scale." },
    { q: "The word 'Hamburger' might be split into how many tokens?", options: ["Exactly 1 always", "Roughly 2–3 tokens", "Always 10 tokens", "Zero tokens"], correct: 1, explain: "Tokenization splits text into sub-word chunks. Short words may be one token; longer words often span several." },
    { q: "Why can't an LLM alone deploy code to production?", options: ["It lacks the ability to take external actions without additional tooling", "LLMs are banned from cloud providers", "Deploy requires only CSS", "LLMs only work offline"], correct: 0, explain: "LLMs generate text. Agents add tools (APIs, MCP, scripts) so the model's decisions can trigger real actions." }
  ],
  3: [
    { q: "What is a prompt?", options: ["A keyboard shortcut", "The instruction you give an LLM", "A type of virus", "A Git merge conflict"], correct: 1, explain: "A prompt is your message or instruction to the model. Prompt engineering is crafting it for useful, reliable results." },
    { q: "Prompt engineering is best described as:", options: ["Installing more RAM", "The craft of writing instructions well so the model gives useful answers", "Deleting old chat history", "Compiling Python to C"], correct: 1, explain: "Because the model can't read your mind, clear prompts (role, task, context, format) dramatically improve output quality." },
    { q: "In the 'literal intern' analogy, the intern represents:", options: ["The LLM — knowledgeable but needs clear instructions", "A CI server", "A database admin", "A firewall"], correct: 0, explain: "Like a brilliant new intern, an LLM knows a lot generally but needs your specific goal, context, and format spelled out." },
    { q: "Which is NOT listed as part of a good prompt?", options: ["Role", "Task", "Random unrelated trivia", "Format"], correct: 2, explain: "Good prompts include role, task, context, format, and often examples. Irrelevant noise hurts quality." },
    { q: "What is a system prompt?", options: ["A user typing in the chat box", "Behind-the-scenes rules setting overall AI behavior for the conversation", "A Linux kernel patch", "A DNS record"], correct: 1, explain: "The system prompt is persistent instructions (personality, safety rules, workflow) that apply across the whole session." },
    { q: "System prompt vs. user prompt: which is like an employee handbook?", options: ["User prompt", "System prompt", "Both equally", "Neither"], correct: 1, explain: "System prompt = company handbook (standing rules). User prompt = a specific customer request in the moment." },
    { q: "In CI/CD agents, the system prompt is where you encode rules like:", options: ["Favorite color of the logo", "Never deploy to production without approval", "Office lunch menu", "Font size for README"], correct: 1, explain: "Safety and workflow guardrails belong in the system prompt so they persist across every user message." },
    { q: "'Few-shot' prompting means:", options: ["Using very short prompts only", "Providing one or two examples in the prompt", "Shooting a video", "Running few tests"], correct: 1, explain: "Few-shot = showing examples of desired input/output so the model mimics the pattern without lengthy explanation." },
    { q: "Telling the model 'You are an expert Python reviewer' sets the:", options: ["Role", "Database schema", "CPU temperature", "Git remote URL"], correct: 0, explain: "Role framing steers tone, depth, and expertise level — a core technique in prompt engineering." },
    { q: "Asking for output 'as a JSON object with fields action and environment' sets the:", options: ["Format", "Hallucination rate", "Token training cutoff", "SSH key"], correct: 0, explain: "Specifying format (JSON, bullets, table) makes output predictable and easier for software to consume." }
  ],
  4: [
    { q: "What is 'context' for an LLM?", options: ["Only the system prompt", "All information the model can see for the current request", "The model's training data from 2020 only", "Your computer's wallpaper"], correct: 1, explain: "Context includes prompts, recent conversation, pasted documents, code, and tool results visible in the current window." },
    { q: "The context window is best compared to:", options: ["An infinite library", "A desk — only so many papers fit at once", "A submarine", "A power outlet"], correct: 1, explain: "The context window is a token limit. Like a desk, only a finite amount of information fits; choose wisely." },
    { q: "Context engineering is:", options: ["Writing better questions only", "Curating what goes into the context window, in what order and form", "Deleting the LLM", "Installing Tailwind CSS"], correct: 1, explain: "Context engineering selects relevant material, orders it, compresses history, and removes noise — the model's entire workspace." },
    { q: "The model pays special attention to text at the:", options: ["Middle only", "Start and end of the context", "Nowhere in particular", "Footer of the website"], correct: 1, explain: "Research shows primacy and recency effects — beginning and end of context often influence answers most." },
    { q: "Including an entire 50,000-line repo when only one file is broken is an example of:", options: ["Good context engineering", "Poor context engineering — too much noise", "Required by law", "The only way RAG works"], correct: 1, explain: "Relevance matters. Flooding context with irrelevant code distracts the model and wastes tokens." },
    { q: "Compression in context engineering means:", options: ["Zipping files on disk", "Summarizing long histories so they still fit in the window", "Deleting the model weights", "Lowering screen resolution"], correct: 1, explain: "When conversation or logs are too long, summarization preserves key facts while fitting token limits." },
    { q: "For a CI/CD agent fixing a test, good context engineering pulls in:", options: ["Every file in the monorepo", "The failing log, relevant source file, and coding standards", "Only the company logo", "Random Stack Overflow pages"], correct: 1, explain: "Targeted context — error log + related code + standards — gives the agent what it needs without noise." },
    { q: "An LLM has memory of conversations from last week if:", options: ["Always, automatically", "Only if that history is stored and re-injected into context or external memory", "Never under any circumstances", "Only on Tuesdays"], correct: 1, explain: "Models are stateless by default. Past chats must be saved and added back via memory systems or context." },
    { q: "Context engineering vs. prompt engineering:", options: ["They are identical", "Prompt = the question; context = curating the whole workspace", "Context is only for images", "Prompt engineering is obsolete"], correct: 1, explain: "Prompt engineering focuses on the instruction text. Context engineering manages everything else the model sees." },
    { q: "Too much irrelevant text in context actively:", options: ["Helps the model focus", "Hurts answer quality", "Has no effect", "Speeds up inference always"], correct: 1, explain: "Noise competes with signal for limited attention and tokens — a core reason to engineer context carefully." }
  ],
  5: [
    { q: "What does RAG stand for?", options: ["Random Access Graphics", "Retrieval-Augmented Generation", "Rapid API Gateway", "Recursive Agent Graph"], correct: 1, explain: "RAG = Retrieval-Augmented Generation — retrieve relevant documents first, then generate an answer grounded in them." },
    { q: "The open-book exam analogy means the AI:", options: ["Must memorize everything", "Looks up relevant pages before answering", "Cannot use any documents", "Only answers from training cutoff"], correct: 1, explain: "Like an open-book test, RAG searches your knowledge base first, then answers using retrieved material." },
    { q: "Why can't a base LLM know your private internal wiki?", options: ["It wasn't trained on your private data", "Wikis are illegal", "LLMs cannot read text", "Wikis use too many colors"], correct: 0, explain: "Training data has a cutoff and excludes your private docs. RAG connects live private knowledge at query time." },
    { q: "Embeddings in RAG are:", options: ["Images only", "Numerical 'meaning fingerprints' of text chunks", "Git tags", "SSL certificates"], correct: 1, explain: "Embeddings map text to vectors so semantically similar content sits close together in vector space." },
    { q: "A vector database in RAG is used to:", options: ["Store and search embeddings for semantic lookup", "Host static HTML", "Replace GitHub", "Run Docker builds"], correct: 0, explain: "Vector DBs enable fast similarity search — find chunks whose meaning is closest to the user's question." },
    { q: "Semantic search differs from keyword search because it:", options: ["Only matches exact words", "Finds content by meaning similarity, not just exact keywords", "Is always slower and useless", "Requires no embeddings"], correct: 1, explain: "Semantic search matches paraphrases and related concepts — 'deploy failure' might match 'release rollback incident'." },
    { q: "RAG reduces hallucinations primarily by:", options: ["Grounding answers in retrieved real sources", "Making the model smaller", "Disabling the internet", "Using Comic Sans"], correct: 0, explain: "When answers must cite retrieved chunks, the model is anchored to actual documents rather than inventing facts." },
    { q: "A typical RAG pipeline step order is:", options: ["Answer → delete documents → question", "Question → retrieve chunks → add to context → LLM answers", "Train model → forget data → deploy", "Commit → push → hallucinate"], correct: 1, explain: "User asks → system finds relevant chunks → injects them into context → LLM generates a grounded response." },
    { q: "In CI/CD, RAG might retrieve:", options: ["Past incident reports or deployment runbooks", "Employee vacation photos", "Random tweets", "CPU fan speeds only"], correct: 0, explain: "RAG shines for operational knowledge — runbooks, postmortems, architecture docs — at decision time." },
    { q: "RAG lets you update knowledge without:", options: ["Adding new documents to the index", "Retraining the entire LLM from scratch", "Using any storage", "Writing prompts"], correct: 1, explain: "Update the document store and embeddings; the same LLM can use fresh content without costly retraining." }
  ],
  6: [
    { q: "By default, an LLM after a request ends is:", options: ["Stateful forever", "Stateless — it forgets unless memory is added", "Connected to all databases", "Running your CI pipeline"], correct: 1, explain: "Each inference is independent. Persistence requires explicit short- or long-term memory systems." },
    { q: "State in an agent task might include:", options: ["What step we're on and what's pending", "The color of the IDE theme only", "Global stock prices", "Nothing useful"], correct: 0, explain: "State tracks progress — e.g. 'tests passed, awaiting deploy approval' — so the agent knows where it is." },
    { q: "Short-term memory usually lives:", options: ["On a USB drive only", "Inside the ongoing conversation / context window", "In the GPU firmware", "In a robots.txt file"], correct: 1, explain: "Recent chat history kept in context is short-term memory — limited by the context window size." },
    { q: "Long-term memory might store:", options: ["Facts in a database recalled later", "Only the last token", "Nothing — agents never need it", "Temporary RAM cleared every second"], correct: 0, explain: "Long-term memory persists outside the model — e.g. 'this team deploys Fridays' — and is retrieved when needed." },
    { q: "Structured output forces the model to reply in:", options: ["Random emojis only", "A strict predictable format like JSON", "Handwritten PDF only", "Binary machine code only"], correct: 1, explain: "Structured output (often JSON with a schema) lets downstream software parse and act on responses reliably." },
    { q: "The calendar invite vs. casual description analogy illustrates:", options: ["Machines need precise structured fields", "Humans prefer JSON at parties", "Calendars are obsolete", "LLMs cannot write prose"], correct: 0, explain: "Pipelines need exact fields (action, environment, approved) — not vague prose — to trigger automation safely." },
    { q: "An example structured agent response might be:", options: ['{"action": "deploy", "environment": "staging", "approved": false}', "A three-page essay with no fields", "A single emoji", "An empty string always"], correct: 0, explain: "JSON with clear keys lets the CI system branch on action, target env, and approval without NLP parsing." },
    { q: "Why is free-flowing prose hard for CI/CD pipelines?", options: ["Pipelines are poetic", "Programs need predictable fields to automate decisions", "Prose uses too much ink", "Git rejects prose"], correct: 1, explain: "Automation requires machine-readable structure — deploy yes/no, which environment, which commit — not paragraphs." },
    { q: "Combining state + structured output helps agents:", options: ["Track progress and return machine-actionable decisions", "Replace all human developers instantly", "Eliminate all testing", "Remove the need for Git"], correct: 0, explain: "State knows where we are; structured output tells the pipeline what to do next in a parseable way." },
    { q: "The 'person who reintroduces themselves every sentence' analogy describes:", options: ["A stateless LLM without memory", "A senior architect", "A loaded context window", "A vector database"], correct: 0, explain: "Without memory layers, each call starts fresh — like someone with no continuity between sentences." }
  ],
  7: [
    { q: "MCP stands for:", options: ["Multi-Cloud Platform", "Model Context Protocol", "Main CI Pipeline", "Memory Cache Process"], correct: 1, explain: "Model Context Protocol is an open standard for connecting AI apps to tools and data sources consistently." },
    { q: "The USB-C analogy for MCP means:", options: ["One universal way to plug tools into AI", "MCP only works with phones", "AI cannot use cables", "Every tool needs a unique proprietary connector forever"], correct: 0, explain: "MCP standardizes how tools are exposed so any compatible AI client can use them without custom glue each time." },
    { q: "An MCP server:", options: ["Exposes a tool or data source in a standard shape for AI clients", "Replaces the LLM entirely", "Is only for gaming", "Deletes your repository"], correct: 0, explain: "MCP servers wrap capabilities (read file, query DB, call GitHub) so agents discover and invoke them uniformly." },
    { q: "Hooks are best defined as:", options: ["Scripts that run automatically when a specific event occurs", "Fishing equipment", "CSS class names", "LLM parameters"], correct: 0, explain: "Hooks fire on events — pre-commit, post-test, before agent edit — to inject custom logic without rewriting core tools." },
    { q: "The motion-sensor light analogy for hooks means:", options: ["You rewire the entire house for every feature", "You attach behavior to events without changing the core system", "Lights cannot use AI", "Hooks only work outdoors"], correct: 1, explain: "Hooks add reactive behavior ('when X, do Y') like a sensor triggering a light — minimal invasion, maximum utility." },
    { q: "A pre-commit hook might:", options: ["Block commits that fail lint rules", "Deploy to production automatically", "Delete all branches", "Train a new LLM"], correct: 0, explain: "Pre-commit hooks run checks before a commit is recorded — formatting, secrets scan, lint — enforcing quality early." },
    { q: "A hook before an agent edits a file could:", options: ["Block changes that would delete a critical file", "Force the agent to write poetry", "Disable all tests", "Remove MCP entirely"], correct: 0, explain: "Guardrail hooks intercept risky agent actions — protecting critical paths while still allowing automation." },
    { q: "Tools give an AI the ability to:", options: ["Read files, call APIs, query databases — take real actions", "Only generate text in a vacuum", "Physically repair laptops", "Replace electricity"], correct: 0, explain: "Tools bridge text generation to the real world — file I/O, GitHub API, test runners — essential for agents." },
    { q: "MCP helps avoid:", options: ["Writing custom one-off integrations for every tool × every AI app", "Using any standards", "Connecting to GitHub", "Reading documentation"], correct: 0, explain: "Standard protocols reduce N×M integration work — build one MCP server, many clients can use it." },
    { q: "Post-test hooks in CI might:", options: ["Auto-run a formatter or notify the team", "Skip all tests permanently", "Erase git history", "Disable HTTPS"], correct: 0, explain: "After tests complete, hooks can format code, upload artifacts, or alert humans — extending the pipeline cleanly." }
  ],
  8: [
    { q: "Agentic AI is an LLM plus the ability to:", options: ["Plan, use tools, observe results, and loop until a goal is met", "Only answer one question and stop", "Run without any goals", "Ignore all context"], correct: 0, explain: "Agents perceive, reason, act via tools, observe outcomes, and repeat — unlike one-shot chatbots." },
    { q: "Chatbot vs. agent: the contractor analogy means the agent:", options: ["Only gives advice", "Actually performs the work and fixes mistakes", "Never uses tools", "Cannot loop"], correct: 1, explain: "Agents execute multi-step work (renovate the kitchen) rather than stopping at advice (consultant)." },
    { q: "The first step in the agent loop is typically:", options: ["Perceive — read goal and current context/state", "Deploy to production", "Delete the repo", "Retrain the model"], correct: 0, explain: "Perception grounds the agent: what is the goal, what is the current state, what do tools report?" },
    { q: "After 'Act' (using a tool), the agent should:", options: ["Observe the result of that action", "Shut down forever", "Skip verification", "Ignore errors always"], correct: 0, explain: "Observation closes the loop — did the test pass? did the API return 200? — informing the next plan step." },
    { q: "Agents need guardrails because:", options: ["They take real actions that can cause harm", "Guardrails improve font rendering", "LLMs require guardrails to boot", "CI/CD has no risks"], correct: 0, explain: "Autonomous actions (deploy, delete file, merge PR) need safety rules and human approval for risky steps." },
    { q: "Human-in-the-loop approval is especially important for:", options: ["Production deployments and irreversible changes", "Changing IDE font size", "Reading a log file", "Displaying hello world locally"], correct: 0, explain: "High-impact operations warrant a human gate — agents propose, humans approve critical moves." },
    { q: "Which combination does the tutorial say agents need?", options: ["Context, memory, tools/MCP, structured output, hooks, system prompt", "Only a single prompt with no tools", "Only images", "Nothing — raw LLM is enough"], correct: 0, explain: "Effective agents stack context, memory, tool access, parseable decisions, enforcement hooks, and standing rules." },
    { q: "In the agent loop, 'Reason / Plan' means:", options: ["Decide the next step toward the goal", "Randomly click buttons", "Always deploy immediately", "Skip all thinking"], correct: 0, explain: "Reasoning breaks the goal into steps — e.g. read log → find file → patch → re-run tests." },
    { q: "An agent differs from a chatbot mainly because it:", options: ["Acts and iterates toward goals", "Uses fewer tokens", "Cannot use language", "Only works offline"], correct: 0, explain: "Agency = autonomous action + feedback loops. Chatbots respond once without tool-driven iteration." },
    { q: "Calling an API via MCP during the agent loop is an example of:", options: ["Act", "Perceive only", "Human approval", "Training"], correct: 0, explain: "Using tools (API calls, file edits, test runs) is the Act phase — executing the chosen step." }
  ],
  9: [
    { q: "CI (Continuous Integration) means:", options: ["Code is automatically built and tested when developers integrate changes", "Code is never tested", "Only manual releases", "Integration of AI models only"], correct: 0, explain: "CI merges, builds, and tests on each change — catching defects early in the delivery cycle." },
    { q: "CD can mean Continuous Delivery or:", options: ["Continuous Deployment", "Continuous Deletion", "Cached Data", "Color Design"], correct: 0, explain: "Delivery = always release-ready; Deployment = automatically push to production when checks pass." },
    { q: "A CI/CD pipeline is:", options: ["The automated sequence of stages code travels through", "A physical pipe in a data center", "A type of LLM", "A social network"], correct: 0, explain: "Pipelines chain stages — build → test → deploy — automating software delivery." },
    { q: "Traditional pipelines are powerful but:", options: ["Rigid — they follow fixed scripts", "Always intelligent about root cause", "Unable to run tests", "Identical to agents"], correct: 0, explain: "Scripted pipelines repeat predefined steps; they don't reason about novel failure modes without added AI." },
    { q: "An agent might auto-fix a failing build by:", options: ["Reading the error log, locating the bug, and opening a PR", "Deleting the repository", "Ignoring all errors", "Disabling CI"], correct: 0, explain: "Agentic repair loops: parse failure → find relevant code → propose fix → verify with tests → submit PR." },
    { q: "RAG in CI/CD incident triage might:", options: ["Pull similar past incidents before explaining root cause", "Replace all logs", "Delete staging", "Skip monitoring"], correct: 0, explain: "Historical incident embeddings help agents compare current failures to resolved past cases." },
    { q: "Before production deploy, the tutorial recommends:", options: ["Human-in-the-loop approval", "Fully unattended deploy always", "No system prompt", "Disabling hooks"], correct: 0, explain: "Production is high stakes — agents should propose; humans (or policy gates) approve destructive actions." },
    { q: "Intelligent code review by an agent can:", options: ["Comment on PRs with reasoning about risks and style", "Merge without any checks", "Delete all tests", "Replace Git entirely"], correct: 0, explain: "Agents can analyze diffs in context of standards and surface nuanced review comments — not just lint rules." },
    { q: "Safety in agentic CI/CD uses:", options: ["Hooks, strict system prompts, structured output, and approval gates", "No rules at all", "Only larger models", "Disabling all automation"], correct: 0, explain: "Defense in depth: enforce with hooks, instruct with system prompts, parse with structured output, gate risky deploys." },
    { q: "Release notes generation is an example of agents:", options: ["Summarizing changes in plain language", "Running hardware diagnostics only", "Replacing version control", "Eliminating documentation"], correct: 0, explain: "Agents excel at synthesizing commit/PR history into human-readable release summaries." }
  ],
  10: [
    { q: "MVP stands for:", options: ["Maximum Velocity Protocol", "Minimum Viable Product", "Model Vector Process", "Multi-Version Pipeline"], correct: 1, explain: "MVP = simplest version that delivers real value and enables learning from real users." },
    { q: "The skateboard vs. half-built car analogy means:", options: ["Ship something usable today, learn, then iterate", "Build the entire product before any user sees it", "Cars are always MVPs", "Skateboards cannot teach anything"], correct: 0, explain: "A skateboard moves you now and validates the core need; a half-car delivers zero value." },
    { q: "An MVP spec should include:", options: ["Problem, core features, user stories, acceptance criteria, out-of-scope", "Every possible feature ever", "No goals", "Only marketing slogans"], correct: 0, explain: "A tight spec defines what you're building, for whom, how you'll know it's done, and what you're explicitly NOT building." },
    { q: "User stories follow the pattern:", options: ["As a [user], I want [action] so that [benefit]", "Delete all users immediately", "Random words only", "As a GPU, I want heat"], correct: 0, explain: "User stories tie persona, action, and outcome — a beginner-friendly requirements format." },
    { q: "'Out of scope' in a spec helps:", options: ["Keep humans and agents focused on the MVP", "Add unlimited features", "Confuse the team", "Disable testing"], correct: 0, explain: "Explicit non-goals prevent scope creep — critical when agents might otherwise over-build." },
    { q: "A clear MVP spec is good input for an AI agent because:", options: ["It gives unambiguous context and a definition of done", "Agents ignore all documents", "Specs replace all code", "Agents only read binary"], correct: 0, explain: "Agents need clear goals and boundaries — a well-written spec is ideal context for implementation tasks." },
    { q: "Cursor and GitHub Copilot are examples of:", options: ["AI coding tools / IDEs", "Vector databases only", "CI servers only", "MCP replacement standards"], correct: 0, explain: "These tools embed AI in the editor for code completion, chat, and increasingly agentic multi-step edits." },
    { q: "LangChain and CrewAI are examples of:", options: ["Agent & orchestration frameworks", "DNS providers", "Hardware GPUs", "Static site hosts only"], correct: 0, explain: "Frameworks help compose LLMs, tools, memory, and multi-agent workflows — building blocks for custom agents." },
    { q: "Pinecone and Chroma are associated with:", options: ["RAG / vector databases", "Email clients", "Game engines", "Spreadsheet formulas only"], correct: 0, explain: "Vector databases store embeddings for semantic retrieval — core infrastructure for RAG systems." },
    { q: "The tutorial advises beginners to focus on:", options: ["Stable concepts rather than memorizing every brand name", "Only one tool forever", "Ignoring CI/CD entirely", "Avoiding all quizzes"], correct: 0, explain: "Tools change quickly; context, prompts, tools, memory, and the agent loop are durable mental models." }
  ]
};

/* ------------------------------------------------------------------ */
/*  RENDER QUIZZES                                                    */
/* ------------------------------------------------------------------ */
function renderQuizzes() {
  let globalIndex = 0;
  Object.keys(QUIZZES).forEach((sectionKey) => {
    const container = document.querySelector(`[data-quiz="${sectionKey}"]`);
    if (!container) return;

    const questions = QUIZZES[sectionKey];
    const wrapper = document.createElement("div");
    wrapper.className = "mt-10 space-y-4";

    const heading = document.createElement("h3");
    heading.className = "text-lg font-semibold text-slate-900 flex items-center gap-2";
    heading.innerHTML = `<span class="inline-flex h-7 w-7 items-center justify-center rounded-md bg-emerald-100 text-emerald-700 text-xs font-bold">Q</span> Section Quiz — ${questions.length} questions`;
    wrapper.appendChild(heading);

    questions.forEach((item) => {
      globalIndex += 1;
      const card = document.createElement("article");
      card.className = "rounded-xl bg-white shadow-sm ring-1 ring-slate-200 p-5";
      card.dataset.quizCard = "true";

      const labels = ["A", "B", "C", "D"];
      const optionsHtml = item.options
        .map(
          (opt, i) =>
            `<li class="flex gap-2"><span class="font-semibold text-brand-600 shrink-0">${labels[i]}.</span><span>${opt}</span></li>`
        )
        .join("");

      card.innerHTML = `
        <p class="font-medium text-slate-900 mb-3">
          <span class="text-brand-600 font-bold mr-1">Q${globalIndex}.</span>${item.q}
        </p>
        <ul class="text-sm text-slate-700 space-y-1.5 mb-4 list-none pl-0">${optionsHtml}</ul>
        <details class="group rounded-lg border border-slate-200 bg-slate-50/80">
          <summary class="cursor-pointer select-none flex items-center justify-between gap-2 px-4 py-3 text-sm font-medium text-brand-700 hover:bg-brand-50/50 rounded-lg">
            <span>Reveal answer &amp; explanation</span>
            <svg class="q-chevron h-4 w-4 shrink-0 text-brand-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
          </summary>
          <div class="px-4 pb-4 pt-1 text-sm text-slate-700 border-t border-slate-200/80">
            <p class="font-semibold text-emerald-700 mt-2">Correct answer: ${labels[item.correct]}. ${item.options[item.correct]}</p>
            <p class="mt-2 leading-relaxed">${item.explain}</p>
          </div>
        </details>
      `;

      const details = card.querySelector("details");
      details.addEventListener("toggle", updateQuizScore);

      wrapper.appendChild(card);
    });

    container.replaceWith(wrapper);
  });
}

/* ------------------------------------------------------------------ */
/*  NAVIGATION                                                        */
/* ------------------------------------------------------------------ */
function buildNav() {
  const sections = document.querySelectorAll("[data-section]");
  const desktopNav = document.getElementById("desktopNav");
  const mobileNav = document.getElementById("mobileNav");
  if (!desktopNav || !mobileNav) return;

  const links = [];
  sections.forEach((sec) => {
    const id = sec.id;
    const title = sec.dataset.title || id;
    links.push({ id, title });
  });

  const makeLink = (id, title, isMobile) => {
    const a = document.createElement("a");
    a.href = `#${id}`;
    a.textContent = title;
    a.className = isMobile
      ? "block rounded-lg px-3 py-2 text-slate-700 hover:bg-brand-50 hover:text-brand-700"
      : "block rounded-lg px-3 py-2 text-slate-600 hover:bg-brand-50 hover:text-brand-700 border-l-2 border-transparent hover:border-brand-400";
    a.addEventListener("click", () => {
      if (isMobile) closeMobileMenu();
    });
    return a;
  };

  links.forEach(({ id, title }) => {
    desktopNav.appendChild(makeLink(id, title, false));
    mobileNav.appendChild(makeLink(id, title, true));
  });
}

/* ------------------------------------------------------------------ */
/*  MOBILE MENU                                                       */
/* ------------------------------------------------------------------ */
const menuToggle = document.getElementById("menuToggle");
const menuClose = document.getElementById("menuClose");
const mobileSidebar = document.getElementById("mobileSidebar");
const overlay = document.getElementById("overlay");

function openMobileMenu() {
  mobileSidebar?.classList.remove("-translate-x-full");
  overlay?.classList.remove("hidden");
  menuToggle?.setAttribute("aria-expanded", "true");
  document.body.classList.add("overflow-hidden");
}

function closeMobileMenu() {
  mobileSidebar?.classList.add("-translate-x-full");
  overlay?.classList.add("hidden");
  menuToggle?.setAttribute("aria-expanded", "false");
  document.body.classList.remove("overflow-hidden");
}

menuToggle?.addEventListener("click", openMobileMenu);
menuClose?.addEventListener("click", closeMobileMenu);
overlay?.addEventListener("click", closeMobileMenu);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMobileMenu();
});

/* ------------------------------------------------------------------ */
/*  READING PROGRESS BAR                                              */
/* ------------------------------------------------------------------ */
function updateProgressBar() {
  const bar = document.getElementById("progressBar");
  if (!bar) return;
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
  bar.style.width = `${pct}%`;
}

window.addEventListener("scroll", updateProgressBar, { passive: true });

/* ------------------------------------------------------------------ */
/*  QUIZ SCORE (questions reviewed = details opened)                  */
/* ------------------------------------------------------------------ */
function updateQuizScore() {
  const opened = document.querySelectorAll('[data-quiz-card] details[open]').length;
  const total = document.querySelectorAll("[data-quiz-card]").length;
  const el = document.getElementById("quizScore");
  if (el) el.textContent = `${opened} / ${total}`;
}

/* ------------------------------------------------------------------ */
/*  ACTIVE SECTION HIGHLIGHT IN SIDEBAR                               */
/* ------------------------------------------------------------------ */
function initScrollSpy() {
  const sections = [...document.querySelectorAll("[data-section]")];
  const navLinks = [...document.querySelectorAll("#desktopNav a")];
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((link) => {
            const active = link.getAttribute("href") === `#${id}`;
            link.classList.toggle("bg-brand-50", active);
            link.classList.toggle("text-brand-700", active);
            link.classList.toggle("border-brand-500", active);
            link.classList.toggle("font-medium", active);
          });
        }
      });
    },
    { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
  );

  sections.forEach((sec) => observer.observe(sec));
}

/* ------------------------------------------------------------------ */
/*  INIT                                                              */
/* ------------------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  renderQuizzes();
  buildNav();
  updateProgressBar();
  updateQuizScore();
  initScrollSpy();
});
