/**
 * 경력 요약 섹션
 * 한 줄 요약 + 경험 요약 불릿
 */

import React from "react";
import type { CareerSummary } from "@/types/career";
import SectionHeader from "./SectionHeader";

interface SummarySectionProps {
  summary: CareerSummary;
}

export default function SummarySection({ summary }: SummarySectionProps) {
  const { oneLineSummary, experienceBullets } = summary;

  const hasOneLineSummary = Boolean(oneLineSummary?.trim());
  const hasExperienceBullets = Boolean(experienceBullets?.length);

  if (!hasOneLineSummary && !hasExperienceBullets) return null;

  return (
    <section className="py-6" aria-labelledby="summary-heading">
      <SectionHeader title="Summary" id="summary-heading" />
      {hasOneLineSummary ? (
        <p className="text-base font-semibold text-[var(--color-ink)] leading-relaxed mb-3">
          {oneLineSummary}
        </p>
      ) : null}
      {hasExperienceBullets ? (
        <ul className="list-disc list-inside space-y-1 text-sm text-[var(--color-ink)]">
          {experienceBullets.map((bullet, index) => (
            <li key={index} className="leading-relaxed">
              {bullet}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
