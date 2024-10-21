import Button from "@/app/component/Button";
import thumb from "@/assets/images/images.jpg";
import Image from "next/image";
const mission = () => {
  // throw new Error('Invalid')
  return (
    <main className="mt-10">
      <div>This is mission page.</div>
      <p>
        Laborum est enim eiusmod qui id sunt. Magna non aute tempor do nulla
        incididunt excepteur laboris quis est Lorem veniam mollit. Occaecat
        cupidatat est velit dolore fugiat. Commodo voluptate cupidatat ea mollit
        do sit consectetur labore est aliquip laboris exercitation.
      </p>
      <div className="relative w-[600px] h-[450px]">
      <Image src={thumb} fill alt="thumb image" placeholder="blur" quality={100} style={{objectFit:"cover"}} className="my-6"/>
      </div>
      <Button />
    </main>
  );
};

export default mission;
