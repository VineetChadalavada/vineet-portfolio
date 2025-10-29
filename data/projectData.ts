export const projectsData = [
  {
    id: 1,
    name: "Prime+Probe DDR4 Attack on FPGA",
    description:
      "Developed a DDR4 timing-based Prime+Probe side-channel attack targeting multi-tenant FPGA environments using Alveo U250. Implemented custom HLS kernels and analyzed DRAM timing variations for information leakage.",
    tools: ["Vitis HLS", "C++", "XRT", "DDR4"],
    github_url: "https://github.com/VineetChadalavada/FPGA-Prime-Probe",
  },
  {
    id: 2,
    name: "Trusted Memory Access Monitor (TMAM)",
    description:
      "Designed a detection IP for DDR4-based Prime+Probe attacks using timing anomaly monitoring and real-time detection logic on FPGA shell. Integrated into Alveo U250 and evaluated post-countermeasure performance.",
    tools: ["Verilog", "VHDL", "Vivado", "FPGA"],
  },
  {
    id: 3,
    name: "LSTM-Based SRAM Reliability Prediction",
    description:
      "Built a predictive deep learning model to estimate Remaining Useful Life (RUL) of SRAM under stress conditions, achieving 96% prediction accuracy. Work contributes to reliability-aware hardware design.",
    tools: ["Python", "TensorFlow", "Keras", "NumPy"],
  },
  {
    id: 4,
    name: "Side-Channel Attack Automation Framework",
    description:
      "Developed an automated side-channel analysis pipeline for AES using power trace data captured via ChipWhisperer. Implemented leakage models and classification networks to recover subkeys efficiently.",
    tools: ["ChipWhisperer", "AES", "TensorFlow", "Python"],
  },
];
