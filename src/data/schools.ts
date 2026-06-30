// AUTO-GENERATED from company source deck "Danh sách trường DONGIL".
// Edit here to add/update partner schools — the UI renders from this single source.

export type RegionKey = "seoul" | "busan" | "daejeon" | "gwangju" | "daegu";
export type GroupKey = "top1" | "top2" | "top3" | "expand";

export interface School {
  slug: string;
  name: string;        // Tên tiếng Việt
  en: string;          // Tên tiếng Anh
  kr?: string;         // Tên tiếng Hàn
  group: GroupKey;     // Xếp hạng / nhóm
  type: string;        // Đại học / Cao đẳng
  region: RegionKey;
  city: string;
  founded: number | null;
  img: string | null;  // file trong /public/img/schools (không đuôi)
  badge?: string;      // nhãn nổi bật (vd: vừa học vừa làm)
  majors: string[];
  intakes: string;
  reqs: string[];
  costs: [string, string][];
  total: string;
}

export const REGIONS: Record<RegionKey, string> = {
  "seoul": "Seoul & lân cận",
  "busan": "Busan & Đông Nam",
  "daejeon": "Daejeon & Chungcheong",
  "gwangju": "Gwangju & Jeolla",
  "daegu": "Daegu & Gyeongbuk"
};

export const GROUPS: Record<GroupKey, string> = {
  "top1": "TOP 1",
  "top2": "TOP 2",
  "top3": "TOP 3",
  "expand": "D2 mở rộng"
};

