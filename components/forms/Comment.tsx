"use client";

import { CommentValidation } from "@/lib/validations/thread";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { addCommentToThread } from "@/lib/actions/thread.actions";
import router from "next/router";

interface Props {
  threadId: string;
  currentUserImg: string;
  currentUserId: string;
}

const Comment = ({ threadId, currentUserImg, currentUserId }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const form = useForm({
    resolver: zodResolver(CommentValidation),
    defaultValues: {
      thread: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof CommentValidation>) => {
    await addCommentToThread(
      threadId,
      values.thread,
      JSON.parse(currentUserId),
      pathname,
    );

    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="comment-form">
        <FormField
          control={form.control}
          name="thread"
          render={({ field }) => (
            <FormItem className="flex w-full items-center gap-3">
              <FormLabel>
                <Image
                  src={currentUserImg}
                  alt="Profile photo"
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
              </FormLabel>
              <FormControl className="border-none bg-transparent">
                <Input
                  type="text"
                  placeholder="Comment..."
                  className="no-focus text-light-1 outline-none"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit" className="comment-form_btn">
          Reply
        </Button>
      </form>
    </Form>
  );
};

export default Comment;
