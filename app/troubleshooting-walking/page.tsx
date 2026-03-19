/**
 * 트러블슈팅 페이지: 런데이-웰뱅 만보기 연동
 * docs/troubleshooting-walking.md 내용을 웹 페이지로 구성
 */

import Image from "next/image";

export default function TroubleshootingWalkingPage() {
  return (
    <main className="min-h-screen px-4 py-10 print:py-0">
      <div className="max-w-[820px] mx-auto">
        <article className="bg-[var(--color-surface)] border border-[var(--color-border)] shadow-sm rounded-xl print:shadow-none print:rounded-none print:border-0">
          <div className="px-6 md:px-10 py-8 md:py-10 print:px-0 print:py-0 space-y-6">
            <header>
              <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-ink)] mb-2">
                트러블슈팅: 런데이-웰뱅 만보기 연동
              </h1>
              <p className="text-sm text-[var(--color-muted)]">
                서버리스 만보기 연동 서비스 운영 중 발생한 장애와 대응 과정을 정리한 문서입니다.
              </p>
            </header>

            <section>
              <h2 className="text-lg font-semibold text-[var(--color-ink)] mb-3 pb-2 border-b border-[var(--color-border)]">
                문제 상황
              </h2>

              <h3 className="mt-3 text-sm font-semibold text-[var(--color-ink)]">
                현상
              </h3>
              <ul className="mt-2 list-disc list-inside text-sm text-[var(--color-ink)] space-y-1">
                <li>런데이 만보기 오토스케일링 그룹(ASG) 증설 과정 중 Lambda 호출 건수 0건 기록</li>
                <li>만보기 데이터가 일부 사용자에게 반영되지 않는 장애 발생</li>
                <li>초기에는 급격한 트래픽 증가로 인한 서버 과부하 및 응답 지연으로 판단</li>
              </ul>
              <div className="mt-3 border border-[var(--color-border)] rounded-md bg-white overflow-hidden">
                <Image
                  src="/assets/images/create_auto_scaling.png"
                  alt="ELB 헬스체크 실패 및 인스턴스 교체 로그"
                  width={1024}
                  height={200}
                />
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[var(--color-ink)] mb-3 pb-2 border-b border-[var(--color-border)]">
                대응 과정
              </h2>

              <h3 className="mt-2 text-sm font-semibold text-[var(--color-ink)]">
                초동 조치
              </h3>
              <ul className="mt-1 list-disc list-inside text-sm text-[var(--color-ink)] space-y-1">
                <li>가용성 확보를 위해 인스턴스 긴급 스케일 아웃 (2대 → 4대)</li>
                <li>Lambda 서비스 무중단 재배포 진행</li>
              </ul>

              <h3 className="mt-3 text-sm font-semibold text-[var(--color-ink)]">
                원인 분석
              </h3>
              <ul className="mt-1 list-disc list-inside text-sm text-[var(--color-ink)] space-y-1">
                <li>스케일 아웃 이후에도 동일 증상이 지속되어 단순 부하 문제가 아님을 판단</li>
                <li>
                  서버 로그 및 인프라 설정 점검 결과, 신규 인스턴스에 퍼블릭 IP가 할당되지 않아
                  아웃바운드 통신이 차단된 상태임을 확인
                </li>
                <li>
                  해당 문제로 외부 API 호출이 실패하면서 Lambda 트리거 자체가 발생하지 않은 것이
                  근본 원인으로 파악
                </li>
              </ul>

              <h3 className="mt-3 text-sm font-semibold text-[var(--color-ink)]">
                조치
              </h3>
              <ul className="mt-1 list-disc list-inside text-sm text-[var(--color-ink)] space-y-1">
                <li>ASG 네트워크 설정 수정 (퍼블릭 IP 자동 할당 활성화)</li>
                <li>누락된 데이터 1,730건 일괄 복구 완료</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[var(--color-ink)] mb-3 pb-2 border-b border-[var(--color-border)]">
                결과
              </h2>
              <ul className="list-disc list-inside text-sm text-[var(--color-ink)] space-y-1">
                <li>데이터 수집 정상화 및 서비스 안정성 복구</li>
                <li>장애 구간 데이터 100% 복구 완료 (1,730건)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[var(--color-ink)] mb-3 pb-2 border-b border-[var(--color-border)]">
                장애 방지 대책
              </h2>

              <h3 className="mt-2 text-sm font-semibold text-[var(--color-ink)]">
                인프라 설정 보완
              </h3>
              <ul className="mt-1 list-disc list-inside text-sm text-[var(--color-ink)] space-y-1">
                <li>ASG 인스턴스 생성 시 퍼블릭 IP 자동 할당 설정 적용</li>
                <li>리소스 최적화 후 인스턴스 수 정상화 (4대 → 2대)</li>
              </ul>

              <h3 className="mt-3 text-sm font-semibold text-[var(--color-ink)]">
                모니터링 고도화
              </h3>
              <ul className="mt-1 list-disc list-inside text-sm text-[var(--color-ink)] space-y-1">
                <li>CloudWatch 알람 기반 이상 감지 시 실시간 메일 알림 체계 구축</li>
              </ul>

              <h3 className="mt-3 text-sm font-semibold text-[var(--color-ink)]">
                자동 복구 시스템 구축
              </h3>
              <ul className="mt-1 list-disc list-inside text-sm text-[var(--color-ink)] space-y-1">
                <li>
                  CloudWatch → SNS → Lambda 연계를 통해 장애 감지 시 자동 재배포 수행하는 복구
                  프로세스 구현
                </li>
              </ul>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}

