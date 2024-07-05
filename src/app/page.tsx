import ChannelInput from "@/components/ChannelInput";

export default function Home() {
  return (
    <main>
      <div className="container px-[15%] mt-[10%] flex items-center flex-col gap-5 text-center">
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          welcome to obscura, a simple, lean, mean, hack.chat-like webapp.
          Nothing you send is saved; everything is stored in-memory, which
          essentially means that they&apos;re gone when you exit.
        </p>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
          to communicate you enter a channel, a channel is basically:
          <br />
          this website&apos;s URL/channel
        </p>

        <p className="leading-7 [&:not(:first-child)]:mt-6">have fun!</p>

        <ChannelInput />
      </div>
    </main>
  );
}
