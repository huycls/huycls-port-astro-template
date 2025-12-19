"use client";

import { useState } from "react";

interface Skill {
  name: string;
  icon: string;
}

interface SkillsSectionProps {
  skills: Skill[];
  initialVisible?: number;
}

export const SkillsSection = ({ 
  skills, 
  initialVisible = 9 
}: SkillsSectionProps) => {
  const [showAll, setShowAll] = useState(false);
  const visibleSkills = showAll ? skills : skills.slice(0, initialVisible);
  const hasMore = skills.length > initialVisible;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
          Skills
        </h2>
        {hasMore && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 underline flex items-center gap-1 transition-colors">
            {showAll ? "Show less" : "Show more"}
            <svg
              className={`w-4 h-4 transition-transform ${showAll ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-3">
        {visibleSkills.map((skill, index) => (
          <button
            key={index}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-sm font-medium">
            <span className="text-lg">{skill.icon}</span>
            <span>{skill.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

