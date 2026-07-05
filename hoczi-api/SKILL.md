---
name: nodejs-typescript-3layer
description: "Use this skill when writing or reviewing backend code in Node.js + TypeScript that follows 3-layer architecture (Controller - Service - Repository). Triggers include: creating API endpoints, designing project structure for a Node.js/Express/NestJS service, separating business logic from data access, code review for layering violations, or any request mentioning 'mô hình 3 lớp', '3-layer architecture', 'controller-service-repository'."
---
 
# Node.js + TypeScript — Kiến trúc 3 lớp (Controller - Service - Repository)
 
## Khi nào dùng
 
Áp dụng khi xây dựng backend bằng Node.js + TypeScript (Express, NestJS, Fastify...) cần tách biệt rõ: xử lý HTTP, logic nghiệp vụ, và truy cập dữ liệu.
 
## Cấu trúc thư mục chuẩn
 
```
src/
├── controllers/        # Lớp 1 - nhận request, trả response
│   └── user.controller.ts
├── services/            # Lớp 2 - business logic
│   └── user.service.ts
├── repositories/        # Lớp 3 - truy vấn DB
│   └── user.repository.ts
├── dtos/                 # Validate input/output
│   └── create-user.dto.ts
├── entities/             # Model/Entity
│   └── user.entity.ts
├── middlewares/
├── routes/
├── config/
└── utils/
```
 
## 3 lớp và trách nhiệm
 
### Lớp 1: Controller (Presentation)
- Nhận HTTP request, parse params/body/query.
- Validate đầu vào (qua DTO/middleware), KHÔNG chứa logic nghiệp vụ.
- Gọi Service, map kết quả thành HTTP response (status code, body).
- Không bao giờ gọi trực tiếp Repository hoặc DB.
```ts
// controllers/user.controller.ts
export class UserController {
  constructor(private userService: UserService) {}
 
  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = plainToInstance(CreateUserDto, req.body);
      const user = await this.userService.create(dto);
      res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  }
}
```
 
### Lớp 2: Service (Business Logic)
- Chứa toàn bộ quy tắc nghiệp vụ: validate logic, tính toán, điều phối nhiều repository, transaction.
- Không biết gì về `req`/`res` hay HTTP status code.
- Ném exception nghiệp vụ (`NotFoundError`, `ConflictError`...), để Controller/middleware map sang HTTP status.
```ts
// services/user.service.ts
export class UserService {
  constructor(private userRepo: UserRepository) {}
 
  async create(dto: CreateUserDto): Promise<User> {
    const existed = await this.userRepo.findByEmail(dto.email);
    if (existed) throw new ConflictError('Email already exists');
 
    const hashed = await hashPassword(dto.password);
    return this.userRepo.save({ ...dto, password: hashed });
  }
}
```
 
### Lớp 3: Repository (Data Access)
- Chỉ chứa truy vấn DB (ORM/query builder/raw SQL).
- Không chứa business logic, không validate nghiệp vụ.
- Trả về entity/raw data, không trả về HTTP response.
```ts
// repositories/user.repository.ts
export class UserRepository {
  constructor(private db: DataSource) {}
 
  findByEmail(email: string): Promise<User | null> {
    return this.db.getRepository(User).findOneBy({ email });
  }
 
  save(data: Partial<User>): Promise<User> {
    return this.db.getRepository(User).save(data);
  }
}
```
 
### Luồng request
 
```
Client → Controller → Service → Repository → Database
                ↑           ↑
            HTTP concerns  Business rules
```
 
### Quy tắc bắt buộc
- Controller KHÔNG import repository.
- Service KHÔNG import `express`/`Request`/`Response`.
- Repository KHÔNG chứa `if/else` nghiệp vụ (chỉ điều kiện truy vấn).
- Mỗi lớp chỉ gọi xuống lớp ngay dưới, không gọi vượt cấp, không gọi ngược lên.
- Dependency Injection giữa các lớp (constructor injection) để dễ test/mock.
## Quy ước TypeScript
- Bật `strict: true` trong `tsconfig.json`.
- Không dùng `any`; dùng `unknown` + type guard khi cần.
- Định nghĩa interface/type riêng cho DTO, Entity, Response — không tái dùng lẫn nhau.
- Dùng `class-validator`/`zod` để validate DTO ở Controller.
- Đặt tên: `PascalCase` cho class/interface, `camelCase` cho biến/hàm, hậu tố rõ vai trò (`*.controller.ts`, `*.service.ts`, `*.repository.ts`, `*.dto.ts`).
## Quy ước Node.js
- Luôn dùng `async/await`, tránh callback lồng nhau.
- Bắt lỗi tập trung qua error-handling middleware, không `try/catch` rải rác không cần thiết.
- Cấu hình qua biến môi trường (`.env` + schema validate, ví dụ `envalid`/`zod`).
- Logging có cấu trúc (`pino`/`winston`), không dùng `console.log` trong code production.
- Không để logic async "fire-and-forget" không xử lý lỗi (unhandled rejection).
## Checklist review code
- [ ] Controller chỉ gọi Service, không gọi Repository/DB trực tiếp.
- [ ] Service không import gì liên quan HTTP (`Request`, `Response`, `res.status`...).
- [ ] Repository không chứa rule nghiệp vụ.
- [ ] DTO có validate đầu vào, không tin dữ liệu thô từ client.
- [ ] Không có `any` lọt vào, không tắt `strict` mode.
- [ ] Lỗi nghiệp vụ là exception có ý nghĩa (không throw string, không trả `{success: false}` tùy hứng).