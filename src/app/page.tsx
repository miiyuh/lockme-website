import React from "react";
import Head from "next/head";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#faf3e0] font-mono">
      <Head>
        <title>LockMe | Secure File Encryption</title>
        <meta name="description" content="LockMe: Secure File Encryption and Decryption Desktop Application" />
      </Head>

      <header className="bg-[#123524] px-6 py-4 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#faf3e0]">LockMe</h1>
        <nav>
          <ul className="flex gap-6 text-sm">
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#download">Download</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="px-6 py-12 max-w-4xl mx-auto">
        <section className="text-center space-y-6">
          <h2 className="text-4xl font-bold text-[#648b83]">Secure Your Files with Confidence</h2>
          <p className="text-lg">LockMe helps you encrypt and decrypt files easily with AES-256 encryption. Compatible with Windows & Linux.</p>
          <Button className="bg-[#648b83] hover:bg-[#4e746e] text-[#1a1a1a] font-bold px-6 py-3 rounded-2xl text-base">Download Now</Button>
        </section>

        <section id="features" className="mt-20 space-y-8">
          <h3 className="text-2xl font-bold border-b border-[#648b83] pb-2">Key Features</h3>
          <ul className="list-disc list-inside space-y-2 text-[#faf3e0]">
            <li>Cross-platform compatibility (Windows & Linux)</li>
            <li>AES-256 encryption & RSA key management</li>
            <li>Drag-and-drop file selection</li>
            <li>Real-time encryption status & integrity verification</li>
            <li>User-friendly GUI for all experience levels</li>
          </ul>
        </section>

        <section id="about" className="mt-20 space-y-4">
          <h3 className="text-2xl font-bold border-b border-[#648b83] pb-2">About LockMe</h3>
          <p>LockMe is a secure desktop encryption and decryption tool developed as a final year project at Management and Science University. It prioritises ease of use, offline security, and practical features for protecting files without the need for cloud services.</p>
        </section>

        <section id="download" className="mt-20 space-y-4">
          <h3 className="text-2xl font-bold border-b border-[#648b83] pb-2">Download</h3>
          <p>Download LockMe for your operating system:</p>
          <ul className="space-y-2">
            <li><a href="#" className="underline">Windows (.exe)</a></li>
            <li><a href="#" className="underline">Linux (.AppImage)</a></li>
          </ul>
        </section>

        <section id="contact" className="mt-20 space-y-4">
          <h3 className="text-2xl font-bold border-b border-[#648b83] pb-2">Contact</h3>
          <p>Have questions or feedback? Reach out to <a href="mailto:azri.securedev@gmail.com" className="underline">azri.securedev@gmail.com</a>.</p>
        </section>
      </main>

      <footer className="text-center text-xs py-6 border-t border-[#648b83] mt-20">
        © 2025 LockMe | Developed by Muhamad Azri
      </footer>
    </div>
  );
}
