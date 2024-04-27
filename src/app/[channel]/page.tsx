"use client";

import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import React from "react";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { usePathname } from "next/navigation";
import { socket } from "./socket";
import { cn } from "@/lib/utils";

export default function ChannelPage() {
    const [messages, setMessages] = useState<string[]>([]);
    const path = usePathname();

    const messagesEndRef = useRef<null | HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const messageForm = useForm<z.infer<typeof MessageSchema>>({
        resolver: zodResolver(MessageSchema),
    });

    function onData(newMessage: string) {
        setMessages((oldMessages) => [...oldMessages, newMessage]);
    }

    function onMessageSubmit(data: z.infer<typeof MessageSchema>) {
        setMessages((oldMessages) => [...oldMessages, data.message]);

        messageForm.reset({ message: "" });
        socket.emit("data", data.message);
    }

    useEffect(() => {
        scrollToBottom();
        socket.on("data", onData);
        socket.emit("join", path);

        return () => {
            socket.off("data", onData);
        };
    }, [messages]);

    return (
        <main className="flex items-center justify-center flex-col">
            <ul className="w-full max-w-[66.666667%] mb-[7rem] relative gap-2 space-y-2">
                <div
                    className={cn(
                        "absolute w-[2px] bg-muted left-[-20px]",
                        messages.length == 0 ? "h-0" : "h-full",
                    )}
                />
                {messages.map((message) => (
                    <li className="">{message}</li>
                ))}
                <div ref={messagesEndRef} />
            </ul>

            <Form {...messageForm}>
                <form
                    onSubmit={messageForm.handleSubmit(onMessageSubmit)}
                    className="w-2/3 fixed bottom-0"
                >
                    <FormField
                        control={messageForm.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder="Enter a message"
                                        className="h-[5rem]"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </form>
            </Form>
        </main>
    );
}

const MessageSchema = z.object({
    message: z.string().min(1, {
        message: "Message must not be empty",
    }),
});
