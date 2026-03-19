/**
 * 프로젝트 상세 섹션
 * 제목-요약-문제-해결-성과-기술 구성으로 정리
 */

import React from "react";
import Link from "next/link";
import type { ProjectDetailItem } from "@/types/career";
import SectionHeader from "./SectionHeader";

interface ProjectsSectionProps {
  items: ProjectDetailItem[] | undefined;
}

function OutcomeWithRelatedLink({
  outcome,
  link,
}: {
  outcome: string;
  link?: string;
}) {
  const normalizedOutcome = outcome ?? "";
  const normalizedLink = link?.trim() ?? "";
  const isExternalLink = /^https?:\/\//i.test(normalizedLink);

  // 에러 방지: 링크가 없으면 원문 그대로 렌더
  if (!normalizedLink) {
    return <>{normalizedOutcome}</>;
  }

  // 링크로 치환할 키워드 목록: "관련기사", "상세 보기"
  const markers = ["관련기사", "상세 보기"] as const;

  // 문자열을 순회하면서 가장 먼저 등장하는 마커를 찾아 링크로 치환
  const nodes: React.ReactNode[] = [];
  let cursor = 0;

  while (cursor < normalizedOutcome.length) {
    let nextIndex = -1;
    let matchedMarker: (typeof markers)[number] | null = null;

    for (const marker of markers) {
      const idx = normalizedOutcome.indexOf(marker, cursor);
      if (idx !== -1 && (nextIndex === -1 || idx < nextIndex)) {
        nextIndex = idx;
        matchedMarker = marker;
      }
    }

    if (nextIndex === -1 || matchedMarker === null) {
      nodes.push(normalizedOutcome.slice(cursor));
      break;
    }

    if (nextIndex > cursor) {
      nodes.push(normalizedOutcome.slice(cursor, nextIndex));
    }

    nodes.push(
      isExternalLink ? (
        <a
          key={`${nextIndex}-${matchedMarker}`}
          href={normalizedLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-accent)] hover:underline"
        >
          {matchedMarker}
        </a>
      ) : (
        <Link
          key={`${nextIndex}-${matchedMarker}`}
          href={normalizedLink}
          className="text-[var(--color-accent)] hover:underline"
        >
          {matchedMarker}
        </Link>
      )
    );

    cursor = nextIndex + matchedMarker.length;
  }

  return <>{nodes}</>;
}

export default function ProjectsSection({ items }: ProjectsSectionProps) {
  if (!items?.length) return null;

  return (
    <section className="py-6" aria-labelledby="projects-heading">
      <SectionHeader title="Projects" id="projects-heading" />
      <ul className="space-y-6 list-none pl-0">
        {items.map((project, index) => (
          <li
            key={`${project.title}-${index}`}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <div className="min-w-0">
                <h3 className="text-base md:text-lg font-bold text-[var(--color-ink)]">
                  {project.title}
                </h3>
                {project.workPlace?.trim() ? (
                  <p className="mt-1 text-sm text-[var(--color-muted)]">
                    {project.workPlace}
                  </p>
                ) : null}
              </div>
              {project.period ? (
                <span className="text-sm text-[var(--color-muted)]">
                  {project.period}
                </span>
              ) : null}
            </div>

            <p className="text-sm text-[var(--color-ink)] leading-relaxed whitespace-pre-line mb-4">
              {project.summary}
            </p>

            <dl className="space-y-3">
              <div>
                <dt className="text-sm font-semibold text-[var(--color-ink)]">
                  문제
                </dt>
                <dd className="text-sm text-[var(--color-muted)] leading-relaxed whitespace-pre-line">
                  {project.problem}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-[var(--color-ink)]">
                  해결
                </dt>
                <dd className="text-sm text-[var(--color-muted)] leading-relaxed whitespace-pre-line">
                  {project.solution}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-[var(--color-ink)]">
                  성과
                </dt>
                <dd className="text-sm text-[var(--color-muted)] leading-relaxed whitespace-pre-line">
                  <OutcomeWithRelatedLink
                    outcome={project.outcome}
                    link={project.link}
                  />
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-[var(--color-ink)]">
                  기술
                </dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {project.techStack?.length
                    ? project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-0.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700"
                        >
                          {tech}
                        </span>
                      ))
                    : null}
                </dd>
              </div>
            </dl>

            {/* 링크는 성과(outcome) 내 '관련기사' 텍스트에 연결 */}
          </li>
        ))}
      </ul>
    </section>
  );
}
