function BlogPost() {
return (
<div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
<main className="md:col-span-2 space-y-4">
<img src="/images/blog-feature.jpg" alt="Feature" className="rounded-2xl" />
<h1 className="text-3xl font-bold text-green-800">Naija Culture and Innovation</h1>
<p className="text-sm text-gray-500">By Admin • Nov 11, 2025 • 5 min read</p>
<p className="text-gray-700 leading-relaxed">Nigeria’s cultural evolution continues to inspire global trends through music, fashion, and entrepreneurship...</p>
</main>
<aside className="space-y-4">
<h3 className="text-xl font-semibold text-green-800">Related Posts</h3>
<div className="space-y-2">
<p className="border-b pb-2">The Rise of Afrobeats</p>
<p className="border-b pb-2">How Ankara Became a Global Fashion Icon</p>
<p className="border-b pb-2">Palm Wine and the New Naija Spirit</p>
</div>
</aside>
</div>
)
}

export default BlogPost;