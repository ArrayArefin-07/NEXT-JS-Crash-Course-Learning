import Image from "next/image"; // ⚠️ Add this line at the top
import React from "react";
import thumb from "@/public/images/thumb.jpg";
// import Image from 'next/image'
import Button from "@/app/components/button";

const page = () => {
  return (
    <main className="mt-10">
      <div>This Mission Page</div>
      <div>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source.
      </div>

      <div className="w-[400px]">
        <Image
        className=""
        quality={100}
        src={thumb}
        alt="Thumb image"
      />
      </div>

      

      <Button />
    </main>
  );
};

export default page;
