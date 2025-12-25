# AI & Machine Learning Syllabus

Comprehensive AI/ML curriculum covering neural networks, LLMs, agent frameworks, and advanced AI topics.

## 📚 Course Modules

### Foundation Topics

#### 1. History - What is AI, How Did We End Up at Transformers

- Evolution of AI (1950s to present)
- Expert systems and symbolic AI
- Neural networks resurgence
- Deep learning revolution
- Attention mechanisms
- Transformer architecture breakthrough
- Current state of LLMs

#### 2. History - What is DL, Backprop, MLP

- Deep Learning fundamentals
- Multi-Layer Perceptrons (MLP)
- Backpropagation algorithm
- Gradient descent optimization
- Activation functions
- Loss functions
- Training vs inference

---

### Core Deep Learning

#### 3. Neural Networks

- Perceptron basics
- Forward propagation
- Weight initialization
- Activation functions (ReLU, Sigmoid, Tanh)
- Network architecture design
- Overfitting and regularization
- Batch normalization

#### 4. Optional Extra Class - RNNs, LSTMs, Sequential Models

- Recurrent Neural Networks (RNNs)
- Long Short-Term Memory (LSTM)
- Gated Recurrent Units (GRU)
- Sequence-to-sequence models
- Vanishing gradient problem
- Bidirectional RNNs
- Applications in time series

#### 5. Optional Extra Class - CNNs

- Convolutional Neural Networks
- Convolution operations
- Pooling layers
- CNN architectures (LeNet, AlexNet, VGG, ResNet)
- Transfer learning
- Image classification
- Object detection basics

---

### Attention & Transformers

#### 6. Coding Simple Attention

- Attention mechanism basics
- Query, Key, Value concept
- Attention score calculation
- Weighted sum computation
- Implementing attention from scratch
- Attention visualization

#### 7. Coding Other Variations of Attention

- Multi-head attention
- Self-attention
- Cross-attention
- Scaled dot-product attention
- Additive (Bahdanau) attention
- Attention masks
- Performance optimizations

---

### LLM Ecosystem

#### 8. Hugging Face End to End

- Hugging Face ecosystem overview
- Transformers library
- Model Hub exploration
- Loading pre-trained models
- Tokenizers
- Pipeline API
- Fine-tuning basics
- Pushing models to Hub

#### 9. Instrumenting LLM Calls/Observability/Tracing

- LLM observability importance
- Logging prompts and responses
- Latency tracking
- Token usage monitoring
- Error handling and retries
- Cost tracking
- LangSmith/LangFuse integration
- OpenTelemetry for LLMs

#### 10. Vector DBs and RAG

- Vector embeddings concept
- Similarity search
- Vector databases (Pinecone, Weaviate, Qdrant)
- Retrieval Augmented Generation (RAG)
- Chunking strategies
- Embedding models
- Hybrid search
- RAG evaluation

#### 11. Context Engineering - Summarization, Data Collection

- Context window management
- Document summarization techniques
- Extractive vs abstractive summarization
- Map-reduce pattern for long documents
- Data collection for RAG
- Web scraping for data
- Structured data extraction

---

### Agent Development

#### 12. Agents from First Principles, Building an Agent Framework

- What are AI agents
- Agent architectures (ReAct, Plan-and-Execute)
- Tool/function calling
- Agent memory systems
- Building custom agent frameworks
- State management
- Error recovery

#### 13. Agent Frameworks

- LangChain agents
- LangGraph for complex workflows
- AutoGPT and BabyAGI
- CrewAI for multi-agent systems
- Semantic Kernel
- Agent evaluation metrics
- Production deployment considerations

#### 14. Memory

- Short-term vs long-term memory
- Conversation memory
- Vector store memory
- Entity memory
- Summary memory
- Memory retrieval strategies
- Memory compression

#### 15. Computer Use & Multimodal Agents

