import { MethodCategory } from "@/types";

export const mockMethodCategories: MethodCategory[] = [
  {
    id: "general",
    name: "General",
    iconName: "Sun",
    methods: ["LLM", "Transformer", "Fine-tuning", "Multi-head Attention", "Softmax", "Layer Normalization", "Mac-tuning", "RLHF", "LoRA", "Pre-training", "Chain-of-Thought (CoT)", "Adam", "Dropout", "Embedding"],
  },
  {
    id: "language",
    name: "Language",
    iconName: "MessageSquare",
    methods: ["BERT", "GPT", "T5", "RAG", "Seq2Seq", "Attention", "Mamba-2", "Performer", "BLEU", "ROUGE", "fastText", "Speculative Decoding", "Sliding Window Attention", "Gated DeltaNet"],
  },
  {
    id: "vision",
    name: "Vision",
    iconName: "Eye",
    methods: ["CLIP", "LLaVA", "Vision Transformer", "SAM", "DINO", "ResNet", "U-Net", "ConvNeXt", "Mask R-CNN", "YOLO", "NeRF", "ViT", "R-CNN", "Swin Transformer"],
  },
  {
    id: "audio-speech",
    name: "Audio & Speech",
    iconName: "AudioWaveform",
    methods: ["Whisper", "WaveNet", "Conformer", "SoundStream", "RNN-Transducer", "Wav2Vec", "Fast Conformer", "Neural Audio Codec", "Spectrogram", "TDT"],
  },
  {
    id: "agents",
    name: "Agents",
    iconName: "Bot",
    methods: ["ReAct", "MCP", "Function Calling", "Agent Skills", "Multi-turn", "Tool Use", "AutoGPT", "Agent Frameworks", "Planning", "Memory"],
  },
  {
    id: "reasoning",
    name: "Reasoning",
    iconName: "Brain",
    methods: ["Chain-of-Thought (CoT)", "Tree of Thoughts", "GRPO", "Reasoning Model", "Self-Refine", "Reflection", "Deep Research", "Xavier Initialization", "Context Rot", "Test-time Compute"],
  },
  {
    id: "training",
    name: "Training",
    iconName: "GraduationCap",
    methods: ["Pre-training", "Fine-tuning", "PEFT", "QLoRA", "LoRA", "Prompt Engineering", "Data Augmentation", "Curriculum Learning", "Teacher Forcing", "Label Smoothing"],
  },
  {
    id: "optimization",
    name: "Optimization",
    iconName: "SlidersHorizontal",
    methods: ["Adam", "AdamW", "SGD", "Adafactor", "Weight Decay", "Gradient Clipping", "Learning Rate Scheduler", "Cosine Annealing", "Batch Normalization", "Dropout"],
  }
];
