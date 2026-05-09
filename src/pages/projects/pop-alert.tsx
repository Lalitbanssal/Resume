export default function PopAlertTool() {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">POP Alert Automation Tool</h1>

        <p className="text-zinc-400 text-lg mb-10">
          Enterprise-grade automation platform developed for WMM meter maintenance and operational monitoring.
        </p>

        <img src="/images/pop-alert-banner.png" alt="POP Alert Tool" className="rounded-2xl mb-10" />

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-3">Problem Statement</h2>

            <p className="text-zinc-300">
              Manual meter maintenance workflows required engineers to individually verify devices, restart services,
              validate logs, and capture diagnostics, resulting in nearly 2 hours of repetitive operational effort
              daily.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Solution</h2>

            <p className="text-zinc-300">
              Designed and implemented a multithreaded Python automation platform using Playwright, Pandas, and
              concurrent futures to automate device maintenance, diagnostics collection, and operational verification.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Tech Stack</h2>

            <div className="flex flex-wrap gap-3">
              {['Python', 'Playwright', 'Pandas', 'ThreadPoolExecutor', 'PyInstaller', 'Streamlit'].map(tech => (
                <span key={tech} className="bg-zinc-800 px-4 py-2 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Impact</h2>

            <ul className="list-disc pl-6 text-zinc-300 space-y-2">
              <li>Reduced workflow execution time from ~2 hours to ~30 minutes</li>
              <li>Improved operational reliability and monitoring</li>
              <li>Automated repetitive diagnostics and maintenance tasks</li>
              <li>Packaged into executable deployment for office systems</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Confidentiality Notice</h2>

            <p className="text-zinc-400">
              Source code and infrastructure details cannot be publicly shared due to organizational confidentiality
              policies.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
