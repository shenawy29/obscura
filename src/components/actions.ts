"use server";

import { redirect } from "next/navigation";
import { FormFields } from "./ChannelInput";

export async function handleFormSubmit(data: FormFields) {
    redirect(data.channel);
}
