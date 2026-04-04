import { Component } from "@/components/ui/blog-posts";

export default function DemoOne() {
  return (
    <Component
      title="Our Most Popular Articles of 2024!"
      description="Discover the most engaging content from our amazing community of developers and designers"
      backgroundLabel="BLOG"
      backgroundPosition="left"
      posts={[
        {
          id: 1,
          title: "Building Modern Web Applications with React",
          category: "Web Development",
          imageUrl:
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1600&auto=format&fit=crop",
          href: "/products",
          views: 2180,
          readTime: 8,
          rating: 5,
        },
        {
          id: 2,
          title: "Advanced TypeScript Patterns",
          category: "Programming",
          imageUrl:
            "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop",
          href: "/products",
          views: 1456,
          readTime: 12,
          rating: 4,
        },
        {
          id: 3,
          title: "Design System Best Practices",
          category: "UI/UX Design",
          imageUrl:
            "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1600&auto=format&fit=crop",
          href: "/products",
          views: 987,
          readTime: 6,
          rating: 4,
        },
      ]}
      className="mb-16"
    />
  );
}