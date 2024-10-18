import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <h1>it's Raima</h1>
      <Image 
        src="https://cdn.sanity.io/images/lqlx0enf/production/430fec9dadb646f6089bdafd0d06e701e828a4e9-855x392.png" 
        alt="next.js image" 
        width={855} // Width in pixels
        height={392} // Height in pixels for proper aspect ratio
        layout="responsive" // Use layout responsive if you want to keep the aspect ratio
      />
    </div>
  );
}
