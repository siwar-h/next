import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <Image
      src="https://f.hellowork.com/blogdumoderateur/2020/06/formation-developpement-application-1200x801.jpg"
      alt="dev"
       width={500} 
       height={500} 
       />
       <p>Je suis un développeur web passionné.</p>
       
    </div>
  );
}
