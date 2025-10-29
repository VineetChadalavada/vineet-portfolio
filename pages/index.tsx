import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center p-8 bg-white">
      <h1 className="text-4xl font-bold mb-4 text-green-800">Vineet Chadalavada</h1>
      <h2 className="text-lg text-gray-700 mb-6">
        PhD Student • Hardware Security Researcher • FPGA Architect
      </h2>
      <p className="max-w-2xl text-gray-600">
        Exploring FPGA-based side-channel attacks, DDR4 timing analysis, and secure
        reconfigurable architectures in cloud environments.
      </p>
    </main>
  );
}
