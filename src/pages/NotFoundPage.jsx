import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function NotFoundPage() {
  return (
    <PageTransition>
      <div className="min-h-[80vh] flex items-center justify-center pt-28 pb-20 px-6 text-center">
        <div className="max-w-md space-y-6 bg-white dark:bg-[#121324] p-10 md:p-14 rounded-3xl border border-purple-500/20 dark:border-purple-400/30 shadow-2xl relative">
          <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-[#09090D] border border-purple-500/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mx-auto mb-4 shadow-xl">
            <Compass className="w-8 h-8 animate-spin-slow" />
          </div>

          <span className="text-xs uppercase tracking-[0.3em] text-purple-600 dark:text-purple-400 font-bold block">
            ERROR 404
          </span>

          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white">
            PAGE NOT FOUND
          </h1>

          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
            The page you are searching for does not exist or may have been relocated.
          </p>

          <div className="pt-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3.5 rounded-full font-semibold transition-all shadow-xl shadow-purple-600/25"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>RETURN HOME</span>
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
