"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { blogData, BlogCard, BlogHero } from "@/components/Blog";

const POSTS_PER_PAGE = 3;

export default function BlogsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogData.length / POSTS_PER_PAGE);
  const currentBlogs = blogData.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  return (
    <main className="min-h-screen bg-white">
      <BlogHero title="Блог" />
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-24">
        <div className="mb-16">
          <p className="uppercase tracking-[0.2em] text-secondary font-bold text-xs mb-3">Архив Публикаций</p>
          <h2 className="text-4xl font-bold text-primary mb-6">Все последние новости и советы</h2>
          <div className="h-1 w-20 bg-secondary" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {currentBlogs.map((post, i) => <BlogCard key={post.id} post={post} index={i} />)}
        </div>
        {totalPages > 1 && (
          <div className="flex justify-center mt-20 gap-3">
            {[...Array(totalPages)].map((_, i) => (
              <button 
                key={i} 
                onClick={() => { setCurrentPage(i + 1); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className={`w-12 h-12 flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                  currentPage === i + 1 
                    ? "bg-secondary text-white shadow-md shadow-secondary/20" 
                    : "bg-gray-50 text-primary hover:bg-secondary hover:text-white"
                }`}
              >
                {i + 1}
              </button>
            ))}
            {currentPage < totalPages && (
              <button 
                onClick={() => { setCurrentPage(currentPage + 1); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="w-12 h-12 flex items-center justify-center bg-gray-50 text-secondary font-bold hover:bg-secondary hover:text-white transition-all duration-300"
              >
                <ChevronRight size={18} />
              </button>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
