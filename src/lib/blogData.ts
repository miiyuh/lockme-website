import type { StaticImageData } from 'next/image';

// For richer content, you might use MDX or a similar format.
// For now, content will be simple strings or ReactNodes.

export type BlogPost = {
  slug: string;
  title: string;
  date: string; // Format: "Month DD, YYYY"
  author: string;
  excerpt: string;
  imageSrc: string; 
  imageAlt: string;
  imageHint: string; // For AI image search
  content: React.ReactNode;
  tags?: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'understanding-aes-256-encryption',
    title: 'Understanding AES-256 Encryption: The Gold Standard for Data Security',
    date: 'October 26, 2023',
    author: 'Dr. Cipher Lock',
    excerpt: 'Dive deep into what AES-256 encryption is, how it works, and why it\'s the preferred choice for securing sensitive data worldwide, including in LockMe.',
    imageSrc: 'https://picsum.photos/seed/aes256/800/400',
    imageAlt: 'Abstract representation of AES-256 encryption',
    imageHint: 'encryption abstract',
    content: (
      <>
        <p className="mb-4 text-lg">AES-256, which stands for Advanced Encryption Standard with a 256-bit key, is one of the most secure encryption algorithms available today. It's a symmetric block cipher, meaning it uses the same key for both encrypting and decrypting data. Governments, financial institutions, and security-conscious organizations worldwide, including LockMe, rely on AES-256 to protect classified and sensitive information.</p>
        <h3 className="text-2xl font-semibold my-4">How Does AES-256 Work?</h3>
        <p className="mb-4">AES operates on 128-bit blocks of data. For AES-256, the encryption process involves 14 rounds of substitution, permutation, and mixing operations. These rounds transform the plaintext into ciphertext in a way that is computationally infeasible to reverse without the correct key.</p>
        <ul className="list-disc list-inside mb-4 space-y-2 pl-4">
          <li><strong>SubBytes:</strong> A non-linear substitution step where each byte is replaced with another according to a lookup table.</li>
          <li><strong>ShiftRows:</strong> A transposition step where the last three rows of the state are shifted cyclically a certain number of steps.</li>
          <li><strong>MixColumns:</strong> A mixing operation which operates on the columns of the state, combining the four bytes in each column.</li>
          <li><strong>AddRoundKey:</strong> Each byte of the state is combined with a round key; each round key is derived from the cipher key using a key schedule.</li>
        </ul>
        <h3 className="text-2xl font-semibold my-4">Why is it so Secure?</h3>
        <p className="mb-4">The security of AES-256 lies in its key length. A 256-bit key has 2<sup>256</sup> possible combinations. This number is so astronomically large that even with the most powerful supercomputers currently in existence, it would take billions of years to brute-force the key. This makes AES-256 practically impenetrable against brute-force attacks.</p>
        <p className="mb-4">LockMe leverages AES-256 to ensure your files are encrypted with this gold standard, providing you with robust security for your personal and professional data.</p>
      </>
    ),
    tags: ['Encryption', 'AES-256', 'Security', 'How-To'],
  },
  {
    slug: 'offline-first-security-why-it-matters',
    title: 'Offline-First Security: Why Your Data is Safer When It Never Leaves Your Device',
    date: 'November 05, 2023',
    author: 'Privacy Advocate',
    excerpt: 'Explore the benefits of offline-first applications like LockMe for data security and privacy. Learn why keeping your data off the cloud can be a crucial step in protecting it.',
    imageSrc: 'https://picsum.photos/seed/offlinefirst/800/400',
    imageAlt: 'Illustration of a computer with a shield, disconnected from the cloud',
    imageHint: 'offline security',
    content: (
      <>
        <p className="mb-4 text-lg">In an era dominated by cloud services, the concept of "offline-first" security might seem counterintuitive to some. However, for applications dealing with highly sensitive data, an offline-first approach, as adopted by LockMe, offers significant advantages in terms of privacy and control.</p>
        <h3 className="text-2xl font-semibold my-4">What is Offline-First?</h3>
        <p className="mb-4">An offline-first application is designed to perform its core functions without needing an active internet connection. For LockMe, this means all encryption and decryption processes happen locally on your computer. Your files, and the passwords used to encrypt them, are never transmitted over the internet or stored on external servers.</p>
        <h3 className="text-2xl font-semibold my-4">Key Benefits of Offline-First Security:</h3>
        <ul className="list-disc list-inside mb-4 space-y-2 pl-4">
          <li><strong>Reduced Attack Surface:</strong> By keeping data local, you eliminate risks associated with data transmission over networks and storage on third-party servers, which can be targets for hackers.</li>
          <li><strong>No Cloud Vulnerabilities:</strong> Cloud services, despite their security measures, can suffer breaches or be subject to government subpoenas. Offline storage sidesteps these concerns.</li>
          <li><strong>Absolute Control:</strong> You retain full physical and digital control over your encrypted files and the keys that protect them.</li>
          <li><strong>Enhanced Privacy:</strong> There's no metadata collection or tracking of your file activities by a third-party service provider.</li>
          <li><strong>Accessibility:</strong> You can access and manage your encrypted files anytime, anywhere, regardless of internet connectivity.</li>
        </ul>
        <p className="mb-4">LockMe's commitment to offline-first security ensures that you are the sole custodian of your data's privacy. This approach empowers users with true data sovereignty, a critical aspect of modern digital security.</p>
      </>
    ),
    tags: ['Offline', 'Privacy', 'Security', 'Data Control'],
  },
  {
    slug: 'tips-for-creating-strong-passwords',
    title: 'Top 5 Tips for Creating Unbreakable Passwords',
    date: 'November 12, 2023',
    author: 'Secure Sentinel',
    excerpt: 'Your password is the first line of defense. Learn essential tips for creating strong, unique passwords to protect your LockMe encrypted files and other online accounts.',
    imageSrc: 'https://picsum.photos/seed/strongpass/800/400',
    imageAlt: 'Visual representation of a strong password',
    imageHint: 'password security',
    content: (
      <>
        <p className="mb-4 text-lg">A strong password is the cornerstone of digital security. For LockMe, the password you set is critical for encrypting and decrypting your files. Here are five essential tips to help you create passwords that are difficult to crack:</p>
        <ol className="list-decimal list-inside mb-4 space-y-3 pl-4">
          <li>
            <strong>Go Long and Complex:</strong> Aim for at least 12-16 characters. Combine uppercase letters, lowercase letters, numbers, and symbols. The longer and more varied your password, the harder it is to guess or brute-force.
            <p className="text-sm text-muted-foreground mt-1">Example: <code className="bg-muted p-1 rounded">Th!sIs@MyS3cureP@$$w0rd!</code> (Illustrative only, don't use this one!)</p>
          </li>
          <li>
            <strong>Avoid Common Words and Phrases:</strong> Dictionary words, common names, birthdates, or sequential numbers (like "123456" or "password") are easy targets.
          </li>
          <li>
            <strong>Use Unique Passwords for Different Accounts:</strong> If one account is compromised, using unique passwords prevents attackers from accessing your other accounts, including your LockMe master password.
          </li>
          <li>
            <strong>Consider a Passphrase:</strong> A passphrase is a sequence of words that is easy for you to remember but hard for others to guess. You can make it stronger by adding numbers and symbols.
            <p className="text-sm text-muted-foreground mt-1">Example: <code className="bg-muted p-1 rounded">CorrectHorse-Battery-Staple!77</code></p>
          </li>
          <li>
            <strong>Use a Password Manager:</strong> Password managers can generate and store highly complex, unique passwords for all your accounts. You only need to remember one strong master password for the manager itself. This is highly recommended for managing the password you use for LockMe.
          </li>
        </ol>
        <p className="mb-4">Remember, the security of your encrypted files in LockMe heavily depends on the strength of the password you choose. Take the time to create a strong one and keep it confidential.</p>
      </>
    ),
    tags: ['Passwords', 'Security Tips', 'Best Practices'],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}
