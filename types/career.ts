/**
 * 경력기술서 데이터 타입 정의 (요약 + 프로젝트 상세 중심)
 * 경력기술서는 “무엇을 했는지”를 빠르게 전달하는 게 핵심이므로,
 * 요약(한줄+불릿)과 프로젝트 상세(문제-해결-성과-기술) 구조로 단순화
 */

/** 연락처: 요약 전에 간략하게 표시 */
export interface ContactInfo {
  name: string;
  email?: string;
  phone?: string;
  github?: string;
  linkedIn?: string;
  blog?: string;
}

/** 경력 요약: 한 줄 요약 + 경험 요약 불릿 */
export interface CareerSummary {
  /** 한 줄 요약 (예: “10년 차 백엔드 엔지니어, MAU 37만 서비스 운영/개선”) */
  oneLineSummary: string;
  /** 경험 요약 불릿 (3~6개 권장) */
  experienceBullets: string[];
}

/** 프로젝트 상세: 제목-요약-문제-해결-성과-기술 */
export interface ProjectDetailItem {
  title: string;
  /** 근무지/조직 (예: 회사명, 서비스명, 팀명) */
  workPlace?: string;
  /** 프로젝트 요약 (2~3문장 권장) */
  summary: string;
  /** 문제: 겪었던 이슈/제약/목표 */
  problem: string;
  /** 해결: 접근 방식/설계/구현 포인트 */
  solution: string;
  /** 성과: 수치/정성 지표(가능하면 숫자) */
  outcome: string;
  /** 기술: 사용 기술/도구 */
  techStack: string[];
  /** 기간 (선택) */
  period?: string;
  /** 링크 (선택) */
  link?: string;
}

/** 경력기술서 전체 데이터 */
export interface CareerDescriptionData {
  contact: ContactInfo;
  summary: CareerSummary;
  projectDetails: ProjectDetailItem[];
}
