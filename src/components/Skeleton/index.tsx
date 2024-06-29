interface SkeletonProps {
  conditional: boolean;
  children?: React.ReactNode;
  length?: number;
  className?: string;
}

export default function Skeleton({
  conditional,
  children,
  length = 1,
  className,
}: SkeletonProps) {
  return conditional
    ? children
    : Array(length)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className={`h-fit w-fit animate-[pulse_1230ms_ease-in-out_infinite] rounded-md bg-gray-300 ${className}`}
          >
            <div className="invisible"> {children} </div>
          </div>
        ));
}
