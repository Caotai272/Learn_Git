# Learn_Git

#### Thành Viên:
- Đinh Vạn Tài, 2280618783
- Cao Anh Tài, 2280602780

### **Quản lý dự án Node.js "Danh sách liên hệ" trên GitHub**

#### **Mục tiêu:**

- Tạo một repository trên GitHub cho dự án Node.js quản lý danh sách liên hệ (Contact List).
- Thực hành thêm, sửa, xóa chức năng trong dự án bằng cách sử dụng GitHub với các thao tác tách nhánh, merge, xử lý xung đột và pull request.
- Phân công công việc giữa 2 thành viên.

#### **Chuẩn bị:**

1. **Thành viên A**: Người khởi tạo repository và dự án ban đầu.
2. **Thành viên B**: Được mời làm cộng tác viên và tham gia phát triển.
3. Cả hai cần cài đặt Node.js, Git và có tài khoản GitHub.

---

### **Hướng dẫn từng bước**

#### **Phần 1: Tạo repository và thiết lập dự án ban đầu (Thành viên A)**

1. **Tạo repository trên GitHub:**
   - Đăng nhập vào GitHub.
   - Nhấn nút "+" ở góc trên bên phải và chọn "New repository".
   - Đặt tên repository là `contact-list-nodejs`.
   - Chọn "Public" hoặc "Private" tùy ý.
   - Tích vào ô để thêm file `README.md` mặc định.
   - Tích vào ô để thêm file `.gitignore` và chọn template "Node".
   - Nhấn nút tạo repository.

2. **Mời Thành viên B làm cộng tác viên:**
   - Vào tab "Settings" của repository.
   - Chọn mục "Collaborators" trong menu bên trái.
   - Nhập tên người dùng GitHub của Thành viên B và thêm làm cộng tác viên.
   - Thành viên B nhận email mời và cần chấp nhận.

3. **Tạo dự án Node.js:**
   - Mở terminal, clone repository về máy và chuyển vào thư mục vừa clone (lúc này local có nhánh `main` với `README.md` và `.gitignore`).
   - Trong thư mục vừa clone, chạy lệnh `npm init -y` để tạo file `package.json`.
   - Tạo file `index.js` làm file chính của dự án.
   - Cài đặt Express bằng lệnh `npm install express --save` để tạo một API đơn giản.

