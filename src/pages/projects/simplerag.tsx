export default function SimpleRag() {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <h1 className="text-5xl font-bold mb-6">Simple RAG Q&A System</h1>
        <p className="text-zinc-400 text-lg mb-8">
          A fully decoupled, production-ready Retrieval-Augmented Generation (RAG) API designed to eliminate LLM hallucinations and provide verifiable, real-time answers.
        </p>

        {/* Video Demonstration Section */}
        <div className="mb-12 bg-zinc-900 rounded-2xl border border-zinc-800 shadow-xl overflow-hidden">
          <div className="aspect-video w-full">
            {/* Note: Place your "Video Project 3.mp4" inside your public folder 
              (e.g., public/videos/rag-demo.mp4) and update the src below. 
            */}
            <video 
              controls 
              className="w-full h-full object-cover"
              poster="/api-demo-thumbnail.jpg" 
            >
              <source src="/video/Final Simple RAg video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="p-4 bg-zinc-900/50 border-t border-zinc-800 text-sm text-zinc-400 text-center">
            Live Demonstration: Ingesting a 19-page research paper and testing real-time retrieval via Swagger UI.
          </div>
        </div>

        {/* Project Impact Summary */}
        <div className="mb-12 p-6 bg-zinc-900 rounded-2xl border border-zinc-800 shadow-xl">
          <h3 className="text-xl font-bold text-white mb-4">Project Impact & Architecture</h3>
          <ul className="list-disc list-inside text-zinc-400 space-y-2">
            <li>Designed and deployed a containerized API that updates its knowledge base instantly without model retraining.</li>
            <li>Engineered an automated document ingestion pipeline supporting PDF, TXT, and CSV formats.</li>
            <li>Replaced static parametric memory with Qdrant Cloud vector storage to ensure 100% source transparency.</li>
            <li>Successfully hosted and maintained the live infrastructure on Render via Docker Hub.</li>
          </ul>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-3">Problem Statement</h2>
            <p className="text-zinc-300">
              Standard pre-trained Large Language Models (LLMs) rely entirely on static "parametric memory" baked into their weights. This leads to costly retraining cycles for updated information and frequent "hallucinations" where the model invents answers without factual backing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Solution & Features</h2>
            <p className="text-zinc-300 mb-4">
              I built a two-engine RAG system that forces the LLM to fetch facts from a vector database before generating an answer:
            </p>
            <ul className="list-disc pl-6 text-zinc-300 space-y-2">
              <li>
                <strong>Document Ingestion:</strong> Automatically chunks uploaded documents and converts them into dense vector embeddings using OpenAI.
              </li>
              <li>
                <strong>Similarity Search:</strong> Uses a Retriever to perform high-speed searches in Qdrant Cloud to find the exact passages matching the user query.
              </li>
              <li>
                <strong>Transparent Generation:</strong> The Generator combines the prompt with the retrieved documents to stream a highly accurate response, citing the specific source chunks to guarantee trust.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {['Python', 'FastAPI', 'LangChain', 'Qdrant Cloud', 'Docker', 'Render', 'OpenAI'].map(tech => (
                <span key={tech} className="bg-zinc-800 px-4 py-2 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* External Links Section */}
          <section className="pt-4 border-t border-zinc-800">
            <h2 className="text-2xl font-semibold mb-4">Explore the Project</h2>
            <div className="flex gap-4">
              <a 
                href="https://github.com/Lalitbanssal/Simple_Rag_QA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors"
              >
                View Source on GitHub
              </a>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}