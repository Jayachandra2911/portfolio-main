import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Mail } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    try {
      await new Promise((res) => setTimeout(res, 1000)); // simulate delay
      console.log("Form submitted:", data);

      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out — I'll get back to you soon.",
      });

      reset();
    } catch (error) {
      toast({
        title: "Something went wrong!",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="w-full px-6 flex justify-center items-center py-20 bg-background text-foreground ">
      <div className="max-w-5xl  mx-auto flex justify-center items-center flex-col md:flex-row gap-12 md:gap-24">
        {/* Left: Text */}
        <div className="md:w-1/2 w-full h-[400px] flex flex-col justify-center max-h-[400px] overflow-y-auto space-y-4">
          <h2 className="text-4xl font-bold tracking-tight leading-tight">
            Let’s Connect
          </h2>
          <p className="text-muted-foreground text-lg">
            Whether you’ve got a question, a project, or just want to say hello,
            I’d love to hear from you. Drop a message and I’ll get back to you
            soon.
          </p>
          <span className="flex gap-2 text-muted-foreground items-center"> <Mail className="w-7 h-7"/> jayachandra2911@gmail.com</span>
        </div>

        {/* Right: Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:w-1/2 w-full space-y-6"
        >
          <div>
            <Input placeholder="Your Name" {...register("name")} />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Input
              type="email"
              placeholder="Your Email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <Textarea
              placeholder="Tell me more..."
              rows={5}
              className="max-h-[200px] overflow-auto"
              {...register("message")}
            />
            {errors.message && (
              <p className="text-sm text-red-500 mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full md:w-auto cursor-not-allowed"
            disabled={true}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
          <p className="italic text-muted-foreground">This doesnt work | Will work on it later</p>
        </form>
      </div>
    </section>
  );
}
