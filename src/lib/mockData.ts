import { MethodCategory } from "@/types";

export const mockMethodCategories: MethodCategory[] = [
  {
    id: "general",
    name: "General",
    iconName: "Sun",
    methods: [
      { id: "llm", name: "LLM" },
      { id: "transformer", name: "Transformer" },
      { id: "fine-tuning", name: "Fine-tuning" },
      { id: "multi-head-attention", name: "Multi-head Attention" },
      { id: "softmax", name: "Softmax" },
      { id: "layer-normalization", name: "Layer Normalization" },
      { id: "mae-tuning", name: "Mae-tuning" },
      { id: "rlhf", name: "RLHF" },
      { id: "lora", name: "LoRA" },
      { id: "pre-training", name: "Pre-training" },
      { id: "chain-of-thought-(cot)", name: "Chain-of-Thought (CoT)" },
      { id: "adam", name: "Adam" },
      { id: "dropout", name: "Dropout" },
      { id: "embedding", name: "Embedding" }
    ],
  },
  {
    id: "language",
    name: "Language",
    iconName: "MessageSquare",
    methods: [
      { id: "bert", name: "BERT" },
      { id: "gpt", name: "GPT" },
      { id: "t5", name: "T5" },
      { id: "rag", name: "RAG" },
      { id: "seq2seq", name: "Seq2Seq" },
      { id: "attention", name: "Attention" },
      { id: "mamba-2", name: "Mamba-2" },
      { id: "performer", name: "Performer" },
      { id: "bleu", name: "BLEU" },
      { id: "rouge", name: "ROUGE" },
      { id: "fasttext", name: "fastText" },
      { id: "speculative-decoding", name: "Speculative Decoding" },
      { id: "sliding-window-attention", name: "Sliding Window Attention" },
      { id: "gated-deltanet", name: "Gated DeltaNet" }
    ],
  },
  {
    id: "vision",
    name: "Vision",
    iconName: "Eye",
    methods: [
      { id: "clip", name: "CLIP" },
      { id: "llava", name: "LLaVA" },
      { id: "vision-transformer", name: "Vision Transformer" },
      { id: "sam", name: "SAM" },
      { id: "dino", name: "DINO" },
      { id: "resnet", name: "ResNet" },
      { id: "u-net", name: "U-Net" },
      { id: "convnext", name: "ConvNeXt" },
      { id: "mask-r-cnn", name: "Mask R-CNN" },
      { id: "yolo", name: "YOLO" },
      { id: "nerf", name: "NeRF" },
      { id: "vit", name: "ViT" },
      { id: "r-cnn", name: "R-CNN" },
      { id: "swin-transformer", name: "Swin Transformer" }
    ],
  },
  {
    id: "audio-speech",
    name: "Audio & Speech",
    iconName: "AudioWaveform",
    methods: [
      { id: "whisper", name: "Whisper" },
      { id: "wavenet", name: "WaveNet" },
      { id: "conformer", name: "Conformer" },
      { id: "soundstream", name: "SoundStream" },
      { id: "rnn-transducer", name: "RNN-Transducer" },
      { id: "wav2vec", name: "Wav2Vec" },
      { id: "fast-conformer", name: "Fast Conformer" },
      { id: "neural-audio-codec", name: "Neural Audio Codec" },
      { id: "spectrogram", name: "Spectrogram" },
      { id: "tdt", name: "TDT" }
    ],
  },
  {
    id: "agents",
    name: "Agents",
    iconName: "Bot",
    methods: [
      { id: "react", name: "ReAct" },
      { id: "mcp", name: "MCP" },
      { id: "function-calling", name: "Function Calling" },
      { id: "agent-skills", name: "Agent Skills" },
      { id: "multi-turn", name: "Multi-turn" },
      { id: "tool-use", name: "Tool Use" },
      { id: "autogpt", name: "AutoGPT" },
      { id: "agent-frameworks", name: "Agent Frameworks" },
      { id: "planning", name: "Planning" },
      { id: "memory", name: "Memory" }
    ],
  },
  {
    id: "reasoning",
    name: "Reasoning",
    iconName: "Brain",
    methods: [
      { id: "chain-of-thought-(cot)", name: "Chain-of-Thought (CoT)" },
      { id: "tree-of-thoughts", name: "Tree of Thoughts" },
      { id: "grpo", name: "GRPO" },
      { id: "reasoning-model", name: "Reasoning Model" },
      { id: "self-refine", name: "Self-Refine" },
      { id: "reflection", name: "Reflection" },
      { id: "deep-research", name: "Deep Research" },
      { id: "xavier-initialization", name: "Xavier Initialization" },
      { id: "context-rot", name: "Context Rot" },
      { id: "test-time-compute", name: "Test-time Compute" }
    ],
  },
  {
    id: "training",
    name: "Training",
    iconName: "GraduationCap",
    methods: [
      { id: "pre-training", name: "Pre-training" },
      { id: "fine-tuning", name: "Fine-tuning" },
      { id: "peft", name: "PEFT" },
      { id: "qlora", name: "QLoRA" },
      { id: "lora", name: "LoRA" },
      { id: "prompt-engineering", name: "Prompt Engineering" },
      { id: "data-augmentation", name: "Data Augmentation" },
      { id: "curriculum-learning", name: "Curriculum Learning" },
      { id: "teacher-forcing", name: "Teacher Forcing" },
      { id: "label-smoothing", name: "Label Smoothing" }
    ],
  },
  {
    id: "optimization",
    name: "Optimization",
    iconName: "SlidersHorizontal",
    methods: [
      { id: "adam", name: "Adam" },
      { id: "adamw", name: "AdamW" },
      { id: "sgd", name: "SGD" },
      { id: "adafactor", name: "Adafactor" },
      { id: "weight-decay", name: "Weight Decay" },
      { id: "gradient-clipping", name: "Gradient Clipping" },
      { id: "learning-rate-scheduler", name: "Learning Rate Scheduler" },
      { id: "cosine-annealing", name: "Cosine Annealing" },
      { id: "batch-normalization", name: "Batch Normalization" },
      { id: "dropout", name: "Dropout" }
    ],
  },
  {
    id: "inference",
    name: "Inference",
    iconName: "Zap",
    methods: [
      { id: "kv-cache", name: "KV Cache" },
      { id: "speculative-decoding", name: "Speculative Decoding" },
      { id: "sliding-window-attention", name: "Sliding Window Attention" },
      { id: "ttft", name: "TTFT" },
      { id: "prefill", name: "Prefill" },
      { id: "quantization", name: "Quantization" },
      { id: "pruning", name: "Pruning" },
      { id: "distillation", name: "Distillation" },
      { id: "flash-attention", name: "Flash Attention" },
      { id: "vllm", name: "vLLM" }
    ]
  },
  {
    id: "retrieval",
    name: "Retrieval",
    iconName: "Search",
    methods: [
      { id: "rag", name: "RAG" },
      { id: "colbert", name: "ColBERT" },
      { id: "reranker-(cross-encoder)", name: "Reranker (Cross-encoder)" },
      { id: "bm25", name: "BM25" },
      { id: "dense-retrieval", name: "Dense Retrieval" },
      { id: "hybrid-search", name: "Hybrid Search" },
      { id: "vector-search", name: "Vector Search" },
      { id: "reranking", name: "ReRanking" },
      { id: "embedding-search", name: "Embedding Search" },
      { id: "context-retrieval", name: "Context Retrieval" }
    ]
  },
  {
    id: "reinforcement-learning",
    name: "Reinforcement Learning",
    iconName: "Trophy",
    methods: [
      { id: "ppo", name: "PPO" },
      { id: "dpo", name: "DPO" },
      { id: "rlhf", name: "RLHF" },
      { id: "rlvr", name: "RLVR" },
      { id: "grpo", name: "GRPO" },
      { id: "online-rl", name: "Online RL" },
      { id: "muzero", name: "MuZero" },
      { id: "alphazero", name: "AlphaZero" },
      { id: "reinforce", name: "REINFORCE" },
      { id: "reward-model", name: "Reward Model" }
    ]
  },
  {
    id: "diffusion-generation",
    name: "Diffusion & Generation",
    iconName: "Sparkles",
    methods: [
      { id: "stable-diffusion", name: "Stable Diffusion" },
      { id: "dit", name: "DiT" },
      { id: "flow-matching", name: "Flow Matching" },
      { id: "diffusion-policy", name: "Diffusion Policy" },
      { id: "vae", name: "VAE" },
      { id: "gan", name: "GAN" },
      { id: "biggan", name: "BigGAN" },
      { id: "score-based-models", name: "Score-Based Models" },
      { id: "generative-adversarial-networks", name: "Generative Adversarial Networks" },
      { id: "inpainting", name: "Inpainting" }
    ]
  },
  {
    id: "multimodal",
    name: "Multimodal",
    iconName: "LayoutGrid",
    methods: [
      { id: "llava", name: "LLaVA" },
      { id: "blip", name: "BLIP" },
      { id: "flamingo", name: "Flamingo" },
      { id: "kosmos", name: "Kosmos" },
      { id: "imagebind", name: "ImageBind" },
      { id: "clip", name: "CLIP" },
      { id: "video-llava", name: "Video-LLaVA" },
      { id: "audioclip", name: "AudioCLIP" },
      { id: "text-to-image", name: "Text-to-Image" },
      { id: "text-to-video", name: "Text-to-Video" }
    ]
  },
  {
    id: "architectures",
    name: "Architectures",
    iconName: "Box",
    methods: [
      { id: "transformer", name: "Transformer" },
      { id: "mamba", name: "Mamba" },
      { id: "moe", name: "MoE" },
      { id: "state-space-models", name: "State Space Models" },
      { id: "cnn", name: "CNN" },
      { id: "rnn", name: "RNN" },
      { id: "lstm", name: "LSTM" },
      { id: "gcn", name: "GCN" },
      { id: "big-bird", name: "Big Bird" },
      { id: "graph-neural-networks", name: "Graph Neural Networks" }
    ]
  },
  {
    id: "evaluation",
    name: "Evaluation",
    iconName: "CircleCheck",
    methods: [
      { id: "bleu", name: "BLEU" },
      { id: "rouge", name: "ROUGE" },
      { id: "pass@1", name: "Pass@1" },
      { id: "llm-as-a-judge", name: "LLM-as-a-Judge" },
      { id: "human-eval", name: "Human Eval" },
      { id: "perplexity", name: "Perplexity" },
      { id: "f1-score", name: "F1 Score" },
      { id: "exact-match", name: "Exact Match" },
      { id: "auc", name: "AUC" },
      { id: "meteor", name: "METEOR" }
    ]
  },
  {
    id: "embeddings",
    name: "Embeddings",
    iconName: "Layers",
    methods: [
      { id: "word2vec", name: "word2vec" },
      { id: "fasttext", name: "fastText" },
      { id: "glove", name: "GloVe" },
      { id: "elmo", name: "ELMo" },
      { id: "bert-embedding", name: "BERT Embedding" },
      { id: "sentence-transformer", name: "Sentence Transformer" },
      { id: "openai-embedding", name: "OpenAI Embedding" },
      { id: "cohere-embedding", name: "Cohere Embedding" },
      { id: "embedding-models", name: "Embedding Models" },
      { id: "dense-embedding", name: "Dense Embedding" }
    ]
  }
];
