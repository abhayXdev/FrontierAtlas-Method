import { MethodCategory, MethodDetail } from "@/types";

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

export const mockPaperDetails: Record<string, any> = {
  "paper-1": {
    id: "paper-1",
    arxivId: "1706.03762",
    title: "Attention Is All You Need",
    authors: ["Ashish Vaswani", "Noam Shazeer", "Niki Parmar", "Jakob Uszkoreit", "Llion Jones", "Aidan N. Gomez", "Łukasz Kaiser", "Illia Polosukhin"],
    publicationDate: "2017-12-06",
    citations: 134809,
    pdfUrl: "https://arxiv.org/pdf/1706.03762.pdf",
    arxivUrl: "https://arxiv.org/abs/1706.03762",
    githubUrl: "https://github.com/tensorflow/tensor2tensor",
    githubStars: 5700,
    abstract: "The dominant sequence transduction models are based on complex recurrent or convolutional neural networks that include an encoder and a decoder. The best performing models also connect the encoder and decoder through an attention mechanism. We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely. Experiments on two machine translation tasks show these models to be superior in quality while being more parallelizable and requiring significantly less time to train.",
    tasks: ["Machine Translation", "Language Modeling"],
    methods: ["Transformer", "Multi-Head Attention", "Positional Encoding"],
    bibtex: `@inproceedings{vaswani2017attention,
  title={Attention is all you need},
  author={Vaswani, Ashish and Shazeer, Noam and Parmar, Niki and Uszkoreit, Jakob and Jones, Llion and Gomez, Aidan N and Kaiser, Lukasz and Polosukhin, Illia},
  booktitle={Advances in neural information processing systems},
  pages={5998--6008},
  year={2017}
}`,
    aiSummary: "This paper introduces the Transformer, a novel neural network architecture based entirely on attention mechanisms, dispensing with recurrence and convolutions entirely. It achieves state-of-the-art results on machine translation tasks while requiring significantly less time to train."
  }
};

export const mockMethodDetails: Record<string, MethodDetail> = {
  "llm": {
    slug: "llm",
    title: "Large Language Models (LLM)",
    description: "Large Language Models are foundation models trained on massive amounts of text data to understand and generate human-like text.",
    papers: [
      {
        id: "paper-1",
        title: "Attention Is All You Need",
        authors: ["Ashish Vaswani", "Noam Shazeer", "Niki Parmar", "Jakob Uszkoreit", "Llion Jones", "Aidan N. Gomez", "Lukasz Kaiser", "Illia Polosukhin"],
        date: "2017-06-12",
        abstract: "The dominant sequence transduction models are based on complex recurrent or convolutional neural networks...",
        citations: 104500,
      },
      {
        id: "paper-2",
        title: "Language Models are Few-Shot Learners",
        authors: ["Tom B. Brown", "Benjamin Mann", "Nick Ryder", "Melanie Subbiah", "Jared Kaplan", "Prafulla Dhariwal", "Arvind Neelakantan", "Pranav Shyam", "Girish Sastry", "Amanda Askell", "Sandhini Agarwal", "Ariel Herbert-Voss", "Gretchen Krueger", "Tom Henighan", "Rewon Child", "Aditya Ramesh", "Daniel M. Ziegler", "Jeffrey Wu", "Clemens Winter", "Christopher Hesse", "Mark Chen", "Eric Sigler", "Mateusz Litwin", "Scott Gray", "Benjamin Chess", "Jack Clark", "Christopher Berner", "Sam McCandlish", "Alec Radford", "Ilya Sutskever", "Dario Amodei"],
        date: "2020-05-28",
        abstract: "We train GPT-3, an autoregressive language model with 175 billion parameters, 10x more than any previous non-sparse language model...",
        citations: 21300,
      }
    ]
  },
  "transformer": {
    slug: "transformer",
    title: "Transformer",
    description: `The Transformer is a deep learning architecture introduced in the landmark 2017 paper "Attention Is All You Need" by Vaswani et al. Unlike previous recurrent neural networks (RNNs) and long short-term memory (LSTM) networks that process data sequentially, the Transformer relies entirely on self-attention mechanisms to draw global dependencies between inputs and outputs. This fundamental shift allowed for massive parallelization during training, dramatically reducing training times and paving the way for the scaling laws that define modern AI.

At the core of the Transformer lies the encoder-decoder architecture. The encoder maps an input sequence of symbol representations to a sequence of continuous representations, while the decoder generates an output sequence one symbol at a time. Both the encoder and decoder are composed of stacks of identical layers. Each layer contains two primary sub-layers: a multi-head self-attention mechanism, and a simple, position-wise fully connected feed-forward network. Residual connections and layer normalization are applied around each of these sub-layers, ensuring stable gradient flow even in extremely deep networks.

A key innovation of the Transformer is the Multi-Head Attention mechanism. Instead of performing a single attention function, the model linearly projects the queries, keys, and values multiple times with different, learned linear projections. Attention is then applied in parallel to each of these projected versions, yielding multiple output values that are concatenated and projected once more. This allows the model to jointly attend to information from different representation subspaces at different positions—something a single attention head struggles to accomplish without losing fidelity.

Furthermore, because the Transformer abandons recurrence entirely, it has no inherent notion of sequence order. To inject information about the relative or absolute position of the tokens in the sequence, positional encodings are added to the input embeddings at the bottoms of the encoder and decoder stacks. These encodings use sine and cosine functions of different frequencies, allowing the model to easily learn to attend by relative positions since, for any fixed offset, the positional encoding can be represented as a linear function of another.

The impact of the Transformer architecture on the field of Natural Language Processing (NLP) cannot be overstated. It serves as the foundational building block for nearly all state-of-the-art Large Language Models (LLMs) today, including the GPT (Generative Pre-trained Transformer) series, BERT, T5, and countless others. Beyond NLP, the architecture has proven surprisingly general and has been successfully adapted for computer vision (Vision Transformers), audio processing, and even reinforcement learning, solidifying its position as one of the most important architectural breakthroughs in the history of deep learning.`,
    papers: [
      {
        id: "paper-1",
        title: "Attention Is All You Need",
        authors: ["Ashish Vaswani", "Noam Shazeer", "Niki Parmar", "Jakob Uszkoreit", "Llion Jones", "Aidan N. Gomez", "Lukasz Kaiser", "Illia Polosukhin"],
        date: "2017-06-12",
        abstract: "The dominant sequence transduction models are based on complex recurrent or convolutional neural networks...",
        citations: 104500,
      },
      {
        id: "paper-3",
        title: "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
        authors: ["Jacob Devlin", "Ming-Wei Chang", "Kenton Lee", "Kristina Toutanova"],
        date: "2018-10-11",
        abstract: "We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations from Transformers...",
        citations: 86400,
      }
    ]
  }
};
