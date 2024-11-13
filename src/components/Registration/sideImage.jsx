
function SideImage() {
  return (
    <section className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a07edc3808bfc34c231681c751771763760ba56305d3ab39bc0bd9e162a960d?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa" 
        alt="Registration illustration" 
        className="object-contain self-stretch my-auto w-full aspect-[1.67] max-md:mt-10 max-md:max-w-full" 
      />
    </section>
  );
}

export default SideImage;