# CHỐT ĐI — WebApp Demo

WebApp giúp lựa chọn món ăn theo ngân sách, khẩu vị và khoảng cách. Đây là **bản demo** với dữ liệu mô phỏng.

## Truy cập bản demo

Sau khi bật GitHub Pages (Settings → Pages → Deploy from a branch → main → /(root)), mở:
https://quochung9998-debug.github.io/chot-di-demo/

## Công nghệ

- Website chạy trực tiếp: `index.html`, `app.js`, `style.css` (HTML/CSS/JavaScript), mobile-first, không cần build.
- Mã nguồn phát triển React + TypeScript + Vite nằm trong thư mục `react-source/` để tiếp tục các giai đoạn sau.
- Dữ liệu nhà hàng là **mô phỏng**, không đại diện cho địa điểm thực hoặc bảng giá thực.

## Chạy thử

Mở `index.html` từ local hoặc truy cập GitHub Pages; nếu thử GPS, dùng HTTPS, cấp quyền khi trình duyệt yêu cầu.

## Lộ trình

1. GĐ0–1: dựng giao diện, dữ liệu demo.
2. GĐ2–3: lọc nhu cầu và thuật toán CHỐT.
3. GĐ4–5: kết quả, tìm quán, lịch sử, yêu thích.
4. GĐ6: hoàn thiện kiểm thử Safari/Chrome di động, tối ưu hiệu năng, nâng cấp dữ liệu thực.

## Lưu ý

GitHub Pages chỉ host nội dung tĩnh. Khi cần đồng bộ tài khoản/dữ liệu thật, bổ sung backend như Supabase.