export const SCHOOLS: School[] = [
  {
    "slug": "chung-ang",
    "name": "Đại học Chung-Ang",
    "en": "Chung-Ang University",
    "kr": "중앙대학교",
    "group": "top1",
    "type": "Đại học",
    "region": "seoul",
    "city": "Seoul",
    "founded": 1918,
    "img": "chung-ang",
    "majors": [
      "Nghệ thuật",
      "Kinh doanh – Kinh tế",
      "Kỹ thuật",
      "Khoa học xã hội",
      "Nhân văn",
      "Truyền thông"
    ],
    "intakes": "T3 · T6 · T9 · T12 / 2026",
    "reqs": [
      "Tốt nghiệp THPT không quá 2 năm",
      "Nghỉ học không quá 10 buổi",
      "GPA > 7.5"
    ],
    "costs": [
      [
        "Học phí",
        "6.800.000 KRW/năm"
      ],
      [
        "Phí đăng ký",
        "100.000 KRW"
      ],
      [
        "Ký túc xá",
        "700.000 KRW/kỳ"
      ],
      [
        "Bảo hiểm",
        "60.000 – 70.000 KRW"
      ]
    ],
    "total": "≈ 7.730.000 KRW (~137 triệu VND)"
  },
  {
    "slug": "kyungsung",
    "name": "Đại học Kyungsung",
    "en": "Kyungsung University",
    "kr": "경성대학교",
    "group": "top1",
    "type": "Đại học",
    "region": "busan",
    "city": "Busan",
    "founded": 1955,
    "img": "kyungsung",
    "majors": [
      "Du lịch – Khách sạn",
      "CNTT – Kỹ thuật ô tô",
      "Quản trị kinh doanh",
      "Tiếng Hàn"
    ],
    "intakes": "T3 · T6 · T9 · T12 / 2026",
    "reqs": [
      "Tốt nghiệp THPT không quá 2 năm (CĐ/ĐH ≤ 1 năm)",
      "Nhận học sinh GDTX",
      "GPA 7.0+"
    ],
    "costs": [],
    "total": "Liên hệ tư vấn"
  },
  {
    "slug": "sunmoon",
    "name": "Đại học Sunmoon",
    "en": "Sunmoon University",
    "kr": "선문대학교",
    "group": "top1",
    "type": "Đại học",
    "region": "daejeon",
    "city": "Asan",
    "founded": 1972,
    "img": "sunmoon",
    "majors": [
      "Công nghiệp đặc biệt",
      "Kỹ thuật",
      "Khoa học xã hội",
      "Nhân văn",
      "Truyền thông"
    ],
    "intakes": "T6 · T9 · T12 / 2026",
    "reqs": [
      "Tốt nghiệp THPT không quá 2 năm",
      "Nghỉ học không quá 10 buổi",
      "GPA > 7.5",
      "Miền Trung chỉ nhận học sinh nữ"
    ],
    "costs": [
      [
        "Học phí",
        "5.200.000 KRW/năm"
      ],
      [
        "Phí đăng ký",
        "50.000 KRW"
      ],
      [
        "Phí nhập học",
        "100.000 KRW"
      ],
      [
        "Ký túc xá",
        "700.000 KRW/kỳ"
      ],
      [
        "Bảo hiểm",
        "90.000 KRW (7 tháng)"
      ]
    ],
    "total": "≈ 6.140.000 KRW (~116 triệu VND)"
  },
  {
    "slug": "hanyang",
    "name": "Đại học Hanyang",
    "en": "Hanyang University",
    "kr": "한양대학교",
    "group": "top1",
    "type": "Đại học",
    "region": "seoul",
    "city": "Seoul & Erica",
    "founded": 1939,
    "img": "hanyang",
    "majors": [
      "Công nghiệp đặc biệt",
      "Kỹ thuật",
      "Khoa học xã hội",
      "Mỹ thuật",
      "Âm nhạc"
    ],
    "intakes": "T3 · T6 · T9 · T12 / 2026",
    "reqs": [
      "Tốt nghiệp THPT chính quy không quá 3 năm",
      "GPA 7.0+",
      "Không có tiền sử cư trú bất hợp pháp"
    ],
    "costs": [
      [
        "Học phí Seoul",
        "7.200.000 KRW/năm"
      ],
      [
        "Học phí Erica",
        "6.000.000 KRW/năm"
      ],
      [
        "Ký túc xá",
        "1.000.000 KRW/4 tháng"
      ]
    ],
    "total": "7.100.000 – 8.350.000 KRW (132 – 154 triệu VND)"
  },
  {
    "slug": "sookmyung",
    "name": "Đại học nữ sinh Sookmyung",
    "en": "Sookmyung Women’s University",
    "kr": "숙명여자대학교",
    "group": "top1",
    "type": "Đại học",
    "region": "seoul",
    "city": "Yongsan, Seoul",
    "founded": 1906,
    "img": "sookmyung",
    "majors": [
      "Công nghệ kỹ thuật",
      "Khoa học xã hội",
      "Khoa học tự nhiên",
      "Kinh tế",
      "Luật",
      "Truyền thông"
    ],
    "intakes": "T3 · T6 · T9 · T12 / 2026",
    "reqs": [
      "Chỉ tuyển sinh nữ",
      "Tốt nghiệp THPT chính quy không quá 3 năm",
      "GPA 7.0+"
    ],
    "costs": [
      [
        "Học phí (hệ tiếng)",
        "6.640.000 KRW/năm"
      ],
      [
        "Phí đăng ký",
        "60.000 KRW"
      ],
      [
        "Ký túc xá",
        "1.080.000 KRW/6 tháng"
      ],
      [
        "Bảo hiểm",
        "70.000 KRW/năm"
      ]
    ],
    "total": "≈ 8.330.000 KRW (~144 triệu VND)"
  },
  {
    "slug": "bufs",
    "name": "Đại học Ngoại ngữ Busan",
    "en": "Busan University of Foreign Studies",
    "kr": "부산외국어대학교",
    "group": "top1",
    "type": "Đại học",
    "region": "busan",
    "city": "Busan",
    "founded": 1981,
    "img": "bufs",
    "majors": [
      "Công nghệ thông tin",
      "Quản trị kinh doanh",
      "Ngôn ngữ"
    ],
    "intakes": "T3 · T6 · T9 · T12 / 2026",
    "reqs": [
      "Tốt nghiệp THPT chính quy không quá 2 năm",
      "GPA 6.5+",
      "Không có tiền sử cư trú bất hợp pháp"
    ],
    "costs": [
      [
        "Học phí",
        "5.200.000 KRW/năm"
      ],
      [
        "Phí đăng ký",
        "60.000 KRW"
      ],
      [
        "Ký túc xá",
        "1.259.000 KRW/6 tháng"
      ],
      [
        "Bảo hiểm",
        "70.000 KRW/năm"
      ]
    ],
    "total": "≈ 6.589.000 KRW (~118,6 triệu VND)"
  },
  {
    "slug": "joongbu",
    "name": "Đại học Joongbu",
    "en": "Joongbu University",
    "kr": "중부대학교",
    "group": "top1",
    "type": "Đại học",
    "region": "daejeon",
    "city": "Chungcheong & Goyang",
    "founded": 1983,
    "img": "joongbu",
    "majors": [
      "Cảnh sát an ninh",
      "Du lịch hàng không",
      "Phúc lợi y tế",
      "Kinh doanh toàn cầu",
      "Kỹ thuật phần mềm",
      "Kỹ thuật ô tô – điện – điện tử",
      "Nội dung văn hóa"
    ],
    "intakes": "T3 · T6 · T9 · T12 / 2026",
    "reqs": [
      "Tốt nghiệp THPT không quá 2 năm",
      "GPA > 6.5"
    ],
    "costs": [
      [
        "Học phí",
        "4.400.000 KRW/năm"
      ],
      [
        "Phí nhập học",
        "100.000 KRW"
      ],
      [
        "Ký túc xá",
        "950.000 KRW/6 tháng"
      ],
      [
        "Bảo hiểm",
        "75.000 KRW/6 tháng"
      ]
    ],
    "total": "Có hệ Thạc sĩ E-Visa (tiếng Anh)"
  },
  {
    "slug": "ulsan",
    "name": "Đại học Ulsan",
    "en": "Ulsan University",
    "kr": "울산대학교",
    "group": "top1",
    "type": "Đại học / Cao đẳng",
    "region": "busan",
    "city": "Ulsan",
    "founded": 1973,
    "img": "ulsan",
    "majors": [
      "Điều dưỡng",
      "Giáo dục mầm non",
      "Phẫu thuật thẩm mỹ",
      "Vật lý trị liệu",
      "Quản lý nhà hàng – khách sạn",
      "Thiết kế không gian",
      "Công nghiệp hóa sinh môi trường"
    ],
    "intakes": "Tuyển sinh theo 4 mùa Xuân – Hạ – Thu – Đông",
    "reqs": [
      "Tốt nghiệp THPT không quá 3 năm",
      "GPA ≥ 6.0"
    ],
    "costs": [
      [
        "Học phí",
        "5.000.000 KRW/năm"
      ],
      [
        "Bảo hiểm",
        "100.000 KRW/6 tháng"
      ],
      [
        "Phí đăng ký",
        "50.000 KRW/6 tháng"
      ]
    ],
    "total": "Liên hệ tư vấn"
  },
  {
    "slug": "hongik",
    "name": "Đại học Hongik",
    "en": "Hongik University",
    "kr": "홍익대학교",
    "group": "top1",
    "type": "Đại học",
    "region": "seoul",
    "city": "Seoul",
    "founded": 1946,
    "img": "hongik",
    "majors": [
      "Ngôn ngữ Hàn",
      "Quản trị kinh doanh",
      "Luật",
      "Kinh tế",
      "Mỹ thuật",
      "Khoa học công nghệ - Game"
    ],
    "intakes": "T3 · T6 · T9 · T12 / 2026",
    "reqs": [
      "Đã tốt nghiệp THPT",
      "Điểm trung bình từ 7.5 trở lên",
      "Chưa từng có tiền án, tiền sự",
      "Trường tuyển sinh chương trình hệ tiếng D4-1, D-2 yêu cầu: TOPIK 3"
    ],
    "costs": [
      [
        "Học tiếng",
        "6.600.000 KRW/năm"
      ],
      [
        "Phí đăng ký",
        "50.000 KRW/năm"
      ],
      [
        "Bảo hiểm",
        "100.000 KRW/năm"
      ],
      [
        "Ký túc xá",
        "1.600.000 KRW/6 tháng"
      ]
    ],
    "total": "≈ 8.350.000 KRW (~150 triệu VND)"
  },
  {
    "slug": "chungbuk",
    "name": "Đại học Quốc gia Chungbuk",
    "en": "Chungbuk National University",
    "kr": "충북대학교",
    "group": "top2",
    "type": "Đại học (Công lập)",
    "region": "daejeon",
    "city": "Cheongju",
    "founded": 1951,
    "img": "chungbuk",
    "majors": [
      "Kinh doanh toàn cầu",
      "Giáo dục quốc tế",
      "Phần mềm – Software",
      "Thông tin điện tử",
      "Nông nghiệp – Đời sống – Môi trường",
      "Sư phạm"
    ],
    "intakes": "T3 · T6 · T9 · T12 / 2026",
    "reqs": [
      "Tốt nghiệp THPT/ĐH không quá 1.5 năm",
      "GPA 7.0+",
      "Chứng minh tài chính ≥ 8 triệu KRW (duy trì 3 tháng)"
    ],
    "costs": [
      [
        "Học phí",
        "5.600.000 KRW/năm"
      ],
      [
        "Phí đăng ký",
        "70.000 KRW"
      ],
      [
        "Ký túc xá (gồm ăn)",
        "2.032.000 KRW"
      ],
      [
        "Bảo hiểm",
        "100.000 KRW"
      ]
    ],
    "total": "≈ 7.802.000 KRW (~139 triệu VND) · có hệ Thạc sĩ E-Visa"
  },
  {
    "slug": "dongshin",
    "name": "Đại học Dongshin",
    "en": "Dongshin University",
    "kr": "동신대학교",
    "group": "top2",
    "type": "Đại học",
    "region": "gwangju",
    "city": "Naju, Jeollanam",
    "founded": 1987,
    "img": "dongshin",
    "majors": [
      "Khoa học kỹ thuật công nghiệp",
      "Ứng dụng năng lượng",
      "Y dược",
      "Văn hóa xã hội",
      "Phúc lợi xã hội & y tế cộng đồng"
    ],
    "intakes": "T3 · T6 · T9 / 2026",
    "reqs": [
      "Tốt nghiệp THPT không quá 2 năm",
      "GPA > 6.5"
    ],
    "costs": [
      [
        "Phí xét tuyển",
        "100.000 KRW"
      ],
      [
        "Học phí",
        "4.800.000 KRW/năm"
      ],
      [
        "Bảo hiểm",
        "150.000 KRW"
      ],
      [
        "Ký túc xá",
        "1.082.000 KRW/6 tháng"
      ]
    ],
    "total": "≈ 6.282.000 KRW (~111 triệu VND) · có hệ Thạc sĩ E-Visa"
  },
  {
    "slug": "mokwon",
    "name": "Đại học Mokwon",
    "en": "Mokwon University",
    "kr": "목원대학교",
    "group": "top2",
    "type": "Đại học",
    "region": "daejeon",
    "city": "Daejeon",
    "founded": 1954,
    "img": "mokwon",
    "majors": [
      "Tiếng Hàn",
      "Toán học",
      "Âm nhạc",
      "Nghệ thuật",
      "Giáo dục mầm non"
    ],
    "intakes": "T3 · T6 · T9 / 2026",
    "reqs": [
      "Tốt nghiệp THPT không quá 3 năm",
      "GPA > 6.5",
      "Không tiền án tiền sự"
    ],
    "costs": [
      [
        "Phí nhập học",
        "100.000 KRW"
      ],
      [
        "Học phí",
        "5.200.000 KRW/năm"
      ],
      [
        "Phí đưa đón",
        "150.000 KRW"
      ],
      [
        "Ký túc xá",
        "950.000 KRW/6 tháng"
      ]
    ],
    "total": "≈ 6.400.000 KRW (~115 triệu VND) · có hệ Thạc sĩ E-Visa"
  },
  {
    "slug": "hannam",
    "name": "Đại học Hannam",
    "en": "Hannam University",
    "kr": "한남대학교",
    "group": "top2",
    "type": "Đại học",
    "region": "daejeon",
    "city": "Daejeon",
    "founded": 1956,
    "img": "hannam",
    "majors": [
      "Nhân văn",
      "Công nghệ & Kỹ thuật",
      "Sư phạm",
      "Kinh tế & QTKD",
      "Khoa học xã hội – Luật",
      "Công nghệ Nano",
      "Kinh doanh toàn cầu"
    ],
    "intakes": "T3 · T6 · T9 · T12 / 2026",
    "reqs": [
      "Tốt nghiệp THPT/ĐH không quá 1.5 năm",
      "GPA 7.0+",
      "Chứng minh tài chính ≥ 8 triệu KRW (duy trì 3 tháng)"
    ],
    "costs": [
      [
        "Học phí",
        "5.600.000 KRW/năm"
      ],
      [
        "Phí tuyển sinh",
        "70.000 KRW"
      ],
      [
        "Bảo hiểm",
        "116.000 KRW"
      ],
      [
        "Ký túc xá",
        "1.130.000 KRW/6 tháng"
      ]
    ],
    "total": "≈ 6.916.000 KRW (~122 triệu VND) · có hệ E-Visa"
  },
  {
    "slug": "gachon",
    "name": "Đại học Gachon",
    "en": "Gachon University",
    "kr": "가천대학교",
    "group": "top2",
    "type": "Đại học",
    "region": "seoul",
    "city": "Seongnam & Incheon",
    "founded": 1939,
    "img": "gachon",
    "majors": [
      "Y – Dược",
      "Kỹ thuật",
      "Công nghệ thông tin",
      "Kinh doanh",
      "Khoa học xã hội"
    ],
    "intakes": "T3 · T6 · T9 · T12 / 2026",
    "reqs": [
      "Năm trống sau tốt nghiệp < 2 năm",
      "GPA Miền Bắc > 6.5 / Miền Trung > 7.0"
    ],
    "costs": [
      [
        "Học phí",
        "5.670.000 KRW/năm"
      ],
      [
        "Ký túc xá",
        "1.182.400 KRW/4 tháng"
      ],
      [
        "Phí nhập học",
        "70.000 KRW"
      ]
    ],
    "total": "Liên hệ tư vấn"
  },
  {
    "slug": "seoultech",
    "name": "Đại học KH&CN Seoul",
    "en": "Seoul Nat’l University of Science & Technology",
    "kr": "서울과학기술대학교",
    "group": "top2",
    "type": "Đại học (Công lập)",
    "region": "seoul",
    "city": "Seoul",
    "founded": 1910,
    "img": "seoultech",
    "majors": [
      "Khoa học kỹ thuật",
      "Công nghệ thông tin",
      "Cơ khí",
      "Kiến trúc"
    ],
    "intakes": "T3 · T9 · T12 / 2026",
    "reqs": [
      "Tốt nghiệp THPT/ĐH không quá 1.5 năm",
      "GPA 7.0+",
      "Chứng minh tài chính ≥ 10 triệu KRW (duy trì 3 tháng)"
    ],
    "costs": [
      [
        "Học phí",
        "6.000.000 KRW/năm"
      ],
      [
        "Phí hồ sơ",
        "50.000 KRW"
      ],
      [
        "Ký túc xá",
        "687.750 – 848.400 KRW"
      ]
    ],
    "total": "≈ 6.839.000 KRW (~121 triệu VND)"
  },
  {
    "slug": "dong-a",
    "name": "Đại học Dong-A",
    "en": "Dong-A University",
    "kr": "동아대학교",
    "group": "top2",
    "type": "Đại học",
    "region": "busan",
    "city": "Busan",
    "founded": 1946,
    "img": "dong-a",
    "majors": [
      "Quản trị kinh doanh",
      "Du lịch",
      "Kỹ thuật",
      "Khoa học xã hội",
      "Nhân văn",
      "Truyền thông"
    ],
    "intakes": "T3 · T6 · T9 · T12 / 2026",
    "reqs": [
      "Điểm từ 6.5 trở lên",
      "Tốt nghiệp không quá 3 năm",
      "GDTX cần GPA THPT ≥ 8.0",
      "Không nhận hộ khẩu Nghệ An, Hà Tĩnh"
    ],
    "costs": [
      [
        "Học phí",
        "5.200.000 KRW/năm"
      ],
      [
        "Phí tuyển sinh",
        "50.000 KRW"
      ],
      [
        "Ký túc xá",
        "720.000 KRW/3 tháng"
      ],
      [
        "Bảo hiểm",
        "70.000 KRW/6 tháng"
      ]
    ],
    "total": "Liên hệ tư vấn"
  },
  {
    "slug": "pyeongtaek",
    "name": "Đại học Pyeongtaek",
    "en": "Pyeongtaek University",
    "kr": "평택대학교",
    "group": "top2",
    "type": "Đại học",
    "region": "seoul",
    "city": "Gyeonggi",
    "founded": 1912,
    "img": "pyeongtaek",
    "majors": [
      "Kỹ thuật công nghệ",
      "Logistics",
      "Nghệ thuật",
      "Âm nhạc & thể thao",
      "Thần học"
    ],
    "intakes": "T3 · T6 · T9 · T12 / 2026",
    "reqs": [
      "Đã tốt nghiệp THPT",
      "GPA từ 6.5",
      "Chấp nhận GDTX",
      "TOPIK 2 được giảm 10% học phí"
    ],
    "costs": [
      [
        "Phí đào tạo",
        "5.400.000 KRW/6 tháng"
      ],
      [
        "Phí nhập học",
        "100.000 KRW"
      ],
      [
        "Ký túc xá",
        "1.080.000 – 1.620.000 KRW/6 tháng"
      ]
    ],
    "total": "Liên hệ tư vấn"
  },
  {
    "slug": "kyonggi",
    "name": "Đại học Kyonggi",
    "en": "Kyonggi University",
    "kr": "경기대학교",
    "group": "top2",
    "type": "Đại học",
    "region": "seoul",
    "city": "Suwon",
    "founded": 1946,
    "img": "kyonggi",
    "majors": [
      "Du lịch",
      "Tổ chức sự kiện",
      "Kinh doanh",
      "Thiết kế đồ họa"
    ],
    "intakes": "T6 · T9 · T12 / 2026",
    "reqs": [
      "Tốt nghiệp THPT không quá 3 năm",
      "GPA 6.5"
    ],
    "costs": [
      [
        "Học phí",
        "5.400.000 KRW/năm"
      ],
      [
        "Ký túc xá",
        "900.000 KRW/6 tháng"
      ],
      [
        "Bảo hiểm",
        "60.000 KRW/6 tháng"
      ]
    ],
    "total": "Liên hệ tư vấn"
  },
  {
    "slug": "catholic",
    "name": "Đại học Catholic Hàn Quốc",
    "en": "The Catholic University of Korea",
    "kr": "가톨릭대학교",
    "group": "top2",
    "type": "Đại học",
    "region": "seoul",
    "city": "Suwon, Gyeonggi",
    "founded": 1885,
    "img": "catholic",
    "majors": [
      "Điều dưỡng",
      "Khoa học sức khỏe",
      "Kỹ thuật",
      "Khoa học xã hội"
    ],
    "intakes": "T3 · T6 · T9 · T12 / 2026",
    "reqs": [
      "Tốt nghiệp THPT không quá 2 năm",
      "GPA ≥ 7.0"
    ],
    "costs": [
      [
        "Học phí",
        "5.200.000 KRW/năm"
      ],
      [
        "Ký túc xá",
        "1.186.000 – 1.872.800 KRW"
      ],
      [
        "Bảo hiểm",
        "100.000 – 200.000 KRW"
      ],
      [
        "Phí nhập học",
        "60.000 KRW"
      ]
    ],
    "total": "Liên hệ tư vấn"
  },
  {
    "slug": "kyungil",
    "name": "Đại học Kyungil",
    "en": "Kyungil University",
    "kr": "경일대학교",
    "group": "top2",
    "type": "Đại học",
    "region": "daegu",
    "city": "Gyeongsan",
    "founded": 1963,
    "img": "kyungil",
    "majors": [
      "Khoa học & Kỹ thuật",
      "Hoạt hình – Manga",
      "Nhiếp ảnh",
      "Thiết kế truyền thông số",
      "Làm đẹp",
      "Thể thao",
      "Y học phục hồi chức năng",
      "Phúc lợi người cao tuổi"
    ],
    "intakes": "T6 · T9 · T12 / 2026",
    "reqs": [
      "Tốt nghiệp THPT không quá 2 năm",
      "GPA 6.5+",
      "Số buổi nghỉ < 9"
    ],
    "costs": [
      [
        "Học phí (D4-1)",
        "5.200.000 KRW/năm"
      ],
      [
        "Ký túc xá",
        "800.000 KRW/6 tháng"
      ],
      [
        "Phí nhập học",
        "50.000 KRW"
      ]
    ],
    "total": "≈ 6.050.000 KRW (~116 triệu VND)"
  },
  {
    "slug": "gimcheon",
    "name": "Đại học Gimcheon",
    "en": "Gimcheon University",
    "kr": "김천대학교",
    "group": "top2",
    "type": "Đại học",
    "region": "daegu",
    "city": "Gyeongsangbuk",
    "founded": 1978,
    "img": "gimcheon",
    "majors": [
      "Chăm sóc sức khỏe",
      "Điều dưỡng",
      "Đổi mới địa phương"
    ],
    "intakes": "T6 · T9 · T12 / 2026",
    "reqs": [
      "Tốt nghiệp THPT không quá 2 năm",
      "THPT GPA 6.0+ / GDTX 7.0+",
      "Số buổi nghỉ < 10"
    ],
    "costs": [
      [
        "Học phí (D4-1)",
        "4.400.000 KRW/năm"
      ],
      [
        "Phí nhập học",
        "50.000 KRW"
      ],
      [
        "Ký túc xá",
        "600.000 KRW/kỳ"
      ],
      [
        "Bảo hiểm",
        "120.000 KRW/6 tháng"
      ]
    ],
    "total": "Liên hệ tư vấn"
  },
  {
    "slug": "gwangju",
    "name": "Đại học Gwangju",
    "en": "Gwangju University",
    "kr": "광주대학교",
    "group": "top2",
    "type": "Đại học",
    "region": "gwangju",
    "city": "Gwangju",
    "founded": 1980,
    "img": "gwangju",
    "majors": [
      "Điều dưỡng",
      "Làm đẹp ứng dụng",
      "Thiết kế",
      "Khách sạn du lịch",
      "Dịch vụ hàng không",
      "Giáo dục mầm non",
      "Công nghệ ô tô",
      "Cảnh sát bảo an cyber"
    ],
    "intakes": "T3 · T6 · T9 · T12 / 2026",
    "reqs": [
      "Tốt nghiệp THPT không quá 2 năm",
      "GPA > 6.0"
    ],
    "costs": [
      [
        "Học phí",
        "4.400.000 KRW/năm"
      ],
      [
        "Bảo hiểm",
        "200.000 KRW/năm"
      ]
    ],
    "total": "Liên hệ tư vấn"
  },
  {
    "slug": "tongmyong",
    "name": "Đại học Tongmyong",
    "en": "Tongmyong University",
    "kr": "동명대학교",
    "group": "top2",
    "type": "Đại học",
    "region": "busan",
    "city": "Busan",
    "founded": null,
    "img": "tongmyong",
    "majors": [
      "Kỹ thuật",
      "Quản trị kinh doanh",
      "Y tế phúc lợi",
      "Kiến trúc & thiết kế",
      "Khoa học xã hội & nhân văn"
    ],
    "intakes": "T6 · T9 · T12 / 2026",
    "reqs": [
      "Tốt nghiệp THPT không quá 2 năm",
      "GPA > 6.5"
    ],
    "costs": [
      [
        "Học phí",
        "4.400.000 KRW/năm"
      ],
      [
        "Ký túc xá",
        "810.000 KRW/6 tháng"
      ]
    ],
    "total": "Liên hệ tư vấn"
  },
  {
    "slug": "busan-tech",
    "name": "Đại học Khoa học Kỹ thuật Busan",
    "en": "Busan University of Science & Technology",
    "kr": "부산과학기술대학교",
    "group": "top2",
    "type": "Đại học / Cao đẳng",
    "region": "busan",
    "city": "Busan",
    "founded": 1976,
    "img": "busan-tech",
    "majors": [
      "Công nghệ máy móc – ô tô – cơ khí – điện",
      "Quản trị kinh doanh",
      "Phúc lợi xã hội",
      "Thẩm mỹ – làm đẹp"
    ],
    "intakes": "D2-6 · D4-1 · D2",
    "reqs": [
      "Đã tốt nghiệp THPT / GDTX",
      "Điểm trung bình từ 6.5",
      "Hệ tiếng yêu cầu TOPIK 2-3"
    ],
    "costs": [
      [
        "Học tiếng",
        "1.100.000 KRW/kỳ"
      ],
      [
        "Học chuyên ngành",
        "2.500.000 KRW/kỳ"
      ],
      [
        "Ký túc xá",
        "600.000 – 900.000 KRW"
      ],
      [
        "Bảo hiểm",
        "100.000 KRW/năm"
      ]
    ],
    "total": "Liên hệ tư vấn"
  },
  {
    "slug": "myongji",
    "name": "Đại học Myongji",
    "en": "Myongji University",
    "kr": "명지대학교",
    "group": "top2",
    "type": "Đại học",
    "region": "seoul",
    "city": "Seoul",
    "founded": 1948,
    "img": "myongji",
    "majors": [
      "Ngôn ngữ Hàn",
      "Quản trị kinh doanh",
      "Kỹ thuật cơ khí",
      "Kỹ thuật robot",
      "Kỹ thuật điện"
    ],
    "intakes": "T3 · T6 · T9 · T12 / 2026",
    "reqs": [
      "Đã tốt nghiệp THPT",
      "Điểm trung bình từ 7.3 trở lên",
      "Chưa từng có tiền án, tiền sự",
      "Trường tuyển sinh chương trình hệ tiếng D4-1, D-2 yêu cầu: TOPIK 3"
    ],
    "costs": [
      [
        "Học tiếng",
        "1.520.000 KRW/kỳ"
      ],
      [
        "Phí đăng ký",
        "50.000 KRW/năm"
      ],
      [
        "Bảo hiểm",
        "100.000 KRW/năm"
      ],
      [
        "Ký túc xá",
        "800.000 KRW/10 tuần"
      ]
    ],
    "total": "≈ 7.030.000 KRW (~140 triệu VND)"
  },
  {
    "slug": "seoyeong",
    "name": "Đại học Seoyeong",
    "en": "Seoyeong University",
    "kr": "서영대학교",
    "group": "expand",
    "type": "Đại học",
    "region": "gwangju",
    "city": "Gwangju",
    "founded": 1978,
    "img": "seoyeong",
    "majors": [
      "Tiếng Hàn thực tiễn",
      "Phúc lợi dưỡng lão",
      "Kỹ thuật công nghiệp",
      "Công nghệ ô tô",
      "Thẩm mỹ & làm đẹp"
    ],
    "intakes": "Liên hệ tư vấn",
    "reqs": [
      "Hệ D2 khu vực mở rộng"
    ],
    "costs": [
      [
        "Học phí",
        "2.750.000 KRW"
      ],
      [
        "Ký túc xá",
        "810.000 KRW"
      ],
      [
        "Bảo hiểm",
        "65.000 KRW"
      ]
    ],
    "total": "≈ 3.625.000 KRW (~72,5 triệu VND)"
  },
  {
    "slug": "busan-ist",
    "name": "Viện Khoa học & Công nghệ Busan",
    "en": "Busan Institute of Science & Technology",
    "kr": "부산과학기술대학교",
    "group": "top3",
    "type": "Đại học",
    "region": "busan",
    "city": "Busan",
    "founded": 1976,
    "img": "busan-ist",
    "majors": [
      "Động cơ ô tô",
      "Điện tử",
      "Sư phạm mầm non",
      "Quản trị kinh doanh",
      "Điều dưỡng",
      "Chế biến ẩm thực khách sạn"
    ],
    "intakes": "Hệ tiếng D4-1 · D2",
    "reqs": [
      "Tốt nghiệp THPT không quá 2 năm",
      "Điểm trung bình 3 năm: 6.5"
    ],
    "costs": [
      [
        "Học phí",
        "5.900.000 KRW/năm"
      ],
      [
        "Ký túc xá",
        "1.200.000 KRW/kỳ"
      ],
      [
        "Phí nhập học",
        "50.000 KRW"
      ],
      [
        "Bảo hiểm",
        "100.000 KRW/năm"
      ]
    ],
    "total": "≈ 7.250.000 KRW (~130 triệu VND)"
  },
  {
    "slug": "kyungnam-it",
    "name": "Cao đẳng CNTT Kyungnam",
    "en": "Kyungnam College of Information & Technology",
    "kr": "경남정보대학교",
    "group": "expand",
    "type": "Cao đẳng",
    "region": "busan",
    "city": "Busan",
    "founded": 1965,
    "img": "kyungnam-it",
    "majors": [
      "Công nghệ thông tin",
      "Điện tử viễn thông",
      "Truyền thông"
    ],
    "intakes": "Hệ D2 khu vực mở rộng",
    "reqs": [
      "Hệ D2 khu vực mở rộng"
    ],
    "costs": [
      [
        "Học phí",
        "4.800.000 KRW"
      ],
      [
        "Ký túc xá",
        "1.140.000 KRW/kỳ"
      ],
      [
        "Bảo hiểm",
        "730.000 KRW"
      ]
    ],
    "total": "≈ 6.670.000 KRW (~134 triệu VND)"
  },
  {
    "slug": "jeonju-kijeon",
    "name": "Cao đẳng Jeonju Kijeon",
    "en": "Jeonju Kijeon College",
    "kr": "전주기전대학",
    "group": "expand",
    "type": "Cao đẳng",
    "region": "gwangju",
    "city": "Jeollabuk-do",
    "founded": 1974,
    "img": null,
    "majors": [
      "Lĩnh vực sáng tạo",
      "Lĩnh vực sức khỏe",
      "Tiếng Hàn thương mại"
    ],
    "intakes": "Hệ D2 khu vực mở rộng",
    "reqs": [
      "Hệ D2 khu vực mở rộng"
    ],
    "costs": [
      [
        "Học phí",
        "4.000.000 KRW/năm"
      ],
      [
        "Ký túc xá",
        "1.000.000 KRW/kỳ"
      ],
      [
        "Bảo hiểm",
        "250.000 KRW/năm"
      ]
    ],
    "total": "≈ 6.670.000 KRW (~109 triệu VND)"
  },
  {
    "slug": "chosun",
    "name": "Cao đẳng Công nghệ Chosun",
    "en": "Chosun College of Science & Technology",
    "kr": "조선이공대학교",
    "group": "top3",
    "type": "Cao đẳng",
    "region": "gwangju",
    "city": "Gwangju",
    "founded": null,
    "img": "chosun",
    "majors": [
      "Thương mại (hệ Thạc sĩ E-Visa)"
    ],
    "intakes": "Tuyển sinh Thạc sĩ E-Visa",
    "reqs": [
      "Đã tốt nghiệp Đại học (hoặc TN T8/2026)",
      "TOPIK 3 trở lên",
      "Không người thân cư trú bất hợp pháp"
    ],
    "costs": [
      [
        "Phí nhập học (1 lần)",
        "727.000 KRW"
      ],
      [
        "Học phí Thạc sĩ",
        "3.953.000 KRW/kỳ"
      ],
      [
        "Học phí khóa tiếng",
        "2.550.000 KRW/kỳ"
      ]
    ],
    "total": "Liên hệ tư vấn"
  },
  {
    "slug": "seojeong",
    "name": "Đại học Seojeong",
    "en": "Seojeong University",
    "kr": "서정대학교",
    "group": "top3",
    "type": "Đại học",
    "region": "seoul",
    "city": "Gyeonggi",
    "founded": 1940,
    "img": "seojeong",
    "majors": [
      "Ẩm thực khách sạn",
      "Làm đẹp",
      "Công nghệ ô tô",
      "Công nghệ thông tin",
      "Điều dưỡng",
      "Hồi sức cấp cứu"
    ],
    "intakes": "T3 · T6 · T9 · T12 / 2026",
    "reqs": [
      "Tốt nghiệp THPT không quá 3 năm",
      "GPA 7.2+",
      "Số buổi nghỉ < 7",
      "Không nhận GDTX",
      "Chứng minh tài chính ≥ 6.500 USD"
    ],
    "costs": [
      [
        "Học phí (D4-1)",
        "4.400.000 KRW/năm"
      ],
      [
        "Phí nhập học",
        "50.000 KRW"
      ],
      [
        "Ký túc xá",
        "1.100.000 – 1.300.000 KRW/kỳ"
      ]
    ],
    "total": "Liên hệ tư vấn"
  },
  {
    "slug": "tech-korea",
    "name": "Đại học Công nghệ Hàn Quốc",
    "en": "Tech University of Korea",
    "kr": "한국공학대학교",
    "group": "top3",
    "type": "Đại học",
    "region": "seoul",
    "city": "Siheung, Gyeonggi",
    "founded": 1998,
    "img": "tech-korea",
    "badge": "Vừa học vừa thực tập hưởng lương",
    "majors": [
      "Công nghệ thông tin",
      "Cơ khí chế tạo máy",
      "Công nghệ AI",
      "Điện – điện tử",
      "Chế tạo Robot",
      "Công nghệ ô tô"
    ],
    "intakes": "T3 · T6 · T9 / 2026 (T9 cần TOPIK 2)",
    "reqs": [
      "TOPIK 2 trước khi nhập học",
      "GPA 7.0+, nghỉ ≤ 10 buổi, tốt nghiệp ≤ 2 năm"
    ],
    "costs": [
      [
        "Học phí",
        "5.250.000 KRW/năm"
      ],
      [
        "Ký túc xá",
        "1.061.360 KRW/năm"
      ],
      [
        "Bảo hiểm & tuyển sinh",
        "150.000 KRW"
      ],
      [
        "Lương thực tập",
        "≈ 1.150.000 KRW/tháng (~23 triệu VND)"
      ],
      [
        "Học bổng năm đầu",
        "2.000.000 KRW"
      ]
    ],
    "total": "Học bổng sinh hoạt phí từ Bộ Giáo dục Hàn Quốc"
  },
  {
    "slug": "nambu",
    "name": "Đại học Nambu",
    "en": "Nambu University",
    "kr": "남부대학교",
    "group": "top3",
    "type": "Đại học",
    "region": "gwangju",
    "city": "Gwangju",
    "founded": 1950,
    "img": "nambu",
    "majors": [
      "Ngôn ngữ Hàn",
      "Phúc lợi xã hội",
      "Sư phạm mầm non & tiểu học",
      "Nghiệp vụ khách sạn",
      "Làm đẹp – thẩm mỹ",
      "Điều dưỡng",
      "Vật lý trị liệu",
      "Kỹ thuật cơ khí ô tô"
    ],
    "intakes": "T7 · T10 / 2026",
    "reqs": [
      "GPA từ 6.5 trở lên (GDTX/THPT)",
      "Tốt nghiệp THPT/TC/CĐ/ĐH không quá 3 năm"
    ],
    "costs": [
      [
        "Học phí (40 tuần)",
        "4.800.000 KRW"
      ],
      [
        "Ký túc xá",
        "1.060.000 KRW/20 tuần"
      ]
    ],
    "total": "Liên hệ tư vấn"
  },
  {
    "slug": "naju",
    "name": "Cao đẳng Naju",
    "en": "Naju College",
    "kr": "나주대학교",
    "group": "top3",
    "type": "Cao đẳng",
    "region": "gwangju",
    "city": "Naju, Jeollanam",
    "founded": 1995,
    "img": "naju",
    "majors": [
      "Môi trường",
      "Nha khoa",
      "Giáo dục hàng không & du lịch",
      "Kiến trúc",
      "Thông tin điện tử",
      "Thẩm mỹ",
      "Khoa dược",
      "Chăm sóc trẻ nhỏ"
    ],
    "intakes": "T3 · T6 · T9 · T12 / 2026",
    "reqs": [
      "GPA từ 6.5 trở lên (GDTX/THPT)",
      "Tốt nghiệp THPT/TC/CĐ/ĐH không quá 3 năm"
    ],
    "costs": [
      [
        "Học phí",
        "4.400.000 KRW/năm"
      ],
      [
        "Phí đăng ký",
        "50.000 KRW"
      ],
      [
        "Ký túc xá",
        "1.200.000 KRW/6 tháng"
      ],
      [
        "Bảo hiểm",
        "200.000 KRW/năm"
      ]
    ],
    "total": "Liên hệ tư vấn"
  },
  {
    "slug": "songwon",
    "name": "Đại học Songwon",
    "en": "Songwon University",
    "kr": "송원대학교",
    "group": "top3",
    "type": "Đại học",
    "region": "gwangju",
    "city": "Gwangju",
    "founded": 1951,
    "img": "songwon",
    "majors": [
      "Quản lý tài chính",
      "Dinh dưỡng & thực phẩm",
      "Nghệ thuật & làm đẹp",
      "Sư phạm tiếng Hàn",
      "Dịch vụ hàng không",
      "Điện tử – cơ khí"
    ],
    "intakes": "T3 · T6 · T9 · T12 / 2026",
    "reqs": [
      "GPA từ 6.5 trở lên (GDTX/THPT)",
      "Tốt nghiệp THPT/TC/CĐ/ĐH không quá 3 năm"
    ],
    "costs": [
      [
        "Học phí",
        "4.000.000 KRW/năm"
      ],
      [
        "Bảo hiểm",
        "200.000 KRW"
      ],
      [
        "Ký túc xá",
        "1.200.000 KRW/6 tháng"
      ],
      [
        "Phí nhập học",
        "100.000 KRW"
      ]
    ],
    "total": "Liên hệ tư vấn"
  },
  {
    "slug": "taegu-science",
    "name": "Đại học Khoa học Taegu",
    "en": "Taegu Science University",
    "kr": "대구과학대학교",
    "group": "top3",
    "type": "Đại học",
    "region": "daegu",
    "city": "Daegu",
    "founded": 1960,
    "img": "taegu-science",
    "majors": [
      "Kỹ thuật",
      "Khoa học tự nhiên",
      "Khoa học xã hội",
      "Nghệ thuật & thể thao"
    ],
    "intakes": "T6 · T9 · T12 / 2026",
    "reqs": [
      "Tốt nghiệp THPT không quá 2 năm"
    ],
    "costs": [
      [
        "Học phí",
        "4.000.000 KRW/năm"
      ],
      [
        "Phí nhập học",
        "50.000 KRW"
      ],
      [
        "Ký túc xá",
        "800.000 KRW/6 tháng"
      ],
      [
        "Bảo hiểm & thi TOPIK",
        "200.000 KRW"
      ]
    ],
    "total": "≈ 5.050.000 KRW"
  },
  {
    "slug": "kunjang",
    "name": "Đại học Kunjang",
    "en": "Kunjang University",
    "kr": "군장대학교",
    "group": "top3",
    "type": "Đại học",
    "region": "gwangju",
    "city": "Gunsan, Jeollabuk",
    "founded": 1994,
    "img": "kunjang",
    "majors": [
      "Kỹ thuật",
      "Khoa học tự nhiên",
      "Khoa học xã hội",
      "Nghệ thuật & thể thao"
    ],
    "intakes": "T6 · T9 · T12 / 2026",
    "reqs": [
      "Tốt nghiệp THPT không quá 2 năm",
      "GPA > 6.5"
    ],
    "costs": [
      [
        "Học phí",
        "4.400.000 KRW/năm"
      ],
      [
        "Ký túc xá",
        "900.000 KRW/6 tháng"
      ]
    ],
    "total": "Liên hệ tư vấn"
  },
  {
    "slug": "chungcheong",
    "name": "Đại học Chungcheong",
    "en": "Chungcheong University",
    "kr": "충청대학교",
    "group": "top3",
    "type": "Đại học",
    "region": "daejeon",
    "city": "Chungcheong",
    "founded": null,
    "img": "chungcheong",
    "majors": [
      "Xã hội nhân văn",
      "Khoa học tự nhiên",
      "Kỹ thuật công nghiệp",
      "Nghệ thuật năng khiếu"
    ],
    "intakes": "T6 · T9 · T12 / 2026",
    "reqs": [
      "Tốt nghiệp THPT không quá 2 năm",
      "GPA > 6.5"
    ],
    "costs": [
      [
        "Học phí",
        "4.400.000 KRW/năm"
      ],
      [
        "Ký túc xá",
        "1.200.000 KRW/6 tháng"
      ],
      [
        "Bảo hiểm",
        "50.000 KRW/năm"
      ],
      [
        "Phí nhập học",
        "50.000 KRW/năm"
      ]
    ],
    "total": "Liên hệ tư vấn"
  },
  {
    "slug": "doowon",
    "name": "Đại học Công nghệ Doowon",
    "en": "Doowon Technical University",
    "kr": "두원공과대학교",
    "group": "top3",
    "type": "Đại học",
    "region": "seoul",
    "city": "Gyeonggi (cận Seoul)",
    "founded": null,
    "img": "doowon",
    "majors": [
      "Y tế",
      "Thiết kế",
      "Công nghệ thông tin",
      "Cơ khí ô tô",
      "Khoa học xã hội & nhân văn"
    ],
    "intakes": "T6 · T9 · T12 / 2026",
    "reqs": [
      "Tốt nghiệp THPT không quá 2 năm",
      "GPA > 6.5"
    ],
    "costs": [
      [
        "Học phí",
        "4.800.000 KRW/năm"
      ],
      [
        "Ký túc xá",
        "750.000 KRW/6 tháng"
      ],
      [
        "Bảo hiểm",
        "70.000 KRW/năm"
      ],
      [
        "Phí nhập học",
        "50.000 KRW/năm"
      ]
    ],
    "total": "Liên hệ tư vấn"
  },
  {
    "slug": "daejeon-ist",
    "name": "Cao đẳng KHKT Daejeon",
    "en": "Daejeon Institute of Science & Technology",
    "kr": "대전과학기술대학교",
    "group": "top3",
    "type": "Cao đẳng",
    "region": "daejeon",
    "city": "Daejeon",
    "founded": 1940,
    "img": "daejeon-ist",
    "majors": [
      "Điều dưỡng",
      "Khoa học cuộc sống & sức khỏe",
      "Công nghệ cao",
      "Giáo dục & xã hội",
      "Giáo dục thể chất & nghệ thuật"
    ],
    "intakes": "T6 · T9 · T12 / 2026",
    "reqs": [
      "Tốt nghiệp THPT không quá 2 năm",
      "GPA > 6.5"
    ],
    "costs": [
      [
        "Học phí",
        "4.600.000 KRW/năm"
      ],
      [
        "Ký túc xá",
        "1.000.000 KRW/6 tháng"
      ]
    ],
    "total": "≈ 5.600.000 KRW (~112 triệu VND)"
  },
  {
    "slug": "busan-women",
    "name": "Cao đẳng nữ sinh Busan",
    "en": "Busan Women’s College",
    "kr": "부산여자대학교",
    "group": "top3",
    "type": "Cao đẳng",
    "region": "busan",
    "city": "Busan",
    "founded": null,
    "img": "busan-women",
    "majors": [
      "Sư phạm",
      "Du lịch khách sạn",
      "Y tế thẩm mỹ"
    ],
    "intakes": "T6 · T9 · T12 / 2026",
    "reqs": [
      "Chỉ tuyển sinh nữ",
      "Tốt nghiệp THPT không quá 3 năm",
      "GPA > 6.5"
    ],
    "costs": [
      [
        "Học phí",
        "4.400.000 KRW/năm"
      ],
      [
        "Ký túc xá",
        "720.000 KRW/6 tháng"
      ],
      [
        "Bảo hiểm",
        "80.000 KRW"
      ],
      [
        "Phí đăng ký",
        "50.000 KRW"
      ]
    ],
    "total": "Liên hệ tư vấn"
  },
  {
    "slug": "kyungmin",
    "name": "Đại học Kyungmin",
    "en": "Kyungmin University",
    "kr": "경민대학교",
    "group": "top3",
    "type": "Đại học",
    "region": "seoul",
    "city": "Gyeonggi",
    "founded": 1992,
    "img": "kyungmin",
    "majors": [
      "Khoa học xã hội & nhân văn",
      "Khoa học tự nhiên",
      "Công nghệ",
      "Nghệ thuật & thể thao"
    ],
    "intakes": "T6 · T9 · T12 / 2026",
    "reqs": [
      "GPA từ 7.4 trở lên",
      "Nghỉ không quá 4 buổi",
      "Nhận học sinh Bắc – Nam",
      "Không nhận GDTX"
    ],
    "costs": [
      [
        "Trọn gói (invoice)",
        "4.250.000 KRW/năm"
      ]
    ],
    "total": "Liên hệ tư vấn"
  },
  {
    "slug": "jeonju",
    "name": "Đại học Jeonju",
    "en": "Jeonju University",
    "kr": "전주대학교",
    "group": "top3",
    "type": "Đại học",
    "region": "gwangju",
    "city": "Jeonju",
    "founded": 1964,
    "img": "jeonju",
    "majors": [
      "Khoa học xã hội & nhân văn",
      "Y học",
      "Kỹ thuật",
      "Nghệ thuật",
      "Âm nhạc & thể thao"
    ],
    "intakes": "D4-1: T3 · T9 · T12 / 2026 · D2-6: T3 · T9 / 2026",
    "reqs": [
      "Hệ D4-1 / D2-2 / D2-6"
    ],
    "costs": [],
    "total": "Liên hệ tư vấn"
  },
  {
    "slug": "hosan",
    "name": "Đại học Hosan",
    "en": "Hosan University",
    "kr": "호산대학교",
    "group": "top3",
    "type": "Đại học / Cao đẳng",
    "region": "daegu",
    "city": "Gyeongsangbuk",
    "founded": 1991,
    "img": "hosan",
    "majors": [
      "Kỹ thuật",
      "Công nghiệp & Kinh doanh toàn cầu",
      "Phúc lợi con người",
      "Nghệ thuật & Thiết kế"
    ],
    "intakes": "Hệ D2-6",
    "reqs": [
      "Đã tốt nghiệp THPT",
      "Điểm trung bình từ 6.5",
      "TOPIK 3 trở lên",
      "Không tiền án tiền sự"
    ],
    "costs": [
      [
        "Hệ đại học",
        "3.000.000 – 4.500.000 KRW/kỳ"
      ],
      [
        "Hệ cao đẳng",
        "2.500.000 – 3.500.000 KRW/kỳ"
      ],
      [
        "Phí nhập học",
        "100.000 KRW"
      ],
      [
        "Ký túc xá",
        "1.140.000 KRW/6 tháng"
      ]
    ],
    "total": "Liên hệ tư vấn"
  },
  {
    "slug": "shin-ansan",
    "name": "Đại học Shin Ansan",
    "en": "Shin Ansan University",
    "kr": "신안산대학교",
    "group": "top3",
    "type": "Đại học / Cao đẳng",
    "region": "seoul",
    "city": "Gyeonggi",
    "founded": 1979,
    "img": "shin-ansan",
    "majors": [
      "Thiết kế thẩm mỹ",
      "Kỹ thuật cơ khí",
      "Thông tin và Truyền thông điện tử",
      "Thiết kế công nghiệp",
      "Thiết kế nội thất"
    ],
    "intakes": "T3 · T6 · T9 · T12 / 2026",
    "reqs": [
      "Đã tốt nghiệp THPT - GDTX",
      "Điểm trung bình từ 6.5 trở lên",
      "Chưa từng có tiền án, tiền sự",
      "Trường tuyển sinh chương trình hệ tiếng D4-1, D-2 yêu cầu: TOPIK 2-3"
    ],
    "costs": [
      [
        "Học tiếng",
        "1.300.000 KRW/kỳ"
      ],
      [
        "Học chuyên ngành",
        "2.500.000 KRW/kỳ"
      ],
      [
        "Phí đăng ký",
        "50.000 KRW/năm"
      ],
      [
        "Bảo hiểm",
        "100.000 KRW/năm"
      ]
    ],
    "total": "≈ 5.350.000 KRW (~107 triệu VND)"
  }
];
