# Dongil Edu — Website Tư Vấn Du Học Hàn Quốc

Website giới thiệu **Công ty TNHH Tư Vấn Du Học Dongil Edu (동일 유학)**: các hình thức
du học, hơn 40 trường đại học/cao đẳng liên kết, quy trình, lộ trình và form đăng ký tư vấn.

## Công nghệ

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** + **shadcn/ui** (trên Base UI)
- **lucide-react** (icon) · **framer-motion** (hiệu ứng cuộn)
- Trang được render **tĩnh (SSG)**, ảnh tối ưu tự động qua `next/image` → tải nhanh, chuẩn SEO.

## Chạy dự án

```bash
npm install
npm run dev        # phát triển: http://localhost:3000
npm run build      # build production (tĩnh)
npm run start      # chạy bản production
```

## Cấu trúc & nơi chỉnh sửa nội dung

| Cần sửa | File |
| --- | --- |
| Hotline, email, địa chỉ, slogan | `src/data/content.ts` → `SITE` |
| Hình thức du học (visa), quy trình, lộ trình, lý do chọn | `src/data/content.ts` |
| Danh sách trường (ngành, điều kiện, chi phí…) | `src/data/schools.ts` |
| Màu thương hiệu (đỏ/vàng/đen), font | `src/app/globals.css` |
| Giao diện từng phần | `src/components/site/*.tsx` |
| Ảnh trường / logo / hero | `public/img/` |

### Thêm một trường mới

Thêm một object vào mảng `SCHOOLS` trong `src/data/schools.ts`, đặt ảnh tại
`public/img/schools/<slug>.jpg` rồi gán `img: "<slug>"`. Để `img: null` nếu chưa có ảnh
— hệ thống tự hiển thị thẻ placeholder thương hiệu. Toàn bộ phần lọc & trang chi tiết
sẽ tự cập nhật.

## Ghi chú

- Số hotline, email, địa chỉ trong `SITE` đang là **placeholder** — hãy thay bằng thông
  tin thật của công ty.
- 3 trường chưa có ảnh khuôn viên trong hồ sơ gốc (Kyungsung, Jeonju, Jeonju Kijeon)
  đang dùng thẻ placeholder; bổ sung ảnh vào `public/img/schools/` khi có.
- Form đăng ký hiện mở sẵn email (mailto). Khi cần lưu vào hệ thống/CRM, thêm một
  **Route Handler** tại `src/app/api/contact/route.ts` và gọi từ `contact.tsx`.
