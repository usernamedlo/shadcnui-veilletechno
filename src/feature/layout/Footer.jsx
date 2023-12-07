import Container from "@/components/ui/container";

export const Footer = () => {
  return (
    <div className="py-4 fixed hidden flex flex-wrap md:block container gap-1  bottom-0 left-0 right-0 bg-background m-auto border-t border-accent">
      <Container>
        <div className="flex justify-between items-center w-full">
          <p>© 2023 PLACEHOLDER. All rights reserved.</p>
          <div>
            <a
              href="/"
              className="hover:text-accent"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};
