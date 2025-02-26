import Image from 'next/image';

export default function SomeComponent() {
  return (
    <div>
      <Image src="/Webportfolio/neoportfolio/certifications/java-foundations.jpg" alt="Java Foundations" width={300} height={200} />
      <Image src="/Webportfolio/neoportfolio/certifications/csharp-microsoft.jpg" alt="C# with Microsoft" width={300} height={200} />
      <Image src="/Webportfolio/neoportfolio/certifications/tech-support-fundamentals.jpg" alt="Tech Support Fundamentals" width={300} height={200} />
      <Image src="/Webportfolio/neoportfolio/certifications/intro-cybersecurity.jpg" alt="Introduction to Cybersecurity" width={300} height={200} />
      <Image src="/Webportfolio/neoportfolio/certifications/bits-bytes-net.jpg" alt="Bits and Bytes of Computer Networking" width={300} height={200} />
    </div>
  );
}