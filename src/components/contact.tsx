import { SparklesText } from "./ui/sparkles-text";
import { ProfileForm } from "./contact-form";

export function Contact() {
  return (
    <div className="h-max w-full relative flex flex-col items-center md:items-start md:justify-start justify-center text-center md:text-left py-28 p-16  md:px-36 px-14 pb-36 gap-8">
      <SparklesText
        text="Reach Out!"
        sparklesCount={5}
        className="font-oddolini"
      />
      <ProfileForm />
    </div>
  );
}
