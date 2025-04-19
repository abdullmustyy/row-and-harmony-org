import { ReactLenis } from "@/lib/lenis";

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactLenis root options={{ lerp: 0.05 }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
