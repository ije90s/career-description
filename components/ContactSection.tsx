/**
 * 연락처 섹션
 * 경력 요약 전에 간략하게 표시
 */

import React from "react";
import type { ContactInfo } from "@/types/career";

interface ContactSectionProps {
  contact: ContactInfo;
}

function getSafeHref(value: string, type: "email" | "url" | "phone"): string {
  // 에러 방지: 빈 값/공백 값은 호출하지 않음
  const trimmedValue = value?.trim();
  if (!trimmedValue) return "";

  if (type === "email") return `mailto:${trimmedValue}`;
  if (type === "phone") {
    // 에러 방지: 전화번호 문자열 정리(숫자/+,#,* 만 허용)
    const sanitizedValue = trimmedValue.replace(/[^0-9+#*+]/g, "");
    if (!sanitizedValue) return "";
    return `tel:${sanitizedValue}`;
  }
  if (trimmedValue.startsWith("http://") || trimmedValue.startsWith("https://")) {
    return trimmedValue;
  }
  // url인데 프로토콜이 없다면 https로 보정
  return `https://${trimmedValue}`;
}

function Icon({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-[var(--color-border)] bg-white text-[var(--color-muted)]">
      {children}
    </span>
  );
}

function ContactIconLink({
  label,
  href,
  icon,
  printText,
}: {
  label: string;
  href: string;
  icon: React.ReactNode;
  printText?: string;
}) {
  const trimmedHref = href?.trim();
  if (!trimmedHref) return null;

  return (
    <a
      href={trimmedHref}
      target={trimmedHref.startsWith("http") ? "_blank" : undefined}
      rel={trimmedHref.startsWith("http") ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] rounded-md"
      aria-label={label}
      title={label}
    >
      <Icon>{icon}</Icon>
      {/* 제출용 PDF(인쇄)에서는 텍스트를 같이 노출 */}
      {printText?.trim() ? (
        <span className="hidden print:inline text-sm text-[var(--color-muted)]">
          {printText}
        </span>
      ) : null}
    </a>
  );
}

function EmailIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 6.5h16c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5H4c-.83 0-1.5-.67-1.5-1.5V8c0-.83.67-1.5 1.5-1.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="m4.5 8.2 7.2 5.3c.2.15.46.23.73.23.27 0 .53-.08.73-.23l7.2-5.3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7.5 3.8h2.1c.6 0 1.1.4 1.2 1l.6 2.6c.1.5-.1 1-.6 1.2l-1.6.8c1 2.2 2.7 3.9 4.9 4.9l.8-1.6c.2-.5.7-.7 1.2-.6l2.6.6c.6.1 1 .6 1 1.2v2.1c0 .7-.5 1.3-1.2 1.4-8.1 1.2-14.8-5.5-13.6-13.6.1-.7.7-1.2 1.4-1.2Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10 13.9a4 4 0 0 1 0-5.7l1.4-1.4a4 4 0 0 1 5.7 5.7l-.8.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M14 10.1a4 4 0 0 1 0 5.7l-1.4 1.4a4 4 0 0 1-5.7-5.7l.8-.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function ContactSection({ contact }: ContactSectionProps) {
  const contactName = contact?.name?.trim();
  if (!contactName) return null;

  const emailHref = contact.email ? getSafeHref(contact.email, "email") : "";
  const phoneHref = contact.phone ? getSafeHref(contact.phone, "phone") : "";
  const githubHref = contact.github ? getSafeHref(contact.github, "url") : "";
  const linkedInHref = contact.linkedIn ? getSafeHref(contact.linkedIn, "url") : "";
  const blogHref = contact.blog ? getSafeHref(contact.blog, "url") : "";

  return (
    <header className="py-5 md:py-7 border-b border-[var(--color-border)]">
      {/* 한 줄 표현(기본): 화면이 좁으면 자동 줄바꿈 */}
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
        <h1 className="text-xl md:text-2xl font-bold text-[var(--color-ink)]">
          {contactName}
        </h1>

        <div className="flex flex-wrap items-center gap-2">
          {contact.email ? (
            <ContactIconLink
              label="이메일"
              href={emailHref}
              icon={<EmailIcon />}
              printText={contact.email}
            />
          ) : null}
          {contact.phone ? (
            <ContactIconLink
              label="전화번호"
              href={phoneHref}
              icon={<PhoneIcon />}
              printText={contact.phone}
            />
          ) : null}
          {contact.github ? (
            <ContactIconLink
              label="GitHub"
              href={githubHref}
              icon={<LinkIcon />}
              printText="GitHub"
            />
          ) : null}
          {contact.linkedIn ? (
            <ContactIconLink
              label="LinkedIn"
              href={linkedInHref}
              icon={<LinkIcon />}
              printText="LinkedIn"
            />
          ) : null}
          {contact.blog ? (
            <ContactIconLink
              label="Blog"
              href={blogHref}
              icon={<LinkIcon />}
              printText="Blog"
            />
          ) : null}
        </div>
      </div>
    </header>
  );
}

