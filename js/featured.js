// Home page featured papers. title = bold; venue/year = normal. Edit to curate.
const FEATURED = [
  {
    "img": "/images/home/featured/Equivariant.png",
    "title": "SE(3)-equivariant Robot Learning and Control: A Tutorial Survey",
    "link": "https://link.springer.com/article/10.1007/s12555-025-0193-4",
    "desc": "Recent progress in deep learning and Transformers has enabled major advances in robotics through imitation learning, reinforcement learning, and LLM-based multimodal perception. Yet standard neural networks often fail to exploit the symmetries and invariances inherent in robotic environments, requiring large datasets or heavy augmentation. Equivariant neural networks address these limitations by embedding symmetry directly into their architectures, yielding greater efficiency and generalization. This tutorial survey reviews core ideas and recent developments in equivariant deep learning and control for robotics, with emphasis on SE(3)-equivariant models that capture 3D rotational and translational structure in manipulation and control. We introduce essential group theory and Lie group concepts, outline the principles of group-equivariant network design, and examine applications in imitation learning, reinforcement learning, and geometric control. We conclude with open challenges and future directions for building robust, sample-efficient, and multimodal real-world robotic systems using equivariant methods.",
    "venue": "International Journal of Control, Automation and Systems 2025"
  },
  {
    "img": "/images/home/featured/AItutor.png",
    "title": "Data-Driven Driver Training via Counterfactual and Language-Based Guidance in Racing Scenarios",
    "link": "https://ieeexplore.ieee.org/abstract/document/11184112",
    "desc": "This work presents a fully data-driven coaching framework to help novice racing drivers improve performance safely and effectively. Traditional coaching and existing automated tools often lack personalization and clear guidance, so we cluster sequential driving behavior to generate pseudo skill labels and train a classification model to assess corner-specific performance. To provide actionable feedback, we introduce a counterfactual explanation method based on negative SHAP values that identifies which feature adjustments would raise performance to expert levels. A customized LLM translates this feedback into intuitive natural language. In simulated racing experiments, our approach accurately predicts skill levels, clusters driving strategies, and significantly improves cornering and lap times. Drivers also retain these gains even after feedback is removed, demonstrating strong potential for scalable and interpretable driver training.",
    "venue": "IEEE Access 2025"
  },
  {
    "img": "/images/home/featured/Inferior.png",
    "title": "Single-step prediction of inferior alveolar nerve injury after mandibular third-molar extraction using contrastive learning and Bayesian auto-tuned deep learning model",
    "link": "https://academic.oup.com/dmfr/advance-article/doi/10.1093/dmfr/twaf069/8266699?login=true",
    "desc": "The study developed a deep learning framework to predict inferior alveolar nerve (IAN) injury using CBCT and panoramic radiographs. Five architectures were trained on 902 panoramic and 1,500 CBCT images, and both contrastive learning and Bayesian optimization markedly improved model performance, raising the best F1-score to 0.923. The optimized AI system outperformed oral and maxillofacial surgeons on CBCT cross-sectional images but performed slightly worse on panoramic radiographs. Overall, the combined approach effectively enhances IAN injury prediction, with contrastive learning addressing data imbalance and Bayesian optimization improving accuracy, while expert interpretation remains valuable for panoramic imaging.",
    "venue": "Dentomaxillofacial Radiology 2025"
  },
  {
    "img": "/images/home/featured/XAI_Periodontitis.png",
    "title": "Explainable Deep Learning Approaches for Risk Screening of Periodontitis",
    "link": "https://journals.sagepub.com/doi/full/10.1177/00220345241286488",
    "desc": "Several studies have linked periodontitis to systemic diseases, yet a reliable clinical tool for early screening remains unavailable. This study leverages explainable artificial intelligence (XAI) to facilitate early detection by analyzing clinical features and providing individualized risk assessments. Using 30,465 participant records from NHANES, deep learning and machine learning models were trained on 9,632 all-age and 5,601 over-50 datasets, achieving AUCs of 0.858 and 0.865, respectively, for screening and diagnosis. LIME-based explainability identified key contributing factors, with age, sex, diabetes, smoking, and tissue transglutaminase emerging as the most significant, while arthritis, sleep disorders, hypertension, cholesterol, and obesity also played a role. The findings demonstrate the potential of XAI-driven risk assessment to enhance early detection and preventive strategies for periodontitis in clinical settings.",
    "venue": "Journal of Dental Research, 2025"
  },
  {
    "img": "/images/home/featured/racing.png",
    "title": "Learning Expert-Level Racing Strategies Via Scheduled Cost Functions in Model Predictive Control",
    "link": "https://ieeexplore.ieee.org/abstract/document/10689655",
    "desc": "This paper introduces a novel framework that enhances the imitation of expert strategies by incorporating a scheduled cost function into the MPC. We present an inverse model predictive control (iMPC) framework, equipped with a custom MPC formulation that adeptly integrates scheduled cost functions. By employing Gaussian process (GP) regression, our framework effectively maps the connection between trajectories and their respective scheduling costs, enabling dynamic adaptation of cost functions within MPC planning. Furthermore, we present a probabilistic modeling method, combining Bayesian optimization (BO) with GP. This method is designed to create datasets that closely mimic expert-level driving behaviors, enriching the data available for training and validating our iMPC approach. We evaluate our framework by emphasizing the goodness of fit and interpretability of the reconstructed cost functions and the resulting trajectories. We validate our framework using human-in-the-loop expert data and demonstrate the superiority of our methodology by comparing it with a tracking MPC.",
    "venue": "IEEE Transactions on Intelligent Vehicles, 2024"
  },
  {
    "img": "/images/home/featured/TMJ2.png",
    "title": "Multi-class segmentation of temporomandibular joint using ensemble deep learning",
    "link": "https://www.nature.com/articles/s41598-024-69814-5",
    "desc": "We developed deep learning models tailored to the automatic segmentation of temporomandibular joint components, including the temporal bone, disc, and condyle. These models underwent rigorous training and validation utilizing a dataset of 3693 magnetic resonance images from 542 patients. Upon evaluation, our ensemble model, which combines five individual models, yielded average Dice similarity coefficients of 0.867, 0.733, 0.904, and 0.952 for the temporal bone, disc, condyle, and background class during internal testing. In the external validation, the average Dice similarity coefficients values for the temporal bone, disc, condyle, and background were 0.720, 0.604, 0.800, and 0.869, respectively. When applied in a clinical setting, these artificial intelligence-augmented tools enhanced the diagnostic accuracy of physicians, especially when discerning between temporomandibular joint anterior disc displacement and osteoarthritis.",
    "venue": "Scientific Reports volume 14, 2024"
  },
  {
    "img": "/images/home/featured/motion%20prediction.png",
    "title": "Human Motion Prediction: Assessing Direct and Geometry-Aware Approaches in 3D Space",
    "link": "https://ieeexplore.ieee.org/abstract/document/10613760",
    "desc": "This survey provides an exhaustive review of human motion prediction algorithms and categorizes them according to their core architectures, including Convolutional Neural Networks (CNNs), Recurrent Neural Networks (RNNs), Graph Convolutional Networks (GCNs), Generative Adversarial Networks (GANs), Variational Autoencoders (VAEs), Transformers, and Equivariant Neural Networks (ENNs). Our key contribution is a systematic presentation of the latest prediction methodologies, classified into direct and geometry-aware modeling. We begin with the problem formulation of human motion prediction, explore assorted techniques, and discuss data representation, accompanied by a list of accessible datasets. We also identify and analyze the ongoing challenges and limitations of the current algorithms, offering insights into potential future developments in this domain.",
    "venue": "in IEEE Access 2024"
  },
  {
    "img": "/images/home/featured/onlineguide2.png",
    "title": "An Online Guide System for Improving Driving Skills on the Race Track: Visual Feedback Approach",
    "link": "https://link.springer.com/chapter/10.1007/978-3-031-61963-2_27",
    "desc": "Racing instruction often involves instructors riding along in the vehicle, providing coaching on aspects such as acceleration, braking points, and handling techniques, primarily through verbal instruction. In this paper, we propose an online racing guide system designed to partially emulate the role of a human instructor. The proposed system comprises a guide algorithm and a driver feedback interface. By employing model predictive control techniques, the guide algorithm generates optimal torque and steering guidance based on the vehicle state and pre-collected track data. The computed optimal guidance is conveyed to the driver through visual feedback. This paper covers the overall system setup, algorithm, experimental results, and future plans.",
    "venue": "26th International Conference on Human-Computer Interaction, HCII 2024."
  },
  {
    "img": "/images/home/featured/VAF.png",
    "title": "Inferring Human Control Intent Using Inverse LQR with Output Penalty Versus Gain Penalty: Better Fit But Similar Intent",
    "link": "https://asmedigitalcollection.asme.org/dynamicsystems/article/doi/10.1115/1.4065593/1200563",
    "desc": "To identify the underlying mechanisms of human motor control, parametric models are utilized. One approach of employing these models is inferring the control intent (estimating motor control strategy). In this study, we derive an ILQR optimization with output penalty; minimizing the error between the model output and the measured output. We conducted the test on 30 healthy subjects who sat on a robotic seat capable of rotation. The task utilized a physical human-robot interaction with a perturbation torque as input and lower and upper body angles as output. Our method significantly improved the goodness of fit compared to the gain-penalty ILQR. Moreover, the dominant inferred intent was not statistically different between the two methods. To our knowledge, this work is the first that infers motor control intent for a sample of healthy subjects. This is a step closer to investigating control intent differences between healthy subjects and subjects with altered motor control, e.g., low back pain.",
    "venue": ""
  },
  {
    "img": "/images/home/featured/concrete.jpg",
    "title": "Automatic concrete slump prediction of concrete batching plant by deep learning",
    "link": "https://www.sciencedirect.com/science/article/pii/S2666165924001558#fig2",
    "desc": "We propose an automatic slump prediction method based on the VGG16 neural network by analyzing the video from the final discharge hopper of the batching plant. Additionally, Explainable AI (XAI) is adopted to evaluate and validate our automatic concrete quality inspection approach. Iteratively examining XAI outputs and applying necessary adjustments in data preprocessing helps to achieve better overall performance. The proposed video classification method performed by averaging over the image-level predictions can classify the concrete into four slump classes with an average precision of 85% and an average F1 score of 87%. This demonstrates the possibility of continuous quality evaluation for all concrete produced in the concrete batching plant.",
    "venue": "Developments in the Built Environment, Volume 18, April 2024"
  },
  {
    "img": "/images/home/featured/CVPR.png",
    "title": "Diffusion-EDFs: Bi-equivariant Denoising Generative Modeling on SE(3) for Visual Robotic Manipulation",
    "link": "https://openaccess.thecvf.com/content/CVPR2024/html/Ryu_Diffusion-EDFs_Bi-equivariant_Denoising_Generative_Modeling_on_SE3_for_Visual_Robotic_CVPR_2024_paper.html",
    "desc": "Diffusion generative modeling has become a promising approach for learning robotic manipulation tasks from stochastic human demonstrations. We present Diffusion-EDFs, a novel SE(3)-equivariant diffusion-based approach for visual robotic manipulation tasks. We show that our proposed method achieves remarkable data efficiency, requiring only 5 to 10 human demonstrations for effective end-to-end training in less than an hour. Our approach has superior generalizability and robustness compared to state-of-the-art methods.",
    "venue": "The IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2024"
  },
  {
    "img": "/images/home/featured/Scale-Equiv.png",
    "title": "Scale-Equivariant Object Perception for Autonomous Driving",
    "link": "https://ieeexplore.ieee.org/abstract/document/10480255",
    "desc": "We use scale-equivariant CNNs to achieve robust object perception in autonomous vehicles, adapting dynamically as the vehicle progresses. We first review the limitations inherent in existing scale-equivariant CNNs, highlighting their pronounced sensitivity to scale changes, particularly in high-frequency elements. We then propose the Separable Scale-Equivariant (SSE) backbone network, specifically engineered to adeptly counteract these shortcomings. Our proposed network exhibits minimal errors against other methods while also showing better performance in object detection and tracking on the KITTI dataset.",
    "venue": "IEEE Transactions on Intelligent Vehicles, 2024"
  },
  {
    "img": "/images/home/featured/Race0.png",
    "title": "Autonomous Robot Racing Competitions: Truly Multivehicle Autonomous Racing Competitions [Competitions]",
    "link": "https://ieeexplore.ieee.org/abstract/document/10474524",
    "desc": "The Autonomous Robot Racing Competition (ARRC) is a scaled-down (1:2.6) multiple autonomous vehicles racing competition that originated in Korea, commencing with its inaugural event in 2021, followed by two events in 2022 and three in 2023, totaling six events so far. It has evolved into the world’s unique and truly multivehicle (involving more than two cars) autonomous racing competition.",
    "venue": "IEEE Robotics and Automation Magazine, 2024"
  },
  {
    "img": "/images/home/featured/RegNR.png",
    "title": "Regularized nonlinear regression with dependent errors and its application to a biomechanical model",
    "link": "https://link.springer.com/article/10.1007/s10463-023-00895-1",
    "desc": "Motivated by observing that the data from a head-neck position tracking system, one of biomechanical models, show multiplicative time-dependent errors, we develop a modified penalized weighted least squares estimator. The proposed method can be also applied to a model with possible non-zero mean time-dependent additive errors. Asymptotic properties of the proposed estimator are investigated under mild conditions on a weight matrix and the error process.",
    "venue": "Annals of the Institute of Statistical Mathematics, 2024"
  },
  {
    "img": "/images/home/featured/DMHE.png",
    "title": "Differentiable Moving Horizon Estimation for Vehicle Kinematics via Learning Covariance Matrices",
    "link": "https://ieeexplore.ieee.org/document/10361594",
    "desc": "This paper introduces the Differentiable Moving Horizon Estimation (DMHE) as a solution for robustly estimating vehicle kinematics, especially when prior knowledge of the covariance matrices for process and measurement noises is lacking. Our experiments consistently highlight DMHE's high performance. Further validations, targeting both side and forward direction observation methods, underscore its potential in practical vehicular kinematics applications. Overall, our research paves the way for advancements in robust and efficient kinematic estimation techniques for vehicles.",
    "venue": "IEEE Transactions on Intelligent Vehicles, 2023"
  },
  {
    "img": "/images/home/featured/DentalAI.jpg",
    "title": "AI-Based Dental Caries and Tooth Number Detection in Intraoral Photos: Model Development and Performance Evaluation",
    "link": "https://www.sciencedirect.com/science/article/pii/S0300571223004074",
    "desc": "In this study, we aimed to integrate tooth number recognition and caries detection in full intraoral photographic images using a cascade region-based deep convolutional neural network (R-CNN) model to facilitate the practical application of artificial intelligence (AI)-driven automatic caries detection in clinical practice. For tooth number recognition, the model achieved an average mean average precision (mAP) score of 0.880. In the task of dental caries detection, the model's average mAP score was 0.769, with individual scores spanning from 0.695 to 0.893.",
    "venue": "Journal of Dentistry, 2023"
  },
  {
    "img": "/images/home/featured/SeoRobot.png",
    "title": "Contact-rich SE(3)-Equivariant Robot Manipulation Task Learning via Geometric Impedance Control",
    "link": "https://ieeexplore.ieee.org/document/10373109",
    "desc": "This paper presents a differential geometric control approach that leverages SE(3) group invariance and equivariance to increase transferability in learning robot manipulation tasks that involve interaction with the environment. The proposed approach is based on utilizing a recently presented geometric impedance control (GIC) combined with a learning variable impedance control framework, where the gain scheduling policy is trained in a supervised learning fashion from expert demonstrations. A comparison of our proposed control and learning framework with a well-known Cartesian space learning impedance control, equipped with a Cartesian error vector-based gain scheduling policy, confirms the significantly superior learning transferability of our proposed approach. A hardware implementation on a peg-in-hole task is conducted to validate the learning transferability and feasibility of the proposed approach.",
    "venue": "IEEE Robotics and Automation Letters, 2023"
  },
  {
    "img": "/images/home/featured/bieq.png",
    "title": "Robotic Manipulation Learning with Equivariant Descriptor Fields: Generative Modeling, Bi-equivariance, Steerability, and Locality, Oral presentation (Best Paper Award) at RSS 2023 Workshop on Symmetries in Robot Learning, Jul 10 2023 Daegu",
    "link": "https://openreview.net/forum?id=heTTJfkTQC",
    "desc": "This paper presents a fresh perspective on the design principles of SE(3)-equivariant methods for end-to-end visual robotic manipulation learning. Specifically, we examine the recently introduced concept of Equivariant Descriptor Fields (EDFs), focusing on four key underlying principles: generative modeling, bi-equivariance, steerable representation, and locality. These principles enable EDFs in achieving impressive data efficiency and out-of-distribution generalizability, even in the absence of prior knowledge. By comparing EDFs with other contemporary equivariant methods based on the four criteria, this paper underscores the importance of these design principles and aims to establish a guiding framework for future research on SE(3)-equivariant robotic manipulation.",
    "venue": "Republic of Korea"
  },
  {
    "img": "/images/home/featured/RobotRL.png",
    "title": "Distributional and Hierarchical Reinforcement Learning for Physical Systems with Noisy State Observations and Exogenous Perturbations, in Engineering Applications of Artificial Intelligence",
    "link": "/publications/",
    "desc": "In this paper, we introduce a novel approach that exploits the synergies between hierarchical reinforcement learning and distributional reinforcement learning to address complex sparse-reward tasks, where noisy state observations or non-stationary exogenous perturbations are present. Our proposed method has a hierarchical policy structure, where random rewards are modeled as random variables that follow a value distribution. This approach enables the handling of complex tasks and increases robustness to uncertainties arising from measurement noise or exogenous perturbations, such as wind.",
    "venue": "2023"
  },
  {
    "img": "/images/home/featured/TMJ.png",
    "title": "Explainable deep learning-based clinical decision support engine for MRI-based automated diagnosis of temporomandibular joint anterior disk displacement, Computer Methods and Programs in Biomedicine Volume 233",
    "link": "/publications/",
    "desc": "As the first validated study for MRI-based automatic TMJ ADD diagnosis, we propose a clinical decision support engine that diagnoses TMJ ADD using MR images and provides heat maps as the visualized rationale of diagnostic predictions using explainable artificial intelligence.",
    "venue": "May 2023"
  },
  {
    "img": "/images/home/featured/Deep.png",
    "title": "Interpretable Deep-Learning Approaches for Osteoporosis Risk Screening and Individualized Feature Analysis Using Large Population-Based Data: Model Development and Performance Evaluation",
    "link": "/publications/",
    "desc": "The aim of this study was to develop an interpretable deep-learning (DL) model for osteoporosis risk screening with clinical features. Clinical interpretation with individual explanations of feature contributions is provided using an explainable artificial intelligence (XAI) technique.",
    "venue": "Vol 25 (2023)"
  },
  {
    "img": "/images/home/featured/Drone.png",
    "title": "Output feedback control design for quadrotor using recursive least square dynamic inversion",
    "link": "/publications/",
    "desc": "We propose a new trajectory tracking output feedback control design for quadrotor unmanned aerial vehicles (UAVs) to manage stable flight in the outdoor environment with strong uncertainties, i.e., wind gusts. To deal with the underactuation characteristic inherited in the quadrotor, the controller and plant dynamics are separated into multi-time-scale structures. The stability of the closed-loop system is analyzed using the singular perturbation method. Through numerical simulations and outdoor experiments under the wind gust, the effectiveness of the proposed control algorithm is verified.",
    "venue": "Mechatronics, 2023"
  },
  {
    "img": "/images/home/featured/RobotSE3.png",
    "title": "Equivariant Descriptor Fields: SE(3)-Equivariant Energy-Based Models for End-to-End Visual Robotic Manipulation Learning",
    "link": "https://openreview.net/forum?id=dnjZSPGmY5O",
    "desc": "We present SE(3)-equivariant models for visual robotic manipulation from point clouds that can be trained fully end-to-end. By utilizing the representation theory of the Lie group, we construct novel SE(3)-equivariant energy-based models that allow highly sample efficient end-to-end learning. We show that our models can learn from scratch without prior knowledge and yet are highly sample efficient (5∼10 demonstrations are enough).",
    "venue": "in the Eleventh International Conference on Learning Representations (ICLR) 2023"
  },
  {
    "img": "/images/home/featured/Orthosis.png",
    "title": "Policy Design for an Ankle-Foot Orthosis Using Simulated Physical Human-Robot Interaction via Deep Reinforcement Learning",
    "link": "/publications/",
    "desc": "In this paper, we propose a two-stage policy training framework based on deep reinforcement learning (deep RL) to design a robot controller using human-robot dynamic simulation. In Stage 1, the optimal policy of generating human gaits is obtained from deep RL-based imitation learning on a healthy subject model using the musculoskeletal simulation in OpenSim-RL. In Stage 2, human models in which the right soleus muscle is weakened to a certain severity are created by modifying the human model obtained from Stage 1. Comparative analysis of kinematic and kinetic simulation results with the experimental data shows that the derived human muscu- loskeletal model imitates a human walking.",
    "venue": "IEEE Transactions on Neural Systems and Rehabilitation Engineering, 2022"
  },
  {
    "img": "/images/home/featured/robot2.png",
    "title": "Hierarchical Primitive Composition: Simultaneous Activation of Skills with Inconsistent Action Dimensions in Multiple Hierarchies",
    "link": "/publications/",
    "desc": "In this study, we incorporate simultaneous activation of the skills and structure them into multiple hierarchies in a recursive fashion in order to orchestrate the skills with different action spaces via multiplicative Gaussian distributions. Exploiting the modularity, interpretability can also be achieved by observing the modules that are used in the new task if each of the skills is known. We demonstrate how the proposed scheme can be employed in practice by solving a pick and place task with a 6 DoF manipulator and examine the effects of each property from ablation studies.",
    "venue": "IEEE Robotics and Automation Letters (RA-L), IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2022"
  },
  {
    "img": "/images/home/featured/Scheduling.png",
    "title": "Nonlinear Model Predictive Control with Cost Function Scheduling for a Wheeled Mobile Robot",
    "link": "/publications/",
    "desc": "This paper proposes a novel MPC approach with a scheduled quadratic cost function that approximates the true objective in order to optimally control a nonlinear system with a sparse/binary objective. The cost function parameter is optimally scheduled by a parameter scheduling policy obtained by solving a Markov decision process (MDP) constructed from sampled trajectories from any nonlinear MPC solver. The simulation and experimental results successfully demonstrate the effectiveness of our MPC approach in cases of the point stabilization problem of a differential drive WMR.",
    "venue": "in the IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), October 23–27, 2022 Kyoto, Japan."
  },
  {
    "img": "/images/home/featured/neck.png",
    "title": "Regularized Nonlinear Regression for Simultaneously Selecting and Estimating Key Model Parameters: Application to Head-Neck Position Tracking, Engineering Applications of Artificial Intelligence",
    "link": "/publications/",
    "desc": "In this paper, we propose a new method to simultaneously select and estimate sensitive parameters as key model parameters while fixing the remaining parameters to a set of typical values. The problem is formulated as a nonlinear least-squares estimator with L1-regularization on the deviation of parameters from a set of typical values. In addition, a modified optimization approach is introduced to find the solution to the formulated problem. As a result, we provided consistency and oracle properties of the proposed estimator as a theoretical foundation. To show the effectiveness of the proposed method, we conducted simulation and experimental studies.",
    "venue": "2022"
  },
  {
    "img": "/images/home/featured/Urology.png",
    "title": "A warning system for urolithiasis via retrograde intrarenal surgery using machine learning: an experimental study",
    "link": "/publications/",
    "desc": "We developed an acceleration measurement system that recorded the power signal data for a number of hours, yielding distinguishable characteristics among three different states (idle state, stones, and tissue–laser interface) by conducting fast Fourier transform (FFT) analysis. A discrete wavelet transform (DWT) was used for feature extraction, and a random forest classification algorithm was applied to classify the current state of the laser-tissue interface. Our monitoring system receives the shockwave signals generated from the RIRS urolithiasis treatment procedure and generates the laser irradiance status by rapidly recognizing (in 0.5 s) the current laser exposure state with high accuracy (95%). We postulate that this can significantly minimize surgeon error during RIRS.",
    "venue": "BMC Urology, 2022"
  },
  {
    "img": "/images/home/featured/BT.png",
    "title": "Behavior Tree-Based Task Planning for Multiple Mobile Robots using a Data Distribution Service, 2022 IEEE/ASME International Conferene on Advanced Intelligent Mechatronics, Royton Sapporo, Sapporo, Hokkaido, Japan, July 11th-15th",
    "link": "/publications/",
    "desc": "In this study, we propose a task planning framework for multiple robots that builds on a behavior tree (BT). BTs communicate with a data distribution service (DDS) to send and receive data. Since the standard BT derived from one root node with a single tick is unsuitable for multiple robots, a novel type of BT action and improved nodes are proposed to control multiple robots through a DDS asynchronously. To show the feasibility of our framework in a real-world application, three mobile robots were experimentally coordinated for them to travel alternately to four goal positions by the proposed single task planning unit via a DDS.",
    "venue": "2022"
  },
  {
    "img": "/images/home/featured/suspension.png",
    "title": "Suspension Control Strategies Using Switched Soft Actor-Critic Models for Real Roads",
    "link": "/publications/",
    "desc": "In this paper, we propose learning and control strategies for a semi-active suspension system in a full car using soft actor-critic (SAC) models on real roads, where many road profiles with various power of disturbance exist (e.g., speed bumps and general roads). Our proposed switching learning system continuously identifies two different road disturbance profiles in real-time such that the appropriately designed SAC model can be learned and applied accordingly. Our switching SAC approach outperforms those of advanced and conventional benchmark suspension systems. Finally, we also presented our successfully implemented SAC training system in a real car on real roads. The trained SAC model outperforms conventional controllers reducing the z-directional acceleration and pitch, similar to the simulation results, which is highly related to the riding comfort and vehicle maneuverability.",
    "venue": "IEEE Transactions on Industrial Electronics, 2022"
  },
  {
    "img": "/images/home/featured/AV.png",
    "title": "Safety-critical Control with Nonaffine Control Inputs via a Relaxed Control Barrier Function for an Autonomous Vehicle",
    "link": "/publications/",
    "desc": "This letter proposes a novel control design for an autonomous vehicle system with nonaffine control inputs that can track the desired trajectories while considering the safety constraint. The safety and the stability of the closed-loop system are analyzed using a singular perturbation method. The proposed method is validated using the numerical simulation and the high-fidelity car simulator under realistic driving scenarios.",
    "venue": "IEEE Robotics and Automation Letters, IEEE International Conference on Robotics and Automation (ICRA), 2022"
  },
  {
    "img": "/images/home/featured/Autoheli.png",
    "title": "Output feedback control design using Extended High-Gain Observers and dynamic inversion with projection for a small scaled helicopter",
    "link": "/publications/",
    "desc": "This paper presents the output feedback control design for a tracking problem of a small-scale helicopter in the presence of uncertainties. A time-scale approach is suggested to cope with underactuated mechanical systems to overcome lack of the number of inputs. The singular perturbation method is used to analyze the stability of the closed-loop system in a multi-time scale structure. Based on the stability analysis, the design procedure for the proposed algorithm is presented for practical implementation. The effectiveness of the proposed control algorithm is shown via numerical simulations as well as experimental tests with a small-scale helicopter in an outdoor environment.",
    "venue": "Automatica 2021"
  },
  {
    "img": "/images/home/featured/NNInt.png",
    "title": "State reconstruction in a nonlinear vehicle suspension system using deep neural networks",
    "link": "/publications/",
    "desc": "In this work, we proposed and designed a long short-term memory (LSTM)-based neural network to estimate the velocity and position states of a full car’s suspension system using only online data streams from cheap inertial sensory measurements. Our approach shows that with only noisy accelerometer and gyroscope sensors, we can successfully reconstruct nearly perfect states in a full car’s nonlinear dynamic system using a well-trained LSTM-based neural network combined with the extended Kalman filter.",
    "venue": "Nonlinear Dynamics, 2021"
  },
  {
    "img": "/images/home/featured/heli.png",
    "title": "Nonaffine Helicopter Control Design and Implementation based on a Robust Explicit Nonlinear Model Predictive Control",
    "link": "/publications/",
    "desc": "To solve a control problem of the helicopter under model uncertainties and disturbance present environments, an explicit nonlinear model predictive control (ENMPC), a dynamic inversion, and an extended high-gain observer (EHGO) are combined in a multi-time-scale fashion. The multi-time scaled structure and the ENMPC provide the framework of the control design, the dynamic inversion deals with non-affine control inputs, and the EHGO estimates the unmeasured system states and uncertainties. The successful outdoor experiments with the proposed control implemented on autopilot hardware demonstrate the validity of our approach in the presence of model uncertainties and wind disturbances.",
    "venue": "in IEEE Transactions on Control Systems Technology, 2021"
  },
  {
    "img": "/images/home/featured/MOGP.png",
    "title": "Multi-output Infinite Horizon Gaussian Processes in the Proceedings of 2021 International Conference on Robotics and Automation (ICRA 2021)",
    "link": "/publications/",
    "desc": "In this paper, we propose a multi-output infinite-horizon Gaussian process (MOIHGP) that generalizes the single-output IHGP to deal with multiple outputs for better prediction. Our approach allows us to consider correlations between multiple outputs for better prediction, even with occlusions in a Bayesian way. Finally, we successfully demonstrate the effectiveness of our approach by benchmark and experimental results. For simulated benchmark experiments with high noise levels, our approach reduced 16.6% of the averaged RMSE value achieved by the single-output IHGP.",
    "venue": ""
  },
  {
    "img": "/images/home/featured/ASME2021.png",
    "title": "Vision-based Uncertainty-aware Lane Keeping Strategy using Deep Reinforcement Learning in the Journal of Dynamic Systems, Measurement, and Control",
    "link": "/publications/",
    "desc": "In this work, for the uncertaintyaware lane keeping, we first propose a convolutional mixture density network (CMDN) model that estimates the lateral position error, the yaw angle error, and their corresponding uncertainties from the camera vision. We then establish a vision-based uncertainty-aware lane keeping strategy in which a high-level reinforcement learning policy hierarchically modulates the reference longitudinal speed as well as the low-level lateral control.",
    "venue": "2021"
  },
  {
    "img": "/images/home/featured/cephalometric.png",
    "title": "Automated cephalometric landmark detection with confidence regions using Bayesian convolutional neural networks",
    "link": "/publications/",
    "desc": "In this paper, we propose the novel framework for locating cephalometric landmarks with confidence regions based on uncertainties using Bayesian Convolutional Neural Networks (BCNN). With Bayesian inference over iterative CNN model calculations, we can derive the confidence region (95%) of an identified landmark considering model uncertainty, and significantly higher the in-region accuracy. Given the uncertainty and confidence areas of the estimated location, clinicians are expected to determine whether the results of the framework are reliable and to make a more accurate diagnosis.",
    "venue": "BMC Oral Health, 2020"
  },
  {
    "img": "/images/home/featured/AIM2020.png",
    "title": "Prediction of Reward Functions for Deep Reinforcement Learning via Gaussian Process Regression",
    "link": "/publications/",
    "desc": "This new article proposes an efficient way to solve the inverse reinforcement learning problem based on the sparse Gaussian process (GP) prediction with l1-regularization only using a highly limited number of expert demonstrations. A GP model is proposed to be trained to predict a reward function using trajectory-reward pair data generated by deep reinforcement learning (RL) with different reward functions. The experimental results clearly show that the robots can clone the experts’ optimality in navigation trajectories avoiding obstacles using only with a very small number of expert demonstration data sets.",
    "venue": "in IEEE/ASME Transactions on Mechatronics and IEEE/ASME International Conference on Advanced Intelligent Mechatronics (AIM) 2020"
  },
  {
    "img": "/images/home/featured/AIM2.png",
    "title": "Efficient Sampling for Rapid Estimation of 3D Stiffness Distribution via Active Tactile Exploration",
    "link": "/publications/",
    "desc": "This paper proposes a novel efficient sampling strategy to rapidly estimate the distribution of stiffness over an inhomogeneous object with a highly limited number of sample points taken from the object surface. The main objective of this work is to improve the efficiency of the estimation process while producing an accurate estimate for both the overall distribution and some particular areas (i.e., high/low stiff areas). Physical experiments on a variety of inhomogeneous objects demonstrate the advantage of the proposed algorithm in comparison to a popular existing algorithm in terms of accuracy and estimation speed.",
    "venue": "in IEEE/ASME Transactions on Mechatronics and IEEE/ASME International Conference on Advanced Intelligent Mechatronics (AIM) 2020"
  },
  {
    "img": "/images/home/featured/VR.png",
    "title": "Customer-Sepcific Robotic Attendant for VR Simulators",
    "link": "/publications/",
    "desc": "This article proposes a new type of robotic attendant for VR simulators, which provides personalized high-quality services and automatically operates the VR simulators in VR theme parks. In addition, the robotic attendant improves customer satisfaction by providing personalized services based on the estimation of the customer’s age, gender, and game progress. Finally, we experimentally show that the personalized services provided by the robotic attendant improve customer satisfaction. The results of the satisfaction questionnaire and independent- samples t-test validate our proposed scheme.",
    "venue": "in IEEE Transactions on Automation Science and Engineering"
  },
  {
    "img": "/images/home/featured/GR.jpg",
    "title": "Patient-Specific Prediction of Abdominal Aortic Aneurysm Expansion using Bayesian Calibration",
    "link": "/publications/",
    "desc": "The goal of this project is to make prediction and gauge its uncertainty in the computer models for a patient (such as a growth and remodeling model) from observations and various uncertainties such as measurement noise, estimation errors, and biological variability. This research has been supported by an NIH R01 grant with a project “Growth and Remodeling Model of Abdominal Aortic Aneurysm: Toward Clinical Applications.”",
    "venue": "in IEEE journal of biomedical and health informatics"
  }
];
