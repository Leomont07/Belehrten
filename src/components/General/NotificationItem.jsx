

function NotificationItem({ type, content }) {
  const bgColor = type === 'important' ? 'bg-pink-900' : 'bg-zinc-400';

  return (
    <div className={`flex flex-wrap gap-9 items-center px-5 py-3.5 mt-9 w-full ${bgColor} rounded-xl min-h-[50px] max-md:max-w-full`}>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/534eb9aa1befa491c06dd6dca2f7b81f78b138062fc7f561e4571344f6250e65?placeholderIfAbsent=true&apiKey=831aea2c46a444e18c84840a809d0faa"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[25px]"
      />
      <div className="flex flex-col self-stretch my-auto w-32">
        <div className="text-xs font-bold">Notification</div>
        <div className="mt-1 text-xs font-medium">{content}</div>
      </div>
    </div>
  );
}

export default NotificationItem;