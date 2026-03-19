/**
 * 경력기술서 메인 페이지
 * data/sampleCareerData.ts 의 데이터를 사용하며,
 * 실제 사용 시 해당 파일을 본인 정보로 수정하거나 API/파일에서 불러오도록 변경 가능
 */

import ContactSection from "@/components/ContactSection";
import SummarySection from "@/components/SummarySection";
import ProjectsSection from "@/components/ProjectsSection";
import { sampleCareerData } from "@/data/sampleCareerData";

export default function CareerPage() {
  const data = sampleCareerData;

  return (
    <main className="min-h-screen px-4 py-10 print:py-0">
      {/* 화면에서는 ‘종이’ 느낌, 인쇄에서는 여백만 남김 */}
      <div className="max-w-[820px] mx-auto">
        <article className="bg-[var(--color-surface)] border border-[var(--color-border)] shadow-sm rounded-xl print:shadow-none print:rounded-none print:border-0">
          <div className="px-6 md:px-10 py-8 md:py-10 print:px-0 print:py-0 space-y-2">
            <ContactSection contact={data.contact} />
            <SummarySection summary={data.summary} />
            <ProjectsSection items={data.projectDetails} />
          </div>

          {/* 인쇄 시 하단 서명 문구 (선택) */}
          <footer className="px-6 md:px-10 pb-8 md:pb-10 print:px-0 print:pb-0">
            <div className="mt-8 pt-4 border-t border-[var(--color-border)] text-center text-sm text-[var(--color-muted)]">
              위 내용은 경력기술서로, 사실과 다름이 없음을 확인합니다.
            </div>
          </footer>
        </article>
      </div>
    </main>
  );
}
