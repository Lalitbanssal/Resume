export default function PvScreenshot() {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">Automated PV Screenshot Engine</h1>
        <p className="text-zinc-400 text-lg mb-10">
          An asynchronous browser automation tool designed to capture meter diagnostics and parse API responses in
          real-time.
        </p>

        <img src="/images/pv-screenshot-banner.png" alt="PV Screenshot Tool" className="rounded-2xl mb-10" />

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-3">Problem Statement</h2>
            <p className="text-zinc-300">
              Validating meter statuses required engineers to manually navigate to individual WMM IP addresses, take
              screenshots of the diagnostic UI, and manually calculate time drift equations—a highly repetitive and slow
              process.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Solution</h2>
            <p className="text-zinc-300">
              Integrated an automated script into the internal Streamlit dashboard using Playwright and Asyncio. The
              user simply inputs the IP address and channel name, and the tool spins up a headless browser to extract
              the JSON Watermark API response, calculate the exact time difference (Time Drift) in seconds, extract UTC
              time, and automatically save a screenshot of the XANTAR Media diagnostic panel.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {['Python', 'Playwright', 'Asyncio', 'Streamlit', 'JSON Parsing'].map(tech => (
                <span key={tech} className="bg-zinc-800 px-4 py-2 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Confidentiality Notice</h2>
            <p className="text-zinc-400">
              Specific IP infrastructure and proprietary API endpoints cannot be shared due to company NDA.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