4. **Thêm chức năng chính:**
   - Trong `index.js`, thêm đoạn mã sau để tạo API cơ bản:
     ```javascript
     const express = require('express');
     const app = express();
     const port = 3000;

     app.use(express.json());

     let contacts = [];

     app.get('/contacts', (req, res) => {
       res.json(contacts);
     });

     app.listen(port, () => {
       console.log(`Server running at http://localhost:${port}`);
     });
     ```
   - Lưu lại.

5. **Khởi tạo Git và đẩy lên GitHub:**
   - Mở terminal trong thư mục dự án.
   - Thêm tất cả file vào Git: `git add .`.
   - Commit với thông điệp: `git commit -m "Khởi tạo dự án Node.js với API cơ bản"`.
   - Liên kết với repository remote trên GitHub bằng URL đã sao chép: `git remote add origin <URL>`.
   - Push code lên nhánh `main`: `git push origin main`.

---

#### **Phần 2: Thành viên B thêm chức năng mới**

1. **Clone repository về máy (Thành viên B):**
   - Sau khi chấp nhận lời mời collaborator, sao chép URL repository.
   - Clone repository về máy: `git clone <URL>` và chuyển vào thư mục vừa clone.

2. **Tạo nhánh mới:**
   - Tạo nhánh mới: `git checkout -b feature/add-contact`.

3. **Thêm chức năng thêm liên hệ:**
   - Mở `index.js` trong trình soạn thảo.
   - Thêm route POST để thêm liên hệ:
     ```javascript
     app.post('/contacts', (req, res) => {
       const { name, phone } = req.body;
       if (!name || !phone) {
         return res.status(400).json({ error: 'Name and phone are required' });
       }
       const newContact = { id: contacts.length + 1, name, phone };
       contacts.push(newContact);
       res.status(201).json(newContact);
     });
     ```
   - Lưu lại.

4. **Commit và tạo Pull Request:**
   - Commit thay đổi: `git commit -am "Thêm chức năng thêm liên hệ mới"`.
   - Push nhánh lên GitHub: `git push origin feature/add-contact`.
   - Vào GitHub, tạo Pull Request (PR) từ nhánh `feature/add-contact` vào `main`.
   - Đặt tiêu đề: "Thêm chức năng thêm liên hệ từ Thành viên B".

5. **Merge Pull Request (Thành viên A):**
   - Thành viên A vào GitHub, xem xét PR.
   - Nhấn nút merge và xác nhận.

---

#### **Phần 3: Thành viên A sửa chức năng**

1. **Tạo nhánh mới:**
   - Checkout về `main` và pull code mới: `git checkout main && git pull`.
   - Tạo nhánh mới: `git checkout -b feature/edit-contact`.

2. **Sửa chức năng thêm liên hệ:**
   - Mở `index.js`.
   - Sửa route POST để thêm trường `email`:
     ```javascript
     app.post('/contacts', (req, res) => {
       const { name, phone, email } = req.body;
       if (!name || !phone) {
         return res.status(400).json({ error: 'Name and phone are required' });
       }
       const newContact = { id: contacts.length + 1, name, phone, email };
       contacts.push(newContact);
       res.status(201).json(newContact);
     });
     ```
   - Lưu lại.

3. **Commit và tạo Pull Request:**
   - Commit thay đổi: `git commit -am "Sửa chức năng thêm liên hệ, bổ sung trường email"`.
   - Push nhánh lên GitHub: `git push origin feature/edit-contact`.
   - Tạo PR từ nhánh `feature/edit-contact` vào `main`.
   - Đặt tiêu đề: "Cập nhật chức năng thêm liên hệ".

4. **Merge Pull Request (Thành viên B):**
   - Thành viên B xem xét PR và merge vào `main`.

---

#### **Phần 4: Xóa chức năng và xử lý xung đột**

1. **Thành viên B tạo nhánh để xóa:**
   - Checkout về `main` và pull code mới: `git checkout main && git pull`.
   - Tạo nhánh mới: `git checkout -b feature/remove-contact`.

2. **Xóa chức năng thêm liên hệ:**
   - Mở `index.js`.
   - Xóa route POST `/contacts`.
   - Lưu lại.

3. **Commit và push:**
   - Commit thay đổi: `git commit -am "Xóa chức năng thêm liên hệ"`.
   - Push nhánh lên GitHub: `git push origin feature/remove-contact`.

4. **Thành viên A tạo xung đột:**
   - Tạo nhánh mới: `git checkout -b feature/modify-contact`.
   - Mở `index.js`, sửa route POST để thêm ghi chú:
     ```javascript
     app.post('/contacts', (req, res) => {
       const { name, phone, email, note } = req.body;
       if (!name || !phone) {
         return res.status(400).json({ error: 'Name and phone are required' });
       }
       const newContact = { id: contacts.length + 1, name, phone, email, note };
       contacts.push(newContact);
       res.status(201).json(newContact);
     });
     ```
   - Commit: `git commit -am "Sửa đổi chức năng thêm liên hệ, thêm trường note"`.
   - Push nhánh: `git push origin feature/modify-contact`.
   - Tạo PR và merge ngay vào `main`.

5. **Xử lý xung đột (Thành viên B):**
   - Mở PR từ nhánh `feature/remove-contact` vào `main` trên GitHub.
   - Nhận thông báo xung đột do route POST đã bị sửa đổi trong `main`.
   - Kéo code mới nhất từ `main` về nhánh: `git pull origin main`.
   - Giải quyết xung đột bằng cách giữ quyết định xóa route POST.
   - Commit thay đổi: `git commit -am "Giải quyết xung đột khi xóa chức năng"`.
   - Push lại nhánh: `git push origin feature/remove-contact`.
   - Quay lại PR và merge.

---

#### **Phần 5: Kiểm tra kết quả**

1. **Cả hai thành viên kéo code mới nhất từ main:**
   - Chuyển sang nhánh `main`: `git checkout main`.
   - Cập nhật code từ remote: `git pull`.

2. **Kiểm tra dự án:**
   - Chạy dự án bằng lệnh: `node index.js`.
   - Kiểm tra API `/contacts` vẫn hoạt động bình thường.
   - Đảm bảo chức năng thêm liên hệ đã bị xóa hoàn toàn.

---

#### **Yêu cầu nộp bài:**

- Nộp link GitHub (Không xóa commit).
- File `README.md`: Ghi rõ Họ Tên, MSSV của 2 thành viên.