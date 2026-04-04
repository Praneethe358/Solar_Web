"use client";

import { cn } from "@/lib/utils";
import { MoveRight, Star } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  href: string;
  views: number;
  readTime?: number;
  rating?: number;
  className?: string;
}

interface GridSectionProps {
  title: string;
  description: string;
  backgroundLabel?: string;
  backgroundPosition?: "left" | "right";
  posts?: BlogPost[];
  className?: string;
  onPostClick?: (post: BlogPost) => void;
}

export const Component = ({
  title,
  description,
  backgroundLabel,
  backgroundPosition = "left",
  posts = [],
  className,
  onPostClick,
}: GridSectionProps) => {
  return (
    <section
      className={cn(
        "container relative my-20 mx-auto px-4 py-10",
        className,
      )}
    >
      <h1 className="mb-2 text-center text-4xl font-extrabold capitalize !leading-[1.4] text-[#0F172A] md:text-5xl lg:text-6xl">
        {title}
      </h1>

      {backgroundLabel && (
        <span
          className={cn(
            "text-foreground/[0.025] absolute -top-10 -z-50 select-none text-[180px] font-extrabold leading-[1] text-black/[0.03] md:text-[250px] lg:text-[400px]",
            backgroundPosition === "left" ? "-left-[18%]" : "-right-[28%]",
          )}
        >
          {backgroundLabel}
        </span>
      )}

      <p className="mx-auto mb-8 max-w-[800px] text-center text-xl !leading-[2] text-[#334155] md:text-2xl">
        {description}
      </p>

      <div className="grid h-auto grid-cols-1 gap-5 md:h-[650px] md:grid-cols-2 lg:grid-cols-[1fr_0.5fr]">
        {posts.map((post, index) => {
          const {
            id,
            title: postTitle,
            category,
            imageUrl,
            views,
            readTime,
            rating = 4,
            className: postClassName,
          } = post;

          const isPrimary = index === 0;

          return (
            <div
              key={id || index}
              style={{ backgroundImage: `url(${imageUrl})` }}
              className={cn(
                "group relative row-span-1 flex size-full cursor-pointer flex-col justify-end overflow-hidden rounded-[20px] bg-cover bg-center bg-no-repeat p-5 text-white transition-all duration-300 hover:rotate-[0.3deg] hover:scale-[0.98] max-md:h-[300px]",
                isPrimary &&
                  "col-span-1 row-span-1 md:col-span-2 md:row-span-2 lg:col-span-1",
                postClassName,
              )}
              onClick={() => onPostClick?.(post)}
            >
              <div className="absolute inset-0 -z-0 h-[130%] w-full bg-gradient-to-t from-black/90 via-black/55 to-black/25 transition-all duration-500 group-hover:h-full" />

              <article className="relative z-0 flex items-end">
                <div className="flex flex-1 flex-col gap-3">
                  <h1 className="text-3xl font-extrabold text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.65)] md:text-4xl">
                    {postTitle}
                  </h1>
                  <div className="flex flex-col gap-3">
                    <span className="w-fit rounded-md border border-white/30 bg-black/55 px-2 py-px text-base font-semibold capitalize text-white backdrop-blur-md">
                      {category}
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star
                            width={20}
                            height={20}
                            key={idx}
                            stroke={idx < rating ? "#ffa534" : "#B9B8B8aa"}
                            fill={idx < rating ? "#ffa534" : "#B9B8B8aa"}
                          />
                        ))}
                      </div>
                      <span className="text-lg font-medium text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.7)]">
                        ({views} Views)
                      </span>
                    </div>
                    {readTime && (
                      <div className="text-xl font-bold text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.7)]">
                        {readTime} min read
                      </div>
                    )}
                  </div>
                </div>
                <MoveRight
                  className="transition-all duration-300 group-hover:translate-x-2"
                  color="white"
                  width={40}
                  height={40}
                  strokeWidth={1.25}
                />
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
};