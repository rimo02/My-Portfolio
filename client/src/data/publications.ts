import { Publication } from "../types";

export const publications: Publication[] = [
  {
    id: "1",
    doi: "abc",
    title: "IndiRTS:Real Time Segmentation for Indian Conditions",
    description:
      "Developed a highly efficient custom semantic segmentation model for autonomous vehicles, achieving a Mean IOU (MIoU) of 0.6064 with a remarkably small footprint of just 0.45 million parameters. This lightweight design outperforms conventional models with nearly ten times more parameters. The model was specifically tailored for the complexities of urban driving using the Indian Driving Dataset (IDD), ensuring reliable segmentation in challenging Indian road conditions.",
    imageUrl: "https://idd.insaan.iiit.ac.in/static/img/banner.jpg",
    paperUrl: "url",
  },
  {
    id: "2",
    doi: "abc",
    title: "EUnet: Where Attention Meets Precision for Real-Time Lane Detection",
    description:
      "Developed a lightweight and accurate lane segmentation model based on ENet, optimized for real-time performance and embedded deployment. By combining multi-head attention with a hybrid encoder-decoder architecture, the model effectively captures long-range dependencies and global context. Key innovations—such as dilated convolutions, asymmetric decomposition, and UNet-style skip connections—enhance multi-scale feature extraction. With only 1.8M parameters, our model achieves state-of-the-art results, reaching 97.91% accuracy and a 98.42% F1-score, outperforming top models like GANet, CLRNetV2, and PE-RESA. This makes it ideal for autonomous driving and traffic analysis tasks.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2MTEOYPb1cqiRbW2rfZ6JB9X6gxJl8jdnHw&s",
  },
];
