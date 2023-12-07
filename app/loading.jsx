import Container from "@/components/ui/container";
import { Loader } from "@/components/ui/loader";

export default function loader() {
  return (
    <Container>
      <div className="absolute">
        <Loader />
      </div>
    </Container>
  );
}
