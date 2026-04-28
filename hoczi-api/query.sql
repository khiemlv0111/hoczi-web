CREATE TABLE schedules (
    id SERIAL PRIMARY KEY,
    tenant_id INTEGER REFERENCES tenants(id) ON DELETE CASCADE,
    class_id INTEGER REFERENCES classes(id) ON DELETE CASCADE,
    created_by INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,

    title VARCHAR(255) NOT NULL,
    description TEXT,
    note TEXT,

    scope VARCHAR(50) NOT NULL DEFAULT 'personal',
    -- personal, tenant, class

    schedule_type VARCHAR(50) NOT NULL DEFAULT 'event',
    -- class, lesson, exam, assignment, meeting, personal, other

    status VARCHAR(50) NOT NULL DEFAULT 'scheduled',
    -- scheduled, ongoing, completed, cancelled, postponed

    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP NOT NULL,

    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);


CREATE TABLE schedule_users (
    id SERIAL PRIMARY KEY,
    schedule_id INTEGER NOT NULL REFERENCES schedules(id) ON DELETE CASCADE,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,

    role VARCHAR(50) NOT NULL,
    -- owner, teacher, student, assistant, observer

    attendance_status VARCHAR(50) NOT NULL DEFAULT 'pending',
    -- pending, accepted, declined, attended, absent, late

    is_required BOOLEAN NOT NULL DEFAULT TRUE,
    -- bắt buộc hay optional

    response_at TIMESTAMP,
    -- thời điểm user accept/decline

    note TEXT,

    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW(),

    UNIQUE (schedule_id, user_id)
);


insert into grades(name, code, sort_order) values ('Tổng hợp', 'general', 13);
update categories set name = 'Tiếng Anh - English' where slug = 'english';
update categories set name = 'Tiếng Trung - Chinese' where slug = 'chinese';
update categories set name = 'Lịch sử - History' where slug = 'history';

update categories set name = 'Tổng hợp - General Knowledge' where slug = 'general-knowledge';

update categories set name = 'Tài chính - Finance' where slug = 'finance';

update categories set name = 'Địa lý - Geography' where slug = 'geography';

update categories set name = 'Văn học - Literature' where slug = 'literature';

update categories set name = 'Văn học - Literature' where slug = 'literature';



update categories set name = 'Lập trình - Programming' where slug = 'programming';
update categories set name = 'Khoa học máy tính - Computer Science' where slug = 'computer-science';
update categories set name = 'Tư duy logic - Logical Thinking' where slug = 'logical-thinking';
update categories set name = 'Phỏng vấn & Sự nghiệp - Interview & Career' where slug = 'interview-career';

-- update categories set name = 'Toán học - Mathematics' where slug = 'mathematics';


insert into categories(name, slug, description, is_active) values ('Math', 'math', 'Mathematics in English', true);
insert into categories(name, slug, description, is_active) values ('Science', 'science-english', 'Science in English', true);

insert into categories(name, slug, description, is_active) values ('Language Art', 'language-art', 'Language Art in English', true);


Language Art


update subjects set name = 'Toán học - Mathematics' where code = 'mathematics';
update subjects set name = 'Khoa học - Science' where code = 'science';
update subjects set name = 'Tiếng anh - English' where code = 'english';
update subjects set name = 'Địa lý - Geography' where code = 'geography';
update subjects set name = 'Sinh học - Biology' where code = 'biology';
update subjects set name = 'Hoá học - Chemistry' where code = 'chemistry';
update subjects set name = 'Vật lý - Physics' where code = 'physics';
update subjects set name = 'Khoa học máy tính - Computer Science' where code = 'computer';
update subjects set name = 'Tiếng trung - Chinese' where code = 'chinese';

insert into subjects(name, code, description, status) values ('Science', 'science-english', 'Science in English language', 'active');
insert into subjects(name, code, description, status) values ('Math', 'mathematics', 'Mathematics in English', 'active');
insert into subjects(name, code, description, status) values ('Language Art', 'language-art', 'Language Art in English', 'active');


CREATE TABLE books (
    id SERIAL PRIMARY KEY,

    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,

    description TEXT,
    cover_image_url TEXT,

    status VARCHAR(50) NOT NULL DEFAULT 'draft',
    -- draft / published / archived

    is_public BOOLEAN NOT NULL DEFAULT true,

    created_by INTEGER REFERENCES users(id),

    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);


CREATE TABLE book_lessons (
    id SERIAL PRIMARY KEY,

    book_id INTEGER NOT NULL REFERENCES books(id) ON DELETE CASCADE,
    category_id INTEGER REFERENCES book_categories(id),

    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL,

    content TEXT,

    lesson_type VARCHAR(50) NOT NULL DEFAULT 'text',
    -- text / video / quiz / assignment / file

    media_url TEXT,

    order_index INTEGER NOT NULL DEFAULT 0,

    is_free_preview BOOLEAN NOT NULL DEFAULT false,

    estimated_minutes INTEGER,

    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW(),

    UNIQUE(book_id, slug)
);

CREATE TABLE book_categories (
    id SERIAL PRIMARY KEY,

    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,

    description TEXT,

    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);