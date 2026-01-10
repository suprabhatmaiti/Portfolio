import AnimateOnScroll from "./AnimateOnScroll";

export default function TimelineItem({ index, children }) {
  return (
    <AnimateOnScroll x={index % 2 === 0 ? -60 : 60}>{children}</AnimateOnScroll>
  );
}
