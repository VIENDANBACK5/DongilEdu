// Nội dung tĩnh của trang — tổng hợp từ hồ sơ giới thiệu của công ty.

export const SITE = {
  name: "Công ty TNHH Tư Vấn Du Học Dongil Edu",
  short: "Dongil Edu",
  kr: "동일 유학",
  slogan:
    "Điểm đến học tập và cơ hội làm việc tốt cho các bạn học sinh Việt Nam.",
  hotline: "0977.728.395",
  hotlineHref: "tel:+84977728395",
  email: "dongiledu68@gmail.com",
  address: "Phố Nguyễn Thiện Tích, Phường Võ Cường, Tỉnh Bắc Ninh",
};

export interface Visa {
  tag: string;
  name: string;
  rows: [string, string][];
}

export const VISAS: Visa[] = [
  {
    tag: "VISA D4-1",
    name: "Hệ tiếng",
    rows: [
      ["Thời gian", "Tối đa 2 năm"],
      ["Làm thêm", "Tối đa 20h/tuần (sau 6 tháng)"],
      ["Điều kiện", "TN THPT ≤ 3 năm · Không cần chứng chỉ tiếng Hàn"],
      ["Gia hạn", "6 tháng / lần"],
    ],
  },
  {
    tag: "VISA D2-1",
    name: "Hệ Cao đẳng",
    rows: [
      ["Thời gian", "3 năm"],
      ["Làm thêm", "Tối đa 25h/tuần"],
      ["Điều kiện", "Điểm THPT từ 6.5 trở lên"],
      ["Gia hạn", "1 năm / lần"],
    ],
  },
  {
    tag: "VISA D2-2",
    name: "Hệ Đại học",
    rows: [
      ["Thời gian", "4 năm"],
      ["Làm thêm", "Tối đa 25h/tuần (sau 6 tháng)"],
      ["Điều kiện", "TN THPT ≤ 3 năm · TOPIK 2+ · GPA 6.0+"],
      ["Gia hạn", "1 năm / lần"],
    ],
  },
  {
    tag: "VISA D2-3 / E-VISA",
    name: "Hệ Thạc sĩ",
    rows: [
      ["Thời gian", "2 – 2,5 năm"],
      ["Làm thêm", "Tối đa 35h/tuần"],
      ["Điều kiện", "TN Đại học ≤ 7 năm · TOPIK 4+ (E-Visa: TOPIK 2)"],
      ["Gia hạn", "1 năm / lần"],
    ],
  },
  {
    tag: "VISA D2-6",
    name: "Hệ Trao đổi",
    rows: [
      ["Thời gian", "6 tháng – 1 năm"],
      ["Làm thêm", "10 – 20h/tuần tùy năng lực tiếng"],
      ["Điều kiện", "Học tối thiểu 1 kỳ · TOPIK 2+"],
      ["Gia hạn", "6 tháng – 1 năm / lần"],
    ],
  },
];

export const CONDITIONS: string[] = [
  "Độ tuổi từ 18 – 30 tuổi",
  "Điểm trung bình 3 năm THPT từ 6.5 trở lên",
  "Tốt nghiệp THPT không quá 3 năm",
  "Hệ CĐ/ĐH: GPA từ 6.5 trở lên, tốt nghiệp không quá 3 năm",
  "Chưa biết hoặc đã có chứng chỉ tiếng Hàn đều được",
  "Sức khỏe tốt, không mắc bệnh truyền nhiễm",
  "Không thuộc diện bị cấm xuất cảnh của Việt Nam",
];

export const DOCS: string[] = [
  "Học bạ THPT",
  "Bằng & bảng điểm tốt nghiệp",
  "CCCD / Hộ chiếu",
  "Giấy khai sinh",
  "Sổ hộ khẩu",
  "Chứng minh tài chính",
  "Ảnh thẻ 3.5 × 4.5",
  "Giấy khám sức khỏe",
];

export interface Step {
  title: string;
  desc: string;
}

export const PROCESS: Step[] = [
  { title: "Tư vấn", desc: "Tiếp nhận hồ sơ, tư vấn chọn trường – chọn ngành phù hợp với năng lực và tài chính." },
  { title: "Học tiếng", desc: "Đăng ký lớp tiếng Hàn tại trung tâm Dongil Edu." },
  { title: "Chuẩn bị hồ sơ", desc: "Hoàn thiện hồ sơ du học, gửi thông tin ứng viên cho trường." },
  { title: "Đóng học phí", desc: "Nhận invoice của trường, đóng học phí và nhận thư mời nhập học." },
  { title: "Phỏng vấn", desc: "Lên lịch & tham gia phỏng vấn với trường (3 – 5 ngày)." },
  { title: "Xin Visa", desc: "Chuẩn bị hồ sơ visa, nộp và nhận kết quả visa." },
  { title: "Lên đường", desc: "Hoàn tất thủ tục và bay sang Hàn Quốc du học." },
];

export interface RoadStep {
  no: string;
  title: string;
  time: string;
  desc: string;
}

export const ROADMAP: RoadStep[] = [
  { no: "01", title: "Học hệ tiếng", time: "3 – 6 tháng", desc: "Học tiếng Hàn & làm quen cuộc sống, văn hóa Hàn Quốc." },
  { no: "02", title: "Học chuyên ngành", time: "CĐ 2,5–3 năm / ĐH 3,5–4 năm", desc: "Đa dạng ngành nghề, chọn chuyên ngành phù hợp năng lực." },
  { no: "03", title: "Sau đại học / đi làm", time: "Tùy lộ trình", desc: "Lựa chọn học Thạc sĩ, Tiến sĩ hoặc tham gia thị trường lao động." },
  { no: "04", title: "Cơ hội việc làm", time: "Rộng mở", desc: "Việc làm tại Hàn Quốc với bằng cấp chuyên môn và ngoại ngữ." },
];

export interface Why {
  title: string;
  desc: string;
}

export const WHY: Why[] = [
  { title: "Tư vấn tận tâm", desc: "Chọn đúng trường, đúng ngành theo năng lực và tài chính." },
  { title: "Đào tạo tiếng Hàn", desc: "Lộ trình 3 – 6 tháng tại trung tâm trước khi bay." },
  { title: "Hồ sơ chuẩn xác", desc: "Đội ngũ giàu kinh nghiệm, tỷ lệ đậu visa cao." },
  { title: "Hỗ trợ tại Hàn", desc: "Đồng hành cả khi sinh sống và học tập tại Hàn Quốc." },
];

export const NAV = [
  { href: "#home", label: "Trang chủ" },
  { href: "#programs", label: "Hình thức du học" },
  { href: "#schools", label: "Trường liên kết" },
  { href: "#process", label: "Quy trình" },
  { href: "#about", label: "Về chúng tôi" },
];
