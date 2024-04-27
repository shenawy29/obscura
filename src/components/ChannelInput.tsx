"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";

import { handleFormSubmit } from "./actions";

const formSchema = z.object({
    channel: z.string(),
});

type Schema = z.infer<typeof formSchema>;

export default function ChannelInput() {
    const form = useForm<Schema>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormFields) => {
        await handleFormSubmit(data);
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit((data) => onSubmit(data))}
                className="flex flex-row"
            >
                <FormField
                    control={form.control}
                    name="channel"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="channel" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit">Beam Me</Button>
            </form>
        </Form>
    );
}

export type FormFields = z.infer<typeof formSchema>;
