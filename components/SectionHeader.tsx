/**
 * 섹션 제목 공통 컴포넌트
 * 일관된 스타일과 접근성을 위해 사용
 */

import React from "react";

interface SectionHeaderProps {
  title: string;
  /** 스크린 리더용 설명 (선택) */
  ariaLabel?: string;
  /** aria-labelledby 연결용 id (선택) */
  id?: string;
  className?: string;
}

export default function SectionHeader({
  title,
  ariaLabel,
  id,
  className = "",
}: SectionHeaderProps) {
  return (
    <h2
      id={id}
      className={`text-lg font-bold tracking-tight text-[var(--color-ink)] border-b-2 border-[var(--color-accent)] pb-1.5 mb-4 ${className}`}
      aria-label={ariaLabel ?? undefined}
    >
      {title}
    </h2>
  );
}
