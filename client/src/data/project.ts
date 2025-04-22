import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "1",
    title: "ShopEase",
    category: "Full-Stack",
    tags: ["React", "NodeJs", "Stripe", "MongoDB", "Firebase", "Express"],
    imageUrl:
      "https://www.searchenginejournal.com/wp-content/uploads/2020/03/20-free-things-you-need-to-do-after-launching-your-ecommerce-website-5e664bcb60da5.png ",
    projectUrl: "https://shopeasy-948j.onrender.com/",
    githubUrl: "https://github.com/rimo02/ShopEase",
    featured: true,
    description:
      "A full-stack e-commerce app using React, Node.js, and Firebase, features JWT authentication with role-based access, secure Stripe payments, paginated product displays, and an admin dashboard. Optimized queries, strong security, and cloud deployment ensure performance and scalability.",
  },
  {
    id: "2",
    title: "CollabDocs",
    description:
      "A real-time collaborative text editor similar to Google Docs. It features JWT-based authentication for secure access control, persistent document storage for managing user files, and real-time synchronization using Socket.io, enabling smooth, low-latency collaboration among multiple users.",
    category: "Full-Stack",
    tags: ["React", "NodeJs", "MongoDB", "Socket.io", "Express"],
    imageUrl: "https://store-images.s-microsoft.com/image/apps.62132.14122435581357066.0fcc9558-8297-4472-bcd9-427465cc7c1c.51c692fe-2e03-4d07-b5e5-e1fef11cfd97?h=253",
    projectUrl: "https://collabdocs-3skq.onrender.com/",
    githubUrl: "https://github.com/rimo02/CollabDocs",
    featured: true,
  },
  {
    id: "3",
    title: "GoBalancer",
    description:
      "A simple load balancer designed to distribute network traffic efficiently. It uses a weighted Round Robin scheduling algorithm to manage traffic across multiple backend servers. Furthermore, it includes regular health checks to monitor the status of these servers, dynamically adjusting traffic routing based on their availability and performance, increasing overall system reliablility",
    category: "Golang",
    tags: ["React", "Golang"],
    imageUrl:
      "https://sslinsights.com/wp-content/uploads/2024/10/load-balancer.png",
    githubUrl: "https://github.com/rimo02/GoBalancer",
    featured: true,
  },
  {
    id: "4",
    title: "LLM Fine-Tuning for Logical Reasoning",
    description:
      "Fine-tuned the TinyLlama-1B language model to improve logical reasoning using the Facebook/Natural Reasoning dataset. Applied LoRA to key transformer layers and used 4-bit quantization to enhance efficiency without increasing model size. Training was further optimized through mixed-precision computation and gradient accumulation.",
    category: "Machine Learning",
    tags: ["Pytorch"],
    imageUrl:
      "https://cdn.prod.website-files.com/6752ed91ddf74c98d49aa0e4/679b99d70261c2a128d4912c_679a85643fadbc11c974fd80_b706199a-c446-47ee-b322-fce8cfc2e556_deepset_blog_FineTuning.webp",
    featured: true,
  },
  {
    id: "5",
    title: "Image Colorizer",
    description:
      "Developed a PyTorch-based image colorization model inspired by recent research, using a ResNet backbone for feature extraction and a generative network to predict realistic colors for grayscale images. Initially trained on the ImageNet-12k dataset, the model was further fine-tuned on diverse image types such as landscapes and animals, achieving over 65% accuracy.",
    category: "Machine Learning",
    tags: ["PyTorch", "Streamlit"],
    imageUrl: "https://hotpot.ai/images/site/ai/colorizer/teaser.jpg",
    githubUrl: "https://github.com/rimo02/ReviVr",
    featured: true,
  },
  {
    id: "6",
    title: "TwistGPT",
    description:
      "Built a GPT-2 language model from the ground up. Implemeted features like masked self attention and specifically trained on a collection of short stories by O'Henry, an author famous for his unexpected plot twists.",
    category: "Machine Learning",
    tags: ["Pytorch"],
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8iBjK7nDCRbuURfQPaOGNkFjeGXl5cuvmnw&s",
    githubUrl: "https://github.com/rimo02/TwistGpt",
    featured: true,
  },
  {
    id: "7",
    title: "GoBitly",
    description:
      "Developed a URL shortener service using Go and Gin, integrating MongoDB for persistent storage of shortened URLs, expiration details, and click analytics. Performance was optimized through in-memory caching with Redis. A rate-limiting mechanism, based on IP address, was implemented to prevent abuse and ensure high service availability.",
    category: "Golang",
    tags: ["Golang", "MongoDB", "React", "Redis"],
    imageUrl: "https://goo.by/content/avatar/zZnyCd_goo-url-shortener.png",
    githubUrl: "https://github.com/rimo02/ShopEase",
    featured: true,
  },
];