- Browser automation agents
- Computer control agents (mouse, keyboard)
- Vision-language models
- Multimodal understanding
- Screenshot analysis
- GUI interaction
- Safety and sandboxing

---

### Fine-tuning & Customization

#### 16. What is Fine-tuning

- Transfer learning recap
- Full fine-tuning
- When to fine-tune vs prompt engineering
- Dataset preparation
- Evaluation metrics
- Overfitting prevention
- Cost considerations

#### 17. Fine-tuning a Model for Any Use Case

- Domain-specific fine-tuning
- Instruction fine-tuning
- Classification fine-tuning
- Named entity recognition
- Hyperparameter tuning
- Data augmentation
- Evaluation and iteration

#### 18. RL Fine-tuning

- Reinforcement Learning basics
- RLHF (Reinforcement Learning from Human Feedback)
- PPO (Proximal Policy Optimization)
- Reward modeling
- DPO (Direct Preference Optimization)
- Constitutional AI
- Safety fine-tuning

---

### Evaluation & Testing

#### 19. Evals - Testing Agents

- Why evaluation matters
- Unit testing for LLM outputs
- Assertion-based testing
- Reference-based evaluation
- Model-based evaluation
- Human evaluation
- Continuous evaluation in production
- A/B testing for prompts

---

### Advanced Topics

#### 20. Advance Topics

- Mixture of Experts (MoE)
- Sparse models
- Quantization techniques
- Distillation
- Prompt compression
- Speculative decoding
- Flash Attention
- Model merging

---

## 🎯 Projects

### 1. Agent Framework

Build a custom AI agent framework from scratch with tool use and memory

### 2. RL Fine-tuning Project + Writing Evals

Fine-tune a model using reinforcement learning and create comprehensive evaluation suite

### 3. Devin Clone

Recreate Devin (AI software engineer) with code generation and debugging capabilities

### 4. Memory Framework

Implement a sophisticated memory system for long-term agent interactions

## 📖 Resources

### Courses & Tutorials

- **Fast.ai** - Practical Deep Learning
- **Stanford CS224N** - NLP with Deep Learning
- **Andrej Karpathy's Neural Networks** - Zero to Hero series
- **DeepLearning.AI** - Short courses on LLMs

### Papers

- "Attention Is All You Need" (Transformer paper)
- "BERT: Pre-training of Deep Bidirectional Transformers"
- "GPT-3: Language Models are Few-Shot Learners"
- "Constitutional AI: Harmlessness from AI Feedback"
- "ReAct: Synergizing Reasoning and Acting in Language Models"

### Libraries & Tools

- **PyTorch** - Deep learning framework
- **TensorFlow** - Alternative framework
- **Hugging Face Transformers** - Pre-trained models
- **LangChain** - LLM application framework
- **LangGraph** - Agent orchestration
- **Weights & Biases** - Experiment tracking

### Communities

- Hugging Face forums
- r/MachineLearning
- Papers with Code
- AI alignment forums

## 🔑 Key Concepts

### Neural Network Training

```
Training Loop:
1. Forward pass (compute predictions)
2. Calculate loss
3. Backward pass (compute gradients)
4. Update weights
5. Repeat
```

### Transformer Architecture

**Components:**

- Multi-head self-attention
- Feed-forward networks
- Layer normalization
- Positional encoding
- Residual connections

### RAG Pipeline

```
User Query → Embedding → Vector Search →
Retrieved Context + Query → LLM → Response
```

### Agent Loop (ReAct)

```
1. Thought: Reason about the task
2. Action: Use a tool
3. Observation: See the result
4. Repeat until task complete
```

## 💡 Learning Path

### Month 1-2: Foundations

- Master neural network basics
- Understand backpropagation
- Implement simple networks from scratch
- Learn PyTorch/TensorFlow

### Month 3-4: Deep Learning

- Study CNN and RNN architectures
- Understand attention mechanisms
- Implement transformer components
- Fine-tune pre-trained models

### Month 5-6: LLMs & Applications

