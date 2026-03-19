/**
 * 경력기술서 샘플 데이터
 * 실제 사용 시 본인 정보로 교체하여 사용
 */

import type { CareerDescriptionData } from "@/types/career";

export const sampleCareerData: CareerDescriptionData = {
  contact: {
    name: "임지은",
    email: "ije90@gmail.com",
    phone: "010-0000-0000",
    github: "https://github.com/ije90s",
    linkedIn: "",
    blog: "",
  },
  summary: {
    oneLineSummary:
      "10년 차 백엔드 엔지니어로 대규모 트래픽 환경에서 무중단 운영·성능 최적화·비용 절감 경험 보유",
    experienceBullets: [
      "10만~20만 건 규모 SQS 기반 푸시 시스템 설계 및 성능 개선 (전송 시간 1시간 → 20분, 약 67% 단축)",
      "AWS Lambda, API Gateway 기반 서버리스 아키텍처 설계 및 운영 (2.4만 유저 규모 서비스, 트래픽 증가 대응)",
      "캐싱·쿼리 최적화·비동기 처리 구조 개선을 통한 응답 속도 및 시스템 안정성 개선",
      "Node.js 기반 백엔드 및 AWS 인프라 운영 경험"
    ],
  },
  projectDetails: [
    {
      title: "SQS 기반 푸시(FCM) 메시징 시스템 최적화",
      workPlace: "(주) 땀",
      period: "2024.11 - 2025.07",
      summary: "SQS 기반 메시징 구조 개선으로 푸시 전송 시간 67% 단축",
      problem:
        "- 푸시 전송 로직이 메인 서버에 결합되어 장애 전파 위험 존재\n- 일 10만~20만 건 푸시 처리 시 약 1시간 소요되는 성능 한계\n- 병렬 처리 과정에서 Race Condition으로 중복 발송 발생",
      solution:
        "- SQS 기반 Push Consumer 서버 분리로 메시징 시스템 독립화\n- PM2 Cluster + 메시지 유형별 큐 분리로 병렬 처리 구조 설계\n- 메시징 처리 순서 개선 및 Visibility Timeout 조정으로 중복 소비 문제 해결\n- Chunk 단위 전송 및 Throttling 제어로 안정적 대량 처리 구현",
      outcome:
        "- 푸시 전송 시간 67% 단축 (1시간 → 20분)\n- 전송 성공률 98% 이상 확보, 운영 재처리 비용 감소\n- 장애 전파 차단으로 서비스 안정성 향상 및 운영 부담 감소",
      techStack: ["Node.js(PM2)", "AWS(SQS, EC2)", "MariaDB", "FCM"],
      link: "",
    },
    {
      title: "런데이-웰뱅 만보기 연동 서버리스 아키텍처 구축",
      workPlace: "(주) 땀",
      period: "2025.01 - 2025.09",
      summary: "서버리스 아키텍처 구축으로 외부 API 장애 격리 및 무중단 운영 달성",
      problem:
        "- 외부 금융 API 장애가 주 서비스로 전파될 위험 존재\n- 낮은 호출량 대비 NAT Gateway 사용으로 불필요한 고정 비용 발생",
      solution:
        "- Lambda + API Gateway 기반 독립 서버리스 아키텍처 설계\n- CloudWatch + SNS 기반 모니터링 및 자동 복구 프로세스 구축\n- NAT Gateway 제거 및 Lambda 간 호출 구조로 비용 최적화\n- 보안 요구사항 대응을 위한 IP 화이트리스트 및 암·복호화 처리 구현",
      outcome:
        "- 서버리스 아키텍처 기반으로 6개월 무중단 운영 달성 및 장애 대응 자동화 구축\n- 평균 응답 속도 11~12ms 유지 (피크 트래픽 환경 포함)\n- 데이터 누락 1,730건 복구 및 재발 방지 구조 설계 (상세 보기)\n- NAT Gateway 제거를 통한 고정 인프라 비용 절감",
      techStack: ["Node.js", "AWS(Lambda, API Gateway, SAM, SNS)", "MariaDB"],
      link: "/troubleshooting-walking",
    },
    {
      title: "커뮤니티 서버 리팩토링",
      workPlace: "(주) 땀",
      period: "2025.01 - 2025.06",
      summary: "모놀리식 구조 개선 및 차세대 아키텍처(SOA) 전환 설계",
      problem:
        "- 모놀리식 구조로 도메인 간 결합도 증가\n- 유지보수성 지수(MI) 55 수준으로 개발 생산성 저하",
      solution:
        "- Layered Architecture를 적용하여 3개 핵심 도메인으로 서비스 로직 분리 및 독립화\n- ALB Path-based Routing을 활용해 기존 인프라 중단 없이 점진적으로 서비스를 이전할 수 있는 SOA 전환 청사진 설계\n- Node.js 20 업그레이드 및 공통 보일러플레이트 구축\n- 핵심 도메인 대상 Jest 단위 테스트 및 API 검증 환경 구축",
      outcome:
        "- 정적 분석 도구(Plato) 기준 유지보수성 지수 55 → 71(약 30%)로 향상\n- 도메인 간 의존성 제거를 통해 향후 개별 서비스 단위 배포 및 스케일 아웃이 가능한 구조적 기반 마련\n- 표준화된 공통 구조 도입으로 신규 개발자 온보딩 및 팀 내 개발 컨벤션 일치화 완료",
      techStack: ["Node.js", "Jest", "Plato"],
      link: "",
    },
    {
      title: "핏데이 - TV 홈트 서비스 아키텍처 설계 및 성능 최적화",
      workPlace: "(주) 땀",
      period: "2023.11 - 2024.08",
      summary: "저사양 환경 대응 아키텍처 개선으로 서비스 안정성 및 비용 절감",
      problem:
        "- 셋톱박스 환경에서 ML 연산과 영상 처리로 CPU 병목 발생\n- 장시간 실행 시 영상 끊김 및 서비스 불안정",
      solution:
        "- ML 연산 처리 흐름을 Frontend → Python 서버 → AOS(On-device) 구조로 재설계하여 연산 부하 분산\n- 운동 단계별 콘텐츠 로딩 구조 분리로 네트워크 및 메모리 사용 최적화\n- 영상 리소스 경량화 및 렌더링 구조 개선으로 장시간 실행 안정성 확보",
      outcome:
        "- 영상 끊김 70% 감소, 8시간 이상 안정적 서비스 운영\n- Python 서버 제거로 월 운영 비용 절감",
      techStack: [
        "Node.js",
        "AWS(EC2, S3, CloudFront, EventBridge, Lambda)",
        "MariaDB",
        "Redis",
        "TensorFlow",
      ],
      link: "",
    },
    {
      title: "이프유 - 플랫폼 게임 서버 개발 및 성능 최적화",
      workPlace: "피어코퍼레이션",
      period: "2021.06 - 2022.07",
      summary: "게임 서버 안정화 및 성능 개선 (CPU 90% → 10% 절감)",
      problem:
        "- MAU 증가(3만 → 8만)로 DB 부하 증가 및 성능 저하\n- 동남아 유저 증가 및 이벤트 트래픽으로 슬로우 쿼리 발생",
      solution:
        "- MySQL Master-Slave 및 PM2 Cluster로 처리 성능 확장\n- LRU 캐시 및 배치 구조 도입으로 DB 부하 감소\n- 슬로우 쿼리 분석 및 인덱스 최적화를 통한 DB 성능 개선",
      outcome:
        "- MAU 8만 환경에서도 안정적 서비스 운영\n- 슬로우 쿼리 개선을 통해 CPU 사용량 90% → 10% 감소",
      techStack: ["Node.js", "MySQL", "NCP", "nginx"],
      link: "",
    },
    {
      title: "서버리스 기반 러닝 네비게이션 API 개발",
      workPlace: "(주) 땀",
      period: "2024.09 - 2024.10",
      summary: "파일 처리 구조 개선으로 Lambda 메모리 60% 절감",
      problem: "- Lambda 환경에서 파일 업로드 시 메모리 사용 증가로 실패 위험 존재\n- 신규 챌린지 서비스 대응을 위해 기록·챌린지 API 구조 통합 필요",
      solution:
        "- 스트리밍 기반 파일 처리 구조 도입 (busboy)\n- VPC Endpoint 활용으로 네트워크 및 리소스 최적화\n- 파라미터 기반 분기 로직으로 기록·챌린지 기능을 단일 API로 통합",
      outcome:
        "- Lambda 메모리 사용량 약 60% 절감\n- 서버리스 기반 확장 가능한 API 구조 구축 및 신규 챌린지 서비스 적용 (관련기사)",
      techStack: ["Node.js", "AWS(Lambda, API Gateway, S3)", "MariaDB"],
      link: "https://www.electimes.com/news/articleView.html?idxno=344368",
    },
    {
      title: "광고 서버 안정화",
      workPlace: "(주) 땀",
      period: "2025.06 - 2025.07",
      summary: "광고 서빙 구조 개선 및 알림 자동화로 운영 안정성 확보",
      problem:
        "- 광고 소진 시 동일 광고 반복 노출 문제 발생\n- 광고 소진 모니터링 체계 부재로 운영 대응 어려움\n- API 명세 부재로 협업 비효율 발생",
      solution:
        "- 타겟팅 → 일반 → 디폴트 광고 우선순위 기반 서빙 구조 설계\n- 광고 소진 알림 시스템 자동화 및 외부 알림 시스템 연동\n- API 문서화 및 어드민·운영 구조 정비",
      outcome:
        "- 디폴트 광고 도입으로 광고 반복 노출 문제 100% 해결\n- 광고 소진 알림 자동화로 운영 모니터링 안정성 확보\n- API 문서화로 운영·기획팀 협업 효율 개선",
      techStack: ["Node.js", "AWS", "MariaDB"],
      link: "",
    },
  ],
};
