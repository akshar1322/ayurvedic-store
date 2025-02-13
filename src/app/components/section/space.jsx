const Spascsection = ({ heading, paragraph, paragraphText }) => {
  return (
    <section className="bg-white w-full h-[15rem] p-2 flex justify-center items-center">
      {/* Bordered Container */}
      <div className="border border-[#8B5D48] w-[99%] h-[30vh] relative flex items-end p-4">
        {/* Bottom Left Text */}
        <div className="text-[#8B5D48] italic">
          {/* Dynamic Heading */}
          {heading && <h2 className="text-3xl font-semibold">{heading}</h2>}

          {/* Conditionally Render Paragraph */}
          {paragraph && <p className="mt-2 text-lg">{paragraphText}</p>}
        </div>
      </div>
    </section>
  );
};

export default Spascsection;
