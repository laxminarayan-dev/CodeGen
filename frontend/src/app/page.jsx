import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white text-black">
      <section className="text-center py-20 md:py-28 px-4 ">
        <h1 className="text-3xl md:text-7xl mb-5 animate-fadeInUp font-bold">
          Transform Code Instantly
        </h1>
        <p className="text-md md:text-2xl mb-10 opacity-90 animate-pulse delay-200">
          Convert between any programming language with AI-powered precision
        </p>
        <div className="flex justify-center max-w-96 md:max-w-112 mx-auto gap-6 animate-fadeInUp delay-400">
          <Link
            href="/converter"
            className="bg-slate-900 text-indigo-400 shadow-md hover:-translate-y-1 hover:shadow-lg flex-1/2 h-12 md:h-16 text-md md:text-lg  flex justify-center items-center rounded-xl transition-all duration-300"
          >
            Try Converter
          </Link>
          <Link
            href="/generator"
            className="border-2 border-slate-900  hover:bg-slate-900 hover:text-indigo-400 hover:-translate-y-1 flex-1/2 h-12 md:h-16 text-md md:text-lg flex justify-center items-center rounded-xl transition-all duration-300"
          >
            Generate Code
          </Link>
        </div>
      </section>
      {/* section 2 */}
      <section className="py-10 flex flex-col justify-center items-center">
        <h2 className="text-slate-700 text-4xl mb-12">All Features</h2>
        <div
          id="features"
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 p-12 max-w-7xl mx-auto"
        >
          <div className="feature-card bg-white/15 backdrop-blur p-10 rounded-2xl border border-white/20 transition-all hover:-translate-y-2 hover:bg-white/25 hover:shadow-lg cursor-pointer">
            <div className="feature-icon text-5xl mb-5">🔄</div>
            <h3 className="text-slate-700 text-2xl mb-4">Smart Conversion</h3>
            <p className="text-slate-700/90 text-base">
              Convert code between 50+ programming languages with intelligent
              syntax preservation and optimization.
            </p>
          </div>
          <div className="feature-card bg-white/15 backdrop-blur p-10 rounded-2xl border border-white/20 transition-all hover:-translate-y-2 hover:bg-white/25 hover:shadow-lg cursor-pointer">
            <div className="feature-icon text-5xl mb-5">✨</div>
            <h3 className="text-slate-700 text-2xl mb-4">AI Code Generation</h3>
            <p className="text-slate-700/90 text-base">
              Generate production-ready code from natural language descriptions
              in seconds.
            </p>
          </div>
          <div className="feature-card bg-white/15 backdrop-blur p-10 rounded-2xl border border-white/20 transition-all hover:-translate-y-2 hover:bg-white/25 hover:shadow-lg cursor-pointer">
            <div className="feature-icon text-5xl mb-5">⚡</div>
            <h3 className="text-slate-700 text-2xl mb-4">Lightning Fast</h3>
            <p className="text-slate-700/90 text-base">
              Get instant results with our optimized AI engine processing
              millions of lines per second.
            </p>
          </div>
          <div className="feature-card bg-white/15 backdrop-blur p-10 rounded-2xl border border-white/20 transition-all hover:-translate-y-2 hover:bg-white/25 hover:shadow-lg cursor-pointer">
            <div className="feature-icon text-5xl mb-5">🎯</div>
            <h3 className="text-slate-700 text-2xl mb-4">High Accuracy</h3>
            <p className="text-slate-700/90 text-base">
              99.9% accuracy rate with continuous learning from millions of code
              transformations.
            </p>
          </div>
          <div className="feature-card bg-white/15 backdrop-blur p-10 rounded-2xl border border-white/20 transition-all hover:-translate-y-2 hover:bg-white/25 hover:shadow-lg cursor-pointer">
            <div className="feature-icon text-5xl mb-5">🔒</div>
            <h3 className="text-slate-700 text-2xl mb-4">Secure & Private</h3>
            <p className="text-slate-700/90 text-base">
              Your code is encrypted and never stored. Complete privacy
              guaranteed.
            </p>
          </div>
          <div className="feature-card bg-white/15 backdrop-blur p-10 rounded-2xl border border-white/20 transition-all hover:-translate-y-2 hover:bg-white/25 hover:shadow-lg cursor-pointer">
            <div className="feature-icon text-5xl mb-5">💎</div>
            <h3 className="text-slate-700 text-2xl mb-4">Best Pricing</h3>
            <p className="text-slate-700/90 text-base">
              Enjoy unbeatable rates for premium code conversion. No hidden
              fees—just the best value for developers.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 px-12 bg-slate-600 text-center">
        <h2 className="text-white text-4xl mb-12">See It In Action</h2>
        <div
          className={`flex flex-col lg:flex-row justify-center gap-8 max-w-5xl mx-auto`}
        >
          <div className="code-box bg-slate-900 border-2 border-indigo-400 min-w-[300px] flex-1 rounded-xl p-6 text-left">
            <div className="code-header text-slate-400 text-sm mb-4 uppercase">
              Input (Python)
            </div>
            <pre className="code-content text-slate-200 font-mono text-base leading-7">
              {`# fibonacci function
def fb(n):
    if n <= 1:
        return n
    return fb(n-1) + fb(n-2)`}
            </pre>
          </div>
          <span className="hidden lg:block text-4xl text-white self-center">
            <ArrowRight />
          </span>
          <span className="block lg:hidden text-4xl text-white self-center">
            <ArrowDown />
          </span>
          <div className="code-box bg-slate-900 border-2 border-indigo-400 min-w-[300px] flex-1 rounded-xl p-6 text-left">
            <div className="code-header text-slate-400 text-sm mb-4 uppercase">
              Output (JavaScript)
            </div>
            <pre className="code-content text-slate-200 font-mono text-base leading-7">
              {`// fibonacci function
function fb(n) {
    if (n <= 1) {
        return n;
    }
    return fb(n-1) + fb(n-2);
}`}
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}
