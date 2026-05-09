export default function InternalDashboard() {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">Internal Operations Dashboard</h1>
        <p className="text-zinc-400 text-lg mb-8">
          A robust, multi-page Streamlit application designed to centralize channel metadata and automate the processing
          of WMM meter XML logs.
        </p>

        {/* Video Player Section */}
        <div className="mb-12">
          <video
            className="w-full max-w-sm rounded-2xl shadow-2xl border border-zinc-800"
            controls
            autoPlay
            loop
            muted
            playsInline>
            {/* Make sure the path matches where you put the video in the public folder */}
            <source src="/videos/dashboard-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="text-sm text-zinc-500 mt-3 text-center">
            Live Demo: Channel Information Search & Automated XML Log Processing
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-3">Problem Statement</h2>
            <p className="text-zinc-300">
              Retrieving specific channel IP addresses across hundreds of terminals and manually unzipping/parsing WMM
              meter XML logs to find time drift or missing WMIDs was a massive bottleneck for the operations team.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Solution & Features</h2>
            <p className="text-zinc-300 mb-4">
              I built a centralized Streamlit platform consisting of multiple specialized apps:
            </p>
            <ul className="list-disc pl-6 text-zinc-300 space-y-2">
              <li>
                <strong>Channel Search Engine:</strong> Allows instant querying of channel names to fetch associated IP
                addresses across Airtel, TataSky, Dish TV, etc., with full data export to Excel.
              </li>
              <li>
                <strong>Log Data Processor:</strong> Automatically extracts and processes `.xml` logs from zipped
                snapshots based on IP and date.
              </li>
              <li>
                <strong>Anomaly Detection:</strong> Automatically flags missing WMID differences greater than 1 min 30
                sec and highlights time drifts greater than 2 minutes.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {['Python', 'Streamlit', 'Pandas', 'XML Parsing', 'Data Analysis'].map(tech => (
                <span key={tech} className="bg-zinc-800 px-4 py-2 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Confidentiality Notice</h2>
            <p className="text-zinc-400">
              Source code and proprietary network topologies are withheld due to organizational confidentiality
              policies.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
