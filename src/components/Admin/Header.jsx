

function Header() {
  return (
    <header className="flex flex-wrap gap-5 justify-between px-10 py-3 w-full text-sm whitespace-nowrap bg-white text-stone-300 max-md:px-5 max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f013a1d214502ff8394de970c858f17991add32d7c66e256a9b1368a183c306?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa" alt="" className="object-contain shrink-0 my-auto aspect-square w-[18px]" />
      <div className="flex gap-7">
        <form className="flex gap-10 px-3.5 py-2.5 bg-white rounded-lg border border-solid border-neutral-200">
          <label htmlFor="search" className="sr-only">Search</label>
          <input id="search" type="search" placeholder="Search..." className="bg-transparent border-none outline-none" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f1339c5ef55f585b51512530bccf4869c6200c10cbad8031a1b653dfa528771?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa" alt="Search icon" className="object-contain shrink-0 my-auto w-3.5 aspect-square" />
        </form>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3af2468a69bfd0594ee1ade5f8a631bee42300856e51c28b5e0f9a458a996537?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa" alt="Notification icon" className="object-contain shrink-0 my-auto aspect-[0.85] w-[17px]" />
      </div>
    </header>
  );
}

export default Header;