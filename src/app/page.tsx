import ChannelInput from "@/components/ChannelInput";

export default function Home() {
    return (
        <main>
            <div className="container px-[15%] mt-[10%] flex items-center flex-col gap-5 text-center">
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    welcome to obscura, a simple, lean, mean, hack.chat-like
                    webapp. As you can see, my design is very creative. Nothing
                    you send is saved; everything is stored in-memory, which
                    essentially means that they're gone when you exit (sad), and
                    I trust my hosting provider to give me a valid TLS
                    certificate for communication to be encrypted, not that
                    that's really special nowadays.
                </p>

                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    to communicate you enter a channel, a channel is basically:
                    <br />
                    this website's URL/channel
                </p>

                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    below is the obligatory input helper
                </p>

                <ChannelInput />
            </div>
        </main>
    );
}