- Work with Hugging Face ecosystem
- Build RAG applications
- Implement agent systems
- Deploy models to production

### Month 7-8: Advanced Topics

- Fine-tune models with RL
- Build evaluation frameworks
- Optimize for performance
- Explore research frontiers

## 🛠️ Essential Tools

### Development

- **Jupyter Notebooks** - Interactive development
- **Google Colab** - Free GPU access
- **VS Code** - IDE with AI extensions
- **Git** - Version control

### Training & Deployment

- **PyTorch** - Primary framework
- **Hugging Face** - Model hub
- **Weights & Biases** - Experiment tracking
- **Modal/Runpod** - GPU compute
- **FastAPI** - API deployment

### Data & Evaluation

- **Pandas** - Data manipulation
- **NumPy** - Numerical computing
- **Scikit-learn** - ML utilities
- **LangSmith** - LLM observability

## 📊 Model Comparison

| Model Type  | Use Case                  | Training      | Inference   |
| ----------- | ------------------------- | ------------- | ----------- |
| **GPT-4**   | General intelligence      | Pre-trained   | API         |
| **Claude**  | Long context, coding      | Pre-trained   | API         |
| **Llama 2** | Open source, customizable | Fine-tuneable | Self-hosted |
| **Mistral** | Efficient, multilingual   | Fine-tuneable | Self-hosted |
| **Gemini**  | Multimodal                | Pre-trained   | API         |

## 🔬 Research Areas

### Current Hot Topics

1. **Efficient fine-tuning** - LoRA, QLoRA, Adapter methods
2. **Long context** - Extending context windows beyond 100K tokens
3. **Multimodal** - Vision + language + audio models
4. **Alignment** - Making AI helpful, harmless, and honest
5. **Agents** - Autonomous AI systems with tool use
6. **Reasoning** - Chain-of-thought, tree-of-thought
7. **Efficiency** - Quantization, pruning, distillation

## 🎓 Best Practices

### Training Models

1. Start with pre-trained models
2. Use proper train/val/test splits
3. Monitor for overfitting
4. Log all experiments
5. Use learning rate scheduling
6. Implement early stopping
7. Evaluate on diverse test sets

### Building LLM Applications

1. Start simple (prompt engineering)
2. Add RAG when needed
3. Fine-tune as last resort
4. Implement proper error handling
5. Monitor costs and latency
6. Cache expensive operations
7. Version control prompts

### Agent Development

1. Design clear tool interfaces
2. Implement robust error recovery
3. Add memory for context
4. Test with diverse scenarios
5. Monitor token usage
6. Implement rate limiting
7. Provide human oversight option

## 💪 Practice Projects

### Beginner

1. Sentiment analysis classifier
2. Text summarization tool
3. Simple chatbot with RAG
4. Image classifier with CNN

### Intermediate

5. Question-answering system
6. Code generation assistant
7. Multi-tool agent
8. Fine-tuned domain model

### Advanced

9. Multi-agent collaboration system
10. RL-tuned dialogue agent
11. Multimodal assistant
12. Research paper analyzer

## 🚀 Career Paths

### Roles

- ML Engineer
- AI Research Scientist
- LLM Application Developer
- AI Safety Researcher
- MLOps Engineer
- Prompt Engineer
- AI Product Manager

### Building Portfolio

- Publish models on Hugging Face
- Write technical blogs
- Contribute to open source
- Create YouTube tutorials
- Participate in Kaggle competitions
- Present at conferences
- Build production applications

## 🔒 Safety & Ethics

### Considerations

- Bias in training data
- Fairness across demographics
- Privacy and data protection
- Misuse prevention
- Transparency and explainability
- Environmental impact
- Job displacement
- Alignment with human values

### Best Practices

- Document data sources
- Test for bias regularly
- Implement content filters
- Provide opt-out mechanisms
- Be transparent about AI use
- Consider societal impact
- Follow regulations (GDPR, etc.)
